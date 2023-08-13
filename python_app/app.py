from application.authentication_handler import authenticationHandler
from application.collection_handler import collectionHandler
from application.leaderboard_handler import leaderboardHandler
from application.prediction_handler import predictionHandler
from flask import Flask, request
import json

app = Flask("Oh-My-Leave")
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
        results = prdHandler.predictionPlantFromImage(bytesOfImage)
        return json.dumps(results, default=lambda o: o.__dict__, sort_keys=True, indent=4)
    

