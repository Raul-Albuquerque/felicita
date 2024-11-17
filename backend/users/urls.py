from django.urls import path

from users.views import get_users, get_user, create_user, create_address, login_user

urlpatterns = [
    path('', get_users, name='get_users'),
    path('user/<int:pk>/', get_user, name='get_user'),
    path('create/', create_user, name='create_user'),
    path('<int:pk>/address/create/', create_address, name='create_address'),
    path('login/', login_user, name='login_user')
]
