from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from models import StudentBaseInfo, SchoolPlan
from django.core.exceptions import ObjectDoesNotExist

# Create your views here.

def addUser(request):
    return render(request, 'add/user.html', )

def addSchool(request):
    return render(request, 'add/school.html', )

def model(request):
    model_type = request.POST['type']
    print model_type
    if model_type == "1": #add user
        studentid = request.POST['student_id']


        p = StudentBaseInfo.objects.filter(student_id=studentid)

        if p:
            return render(request, 'add/userdetail.html', {
                'error_message': "user has already exist!",
                })
        else:
            name = request.POST['name']
            sex = request.POST['sex']
            score_big = request.POST['score_big']
            score_small = request.POST['score_small']
            score_add = request.POST['score_add']
            district = request.POST['district']
            school = request.POST['school']

            baseinfo = StudentBaseInfo(student_id=studentid, name=name, sex="1", score_big=score_big, score_small=score_small,score_add=score_add,district=district,school=school)
            baseinfo.save()
            return render(request, 'add/userdetail.html', {
                'baseinfo': baseinfo,
                })




    elif model_type == "2":
        priority = request.POST["priority"]
        code = request.POST["code"]
        name = request.POST["name"]

        p = SchoolPlan.objects.filter(name=name)

        if p:
            return render(request, 'add/schooldetail.html', {
                'error_message': "school has already exist!",
                })
        else:
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
            return render(request, "add/schooldetail.html", {'schoolplan': schoolplan,
                                                             })