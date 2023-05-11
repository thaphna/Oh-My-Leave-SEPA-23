from application.authentication_handler import authenticationHandler
from application.collection_handler import collectionHandler
from application.leaderboard_handler import leaderboardHandler
from application.prediction_handler import predictionHandler
from flask import Flask

app = Flask("Oh-My-Leave")
prdHandler = predictionHandler()


@app.route('/')
def home():
	return "Hello World"

@app.route('/test')
def mockPrediction():
	prdHandler.predictionPlantFromMock()
	return "Good"

