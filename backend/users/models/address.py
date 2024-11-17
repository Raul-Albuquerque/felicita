from django.db import models
# from django.conf import settings

from users.models import User

class Address(models.Model):
  user_id = models.ForeignKey(User, null=False, on_delete=models.CASCADE)
  address = models.CharField(max_length=255)
  city = models.CharField(max_length=100)
  state = models.CharField(max_length=100)
  postal_code = models.CharField(max_length=20)