from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from products.models import ProductImage
from products.serializers import ProductImageSerializer

@api_view(['POST'])
def create_product_image(request):
  serializer = ProductImageSerializer(data=request.data)
  if (serializer.is_valid()):
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)