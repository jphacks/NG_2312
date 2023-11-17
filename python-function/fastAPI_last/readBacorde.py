import cv2
import numpy as np
import bookAPI
import copy
import time
import asyncio

bd = cv2.barcode.BarcodeDetector('./path/sr.prototxt', './path/sr.caffemodel')
code = []
BookInfo_list = []

def detect(img1):
    img1 = cv2.resize(img1, (1000, 1000))
    retval, decoded_info, _, _ = bd.detectAndDecode(img1)
    if retval:
        for i in decoded_info:
            if len(i) == 13 and (not i in code) and i.startswith('978'):
                print("i:", i)
                code.append(i)
                item = bookAPI.search_Books(i)
                BookInfo_list.append(copy.deepcopy(item))

async def process_image(img, a, b, c, d):
    img1 = img[a : b, c: d]
    await asyncio.to_thread(detect, img1)

async def search_Image(img):
    await asyncio.gather(
        search(img, 300),
        search(img, 500)
    )

async def search(img, k):
    hw = 1000
    a = 0
    while True:
        b = a+k
        if b >= hw:
            b = hw

        c = 0
        while True:
            flag_h = True
            d = c + k
            if d >= hw:
                d = hw
                flag_h = False
            # await process_image(img, a, b, c, d)
            await process_image(img, c, d, a, b)
            c += 100
            if not flag_h:
                break

        a += 100
        if a > (hw-k):
            break

async def main(img):
    BookInfo_list.clear()
    code.clear()
    img = cv2.resize(img, (1000, 1000))

    start = time.time()
    await search_Image(img)
    end = time.time()
    time_diff = end - start

    return BookInfo_list, time_diff


# こいつが一番早かった
