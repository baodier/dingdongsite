__author__ = 'liuyq'
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^user/', views.addUser, name='adduser'),
]