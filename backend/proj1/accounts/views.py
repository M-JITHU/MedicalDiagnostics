from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.auth import AuthToken
from rest_framework import status
# from .serializers import RegisterSerializer
from .serializers import LoginSerializer
from django.contrib.auth import authenticate
from .serializers import RegistrationSerializer



class LoginView(APIView):
    def post(self,request):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(request, username=username, password=password)
            
            if user is not None:
                _, token  = AuthToken.objects.create(user)
                return Response({
                    'user_info':{
                    'id':user.id,
                    'username':user.username,
                    'email':user.email
                    },
                'token':token
                })
            else:
                return Response({'status': 'error', 'message': 'Invalid login credentials'})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class RegistrationView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            _, token = AuthToken.objects.create(user)
            return Response({
                    'user_info':{
                    'id':user.id,
                    'username':user.username,
                    'email':user.email
                    },
                'token':token
                })
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)






# @api_view(['POST'])
# def login_api(request):
#     serializer = AuthTokenSerializer(data=request.data)
#     serializer.is_valid(raise_exception=True)
#     user=serializer.validated_data['user']
    

#     _, token  = AuthToken.objects.create(user)
#     return Response({
#         'user_info':{
#             'id':user.id,
#             'username':user.username,
#             'email':user.email
#             },
#         'token':token
#     })
    
    
    
@api_view(['GET'])
def get_user_data(request):
    user = request.user
    
    if user.is_authenticated:
        return Response({
            'user_info':{
                'id':user.id,
                'username':user.username,
                'email':user.email
            },
        })
        
    return Response({'error':'not authenticated'}, status=400)


# @api_view(['POST'])
# def register_api(request):
#     serializer = RegisterSerializer(data= request.data)
#     serializer.is_valid(raise_exception=True)
    
#     user = serializer.save()
    
#     _, token = AuthToken.objects.create(user)
    
#     return Response({
#         'user_info':{
#             'id':user.id,
#             'username':user.username,
#             'email':user.email
#             },
#         'token':token
#     })