from django.urls import path
from django.views.generic import TemplateView
from . import views

app_name = 'app'
urlpatterns = [
    path('', views.UnitDataListAPIView.as_view(), name="app"),
]
