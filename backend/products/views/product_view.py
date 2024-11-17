from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from products.models import Product
from products.serializers import ProductSerializer

@api_view(['GET'])
def get_products(request):
  products = Product.objects.all()
  serializer = ProductSerializer(products, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def get_product(request, pk):
  try:
    product = Product.objects.get(pk=pk)
    images = product.images.all()
    serializer = ProductSerializer(product)
    return Response(serializer.data)
  except Product.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def create_product(request):
  serializer = ProductSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)