import cv2
import numpy as np

# print(cv2.getBuildInformation())

# file = "./IM_66.png"
file = "./IM_99.png"
#画像を読み込む
img_D = cv2.imread(file)
# img_D = cv2.resize(img_D, (1000, 1000))
bd = cv2.barcode.BarcodeDetector('./path/sr.prototxt', './path/sr.caffemodel')
retval, decoded_info, decoded_type, points = bd.detectAndDecode(img_D)
print(retval)
# True
print(decoded_info)
