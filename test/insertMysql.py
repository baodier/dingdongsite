# coding: UTF-8
import math
import random

school = '北京大学,中国人民大学,清华大学,北京交通大学,北京工业大学,北京航空航天大学,北京理工大学,北京科技大学,北方工业大学,北京化工大学,北京工商大学,北京服装学院,北京邮电大学,北京印刷学院,北京建筑大学'.split(",")
major = '数学类,城乡规划,地球物理学类,电子信息类,法学,工科试验班类,工商管理类,化学类,经济学类,理科试验班类,生物科学,物理学类,心理学,新闻传播学类,计算机科学与技术'.split(",")

title = 'id	priority	code	name	reputation	schooltype	belongto	major	department	studentnum	major_detail	province	city	money	sex	years	language	fill_date	edit_date'
print school
print major

id = 26
f = open('E:\project\dingdong\src\main\python\make.txt', 'w')
f.write(title+"\n")
for sc in school:
    for ma in major:
        rnd = random.random()
        print rnd
        if rnd < 0.9:
            num = int(random.random() * 4.0)+1
            line = str(id)+'	本一A	10001	'+sc+'	100	综合	教育部	'+ma+'	'+ma+'	'+str(num)+'	123456	北京	海淀	5000	0	4	0	2015/8/14 17:18:56	2015/8/14 17:18:56'
            f.write(line+"\n")
            id += 1

f.close()