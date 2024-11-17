from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from users.models import User
from users.serializers import AddressSerializer

@api_view(['POST'])
def create_address(request, pk):
  try:
    user = User.objects.get(pk=pk)
    request.data['user_id'] = user.id
    serializer = AddressSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  except User.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)