import cv2
import numpy as np
import io
from PIL import Image
import gzip
import test

file = './img/IM_88.png'
img = cv2.imread(file)
img_np = np.array(img)
print(img_np.dtype)
img_bin = img_np.tobytes()

compressed_data = gzip.compress(img_bin)
print(img_np.shape)
print(test.load_image(compressed_data, img_np.shape))
