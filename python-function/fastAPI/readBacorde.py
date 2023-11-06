import cv2
import numpy as np
import bookAPI
import json
import copy

# file = "./images/Im_99.png"
bd = cv2.barcode.BarcodeDetector('./path/sr.prototxt', './path/sr.caffemodel')
code = []

def detect(img1):
    img1 = cv2.resize(img1, (1000, 1000))
    retval, decoded_info, decoded_type, points = bd.detectAndDecode(img1)
    for i in decoded_info:
        if len(i) == 13 and (not i in code):
            code.append(i)

def search_Image(img):
    height, width, channels = img.shape[:3]
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


def main(img):
    img = cv2.resize(img, (1000, 1000))
    search_Image(img)
    # print(code)
    BookInfo_list = []
    for code_item in code:
        if code_item.startswith('978'):
            print(code_item)
            print(code_item)
            item = bookAPI.search_Books(code_item)
            BookInfo_list.append(copy.deepcopy(item))
            # BookInfo_list.append(bookAPI.search_Books(code_item))
    print(BookInfo_list)

    return BookInfo_list