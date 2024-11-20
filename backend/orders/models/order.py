from django.db import models
# from django.conf import settings

from products.models import Product
from users.models import User, Address 

class Order(models.Model):
  customer = models.ForeignKey(User, null=False, on_delete=models.CASCADE)
  status = models.CharField(max_length=20, choices=[('pending', 'Pending'),('processing', 'Processing'), ('shipped', 'Shipped'), ('delivered', 'Delivered')], default='pending')
  creation_date = models.DateTimeField(auto_now_add=True)
