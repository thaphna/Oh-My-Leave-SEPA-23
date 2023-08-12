import tensorflow as tf
import os.path
import pathlib
from PIL import Image
import io
import uuid
class storageService:
	def __init__(self):
		self.img_height= 180
		self.img_width = 180

	def retrieveMockImages(self):
		img_dict = dict()
		dataset_path = os.path.abspath(os.path.dirname("") + "mock_photos")
		for image in os.listdir(dataset_path):
			img_path = dataset_path + "\\" + image
			print(img_path)
			data_dir = pathlib.Path(tf.keras.utils.get_file(img_path, origin=''))
			img = tf.keras.utils.load_img(
				data_dir, target_size=(self.img_height, self.img_width)
			)
			img_dict[image] = tf.expand_dims(tf.keras.utils.img_to_array(img), 0)
		return img_dict
	
	def tensoriseImage(self, img_bytes):
		img_dict = dict()
		imageName = uuid.uuid4().hex
		img = Image.open(io.BytesIO(img_bytes))
		img = img.convert('RGB')
		img = img.resize(size=(self.img_height, self.img_width), resample=Image.NEAREST)
		img_dict[imageName] = tf.expand_dims(tf.keras.utils.img_to_array(img), 0)
		return img_dict