import tensorflow as tf
import numpy as np
import os.path
from common.image_prediction_result import imagePredictionResult

class imageClassificationService:	
	def performPlantPrediction(self, model_name, img_name, img_data):
		label_file_path = os.path.abspath(os.path.dirname("") + "ml_models/" + model_name + ".txt")
		model_label_map = []
		with open(label_file_path) as f:
			data = f.readlines()
			for label in data:
				model_label_map.append(label.strip())

		#print(model_label_map)
		tf_file_path = os.path.abspath(os.path.dirname("") + "ml_models/" + model_name + ".tflite")
		interpreter = tf.lite.Interpreter(model_path=tf_file_path)
		#input_details = interpreter.get_input_details()
		#output_details = interpreter.get_output_details()
		#signature_defs = interpreter.get_signature_list()
		classify_lite = interpreter.get_signature_runner('serving_default')
		predictions_lite = classify_lite(sequential_input=img_data)['outputs']
		score_lite = tf.nn.softmax(predictions_lite)
		print(
			img_name + " most likely belongs to {} with a {:.2f} percent confidence."
			.format(model_label_map[np.argmax(score_lite)], 100 * np.max(score_lite))
		)

		prediction_result = []
		print("All scores: ")
		for indexScore, score in enumerate(score_lite[0]):
			print("{}: {:.2f}".format(model_label_map[indexScore], 100 * np.max(score)))
			prediction_result.append(imagePredictionResult(plantName=model_label_map[indexScore], plantDescription='', confidence=100 * np.max(score)))
		
		#print(prediction_result)
		return prediction_result
