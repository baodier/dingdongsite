from django.shortcuts import render
import home
from add.models import StudentBaseInfo, SchoolPlan
# Create your views here.
def index(request):
    return render(request, 'home/index.html', )

def detailSchool(request):
    try:
        schoolname = request.POST['schoolname']
        print schoolname
        school_detail = SchoolPlan.objects.filter(name=schoolname)
        if len(school_detail) == 0:
            return render(request, 'home/schooldetail.html', {'error_message': schoolname+' doesn\'t exists'})
        print school_detail
        return render(request, 'home/schooldetail.html', {'detail': schoolname, 'school_detail': school_detail})
    except :
        return render(request, 'home/schooldetail.html', {'detail': ''})




def detailStudent(request):
    return render(request, "home/studentdetail.html",)