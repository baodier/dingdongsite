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

    def __str__(self):
        xingbie = u"男"
        if self.sex == 0:
            xingbie = u"女"
        return str(self.student_id)+"\t"+self.name+"\t"+xingbie+"\t"+str(self.score_big)+"\t"+str(self.score_small)+"\t"+self.district+"\t"+self.school


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

    def __str__(self):
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

    def __str__(self):
        return str(self.student_id)+"\t"+self.school+"\t"+ \
               self.depa1+"\t"+self.depa2+"\t"+self.depa3+"\t"+self.depa4+ "\t" + \
               self.depa5+"\t"+self.depa6+"\t"+str(self.canadjust)


class StudentAdmitResult(models.Model):
    student_id = models.IntegerField(max_length=32)
    school = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    school_priority = models.SmallIntegerField(max_length=4)
    department_priority = models.SmallIntegerField(max_length=4)
    isadmited = models.BinaryField(default=0)
    fill_date = models.DateTimeField("date fill", default=timezone.now())
    edit_date = models.DateTimeField('date edit', default=timezone.now())

    def __str__(self):
        return str(self.student_id)+"\t"+self.school+"\t"+self.department+"\t"+str(self.school_priority)+"\t"+str(self.department_priority)+"\t"+str(self.isadmited)