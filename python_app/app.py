from application.collection_handler import collectionHandler
from application.leaderboard_handler import leaderboardHandler
from application.prediction_handler import predictionHandler
from flask import Flask, request
from flask_cors import CORS
import json
import base64

app = Flask("Oh-My-Leave")
CORS(app)
prdHandler = predictionHandler()


@app.route('/')
def home():
	return "Hello World"

@app.route('/test')
def mockPrediction():
	prdHandler.predictionPlantFromMock()
	return "Good"

@app.route('/predict-plant', methods=['GET', 'POST'])
def imagePrediction():
    if(request.method == "POST"):
        bytesOfImage = request.get_data()
        modelName = request.headers['model']
        results = prdHandler.predictionPlantFromImage(bytesOfImage, modelName)
        return json.dumps(results, default=lambda o: o.__dict__, sort_keys=True, indent=4)

@app.route('/health-check', methods=['GET', 'POST'])
def healthCheck():
    if(request.method == "POST"):
        bytesOfImage = request.get_data()
        modelName = request.headers['model']
        results = prdHandler.healthCheckFromImage(bytesOfImage, modelName)
        return json.dumps(results, default=lambda o: o.__dict__, sort_keys=True, indent=4)
    
@app.route('/predict-plant-pc', methods=['GET', 'POST'])
def imagePredictionPC():
    if(request.method == "POST"):
        body = request.json['img']
        body = body.replace('data:image/png;base64,', '')
        body = body.replace('data:image/jpeg;base64,', '')
        print('first letters: ' + body[:30])
        image = base64.b64decode(str(body))     
        modelName = request.headers['model']
        results = prdHandler.predictionPlantFromImage(image, modelName)
        return json.dumps(results, default=lambda o: o.__dict__, sort_keys=True, indent=4)

@app.route('/health-check-pc', methods=['GET', 'POST'])
def healthCheckPC():
    if(request.method == "POST"):
        body = request.json['img']
        body = body.replace('data:image/png;base64,', '')
        body = body.replace('data:image/jpeg;base64,', '')
        print('first letters: ' + body[:30])
        image = base64.b64decode(str(body))  
        modelName = request.headers['model']
        results = prdHandler.healthCheckFromImage(image, modelName)
        return json.dumps(results, default=lambda o: o.__dict__, sort_keys=True, indent=4)

