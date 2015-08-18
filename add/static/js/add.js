/**
 * Created by liuyq on 2015/8/18.
 */

window.onload
$(document).ready(function(){
    	$.getJSON("/add/ajax_province",function (msg, status) {
            //alert(msg)
			var obj = msg;

			var html = '';
			html += '<option >省份</option>';
			for(var j=0;j<obj.length;j++){
				html += "<option value='"+obj[j]+"'>"+obj[j]+"</option>";
			}
			$('#signprovince1').empty();
            $('#signprovince2').empty();
            $('#signprovince3').empty();
            $('#signprovince4').empty();
            $('#signprovince5').empty();
            $('#signprovince6').empty();
			$(html).appendTo('#signprovince1');
            $(html).appendTo('#signprovince2');
            $(html).appendTo('#signprovince3');
            $(html).appendTo('#signprovince4');
            $(html).appendTo('#signprovince5');
            $(html).appendTo('#signprovince6');

	});

    $('#signprovince1').change(function (){
	var province = $('#signprovince1').val();
        $.get("/add/ajax_school", {province:province}, function(data,status){
			var html = '';
			html += '<option value="">请选择院校</option>';
			for(var j=0;j<data.length;j++){
				html += "<option value='"+data[j]+"'>"+data[j]+"</option>";
			}
			$('#signcollage1').empty();
			$(html).appendTo('#signcollage1');
        });
    });

    $('#signprovince2').change(function (){
	var province = $('#signprovince2').val();
        $.get("/add/ajax_school", {province:province}, function(data,status){
			var html = '';
			html += '<option value="" >请选择院校</option>';
			for(var j=0;j<data.length;j++){
				html += "<option value='"+data[j]+"'>"+data[j]+"</option>";
			}
			$('#signcollage2').empty();
			$(html).appendTo('#signcollage2');
        });
    });

    $('#signprovince3').change(function (){
	var province = $('#signprovince3').val();
        $.get("/add/ajax_school", {province:province}, function(data,status){
			var html = '';
			html += '<option  value="">请选择院校</option>';
			for(var j=0;j<data.length;j++){
				html += "<option value='"+data[j]+"'>"+data[j]+"</option>";
			}
			$('#signcollage3').empty();
			$(html).appendTo('#signcollage3');
        });
    });

    $('#signprovince4').change(function (){
	var province = $('#signprovince4').val();
        $.get("/add/ajax_school", {province:province}, function(data,status){
			var html = '';
			html += '<option  value="">请选择院校</option>';
			for(var j=0;j<data.length;j++){
				html += "<option value='"+data[j]+"'>"+data[j]+"</option>";
			}
			$('#signcollage4').empty();
			$(html).appendTo('#signcollage4');
        });
    });

    $('#signprovince5').change(function (){
	var province = $('#signprovince5').val();
        $.get("/add/ajax_school", {province:province}, function(data,status){
			var html = '';
			html += '<option  value="">请选择院校</option>';
			for(var j=0;j<data.length;j++){
				html += "<option value='"+data[j]+"'>"+data[j]+"</option>";
			}
			$('#signcollage5').empty();
			$(html).appendTo('#signcollage5');
        });
    });

    $('#signprovince6').change(function (){
	var province = $('#signprovince6').val();
        $.get("/add/ajax_school", {province:province}, function(data,status){
			var html = '';
			html += '<option  value="">请选择院校</option>';
			for(var j=0;j<data.length;j++){
				html += "<option value='"+data[j]+"'>"+data[j]+"</option>";
			}
			$('#signcollage6').empty();
			$(html).appendTo('#signcollage6');
        });
    });

    $('#signcollage1').change(function (){
	var school = $('#signcollage1').val();
        $.get("/add/ajax_major", {school:school}, function(data,status){
			var html = '';
			html += '<option  value="">请选择专业</option>';
			for(var j=0;j<data.length;j++){
				html += "<option value='"+data[j]+"'>"+data[j]+"</option>";
			}
			$('#school1plan1').empty();
			$(html).appendTo('#school1plan1');
            $('#school1plan2').empty();
			$(html).appendTo('#school1plan2');
            $('#school1plan3').empty();
			$(html).appendTo('#school1plan3');
            $('#school1plan4').empty();
			$(html).appendTo('#school1plan4');
            $('#school1plan5').empty();
			$(html).appendTo('#school1plan5');
            $('#school1plan6').empty();
			$(html).appendTo('#school1plan6');
        });
    });

    $('#signcollage2').change(function (){
	var school = $('#signcollage2').val();
        $.get("/add/ajax_major", {school:school}, function(data,status){
			var html = '';
			html += '<option  value="">请选择专业</option>';
			for(var j=0;j<data.length;j++){
				html += "<option value='"+data[j]+"'>"+data[j]+"</option>";
			}
			$('#school2plan1').empty();
			$(html).appendTo('#school2plan1');
            $('#school2plan2').empty();
			$(html).appendTo('#school2plan2');
            $('#school2plan3').empty();
			$(html).appendTo('#school2plan3');
            $('#school2plan4').empty();
			$(html).appendTo('#school2plan4');
            $('#school2plan5').empty();
			$(html).appendTo('#school2plan5');
            $('#school2plan6').empty();
			$(html).appendTo('#school2plan6');
        });
    });

    $('#signcollage3').change(function (){
	var school = $('#signcollage3').val();
        $.get("/add/ajax_major", {school:school}, function(data,status){
			var html = '';
			html += '<option  value="">请选择专业</option>';
			for(var j=0;j<data.length;j++){
				html += "<option value='"+data[j]+"'>"+data[j]+"</option>";
			}
			$('#school3plan1').empty();
			$(html).appendTo('#school3plan1');
            $('#school3plan2').empty();
			$(html).appendTo('#school3plan2');
            $('#school3plan3').empty();
			$(html).appendTo('#school3plan3');
            $('#school3plan4').empty();
			$(html).appendTo('#school3plan4');
            $('#school3plan5').empty();
			$(html).appendTo('#school3plan5');
            $('#school3plan6').empty();
			$(html).appendTo('#school3plan6');
        });
    });

    $('#signcollage4').change(function (){
	var school = $('#signcollage4').val();
        $.get("/add/ajax_major", {school:school}, function(data,status){
			var html = '';
			html += '<option  value="">请选择专业</option>';
			for(var j=0;j<data.length;j++){
				html += "<option value='"+data[j]+"'>"+data[j]+"</option>";
			}
			$('#school4plan1').empty();
			$(html).appendTo('#school4plan1');
            $('#school4plan2').empty();
			$(html).appendTo('#school4plan2');
            $('#school4plan3').empty();
			$(html).appendTo('#school4plan3');
            $('#school4plan4').empty();
			$(html).appendTo('#school4plan4');
            $('#school4plan5').empty();
			$(html).appendTo('#school4plan5');
            $('#school4plan6').empty();
			$(html).appendTo('#school4plan6');
        });
    });

    $('#signcollage5').change(function (){
	var school = $('#signcollage5').val();
        $.get("/add/ajax_major", {school:school}, function(data,status){
			var html = '';
			html += '<option  value="">请选择专业</option>';
			for(var j=0;j<data.length;j++){
				html += "<option value='"+data[j]+"'>"+data[j]+"</option>";
			}
			$('#school5plan1').empty();
			$(html).appendTo('#school5plan1');
            $('#school5plan2').empty();
			$(html).appendTo('#school5plan2');
            $('#school5plan3').empty();
			$(html).appendTo('#school5plan3');
            $('#school5plan4').empty();
			$(html).appendTo('#school5plan4');
            $('#school5plan5').empty();
			$(html).appendTo('#school5plan5');
            $('#school5plan6').empty();
			$(html).appendTo('#school5plan6');
        });
    });

    $('#signcollage6').change(function (){
	var school = $('#signcollage6').val();
        $.get("/add/ajax_major", {school:school}, function(data,status){
			var html = '';
			html += '<option  value="">请选择专业</option>';
			for(var j=0;j<data.length;j++){
				html += "<option value='"+data[j]+"'>"+data[j]+"</option>";
			}
			$('#school6plan1').empty();
			$(html).appendTo('#school6plan1');
            $('#school6plan2').empty();
			$(html).appendTo('#school6plan2');
            $('#school6plan3').empty();
			$(html).appendTo('#school6plan3');
            $('#school6plan4').empty();
			$(html).appendTo('#school6plan4');
            $('#school6plan5').empty();
			$(html).appendTo('#school6plan5');
            $('#school6plan6').empty();
			$(html).appendTo('#school6plan6');
        });
    });


    $('form:first').bind('submit',function(){
		//if($.trim(name.val()).length<2 || name.val().length>10){
			//showPop('姓名输入错误','姓名必须为中文，并且不能少于2或大于10');
			//focusTarget=name;
			//return false;
		//}
		var name=$('[name=name]'),//姓名
		student_id=$('[name=student_id]'),//身份证
		score_big=$('[name=score_big]'),//参加辅导班
		score_small=$('[name=score_small]'),//邮箱
		//score_add=$('[name=score_add]'),//手机
		district=$('[name=district]'),//联系地址
		school=$('[name=school]')


        if($.trim(student_id.val())=='' || ($.trim(student_id.val())!='' && !(/^(([0-9]{1,20}))$/.test(student_id.val())))) {
                      alert('考生号必须为纯数字');
		      return false;
                };

        if(!new RegExp("^[\u4e00-\u9fa5]{2,10}$").test($.trim($('[name=name]').val())))
        {
            alert('姓名输入错误','姓名必须为中文，并且不能少于2或大于10');
			return false;
        };

        if($.trim(score_big.val())=='' || ($.trim(score_big.val())!='' && (!(/^(([0-9]{1,3}))$/.test(score_big.val())))) || parseInt(score_big.val()) > 700){
                      alert('总分不符合要求');
		      return false;
                };

        if($.trim(score_small.val())=='' || ($.trim(score_small.val())!='' && (!(/^(([0-9]{1,3}))$/.test(score_small.val())))) || parseInt(score_big.val()) > 700){
                      alert('实考分不符合要求');
		      return false;
                };

		if($.trim(district.val()) == ""){
			alert('考生所在地为必填项');
			return false;
		}

        if($.trim(school.val()) == ""){
			alert('考生学校为必填项');
			return false;
		}
	});


});
