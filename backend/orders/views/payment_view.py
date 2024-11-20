from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from orders.models import Payment
from orders.serializers import PaymentSerializer

@api_view(['GET'])
def get_payments(request):
  payments = Payment.objects.all()
  serializer = PaymentSerializer(payments, many=True)
  return Response(serializer.data, status=status.HTTP_200_OK)