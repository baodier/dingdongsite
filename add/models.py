# coding: UTF-8
from django.db import models
from django.utils import timezone
# Create your models here.
# CREATE TABLE `student_baseinfo` (
#   `id` int(32) NOT NULL,
#   `name` varchar(32) DEFAULT NULL,
#   `sex` tinyint(2) DEFAULT NULL,
#   `score_big` tinyint(8) DEFAULT NULL,
#   `score_small` tinyint(8) DEFAULT NULL,
#   `score_add` tinyint(8) DEFAULT NULL,
#   `district` varchar(32) DEFAULT NULL,
#   `school` varchar(32) DEFAULT NULL,
#   PRIMARY KEY (`id`)
# ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


class StudentBaseInfo(models.Model):
    student_id = models.IntegerField(max_length=32)
    name = models.CharField(max_length=200)
    sex = models.BooleanField(default=1)
    score_big = models.FloatField(max_length=32)
    score_small = models.FloatField(max_length=32)
    score_add = models.FloatField(max_length=32)
    district = models.CharField(max_length=200)
    school = models.CharField(max_length=200)
    registration_date = models.DateTimeField("date registration", default=timezone.now())
    edit_date = models.DateTimeField('date edit', default=timezone.now())

    def __unicode__(self):
        # xingbie = "男"
        # if self.sex == 0:
        #     xingbie = "女"
        return str(self.student_id)+"\t"+self.name+"\t"+self.sex+"\t"+str(self.score_big)+"\t"+str(self.score_small)+"\t"+self.district+"\t"+self.school


# class Choice(models.Model):
#     question = models.ForeignKey(Question)
#     choice_text = models.CharField(max_length=200)
#     votes = models.IntegerField(default=0)
class StudentPlanSchool(models.Model):
    student_id = models.IntegerField(max_length=32)
    school1 = models.CharField(max_length=100)
    school2 = models.CharField(max_length=100)
    school3 = models.CharField(max_length=100)
    school4 = models.CharField(max_length=100)
    school5 = models.CharField(max_length=100)
    school6 = models.CharField(max_length=100)
    fill_date = models.DateTimeField("date fill", default=timezone.now())
    edit_date = models.DateTimeField('date edit', default=timezone.now())

    def __unicode__(self):
        return str(self.student_id)+"\t"+self.school1+"\t"+self.school2+ \
               "\t" + self.school3+"\t"+self.school4+"\t"+self.school5+"\t"+self.school6


class StudentPlanSchoolDepartment(models.Model):
    student_id = models.IntegerField(max_length=32)
    school = models.CharField(max_length=100)
    depa1 = models.CharField(max_length=100)
    depa2 = models.CharField(max_length=100)
    depa3 = models.CharField(max_length=100)
    depa4 = models.CharField(max_length=100)
    depa5 = models.CharField(max_length=100)
    depa6 = models.CharField(max_length=100)
    canadjust = models.BooleanField(default=0)
    fill_date = models.DateTimeField("date fill", default=timezone.now())
    edit_date = models.DateTimeField('date edit', default=timezone.now())

    def __unicode__(self):
        return str(self.student_id)+"\t"+self.school+"\t"+ \
               self.depa1+"\t"+self.depa2+"\t"+self.depa3+"\t"+self.depa4+ "\t" + \
               self.depa5+"\t"+self.depa6+"\t"+str(self.canadjust)



class SchoolPlan(models.Model):
    priority = models.CharField(max_length=32)
    code = models.IntegerField(max_length=32)
    name = models.CharField(max_length=100)
    reputation = models.IntegerField(max_length=32)
    schooltype = models.CharField(max_length=32)
    belongto = models.CharField(max_length=32)
    major = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    studentnum = models.IntegerField(max_length=32)
    major_detail = models.CharField(max_length=200)
    province = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    money = models.IntegerField(max_length=32)
    sex = models.SmallIntegerField(max_length=10, default=0)
    years = models.SmallIntegerField(max_length=10)
    language = models.CharField(max_length=32)
    fill_date = models.DateTimeField("date fill", default=timezone.now())
    edit_date = models.DateTimeField('date edit', default=timezone.now())

    def __unicode__(self):
        return self.priority+"\t"+str(self.code)+"\t"+self.name+"\t"+str(self.reputation)+"\t"+self.schooltype+"\t"+\
               self.belongto+"\t"+self.major+"\t"+self.department+"\t"+str(self.studentnum)+"\t"+self.major_detail+"\t"+\
               self.priority+"\t"+self.city+"\t"+str(self.money)+"\t"+str(self.sex)+"\t"+str(self.years)+"\t"+self.language


