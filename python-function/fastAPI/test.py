import numpy as np
from PIL import Image
import readBacorde
import json
from io import BytesIO
import gzip

def load_image(image_data, img_shape):
    decompressed_data = gzip.decompress(image_data)
    img = np.frombuffer(decompressed_data, dtype = np.uint8).reshape(img_shape)
    
    booklist = readBacorde.main(img)
    
    result = {
        'message': 'Image processed successfully',
        'result': booklist # バイナリデータをリストに変換
    }
    return json.dumps(result)