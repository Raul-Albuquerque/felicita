from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from users.models import User, Address
from users.serializers import UserSerializer, AddressSerializer

@api_view(['GET'])
def get_users(request):
  users = User.objects.all()
  serializer = UserSerializer(users, many=True)
  return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_user(request, pk):
  try:
    user = User.objects.get(pk=pk)
    
    try:
      address = Address.objects.get(user_id=pk)
      user.address = address
    
    except Address.DoesNotExist: 
      user.address = None

    serializer = UserSerializer(user)    
    return Response(serializer.data, status=status.HTTP_200_OK)

  except User.DoesNotExist:
    return Response({"detail": "User not found"}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def create_user(request):
  serializer = UserSerializer(data=request.data)
  if serializer.is_valid():
    user = User.create_user(
      email=serializer.validated_data['email'],
      password=serializer.validated_data['password'],
      first_name=serializer.validated_data.get('first_name', ''),
      last_name=serializer.validated_data.get('last_name', '')
    )
    return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login_user(request):
  email = request.data.get('email')
  password = request.data.get('password')

  if not email or not password:
    return Response({"detail": "Email and password are required."}, status=status.HTTP_400_BAD_REQUEST)
  
  user = authenticate(request, email=email, password=password)
  if user is not None:
    if user.is_active:
      login(request, user)
      return Response({"detail": "Login Successful."}, status=status.HTTP_200_OK)
    else:
      return Response({"detail": "User was logout"}, status=status.HTTP_403_FORBIDDEN)
  else:
    return Response({"detail": "Invalid credentials."}, status=status.HTTP_401_UNAUTHORIZED)
  

@api_view(['GET'])
def logout_user(request):
  if request.user.is_authenticated:
    logout(request)