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
			$(html).appendTo('#signprovince1');

	});

    $('#signprovince1').change(function (){
	var province = $('#signprovince1').val();
        $.get("/add/ajax_school", {province:province}, function(data,status){
			var html = '';
			html += '<option >请选择院校</option>';
			for(var j=0;j<data.length;j++){
				html += "<option value='"+data[j]+"'>"+data[j]+"</option>";
			}
			$('#signcollage1').empty();
			$(html).appendTo('#signcollage1');
        });
    });

    $('#signcollage1').change(function (){
	var school = $('#signcollage1').val();
        $.get("/add/ajax_major", {school:school}, function(data,status){
			var html = '';
			html += '<option >请选择专业</option>';
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

});
