from django.urls import path

from orders.views import create_order, get_order, get_payments, get_orders

urlpatterns = [
  path('', get_orders, name='get_orders'),
	path('create/', create_order, name='create_order'),
	path('order/<int:pk>/', get_order, name='get_order'),
	path('payments/', get_payments, name='get_payment')
]
