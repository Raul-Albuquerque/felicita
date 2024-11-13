from django.db import models

from .product import Product

class ProductImage(models.Model):
  product_id = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
  alt_text = models.CharField(max_length=50)
  image = models.CharField(max_length=255, blank=True, null=True)