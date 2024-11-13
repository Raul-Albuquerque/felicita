from django.db import models
from .order import Order

class Payment(models.Model):
  order_id = models.OneToOneField(Order, on_delete=models.CASCADE, related_name='payment')
  payment_method = models.TextField()
  amount = models.DecimalField(max_digits=10, decimal_places=2)
  payment_status = models.CharField(max_length=20, choices=[('approved', 'Approved'), ('pending', 'Pending'), ('declined', 'Declined')])
  payment_date = models.DateTimeField(auto_now_add=True)