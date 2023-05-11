import tensorflow as tf
import os.path
import pathlib

class storageService:
	def retrieveMockImages(self):
		img_height = 180
		img_width = 180
		img_dict = dict()
		dataset_path = os.path.abspath(os.path.dirname("") + "mock_photos")
		for image in os.listdir(dataset_path):
			img_path = dataset_path + "\\" + image
			print(img_path)
			data_dir = pathlib.Path(tf.keras.utils.get_file(img_path, origin=''))
			img = tf.keras.utils.load_img(
				data_dir, target_size=(img_height, img_width)
			)
			img_dict[image] = tf.expand_dims(tf.keras.utils.img_to_array(img), 0)
		return img_dict