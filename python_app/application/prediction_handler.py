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
  
  def predictionPlantFromImage(self, img_bytes, modelName):
    img_dict = self.storService.tensoriseImage(img_bytes)
    for img_name, img_data in img_dict.items():
      result = self.prdService.performPlantPrediction(modelName, img_name, img_data)

    for item in result:
      item.confidence = round(item.confidence, 2)
      item.plantName = item.plantName.capitalize()

    filteredResult = list(filter(lambda x: x.confidence > 0, result))

    if len(filteredResult) <= 0:
      return [max(result, key = lambda x : x.confidence)]
    
    return sorted(filteredResult, key = lambda x : x.confidence, reverse = True)[:5]
  
  def healthCheckFromImage(self, img_bytes, modelName):
    img_dict = self.storService.tensoriseImage(img_bytes)
    for img_name, img_data in img_dict.items():
      result = self.prdService.performPlantPrediction(modelName, img_name, img_data)
    
    return sorted(result, key = lambda x : x.confidence, reverse = True)
