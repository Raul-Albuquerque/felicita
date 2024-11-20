from rest_framework import serializers

from orders.models import Order, Payment, OrderItem
from products.serializers import ProductSerializer

class OrderItemSerializer(serializers.ModelSerializer):
  total = serializers.SerializerMethodField()

  def get_total(self, obj):
    quantity = obj.quantity
    price = obj.price
    return quantity * price
  
  class Meta:
    model = OrderItem
    fields = '__all__'

class PaymentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Payment
    fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
  payment = serializers.CharField(source='payment.payment_status', read_only=True)
  items = OrderItemSerializer(many=True, read_only=True)
  
  class Meta:
    model = Order
    fields = '__all__'