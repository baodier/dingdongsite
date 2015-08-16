__author__ = 'liuyq'
from django.conf.urls import url
from . import views

urlpatterns = [
    # ex: /polls/
    url(r'^$', views.index, name='index'),
    # ex: /polls/5/
    url(r'^detail_school/', views.detailSchool, name='detailschool'),
    url(r'^detail_student/', views.detailStudent, name='detailstudent'),
]