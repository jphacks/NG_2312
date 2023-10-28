from ultralytics import YOLO
import cv2

# モデル読み込み
model = YOLO("./model/yolov8s.pt")

# 入力画像
results = model('Im_88.png',save=True,save_crop=True) 