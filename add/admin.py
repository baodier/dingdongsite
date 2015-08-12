from django.contrib import admin
from .models import StudentAdmitResult, StudentBaseInfo, StudentPlanSchool, StudentPlanSchoolDepartment
# Register your models here.
admin.site.register(StudentBaseInfo)
admin.site.register(StudentPlanSchool)
admin.site.register(StudentPlanSchoolDepartment)
admin.site.register(StudentAdmitResult)