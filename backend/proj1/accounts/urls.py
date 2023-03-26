from django.urls import path
from . import views 
from knox import views as knox_views

urlpatterns = [
    # path('login/',views.login_api),
    path('login/',views.LoginView.as_view(), name='login'),
    path('user/',views.get_user_data),
    # path('register/',views.register_api),
    path('register/',views.RegistrationView.as_view()),
    path('logout/',knox_views.LogoutView.as_view()), # delete token associate to one user
    path('logoutall/', knox_views.LogoutAllView.as_view())
]