from django.urls import path

from products.views import get_products, create_product, get_product, create_product_image

urlpatterns = [
    path('', get_products, name='get_products'),
    path('<int:pk>/', get_product, name='get_product'),
    path('create/', create_product, name='create_product'),
    path('image/create/', create_product_image, name='create_product_image')
]
