from rest_framework import serializers

from users.models import Address, User

class AddressSerializer(serializers.ModelSerializer):
  class Meta:
    model = Address
    fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
  address = AddressSerializer(read_only=True)
  is_active = True

  class Meta:
    model = User
    fields = '__all__'

