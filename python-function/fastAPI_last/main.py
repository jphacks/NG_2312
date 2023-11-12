from fastapi import FastAPI, Request
import numpy as np
import cv2
import readBacorde
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
# CORSミドルウェアを有効にする
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 本番環境では適切な設定に変更すること
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/up/")
async def up(request: Request):
    form_data = await request.form()
    value = form_data['image']
    image_data = await value.read()
    
    # OpenCVで直接画像データを読み込む
    image_np = np.frombuffer(image_data, dtype=np.uint8)
    image_np = cv2.imdecode(image_np, cv2.IMREAD_COLOR)

    # RGBAモードの場合、RGBモードに変換
    if image_np.shape[2] == 4:
        image_np = cv2.cvtColor(image_np, cv2.COLOR_RGBA2RGB)

    booklist = readBacorde.main(image_np)

    # レスポンスとしてJSONを返す
    return {
        'message': 'Image processed successfully',
        'result': booklist
    }