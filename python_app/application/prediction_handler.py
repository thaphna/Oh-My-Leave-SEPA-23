from infrastructure.database_service import databaseService
from infrastructure.storage_service import storageService
from infrastructure.image_classification_service import imageClassificationService

class predictionHandler:
  def __init__(self):
    self.prdService = imageClassificationService()
    self.storService = storageService()
    
  def predictionPlantFromMock(self):
    img_dict = self.storService.retrieveMockImages()
    for img_name, img_data in img_dict.items():
      self.prdService.performPlantPrediction('model', img_name, img_data)
    return True
