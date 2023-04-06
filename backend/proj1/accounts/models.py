from django.db import models

from keras_preprocessing.image import load_img, img_to_array
# from tensorflow.keras.preprocessing.image import load_img
# Create your models here.

import numpy as np
from tensorflow.keras.applications.inception_resnet_v2 import InceptionResNetV2, decode_predictions, preprocess_input

# Create your models here.
STATE_CHOICE=((
    ('Karnataka','Karnataka'),
    ('Jharkhand','Jharkhand'),
    ('West Bengal','West Bengal'),
))

# class Patientdatas(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField()
#     dob = models.DateField(auto_now=False, auto_now_add=False)
#     state = models.CharField(choices=STATE_CHOICE, max_length=50)
#     gender = models.CharField(max_length=100)
#     location = models.CharField(max_length=100)
#     pimage = models.ImageField(upload_to='pimages',blank=True)
    


# class Patientdb2(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField()
#     dob = models.DateField(auto_now=False, auto_now_add=False)
#     state = models.CharField(choices=STATE_CHOICE, max_length=50)
#     gender = models.CharField(max_length=100)
#     location = models.CharField(max_length=100)
#     pimage = models.ImageField(upload_to='pimages',blank=True)
#     classified = models.CharField(max_length=200,blank=True)
#     uploaded = models.DateTimeField(auto_now_add=True)  
    
    
    
class Patientdb(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    dob = models.DateField(auto_now=False, auto_now_add=False)
    state = models.CharField(choices=STATE_CHOICE, max_length=50)
    gender = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    # pimage = models.ImageField(upload_to='pimages',blank=True)
    pimage = models.ImageField()
    classified = models.CharField(max_length=200,blank=True)
    uploaded = models.DateTimeField(auto_now_add=True) 
    
    def save(self,*args,**kwargs): # code pre trained model and  the whole classification take place
        print(self.pimage.path)
        print("try starts")
        try:
            img = load_img(self.pimage.path, target_size=(299,299))
            img_array = img_to_array(img) #convert image to array of pixels and assigned some value to every pixels
            # print(img_array)
            # print((img_array).shape) # find the shape of image
            to_pred = np.expand_dims(img_array, axis=0) #(1,299,299,3)
            # print(to_pred.shape)

            prep = preprocess_input(to_pred)
            
            model = InceptionResNetV2(weights = 'imagenet')
            prediction = model.predict(prep)
            print(prediction)
            
            #decode
            decoded = decode_predictions(prediction)[0][0][1]
            print("hello")
            self.classified = str(decoded)
            print("success")

        except Exception as e:
            print('classification failed',e)
        super().save(*args,**kwargs)