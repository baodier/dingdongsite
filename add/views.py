# coding: UTF-8
from django.shortcuts import get_object_or_404, render
from models import StudentBaseInfo, SchoolPlan, StudentPlanSchool, StudentPlanSchoolDepartment
from django.http import JsonResponse
import json
# Create your views here.

def ajax_province(request):
    p = SchoolPlan.objects.values('province').distinct().order_by('province')
    print p
    ret = list()
    for item in p:
        ret.append(item['province'])

    return JsonResponse(ret, safe=False)

def ajax_school(request):
    print request
    province = request.GET['province']
    print province
    p = SchoolPlan.objects.filter(province=province).values('name').distinct().order_by('name')
    print p
    ret = list()
    for item in p:
        ret.append(item['name'])

    return JsonResponse(ret, safe=False)


def ajax_major(request):
    print request
    school = request.GET['school']
    print school
    p = SchoolPlan.objects.filter(name=school).values('major').distinct().order_by('major')
    print p
    ret = list()
    for item in p:
        ret.append(item['major'])

    return JsonResponse(ret, safe=False)


def addUser(request):
    return render(request, 'add/user.html', )

def addSchool(request):
    return render(request, 'add/school.html', )



def model(request):
    print request.POST
    model_type = request.POST['type']
    print model_type
    if model_type == "1": #add user
        studentid = request.POST['student_id']

        print "studentid", studentid
        if studentid == "":
            return render(request, 'add/user.html', )

        p = StudentBaseInfo.objects.filter(student_id=studentid)

        if p:
            return render(request, 'add/userdetail.html', {
                'error_message': "user id has already exist!",
                })
        else:
            name = request.POST['name']
            sex = request.POST['sex']
            score_big = request.POST['score_big']
            score_small = request.POST['score_small']
            score_add = request.POST['score_add']
            district = request.POST['district']
            school = request.POST['school']

            if name == "" or score_big == "" or score_small == "" or score_add == "" or district == "" or school == "":
                return render(request, 'add/userdetail.html', {
                'error_message': "所有字段不能为空",
                })
            baseinfo = StudentBaseInfo(student_id=studentid, name=name, sex="1", score_big=score_big, score_small=score_small,score_add=score_add,district=district,school=school)
            baseinfo.save()


            signcollage1 = ""
            signcollage2 = ""
            signcollage3 = ""
            signcollage4 = ""
            signcollage5 = ""
            signcollage6 = ""

            signprovince1 = request.POST['signprovince1']
            if signprovince1 != '0':
                signcollage1 = request.POST['signcollage1']

            signprovince2 = request.POST['signprovince2']
            if signprovince2 != '0':
                signcollage2 = request.POST['signcollage2']

            signprovince3 = request.POST['signprovince3']
            if signprovince3 != '0':
                signcollage3 = request.POST['signcollage3']

            signprovince4 = request.POST['signprovince4']
            if signprovince4 != '0':
                signcollage4 = request.POST['signcollage4']

            signprovince5 = request.POST['signprovince5']
            if signprovince5 != '0':
                signcollage5 = request.POST['signcollage5']

            signprovince6 = request.POST['signprovince6']
            if signprovince6 != '0':
                signcollage6 = request.POST['signcollage6']

            planSchool = StudentPlanSchool(student_id=studentid, school1=signcollage1, school2=signcollage2,
                                           school3=signcollage3, school4=signcollage4, school5=signcollage5,
                                           school6=signcollage6)
            planSchool.save()


            if signcollage1 != "":
                school1plan1 = request.POST['school1plan1']
                school1plan2 = request.POST['school1plan2']
                school1plan3 = request.POST['school1plan3']
                school1plan4 = request.POST['school1plan4']
                school1plan5 = request.POST['school1plan5']
                school1plan6 = request.POST['school1plan6']
                canadjust1 = request.POST['canadjust1']
                planDepart = StudentPlanSchoolDepartment(student_id=studentid, school=signcollage1, depa1=school1plan1, depa2=school1plan2, depa3=school1plan3,
                                                         depa4=school1plan4, depa5=school1plan5, depa6=school1plan6, canadjust=canadjust1)
                planDepart.save()
            if signcollage2 != "":
                school2plan1 = request.POST['school2plan1']
                school2plan2 = request.POST['school2plan2']
                school2plan3 = request.POST['school2plan3']
                school2plan4 = request.POST['school2plan4']
                school2plan5 = request.POST['school2plan5']
                school2plan6 = request.POST['school2plan6']
                canadjust2 = request.POST['canadjust2']
                planDepart = StudentPlanSchoolDepartment(student_id=studentid, school=signcollage2, depa1=school2plan1, depa2=school2plan2, depa3=school2plan3,
                                                         depa4=school2plan4, depa5=school2plan5, depa6=school2plan6, canadjust=canadjust1)
                planDepart.save()
            if signcollage3 != "":
                school3plan1 = request.POST['school3plan1']
                school3plan2 = request.POST['school3plan2']
                school3plan3 = request.POST['school3plan3']
                school3plan4 = request.POST['school3plan4']
                school3plan5 = request.POST['school3plan5']
                school3plan6 = request.POST['school3plan6']
                canadjust3 = request.POST['canadjust3']
                planDepart = StudentPlanSchoolDepartment(student_id=studentid, school=signcollage3, depa1=school3plan1, depa2=school3plan2, depa3=school3plan3,
                                                         depa4=school3plan4, depa5=school3plan5, depa6=school3plan6, canadjust=canadjust1)
                planDepart.save()
            if signcollage4 != "":
                school4plan1 = request.POST['school4plan1']
                school4plan2 = request.POST['school4plan2']
                school4plan3 = request.POST['school4plan3']
                school4plan4 = request.POST['school4plan4']
                school4plan5 = request.POST['school4plan5']
                school4plan6 = request.POST['school4plan6']
                canadjust4 = request.POST['canadjust4']
                planDepart = StudentPlanSchoolDepartment(student_id=studentid, school=signcollage4, depa1=school4plan1, depa2=school4plan2, depa3=school4plan3,
                                                         depa4=school4plan4, depa5=school4plan5, depa6=school4plan6, canadjust=canadjust1)
                planDepart.save()
            if signcollage5 != "":
                school2plan1 = request.POST['school2plan1']
                school2plan2 = request.POST['school2plan2']
                school2plan3 = request.POST['school2plan3']
                school2plan4 = request.POST['school2plan4']
                school2plan5 = request.POST['school2plan5']
                school2plan6 = request.POST['school2plan6']
                canadjust5 = request.POST['canadjust5']
                planDepart = StudentPlanSchoolDepartment(student_id=studentid, school=signcollage5, depa1=school2plan1, depa2=school2plan2, depa3=school2plan3,
                                                         depa4=school2plan4, depa5=school2plan5, depa6=school2plan6, canadjust=canadjust1)
                planDepart.save()
            if signcollage6 != "":
                school6plan1 = request.POST['school6plan1']
                school6plan2 = request.POST['school6plan2']
                school6plan3 = request.POST['school6plan3']
                school6plan4 = request.POST['school6plan4']
                school6plan5 = request.POST['school6plan5']
                school6plan6 = request.POST['school6plan6']
                canadjust6 = request.POST['canadjust6']
                planDepart = StudentPlanSchoolDepartment(student_id=studentid, school=signcollage6, depa1=school6plan1, depa2=school6plan2, depa3=school6plan3,
                                                         depa4=school6plan4, depa5=school6plan5, depa6=school6plan6, canadjust=canadjust1)
                planDepart.save()

            return render(request, 'add/userdetail.html', {
                'baseinfo': baseinfo,
                })



    elif model_type == "2":
        priority = request.POST["priority"]
        code = request.POST["code"]
        name = request.POST["name"]

        p = SchoolPlan.objects.filter(name=name)

        #if p:
            #return render(request, 'add/schooldetail.html', {
         #       'error_message': "school has already exist!",
          #      })
        #else:
        print "123"
        reputation = request.POST["reputation"]
        schooltype = request.POST["schooltype"]
        belongto = request.POST["belongto"]
        major = request.POST["major"]
        department = request.POST["department"]
        studentnum = request.POST["studentnum"]
        majordetail = request.POST["major_detail"]

        province = request.POST["province"]
        city = request.POST["city"]
        money = request.POST["money"]
        sex = request.POST["sex"]
        years = request.POST["years"]
        language = request.POST["language"]

        print priority
        print "!!!!"
        print majordetail
        print "@@@@"
        schoolplan = SchoolPlan(priority=priority, code=code, name=name, reputation=reputation, schooltype=schooltype,
                                    belongto = belongto, major = major, department = department, studentnum = studentnum,
                                    major_detail = majordetail, province = province, city = city, money = money, sex = sex,
                                    years = years, language = language)
        print "ready to save"
        schoolplan.save()
        print "save done"
        school_detail = SchoolPlan.objects.filter(name=name)
        print school_detail

        return render(request, "add/schooldetail.html", {'school_detail': school_detail, 'name': name})