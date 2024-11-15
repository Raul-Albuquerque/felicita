from rest_framework import serializers

from orders.models import OrderItem

class OrderItemSerializer(serializers.ModelSerializer):
  class Meta:
    model = OrderItem
    fields = '__all__'