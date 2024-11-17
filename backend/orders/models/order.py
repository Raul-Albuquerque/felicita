from django.db import models
# from django.conf import settings

from users.models import User

class Order(models.Model):
  user_id = models.ForeignKey(User, null=False, on_delete=models.CASCADE)
  shipping_adress = models.CharField(max_length=255)
  status = models.CharField(max_length=20, choices=[('pending', 'Pending'),('processing', 'Processing'), ('shipped', 'Shipped'), ('delivered', 'Delivered')], default='pending')
  creation_date = models.DateTimeField(auto_now_add=True)
  total = models.DecimalField(max_digits=10, decimal_places=2)