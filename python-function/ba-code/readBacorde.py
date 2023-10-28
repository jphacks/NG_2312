import cv2
import numpy as np


file = "./images/Im_99.png"

#画像を読み込む
img = cv2.imread(file)
img = cv2.resize(img, (1000, 1000))
height, width, channels = img.shape[:3]
bd = cv2.barcode.BarcodeDetector('./path/sr.prototxt', './path/sr.caffemodel')
code = []

def detect(img1):
    img1 = cv2.resize(img1, (1000, 1000))
    retval, decoded_info, decoded_type, points = bd.detectAndDecode(img1)
    for i in decoded_info:
        if len(i) == 13 and (not i in code):
            code.append(i)

def search_Image():
    list = [200, 250 ,300, 350, 400, 450, 500, 550, 600, 650, 700]
    flag_w = True
    flag_h = True

    for k in list:
        for i in range(width):
            # flag_w = True
            a = i*k
            b = a+k
            if b >= height:
                b = width
                flag_w = False
                if a > (width-k):
                    break
            for j in range(height):
                flag_h = True
                c = j*k
                d = c + k
                if d >= height:
                    d = height
                    flag_h = False
                img1 = img[a : b, c: d]
                detect(img1)
                if flag_h == False:
                    break
            if flag_w == False:
                continue


search_Image()
print(code)