import matplotlib.pyplot as plt
import numpy as np
import PIL
import tensorflow as tf
import pathlib
import sys
import os.path

from tensorflow import keras
from keras import layers
from keras.models import Sequential

def trainModel(data_dir, img_height, img_width, batch_size, epochs, model_name):
	train_ds = tf.keras.utils.image_dataset_from_directory(
		data_dir,
		validation_split=0.2,
		subset="training",
		seed=123,
		image_size=(img_height, img_width),
		batch_size=batch_size)

	val_ds = tf.keras.utils.image_dataset_from_directory(
		data_dir,
		validation_split=0.2,
		subset="validation",
		seed=123,
		image_size=(img_height, img_width),
		batch_size=batch_size)

	class_names = train_ds.class_names
	print(class_names)

	for image_batch, labels_batch in train_ds:
		print(image_batch.shape)
		print(labels_batch.shape)
		break

	AUTOTUNE = tf.data.AUTOTUNE
	train_ds = train_ds.cache().shuffle(1000).prefetch(buffer_size=AUTOTUNE)
	val_ds = val_ds.cache().prefetch(buffer_size=AUTOTUNE)

	normalization_layer = layers.Rescaling(1./255)
	normalized_ds = train_ds.map(lambda x, y: (normalization_layer(x), y))
	image_batch, labels_batch = next(iter(normalized_ds))

	num_classes = len(class_names)

	data_augmentation = keras.Sequential(
		[
			layers.RandomFlip("horizontal_and_vertical", input_shape=(img_height,img_width,3)),
			layers.RandomRotation(0.2),
			layers.RandomZoom(0.2),
			layers.RandomContrast(0.2),
		]
	)
	model = Sequential([
		data_augmentation,
		layers.Rescaling(1./255),
		layers.Conv2D(16, 3, padding='same', activation='relu'),
		layers.MaxPooling2D(),
		layers.Conv2D(32, 3, padding='same', activation='relu'),
		layers.MaxPooling2D(),
		layers.Conv2D(64, 3, padding='same', activation='relu'),
		layers.MaxPooling2D(),
		layers.Dropout(0.2),
		layers.Flatten(),
		layers.Dense(128, activation='relu'),
		layers.Dense(num_classes, name="outputs")
	])

	model.compile(optimizer='adam',
								loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
								metrics=['accuracy'])

	model.summary()

	history = model.fit(
		train_ds,
		validation_data=val_ds,
		epochs=epochs
	)

	acc = history.history['accuracy']
	val_acc = history.history['val_accuracy']

	loss = history.history['loss']
	val_loss = history.history['val_loss']

	epochs_range = range(epochs)

	plt.figure(figsize=(8, 8))
	plt.subplot(1, 2, 1)
	plt.plot(epochs_range, acc, label='Training Accuracy')
	plt.plot(epochs_range, val_acc, label='Validation Accuracy')
	plt.legend(loc='lower right')
	plt.title('Training and Validation Accuracy')

	plt.subplot(1, 2, 2)
	plt.plot(epochs_range, loss, label='Training Loss')
	plt.plot(epochs_range, val_loss, label='Validation Loss')
	plt.legend(loc='upper right')
	plt.title('Training and Validation Loss')
	plt.show()

	converter = tf.lite.TFLiteConverter.from_keras_model(model)
	tflite_model = converter.convert()
	with open('./trained_models/' + model_name + ".tflite", 'wb') as f:
		f.write(tflite_model)
	with open('./trained_models/' + model_name + ".txt", 'w') as f:
		for name in class_names:
			f.write(name)
			f.write("\n")

if __name__ == "__main__":
	#command line configs
	batch_size = int(sys.argv[1])
	iterations = int(sys.argv[2])
	model_name = sys.argv[3]

	#code configs
	dataset_path = os.path.abspath("./" + "leaf_photos")
	data_dir = pathlib.Path(tf.keras.utils.get_file(dataset_path, origin=''))
	img_height = 180
	img_width = 180

	trainModel(data_dir, img_height, img_width, batch_size, iterations, model_name)
