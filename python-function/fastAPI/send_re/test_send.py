import cv2
import numpy as np
from PIL import Image  # PillowのImageモジュールをインポート
import gzip
import requests
import json
import base64

url = "http://127.0.0.1:8000/images/"

file = './img/IM_88.png'
img = cv2.imread(file)
img_np = np.array(img)

# 画像のバイナリ形式変換の試み
print(img_np.dtype)
img_bin = img_np.tobytes()
compressed_data = gzip.compress(img_bin)
print(img_np.shape)

# 画像の文字列変換の試み
_, buffer = cv2.imencode('.jpg', img)
img_as_text = base64.b64encode(buffer).decode('utf-8')

params = {
        "image_data": img_as_text,
        "image_shape_h": img_np.shape[0],
        "image_shape_w": img_np.shape[1]
    }


# 圧縮画像+解凍するための画像の大きさを入力
# print(requests.post(url, compressed_data, img_np.shape))  #エラーはいた

print(requests.post(url, params)) #log見る限り、「"http://127.0.0.1:8000/images/"」での操作で値は渡せてる
