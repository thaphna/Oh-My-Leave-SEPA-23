To train an ML model:
- check the leaf_photos folder has correct training data
- cd python_ml_trainer
- run py trainer.py <batch_size> <training_iteration> <exported_model_name>
    - ex. py trainer.py 3 10 model
- find the trained model and the .txt file in the "trained_models" directory
- to use in the python app, copy both .tflite and .txt file to the python_app/trained_model folder
    - code change may be required if the name of your model is not "model.tflite"