from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from products.models import Product
from orders.models import Order, Payment, OrderItem
from orders.serializers import OrderSerializer

@api_view(['GET'])
def get_orders(request):
	orders=Order.objects.all()
	serializer=OrderSerializer(orders, many=True)
	return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_order(request,pk):
	try:
		order = Order.objects.get(pk=pk)
		serializer = OrderSerializer(order)
		return Response(serializer.data, status=status.HTTP_200_OK)
	except Order.DoesNotExist:
		return Response(status=status.HTTP_404_NOT_FOUND)
	
@api_view(['POST'])
def create_order(request):
    # Inicializa o serializador com os dados do pedido
    serializer = OrderSerializer(data=request.data)
    if serializer.is_valid():
        # Salva o pedido (Order) no banco de dados
        order = serializer.save()

        # Cria o pagamento relacionado ao pedido
        Payment.objects.create(
            order_id=order,
            amount=1200.00,  # Ajuste para calcular dinamicamente se necessário
        )

        # Processa os itens do pedido
        items = request.data.get('items', [])
        for item in items:
            product_id = item.get('product_id')
            quantity = item.get('quantity')
            price = item.get('price')

            # Validação básica
            if not product_id or not quantity:
                return Response(
                    {"error": "Cada item deve conter 'product_id' e 'quantity'."},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Busca o produto no banco de dados
            try:
                product = Product.objects.get(id=product_id)
            except Product.DoesNotExist:
                return Response(
                    {"error": f"Produto com ID {product_id} não encontrado."},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Cria o item do pedido (OrderItem)
            OrderItem.objects.create(
                order_id=order,
                product_id=product,
                quantity=quantity,
                price=price
            )

        # Retorna a resposta com os dados do pedido criado
        return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)

    # Caso os dados do pedido sejam inválidos
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
