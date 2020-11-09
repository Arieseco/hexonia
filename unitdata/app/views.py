from rest_framework import generics

from .models import UnitData
from .serializers import UnitDataSerializer


class UnitDataListAPIView(generics.ListAPIView):
    queryset = UnitData.objects.all()
    serializer_class = UnitDataSerializer
