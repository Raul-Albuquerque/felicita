from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
  username = None
  email = models.EmailField(unique=True)

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['first_name', 'last_name']

  def __str__(self):
      return self.email

  @classmethod
  def create_user(cls, email, password, **extra_fields):
    if not email:
        raise ValueError('The Email field must be set.')
    extra_fields.setdefault('is_active', True)
    user = cls(email=email, **extra_fields)
    user.set_password(password)
    user.save()
    return user
