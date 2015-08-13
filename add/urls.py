__author__ = 'liuyq'
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^user/', views.addUser, name='adduser'),
    url(r'^school/', views.addSchool, name='addschool'),
    url(r'^model/', views.model, name='model'),
]