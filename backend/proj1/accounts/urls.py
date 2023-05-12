from django.urls import path

from . import views 
from knox import views as knox_views


urlpatterns = [
  
    path('login/',views.LoginAPI.as_view(), name='login'),
    # path('user/',views.get_user_data),
    path('user/',views.getUserDetails),
    # path('register/',views.register_api),
    path('register/',views.RegistrationView.as_view()),
    path('logout/',views.LogoutAPI.as_view()), # delete token associate to one user
    # path('logoutall/', knox_views.LogoutAllView.as_view()),
    path('patient/', views.PatientView.as_view(),name='patient'), # post the patient's data
    path('list/', views.PatientView.as_view(),name='list-patient'), # get the patient's data
    path('search_patient/', views.get_patient_details,name="patientdetails"),
    path('edit_patient/', views.edit_patient_details, name="editpatientdetails")

]   