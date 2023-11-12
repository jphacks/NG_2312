import cv2
import numpy as np
import bookAPI
import copy

bd = cv2.barcode.BarcodeDetector('./path/sr.prototxt', './path/sr.caffemodel')
code = []

def detect(img1):
    img1 = cv2.resize(img1, (1000, 1000))
    retval, decoded_info, decoded_type, points = bd.detectAndDecode(img1)
    for i in decoded_info:
        if len(i) == 13 and (not i in code) and i.startswith('978'):
            print("i:", i)
            code.append(i)

def search_Image(img):
    height, width, channels = img.shape[:3]
    
    flag_h = True
    for k in [300, 500]:
        a = 0
        while True:
            b = a+k
            if b > height:
                b = width
            
            c = 0
            while True:
                flag_h = True
                d = c + k
                if d >= height:
                    d = height
                    flag_h = False
                img1 = img[a : b, c: d]
                detect(img1)
                if flag_h == False:
                    break
                
                c += 100
            
            a += 100
            if a > (width-k):
                break

def main(img):
    img = cv2.resize(img, (1000, 1000))
    search_Image(img)
    BookInfo_list = []
    for code_item in code:
        print(code_item)
        item = bookAPI.search_Books(code_item)
        BookInfo_list.append(copy.deepcopy(item))

    code.clear()
    print(BookInfo_list)
    return BookInfo_list