/**
 * Created by liuyq on 2015/8/17.
 */

window.onload=function(){
	var sign_submit=document.getElementById('sign_submit');
	sign_submit.onmouseover=function(){
		this.style.backgroundColor='#000';
		this.style.color='#FFF';
	};
	sign_submit.onmouseout=function(){
		this.style.backgroundColor="#FFF";
		this.style.color="#666681"
	}
}
function stopp(){
    document.getElementById('form').reset();
    var type = document.all ? 'IE' : 'others'
    if(type == 'IE'){
    window.event.cancelBubble = true;
    window.event.returnValue = false;
    }
    return false;
}


$(function(){
	//表单验证
	$('<div id="popbox"><h3></h3><span></span><div class="popbg"></div><div class="popmessage"></div><input type="button" value="确定" /></div>').appendTo('body');
	$('<div class="mask"></div>').appendTo('body');
	var popbox=$('#popbox');
	var popmask=popbox.next('div');
		popmask.height($('body').outerHeight(true));
		popmask.appendTo('body');
		popbox.appendTo('body');
	function showPop(title,message){
		if($.browser.version<7){
			popbox.css({'top':document.documentElement.scrollTop+document.documentElement.clientHeight/2-80+'px','margin-top':0,'position':'absolute'});
			window.scroll(function(){
				popbox.css({'top':document.documentElement.scrollTop+document.documentElement.clientHeight/2-80+'px','margin-top':0,'position':'absolute'});
			});
		}
		popbox.children('h3').html(title);
		popbox.children('.popmessage').html(message);
		popmask.css('display','block');
		popbox.css('display','block');
	};
	var focusTarget=null;
	function hidePop(){
		popmask.css('display','none');
		popbox.css('display','none');
	}
	$('span',popbox).add($('input',popbox)).bind('click',function(){
		hidePop();
		focusTarget.focus();
	});
	var name=$('[name=name]'),//姓名
		cardcode=$('[name=cardcode]'),//身份证
		training=$('[name=training]'),//参加辅导班
		email=$('[name=email]'),//邮箱
		phone=$('[name=phone]'),//手机
		address=$('[name=address]'),//联系地址
		postcode=$('[name=postcode]'),//邮编
		status=$('[name=status]'),//身份
                examcode=$('[name=examcode]'),
		school=$('#inputschool'),//就读大学
		special=$('#inputspecial'),//所学专业
		signtype=$('[name="signtype[]"]');//计划报考的研究生类型
	$('form:first').bind('submit',function(){
		//if($.trim(name.val()).length<2 || name.val().length>10){
			//showPop('姓名输入错误','姓名必须为中文，并且不能少于2或大于10');
			//focusTarget=name;
			//return false;
		//}
                if(!new RegExp("^[\u4e00-\u9fa5]{2,10}$").test($.trim($('[name=name]').val()))){
                        showPop('姓名输入错误','姓名必须为中文，并且不能少于2或大于10');
			focusTarget=name;
			return false;
                };

		if($.trim(cardcode.val())!='' && !(/(^[1-9][0-7]\d{4}((19\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(19\d{2}(0[13578]|1[02])31)|(19\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))\d{3}(\d|X|x)?$)/.test(cardcode.val().toUpperCase()))){
			showPop('身份证信息错误','输入的身份证号长度不对，或者号码不符合规定！');
			focusTarget=cardcode;
			return false;
		};

		if($("#reside").val()==0){
			showPop('请选择目前所在地','目前所在地必填项');
			focusTarget=reside;
			return false;
		}
		if($("#native").val()==0){
			showPop('请选择户口所在地','户口所在地必填项');
			focusTarget=native;
			return false;
		}
		if(parseInt(training.val()) && training.parent().find('input:checked').size()==0 && training.parent().find('input:text').val()=='' ){
			showPop('选择您期忘留学地','您希望的留学地,至少需要选择一个，如果没有可以填写');
			focusTarget=training;
			return false;
		};
		if($.trim(email.val())==''){
			showPop('请输入邮箱','邮箱为必填项');
			focusTarget=email;
			return false;
		}else if(!(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(email.val()))){
			showPop('请检查邮箱格式','您输入的邮箱格式不正确,请检查后重新输入');
			focusTarget=email;
			return false;
		};
		if($.trim(phone.val())==''){
			showPop('请输入手机号','手机号为必填项');
			focusTarget=phone;
			return false;
		}else if($.trim(phone.val())!=''&& !(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]){1})+\d{8})$/.test(phone.val()))){
			showPop('请输入正确的手机号','手机号输入不正确,请重新输入');
			focusTarget=phone;
			return false;
		};
		if($.trim(address.val())!='' && address.val().length<5){
			showPop('联系地址不够详细','请输入详细的联系地址');
			focusTarget=address;
			return false;
		}else if($.trim(address.val())!='' && address.val().length>50){
                       showPop('联系地址错误','请输入正确的联系地址');
		       focusTarget=address;
		       return false;
                };
        if($.trim(school.val())!='' && school.val().length>15){
                      showPop('就读/毕业院校错误','请输入正确的毕业/就读院校');
		      focusTarget=school;
		      return false;
                };
        if($.trim(examcode.val())!='' && !(/^(([0-9]{10})|([0-9]{14}))$/.test(examcode.val()))){
                      showPop('考生号错误','考生号必须为10或14位的纯数字');
		      focusTarget=examcode;
		      return false;
                };
		var collage1 = $("#signcollage1").val();
		var collage2 = $("#signcollage2").val();
		var collage3 = $("#signcollage3").val();
		if($.trim(collage1) == '' && $.trim(collage2) == '' && $.trim(collage2) == ''){
			showPop('计划报考大学','请至少填写一项');
			focusTarget=$("#signcollage1");
			return false;
		};
		var signspecial1 = $('#signspecial1').val();
		var signspecial2 = $('#signspecial2').val();
		var signspecial3 = $('#signspecial3').val();
		if($.trim(signspecial1) == '' && $.trim(signspecial2) == '' && $.trim(signspecial3) == ''){
			showPop('计划报考专业','请至少填写一项');
			focusTarget=$('#signspecial1');
			return false;
		};

		/*
		if($.trim(postcode.val())!='' && !(/[0-9]{6}$/).test(postcode.val())){
			showPop('邮政编码不正确','请输入6位邮政编码');
			focusTarget=postcode;
			return false;
		};

		if(status.filter(':checked').size()==0){
			showPop('请确认您的身份','身份信息没有选择');
			focusTarget=status;
			return false;
		};

		if($.trim(school.val())==''){
			showPop('请填写就读大学','就读大学信息没有填写.');
			focusTarget=school;
			return false;
		};

		if($.trim(special.val())==''){
			showPop('请填写专业','专业信息没有填写.');
			focusTarget=special;
			return false;
		};

		if(signtype.filter(':checked').size()==0){
			showPop('计划报考的研究生类型','计划报考的研究生类型必须选择一项');
			focusTarget=signtype;
			return false;
		};
		*/
	});

/*
	$('<div style="background-color:#fff;position:fixed;width:300px;height:150px;border:2px solid #000;padding:10px;left:50%;margin-left:-160px;display:none;top:50%;margin-top:-80px;z-index:1002" id="popbox"><h3>您输入的信息不完整,请验证以下信息再重新提交.</h3><p></p></div>').appendTo('body');
	$('<div style="position:absolute;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);opacity:0.4;left:0;top:0;width:100%;z-index:1001;background-color:#000;display:none;"></div>').appendTo('body');
	var popmessage=$('#popbox');
	var popmask=popmessage.next('div');
		popmask.height($('body').outerHeight(true));
		popmask.appendTo('body');
		popmessage.appendTo('body');
	function showPop(title,message){
		if($.browser.version<7){
			popmessage.css({'top':document.documentElement.scrollTop+document.documentElement.clientHeight/2-80+'px','margin-top':0,'position':'absolute'});
			window.scroll(function(){

			})
		}
		popmessage.children('h3').html(title);
		popmessage.children('p').html(message);
		popmask.css('display','block');
		popmessage.css('display','block');
	}
	*/
	var name=$('[name=name]'),//姓名
		birth=$('[name=birth]'),//出生日期
		cardcode=$('[name=cardcode]'),//身份证
		training=$('[name=training]'),//参加辅导班
		email=$('[name=email]'),//邮箱
		phone=$('[name=phone]'),//手机
		address=$('[name=address]'),//联系地址
		postcode=$('[name=postcode]'),//邮编
		status=$('[name=status]'),//身份
		school=$('#inputschool'),//就读大学
		special=$('#inputspecial'),//所学专业
		signtype=$('[name="signtype[]"]');//所学专业
	//$('form:first').bind('submit',function(){
		//if(name.val().length<2 || name.val().length>10){showPop('姓名输入错误','姓名的字数不能少于2或大于10');name.focus();return false;}

	//});
	$('#error_msg').slideDown('slow');

	var issid = true;
	$.fn.extend({
		select_collage:function(options){
			options=$.extend({collageid:null,collage:'signcollage',url:'/ajax/school_ajax/lists_school'},options);
			return this.each(function(){
				var $this=$(this);
				var collageid=options.collageid;
				var collage=$(this).next('select[name^='+options.collage+']');
				$this.bind('change',function(){
					$.ajax({
						url:options.url,
						data: {provid:this.value},
						dataType:'json',
						type:'post',
						success:function(data){
							if(data){
								var str='<option value="">请选择院校</option>';
								$.each(data.data,function(k,v){
										str+='<option value='+v.sid+'>'+v.name+'</option>';
								});
								collage.html(str);
								if(collageid){
									collage.val(collageid);
									collageid=null;
								}
							}
						}
					})
				});
				$this.change();
			})
		}
				/*
		select_special:function(options){
			options=$.extend(
				{
					level2selectname:'special',
					level3selectname:'signspecial',
					collagename:'signcollage1',
					speciallevel2id:null,
					speciallevel3id:null,
					//url:'/ajax/special_ajax/lists_special',
					url:'/ajax/special_ajax/lists_special_new',
				},
				options);
			var $this=$(this);
			var speciallevel2id=options.speciallevel2id;
			var speciallevel3id=options.speciallevel3id;
			var level2=$this.parent().next().find('select[name^='+options.level2selectname+']');
			var level3=level2.parent().next().find('select[name^='+options.level3selectname+']');
			var school=$('select[name='+options.collagename+']');

			return this.each(function(){
				$this.bind('change',function(){
					var postdata=!!issid?({rootid:$(this).val(),schoolid:options.schoolid||school.val()}):({rootid:$(this).val()});
					$.ajax({
						url:options.url,
						data:postdata,
						dataType:'json',
						type:'post',
						success:function(data){
							if(data.data){
								var str='<option value="">请选择类别</option>';
								$.each(data.data,function(k,v){
									str+='<option value='+v.code+'>'+v.name+'</option>';
								});
								level2.html(str);
								if(speciallevel2id){
									level2.val(speciallevel2id);
									level2.change();
									speciallevel2id=null;
								}
							};
						}
					})
				});
				var special_ajax=function(rootid,collageid){

					var collageid1 = $('#signcollage1').val();
					var collageid2 = $('#signcollage2').val();
					var collageid3 = $('#signcollage3').val();
					if(parseInt(collageid1) && !parseInt(collageid2) && !parseInt(collageid3)){
						var postdata=!!issid?({rootid:rootid,schoolid:collageid1}):({rootid:rootid});
					}else if(parseInt(collageid1) && parseInt(collageid2) && !parseInt(collageid3)){
						var postdata=!!issid?({rootid:rootid,schoolid:collageid1}):({rootid:rootid});
					}
					//var postdata=!!issid?({rootid:rootid,schoolid:collageid}):({rootid:rootid});
					if(parseInt(rootid)){
						$.ajax({
							url:options.url,
							data:postdata,
							dataType:'json',
							type:'post',
							success:function(data){
									if(data.data){
										var str='<option value="">请选择专业</option>';
										$.each(data.data,function(k,v){
											str+='<option value='+v.Id+'>'+v.Name+'</option>';
										});
										level3.html(str);
										if(speciallevel3id){
											level3.val(speciallevel3id);
											speciallevel3id=null;
										}
									}
								}
							}
						);
					}else {
						level3.html("<option value=''>请选择专业</option>");
					}
				}
				$this.change();
				level2.bind('change',function(){
					if(issid){
					special_ajax($(this).val(),school.val());}else{
						special_ajax($(this).val(),school.val());
					}
				});
				school.bind('change',function(){
					if(parseInt(level2.val())){level2.change()}
				});
			})
		}
		*/
	});

	//自动提示
	//$('#inputschool').AutoComplete('/ajax/school_benke_ajax/lists_school');
	$('#inputspecial').AutoComplete('/ajax/special_benke_ajax/lists_special');

	//院校联动
	var str1 = "";
	var str2 = "0";
	var str3 = "0";
	$('select[name=signprovince1]').select_collage({collageid:str1 ? str1 :0});
	$('select[name=signprovince2]').select_collage({collageid:str2 ? str2 :0});
	$('select[name=signprovince3]').select_collage({collageid:str3 ? str3 :0});

	//专业联动
	var schoolid = ""
	var sp1 = "0";
	var sp2 = "0";
	var sp3 = "0";
	var sp4 = "0";
	var sp5 = "0";
	var sp6 = "0";
	/*
	$('select[name=speciallevel11]').select_special({
		speciallevel2id:sp1 ? sp1 : 0,//传回数据
		speciallevel3id:sp2 ? sp2 : 0, //传回数据
		schoolid:schoolid
	});
	$('select[name=speciallevel21]').select_special({
		speciallevel2id:sp3 ? sp3 : 0,//传回数据
		speciallevel3id:sp4 ? sp4 : 0,//传回数据
		collagename:'signcollage2',
		schoolid:schoolid
	});
	$('select[name=speciallevel31]').select_special({
		speciallevel2id:sp5 ? sp5 : 0,//传回数据
		speciallevel3id:sp6 ? sp6 : 0,//传回数据
		collagename:'signcollage3',
		schoolid:schoolid
		});
	*/
});
$(function (){
	var is_not = $('#is_not').val();
	if(is_not==0){
		$(".abroad input").attr("disabled","disabled");
	}
});
$("#is_not").change(function(){
	var is_not = $('#is_not').val();
	if(is_not == 1){
		$(".abroad input").attr("disabled","");
	}else{
		$(".abroad input").attr("disabled","disabled");
	}
});
//重写联动--层次--类别
$('#speciallevel11').change(function (){
	var rootid = $('#speciallevel11').val();
	$.ajax({
		type:"POST",
		async : false,
		url: '/ajax/special_ajax/showspecial',
		data:"rootid="+rootid,
		datatype:'json',
		success: function (msg) {
			var obj = eval( "(" + msg + ")" );
			types = obj;
			var html = '';
			html += '<option >请选择类别</option>';
			for(var j=0;j<obj.length;j++){
				html += "<option value='"+obj[j]['code']+"'>"+obj[j]['name']+"</option>";
			}
			$('#speciallevel12').empty();
                        $('#signspecial1').empty();
                        $('#signspecial1').append('<option>请选择专业名称</option>');
			$(html).appendTo('#speciallevel12');
		}
	});
});
$('#speciallevel21').change(function (){
	var rootid = $('#speciallevel21').val();
	var collageid1 = $('#signcollage1').val();
	$.ajax({
		type:"POST",
		async : false,
		url: '/ajax/special_ajax/showspecial',
		data:"rootid="+rootid,
		datatype:'json',
		success: function (msg) {
			var obj = eval( "(" + msg + ")" );
			types = obj;
			var html = '';
			html += '<option >请选择类别</option>';
			for(var j=0;j<obj.length;j++){
				html += "<option value='"+obj[j]['code']+"'>"+obj[j]['name']+"</option>";
			}
			$('#speciallevel22').empty();
                        $('#signspecial2').empty();
                        $('#signspecial2').append('<option>请选择专业名称</option>');
			$(html).appendTo('#speciallevel22');
		}
	});
});
$('#speciallevel31').change(function (){
	var rootid = $('#speciallevel31').val();
	$.ajax({
		type:"POST",
		async : false,
		url: '/ajax/special_ajax/showspecial',
		data:"rootid="+rootid,
		datatype:'json',
		success: function (msg) {
			var obj = eval( "(" + msg + ")" );
			types = obj;
			var html = '';
			html += '<option >请选择类别</option>';
			for(var j=0;j<obj.length;j++){
				html += "<option value='"+obj[j]['code']+"'>"+obj[j]['name']+"</option>";
			}
			$('#speciallevel32').empty();
                        $('#signspecial3').empty();
                        $('#signspecial3').append('<option>请选择专业名称</option>');
			$(html).appendTo('#speciallevel32');
		}
	});
});
//类别/学校--专业名字
$('#speciallevel12').change(function (){
	var level = $('#speciallevel11').val();

	var rootid = $('#speciallevel12').val();
	var collageid1 = $('#signcollage1').val();
	var data = '';
	data = 'collageid='+collageid1+'&rootid='+rootid+'&level='+level;
	$.ajax({
		type:"POST",
		async : false,
		url: '/ajax/special_ajax/lists_special_new_2',
		data:data,
		datatype:'json',
		success: function (msg) {
			var obj = eval( "(" + msg + ")" );
			var html = '';
			html += '<option value="">请选择专业</option>';
			for(var j=0;j<obj.length;j++){
				html += "<option value='"+obj[j]['Id']+"'>"+obj[j]['Name']+"</option>";
			}
			$('#signspecial1').empty();
			$(html).appendTo('#signspecial1');
		}
	});
});

$('#speciallevel22').change(function (){
	var level = $('#speciallevel21').val();

	var rootid = $('#speciallevel22').val();
	var collageid1 = $('#signcollage1').val();
	var collageid2 = $('#signcollage2').val();
	if(collageid1 && !collageid2){
		var collageid = collageid1;
	}else if(collageid1 && collageid2){
		var collageid = collageid2;
	}else if(!collageid1 && collageid2){
		var collageid = collageid2;
	}

	var data = '';
	data = 'collageid='+collageid+'&rootid='+rootid+'&level='+level;
	$.ajax({
		type:"POST",
		async : false,
		url: '/ajax/special_ajax/lists_special_new_2',
		data:data,
		datatype:'json',
		success: function (msg) {
			var obj = eval( "(" + msg + ")" );
			var html = '';
			html += '<option value="" >请选择专业</option>';
			for(var j=0;j<obj.length;j++){
				html += "<option value='"+obj[j]['Id']+"'>"+obj[j]['Name']+"</option>";
			}
			$('#signspecial2').empty();
			$(html).appendTo('#signspecial2');
		}
	});
});

$('#speciallevel32').change(function (){
	var level = $('#speciallevel31').val();

	var rootid = $('#speciallevel32').val();
	var collageid1 = $('#signcollage1').val();
	var collageid2 = $('#signcollage2').val();
	var collageid3 = $('#signcollage3').val();
	var data = '';

	if(parseInt(collageid1) && parseInt(collageid2) && !parseInt(collageid3)){
		data = 'collageid1='+collageid1+'&collageid2='+collageid2+'&rootid='+rootid+'&level='+level;
	}else if(parseInt(collageid1) && parseInt(collageid2) && parseInt(collageid3)){
		data = 'collageid='+collageid3+'&rootid='+rootid+'&level='+level;
	}else if(parseInt(collageid1) && !parseInt(collageid2) && !parseInt(collageid3)){
		data = 'collageid='+collageid1+'&rootid='+rootid+'&level='+level;
	}else if(!parseInt(collageid1) && !parseInt(collageid2) && parseInt(collageid3)){
		data = 'collageid='+collageid3+'&rootid='+rootid+'&level='+level;
	}

	$.ajax({
		type:"POST",
		async : false,
		url: '/ajax/special_ajax/lists_special_new_2',
		data:data,
		datatype:'json',
		success: function (msg) {
			var obj = eval( "(" + msg + ")" );
			var html = '';
			html += '<option value="">请选择专业</option>';
			for(var j=0;j<obj.length;j++){
				html += "<option value='"+obj[j]['Id']+"'>"+obj[j]['Name']+"</option>";
			}
			$('#signspecial3').empty();
			$(html).appendTo('#signspecial3');
		}
	});
});
$('#signcollage1').change(function (){
	$('#speciallevel12').empty();
	$('#signspecial1').empty();
	var html = '<option >请选择类别</option>';
	var html2 = "<option value=''>请选择专业</option>";
	$(html).appendTo('#speciallevel12');
	$(html2).appendTo('#signspecial1');
})
$('#signcollage2').change(function (){
	$('#speciallevel22').empty();
	$('#signspecial12').empty();
	var html = '<option >请选择类别</option>';
	var html2 = "<option value=''>请选择专业</option>";
	$(html).appendTo('#speciallevel22');
	$(html2).appendTo('#signspecial12');
})
$('#signcollage3').change(function (){
	$('#speciallevel32').empty();
	$('#signspecial13').empty();
	var html = '<option >请选择类别</option>';
	var html2 = "<option value=''>请选择专业</option>";
	$(html).appendTo('#speciallevel32');
	$(html2).appendTo('#signspecial13');
})

jQuery(function($){
$('#floatToTop').eol_scrollAd();
})
$(document).ready(function(){
	$(".weixin").hide();
	$(".a1_img").mouseover(function(){$(".weixin").show();});
	$(".a1_img").mouseout(function(){$(".weixin").hide();});
	$(window).scroll(function(){
        if(arrivedAtBottom()) {
        	//document.getElementById('bottom_ad_front').style.bottom="174px";
           $('#bottom_ad_front').css('bottom','174px');
        }else{
        	//document.getElementById('bottom_ad_front').style.bottom="0px";
           $('#bottom_ad_front').css('bottom','0px');
        }
	 });
    var arrivedAtBottom = function () {
        return $(document).scrollTop() + $(window).height() == $(document).height();
    }
    })