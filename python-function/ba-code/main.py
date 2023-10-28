import cv2
import numpy as np

# print(cv2.getBuildInformation())

# file = "./barcode.png"
# file = "./IM_66.png"
# file = "./Im_55.png"
file = "./Im_99.png"
#画像を読み込む
img = cv2.imread(file)
img = cv2.resize(img, (1000, 1000))
bd = cv2.barcode.BarcodeDetector('./path/sr.prototxt', './path/sr.caffemodel')

code = []
# def showImg(title, img):
#     cv2.imshow(title, img)
#     cv2.waitKey()
#     cv2.destroyAllWindows()

# def detect(path):
def detect(img1):
    # img_D = cv2.imread(path)
    img1 = cv2.resize(img1, (1000, 1000))
    # cv2.imshow("test",img1)
    # cv2.waitKey(0)
    retval, decoded_info, decoded_type, points = bd.detectAndDecode(img1)
    # print(retval, decoded_info)
    # True
    # print(decoded_info)
    for i in decoded_info:
        if len(i) == 13 and (not i in code):
            code.append(i)

height, width, channels = img.shape[:3]
print("h,w",height,width)

list = [200, 250 ,300, 350, 400, 450, 500, 550, 600, 650, 700]
# k = 200
m = 100
img1 = img
count = 0
flag_w = True
flag_h = True
flag_E = True

for k in list:
    for i in range(width):
        # flag_w = True
        a = i*k
        b = a+k
        if b >= height:
            b = width
            flag_w = False
            if a > (width-k):
                # print("!!")
                break
        for j in range(height):
            flag_h = True
            c = j*k
            d = c + k
            if d >= height:
                d = height
                flag_h = False
            img1 = img[a : b, c: d]
            # print(a,b,c,d)
            detect(img1)
            count+=1
            if flag_h == False:
                # print("!!k")
                break
        if flag_w == False:
            # print("!!w")
            continue


print(code)

# img1 = img[0 : 50, 0: 50]
# cv2.imwrite("./out/out_sample1.jpg", img1)
# cv2.imwrite("./out/output_save_" + str(count) + ".png", img1)
# count+=1


# showImg("original", img)


# 13桁