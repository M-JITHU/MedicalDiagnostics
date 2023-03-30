from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.auth import AuthToken
from rest_framework import status
# from .serializers import RegisterSerializer
from knox.auth import TokenAuthentication
from .serializers import LoginSerializer
from django.contrib.auth import authenticate
from .serializers import RegistrationSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny

from accounts.serializers import PatientSerializer
from accounts.models import Patientdb


class LoginView(APIView):
    def post(self,request):
        # serializer = AuthTokenSerializer(data=request.data)
        serializer = LoginSerializer(data=request.data)
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
                print("error 1")
                return Response({'status': 'error', 'message': 'Invalid login credentials'})
        else:
            
            return Response("Error2", serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# class LoginAPI(generics.GenericAPIView):
#     permission_classes = (AllowAny,)
#     authentication_classes = (TokenAuthentication,)
#     serializer_class = LoginSerializer

#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data
#         _, token = AuthToken.objects.create(user)
#         return Response({'token': token})




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


class PatientView(APIView):
    def post(self, request, format=None):
        serializer = PatientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Resume Uploaded Successfully',
            'status':'success','candidate':serializer.data},
            status = status.HTTP_201_CREATED)
        return Response(serializer.errors)
    
    def get(self, request, format=None):
        candidates = Patientdb.objects.all()
        serializer = PatientSerializer(candidates, many=True)
        return Response({'status':'success','candidates':serializer.data}, status=status.HTTP_200_OK)
