import cv2
import numpy as np

file = '../../images/IM_88.png'
img = cv2.imread(file)
img_np = np.array(img)
img_bin = img_np.tobytes()
print(img_bin)