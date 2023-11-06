from fastapi import FastAPI, Request, status, UploadFile, File
import numpy as np
from PIL import Image
import cv2
import readBacorde
from pydantic import BaseModel  # リクエストbodyを定義するために必要
import json
from io import BytesIO
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
import gzip

app = FastAPI()

# 型があってないよのエラー(422)が出た時に調べたら、これ付ければログ出してくれると書いてあったので付け足し
# 役には立たなかった
@app.exception_handler(RequestValidationError)
async def handler(request:Request, exc:RequestValidationError):
    print(exc)
    return JSONResponse(content={}, status_code=status.HTTP_422_UNPROCESSABLE_ENTITY)

# バイナリ形式での受け取り、と聞いていたので最初"image_data"はbyteにしていたが、/docsで調べたらstrになっていたのでそうした
# なので文字列で受け取るのが最適かと思われた
# 文字列にするとデータが大きくなる by 長谷川さん
# 多分使わない。FormDataとか知らなかった時のやつなので
class Images(BaseModel):
    image_data: str
    image_shape_h: int
    image_shape_w: int

# テスト用テンプレ
@app.get("/")
def read_root():
    return {"Hello": "World"}

# テスト用テンプレ
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

# テスト用テンプレ
@app.get("/items2/{item_id}")
def read_item2(item_id: int):
    return {"item_id": item_id}

# どっかの段階で、呼び出し元から画像のバイナリデータを送る際、「データ大きすぎ」と言われたため圧縮したデータを送ることになった結果の残骸。
# 多分使わない。FormDataとか知らなかった時のやつなので
# @app.post("/images/{image_data}/{img_shape_h}/{img_shape_w}")
# def load_image(image_data:bytes, img_shape_h:int, img_shape_w:int):
@app.post("/images/")
def load_image(data: Images):
    decompressed_data = gzip.decompress(data.image_data)
    img_shape = [data.img_shape_h, data.img_shape_w, 3]
    img = np.frombuffer(decompressed_data, dtype = np.uint8).reshape(img_shape)
    
    # これを実行できるようにしたい
    booklist = readBacorde.main(img)
    
    return {
        'message': 'Image processed successfully',
        'result': booklist # バイナリデータをリストに変換
    }

# エラー吐きます。"file"からどうすればcv2で画像を操作すればよいかわからず詰まったやつです。
# 間を全消しして一番下のreturnだけにすれば試すことはできる
# 多分使わない。FormDataとか知らなかった時のやつなので
@app.post("/uploadfile/")
async def upload_file(file: UploadFile = File(...)):
    print(file.file)
    img = cv2.imread(file.file)
    booklist = readBacorde.main(img)
    
    return {
        'message': 'Image processed successfully',
        'result': booklist # バイナリデータをリストに変換
    }
    # return {'filename': file.filename}