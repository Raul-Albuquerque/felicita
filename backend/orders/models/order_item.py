from django.db import models
from django.contrib.auth.models import User

from .order import Order
from  products.models import Product


class OrderItem(models.Model):
  order_id = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
  product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
  quantity = models.PositiveIntegerField()
  price = models.DecimalField(max_digits=10, decimal_places=2)