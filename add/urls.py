__author__ = 'liuyq'
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^user/', views.addUser, name='adduser'),
    url(r'^school/', views.addSchool, name='addschool'),
    url(r'^model/', views.model, name='model'),
    url(r'^ajax_province/$', views.ajax_province, name='ajax-province'),
    url(r'^ajax_school/$', views.ajax_school, name='ajax-school'),
    url(r'^ajax_major/$', views.ajax_major, name='ajax-major'),
]