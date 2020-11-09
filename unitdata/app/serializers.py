from rest_framework import serializers
from .models import UnitData


class UnitDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnitData
        fields = ('name', 'hp','attack', 'defence',
                  'counter', 'move', 'range',
                  'site', 'text', 'special1',
                  'special2', 'special3', 'special4',)
