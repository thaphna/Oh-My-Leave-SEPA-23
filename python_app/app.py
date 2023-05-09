from application.authentication_handler import authenticationHandler
from application.collection_handler import collectionHandler
from application.leaderboard_handler import leaderboardHandler
from application.prediction_handler import predictionHandler
from flask import Flask

app = Flask("Oh-My-Leave")

@app.route('/')
def home():
    return "Hello World"

