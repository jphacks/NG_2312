import cv2
import numpy as np
import bookAPI
import json
import copy

file = "./images/IM_99.png"

#画像を読み込む
img = cv2.imread(file)
img = cv2.resize(img, (1000, 1000))
height, width, channels = img.shape[:3]
bd = cv2.barcode.BarcodeDetector('./path/sr.prototxt', './path/sr.caffemodel')
code = []

def detect(img1):
    img1 = cv2.resize(img1, (500, 500))
    retval, decoded_info, decoded_type, points = bd.detectAndDecode(img1)
    for i in decoded_info:
        if len(i) == 13 and (not i in code):
            code.append(i)

def search_Image():
    # detection area : height and width
    list = [200, 300, 400, 500, 700]
    
    flag_w = True
    flag_h = True
    for k in list:
        a = 0
        while True:
            b = a+k
            if b >= height:
                b = width
                flag_w = False
                if a > (width-k):
                    break
            
            c = 0
            while True:
                flag_h = True
                d = c + k
                if d >= height:
                    d = height
                    flag_h = False
                # cut image
                img1 = img[a : b, c: d]
                # print(a,b,c,d)
                detect(img1)
                c += 100
                if flag_h == False:
                    break
            
            a += 100
            if flag_w == False:
                continue


search_Image()
# print(code)
BookInfo_list = []
for code_item in code:
    if code_item.startswith('978'):
        print(code_item)
        item = bookAPI.search_Books(code_item)
        BookInfo_list.append(copy.deepcopy(item))

print(BookInfo_list)
# print(json.dumps(BookInfo_list))