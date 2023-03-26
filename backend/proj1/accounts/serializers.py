from django.contrib.auth.models import User
from rest_framework import serializers,validators



class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=255)
    


class RegistrationSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = User
        fields = ('username', 'password','email','first_name','last_name')
        
        password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        username = validated_data.get('username')
        password = validated_data.get('password')
        email = validated_data.get('email')
        first_name = validated_data.get('first_name')
        last_name = validated_data.get('last_name')
        
        user = User.objects.create(
            username=username, 
            password=password,
            email= email,
            first_name = first_name,
            last_name = last_name
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    # def validate(self, data):
    #     if data['password'] != data['password2']:
    #         raise serializers.ValidationError("Passwords do not match.")
    #     return data
    
    
    

# mine api
# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('username', 'password', 'email','first_name','last_name')
        
#         extra_kwargs = {
#             'password':{"write_only":True},
#             "email":{
#                 "required":True,
#                 "allow_blank":False,
#                 "validators":[
#                         validators.UniqueValidator(
#                             User.objects.all(), "A user with that email already exists"
#                         )
#                 ]
#             }
#         }
        
    
#     def create(self, validated_data):
#         username = validated_data.get('username')
#         password = validated_data.get('password')
#         email = validated_data.get('email')
#         first_name = validated_data.get('first_name')
#         last_name = validated_data.get('last_name')
    
        
#         user = User.objects.create(
#             username=username, 
#             password=password,
#             email= email,
#             first_name = first_name,
#             last_name = last_name
#         )
        
#         return user