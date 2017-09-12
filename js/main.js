/*
*Author:Inory;
*Date:2017-3-28;
*last modefied by:Inory;
*last modefied time:2017-3-29;
*/

$(document).ready(function($) {
	var flag=true;
	var canSubmit=false;
	var isDouble=false;
	initAllControl();
	initDatePicker();
	initSelect();
	upload();
	$('.header').attr('src','');

	$.ajax({
		url:'/signup/servlet/EmployServlet',
		data:{
			action:'qunit'
		},
		type:'POST',
		success:function(data){
			data=JSON.parse(data);
			for(var i = 0, length1 = data.length; i < length1; i++){
				var option="<option value=\""+data[i]+"\">"+data[i]+"</option>";
				$('.company').append(option);
			}
		},
		error:function(){
			
		}
	});
	

	$('.company').on('change',function (ev) {
		/*$('.position').html('<option value="0">请选择岗位</option>');*/
		$('.other-message').html('其他条件：无');
		for(var i = 1, length1 = $('.position option').length; i < length1; i++){
			$('.position option').eq(1).remove();
		}
		for(var i = 1, length1 = $('.other option').length; i < length1; i++){
			$('.other option').eq(1).remove();
		}
		if ($('.company option:selected').val()!=0) {
			$.ajax({
				url:'/signup/servlet/EmployServlet',
				type:'POST',
				data:{
					action:'qpost',
					querypost:$('.company option:selected').val()
				},
				success:function (data) {
					data=JSON.parse(data);
					if (data) {
						for(var i = 0, length1 = data.length; i < length1; i++){
							var option="<option value=\""+data[i]+"\">"+data[i]+"</option>";
							$('.position').append(option);
						}
					}
				},
				error:function (error) {
					
				}
			});
		}
	});
	
	$('.position').on('change',function(){
		$('.other-message').html('其他条件：无');
		for(var i = 1, length1 = $('.other option').length; i < length1; i++){
			$('.other option').eq(1).remove();
		}
		if ($('.company option:selected').val()!=0&&$('.positon option:selected').val()!=0) {
			$.ajax({
				url:'/signup/servlet/EmployServlet',
				type:'POST',
				data:{
					action:'qapply',
					queryunit:$('.company option:selected').val(),
					querypost:$('.position option:selected').val()
				},
				success:function (data) {
					data=JSON.parse(data);
					if (data[0]) {
						$('.other').attr('disabled', false);
						flag=false;
						for(var i = 0, length1 = data.length; i < length1; i++){
							var option="<option value=\""+data[i]+"\">"+data[i]+"</option>";
							$('.other').append(option);
						}	
					}
					else
					{
						$('.other').attr('disabled', true);
						flag=true;
						$.ajax({
							url:'/signup/servlet/EmployServlet',
							type:'POST',
							data:{
								action:'qoup',
								queryunit:$('.company option:selected').val(),
								querypost:$('.position option:selected').val()
							},
							success:function (data) {
								data=JSON.parse(data);
								if (data!='') {
									$('.other-message').html('其他条件：'+data);
									if($('.other-message').html()!='其他条件：无')
									{
										$('.otherflag').css('display', 'inline-block');
										$('.otherflag-message').html('是否满足其他条件');
									}
									if($('.other-message').html()=='其他条件：无')
									{
										$('.otherflag').css('display', 'none');
										$('.otherflag-message').html('');
									}
								}
								else
								{
									$('.other-message').html('其他条件：无');
									if($('.other-message').html()=='其他条件：无')
									{
										$('.otherflag').css('display', 'none');
										$('.otherflag-message').html('');
									}
									if($('.other-message').html()!='其他条件：无')
									{
										$('.otherflag').css('display', 'inline-block');
										$('.otherflag-message').html('是否满足其他条件');
									}
									
								}
							},
							error:function (error) {
								
							}
						});	
					}
				},
				error:function (error) {
					
				}
			});
		}
		
	});


	$('.other').on('change',function(){
		$('.other-message').html('其他条件：无');
		if (($('.other').val()=='null')&&(flag==true)) {
			$.ajax({
			url:'/signup/servlet/EmployServlet',
			type:'POST',
			data:{
				action:'qoup',
				queryunit:$('.company option:selected').val(),
				querypost:$('.position option:selected').val()
			},
			success:function (data) {
				$('.other-message').html('其他条件：无');
				if($('.other-message').html()=='其他条件：无')
				{
					$('.otherflag').css('display', 'none');
					$('.otherflag-message').html('');
				}
				if($('.other-message').html()!='其他条件：无')
				{
					$('.otherflag').css('display', 'inline-block');
					$('.otherflag-message').html('是否满足其他条件');
				}
			},
			error:function (error) {
				
			}
		});	
	}
	else
	{
		$.ajax({
			url:'/signup/servlet/EmployServlet',
			type:'POST',
			data:{
				action:'qoupa',
				queryunit:$('.company option:selected').val(),
				querypost:$('.position option:selected').val(),
				queryapply:$('.other option:selected').val()
			},
			success:function (data) {
				data=JSON.parse(data);
				if (data!='') {
					$('.other-message').html('其他条件：'+data);
					if($('.other-message').html()!='其他条件：无')
					{
						$('.otherflag').css('display', 'inline-block');
						$('.otherflag-message').html('是否满足其他条件');
					}
					if($('.other-message').html()=='其他条件：无')
					{
						$('.otherflag').css('display', 'none');
						$('.otherflag-message').html('');
					}
				}
				else
				{
					$('.other-message').html('其他条件：无');
					if($('.other-message').html()!='其他条件：无')
					{
						$('.otherflag').css('display', 'inline-block');
						$('.otherflag-message').html('是否满足其他条件');
					}
					if($('.other-message').html()=='其他条件：无')
					{
						$('.otherflag').css('display', 'none');
						$('.otherflag-message').html('');
					}
				}

			},
			error:function (error) {
				
			}
		});
	}
});


	$('.idCard').on('mouseout',function(){
		$.ajax({
			url:'/signup/servlet/EmployServlet',
			type:'POST',
			data:{
				action:'qidcard',
				idcard:$('.idCard').val()
			},
			success:function(data){
				if (data!=0) {
					isDouble=true;
				}else
				{
					isDouble=false;
				}
			},
			error:function (error) {
			}
		});
	});


	$('.upload-btn').on('click', function(ev) {
		$('.upload').click();
	});

	$('.submit-btn').on('click', function(ev) {
		canSubmit=false;
		if (validateIdCard()==true&&validatePhone()==true&&($('.header').attr('src')!='')&&validateOther()==true&&compareCardAndDate()==true&&isDouble==false&&validateCheckBox()) {
			
			$('.modal').modal('toggle');
			$('.modal-dialog').css('marginTop', '200px');
			$('.message').html('信息提交后不可修改，是否提交？');
			canSubmit=true;
		}
		else
		{	

			if ($('.name').val()=='') {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('请填写姓名！');

				$('.name').parent().removeClass('has-success');
				$('.name').next().removeClass('glyphicon-ok');
				$('.name').parent().removeClass('has-error');
				$('.name').next().removeClass('glyphicon-remove');

				if ($('.name').val()=='') {
					$('.name').parent().addClass('has-error');
					$('.name').next().addClass('glyphicon-remove');
				}
				else{
					$('.name').parent().addClass('has-success');
					$('.name').next().addClass('glyphicon-ok');
				}

				return;
			}

			if ($('.date').val()=='') {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('请填写出生日期！');

				$('.date').parent().removeClass('has-success');
				$('.date').next().removeClass('glyphicon-ok');
				$('.date').parent().removeClass('has-error');
				$('.date').next().removeClass('glyphicon-remove');

				if ($('.date').val()=='') {
					$('.date').parent().addClass('has-error');
					$('.date').next().addClass('glyphicon-remove');
				}
				else{
					$('.date').parent().addClass('has-success');
					$('.date').next().addClass('glyphicon-ok');
				}

				return;
			}

			if ($('.idCard').val()=='') {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('请填写身份证号！');

				$('.idCard').parent().removeClass('has-success');
				$('.idCard').next().removeClass('glyphicon-ok');
				$('.idCard').parent().removeClass('has-error');
				$('.idCard').next().removeClass('glyphicon-remove');

				if ($('.idCard').val()=='') {
					$('.idCard').parent().addClass('has-error');
					$('.idCard').next().addClass('glyphicon-remove');
				}
				else{
					$('.idCard').parent().addClass('has-success');
					$('.idCard').next().addClass('glyphicon-ok');
				}

				return;
			}

			if (validateIdCard()==false) {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('身份证号格式不正确！');

				$('.idCard').parent().removeClass('has-success');
				$('.idCard').next().removeClass('glyphicon-ok');
				$('.idCard').parent().removeClass('has-error');
				$('.idCard').next().removeClass('glyphicon-remove');
				$('.idCard').parent().addClass('has-error');
				$('.idCard').next().addClass('glyphicon-remove');
				return;
			}

			if ($('.nowWorking').val()=='') {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('请填写现在工作单位！');

				$('.nowWorking').parent().removeClass('has-success');
				$('.nowWorking').next().removeClass('glyphicon-ok');
				$('.nowWorking').parent().removeClass('has-error');
				$('.nowWorking').next().removeClass('glyphicon-remove');

				if ($('.nowWorking').val()=='') {
					$('.nowWorking').parent().addClass('has-error');
					$('.nowWorking').next().addClass('glyphicon-remove');
				}
				else{
					$('.nowWorking').parent().addClass('has-success');
					$('.nowWorking').next().addClass('glyphicon-ok');
				}

				return;
			}

			if ($('.tel').val()=='') {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('请填写手机号码！');

				$('.tel').parent().removeClass('has-success');
				$('.tel').next().removeClass('glyphicon-ok');
				$('.tel').parent().removeClass('has-error');
				$('.tel').next().removeClass('glyphicon-remove');

				if ($('.tel').val()=='') {
					$('.tel').parent().addClass('has-error');
					$('.tel').next().addClass('glyphicon-remove');
				}
				else{
					$('.tel').parent().addClass('has-success');
					$('.tel').next().addClass('glyphicon-ok');
				}

				return;
			}

			if (validatePhone()==false) {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('手机号码格式不正确！');

				$('.tel').parent().removeClass('has-success');
				$('.tel').next().removeClass('glyphicon-ok');
				$('.tel').parent().removeClass('has-error');
				$('.tel').next().removeClass('glyphicon-remove');
				$('.tel').parent().addClass('has-error');
				$('.tel').next().addClass('glyphicon-remove');

				return;
			}

			if ($('.header').attr('src')=='') {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('照片未上传！');
				return;
			}

			if ($('.political').val()==0) {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('请选择您的政治面貌！');
				return;
			}

			if ($('.company').val()==0) {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('请选择部门！');
				return;
			}

			if ($('.position').val()==0) {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('请选择岗位！');	
				return;
			}

			if (($('.other').val()=='null')&&(flag==false)) {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('请选择应聘方向！');
				return;
			}

			if ($('.level').val()==0) {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('请选择学历！');	
				return;
			}

			if ($('.degree').val()==0) {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('请选择学位！');	
				return;
			}

			if ($('.highestSchool').val()=='') {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('请填写报考岗位要求学历的毕业院校！');

				$('.highestSchool').parent().removeClass('has-success');
				$('.highestSchool').next().removeClass('glyphicon-ok');
				$('.highestSchool').parent().removeClass('has-error');
				$('.highestSchool').next().removeClass('glyphicon-remove');

				if ($('.highestSchool').val()=='') {
					$('.highestSchool').parent().addClass('has-error');
					$('.highestSchool').next().addClass('glyphicon-remove');
				}
				else{
					$('.highestSchool').parent().addClass('has-success');
					$('.highestSchool').next().addClass('glyphicon-ok');
				}

				return;
			}

			if ($('.highestDepartment').val()=='') {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('请填写报考岗位要求学历毕业证书上的专业！');

				$('.highestDepartment').parent().removeClass('has-success');
				$('.highestDepartment').next().removeClass('glyphicon-ok');
				$('.highestDepartment').parent().removeClass('has-error');
				$('.highestDepartment').next().removeClass('glyphicon-remove');

				if ($('.highestDepartment').val()=='') {
					$('.highestDepartment').parent().addClass('has-error');
					$('.highestDepartment').next().addClass('glyphicon-remove');
				}
				else{
					$('.highestDepartment').parent().addClass('has-success');
					$('.highestDepartment').next().addClass('glyphicon-ok');
				}

				return;
			}

			if (compareCardAndDate()==false) {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('出生日期与身份证上出生日期不一致！');

				$('.idCard').parent().removeClass('has-success');
				$('.idCard').next().removeClass('glyphicon-ok');
				$('.idCard').parent().removeClass('has-error');
				$('.idCard').next().removeClass('glyphicon-remove');
				$('.idCard').parent().addClass('has-error');
				$('.idCard').next().addClass('glyphicon-remove');

				$('.date').parent().removeClass('has-success');
				$('.date').next().removeClass('glyphicon-ok');
				$('.date').parent().removeClass('has-error');
				$('.date').next().removeClass('glyphicon-remove');
				$('.date').parent().addClass('has-error');
				$('.date').next().addClass('glyphicon-remove');
				
				return;

			}
			if (isDouble==true) {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('该身份证号已被使用！');	

				$('.idCard').parent().removeClass('has-success');
				$('.idCard').next().removeClass('glyphicon-ok');
				$('.idCard').parent().removeClass('has-error');
				$('.idCard').next().removeClass('glyphicon-remove');
				$('.idCard').parent().addClass('has-error');
				$('.idCard').next().addClass('glyphicon-remove');
				return;
			}
			if ($('.otherflag').css('display')!='none'&&$('.otherflag').prop('checked')!=true) {
				$('.modal').modal('toggle');
				$('.modal-dialog').css('marginTop', '200px');
				$('.message').html('您必须满足其他条件的要求!');
				return;	
			}



		}

	});

	$('.submit-comfirm').on('click',function(){
		$('.otherData').val($('.other-message').html());
		var success=false;
		if (canSubmit) {
			if($('.other').attr('disabled')=='true'||$('.other').attr('disabled')=='disabled')
			{
				$('.other').attr('disabled',false);
				$('.other option').eq(0).attr('selected', true);
			}
			if($('.otherflag').prop('checked')){
				$('.othervalue').val('true');
			}
			else
			{
				$('.othervalue').val('false');
			}
			$('#form').ajaxSubmit({
				url:'/signup/servlet/EmployServlet',
				type:'POST',
				success:function (data) {
					$('.modal').modal('show');
					if (data=='照片上传成功') {
						
						$('.modal').modal('show');
						$('.modal-dialog').css('marginTop', '200px');
						$('.message').html('提交成功!');
						$('.submit-comfirm').css('display','none');
						success=true;
						$('.other').attr('disabled',true);
						
						var timer=setInterval(function(){
							if(success)
							{
								$('.modal').modal('hide');
								success=false;
								clearInterval(timer);
							}
						},2000);
						
						$('.modal').on('hidden.bs.modal', function () {
							setTimeout(function(){
								location.href="m_notice.html";
							},1000);
						})

					}
					else
					{
						$('.modal').modal('toggle');
						$('.modal-dialog').css('marginTop', '200px');
						$('.message').html('提交失败!');	
						success=false;
					}
				}
			});
		}
		$('.modal').modal('hide');
		
	});

	$('input[type=text]').on('focus blur change',function(){
		$(this).parent().removeClass('has-success');
		$(this).next().removeClass('glyphicon-ok');
		$(this).parent().removeClass('has-error');
		$(this).next().removeClass('glyphicon-remove');

		if ($(this).val()=='') {
			$(this).parent().addClass('has-error');
			$(this).next().addClass('glyphicon-remove');
		}
		else{
			$(this).parent().addClass('has-success');
			$(this).next().addClass('glyphicon-ok');
		}
	});



});

/*初始化表单控件*/
function initAllControl(){
	$('input[type=text]').val('');
	$('.header').attr('alt','140*180大小，40K以内');
	$('.other-message').html('其他条件：无');
	$('.otherflag').prop('checked',false);
}

/*初始化select控件*/
function initSelect() {
	/*$('.political').html('<option value="">请选择政治面貌</option><option value="中共党员">中共党员</option><option value="民主党派成员">民主党派成员</option><option value="无党派人士">无党派人士</option><option value="共青团员">共青团员</option><option value="群众">群众</option>');
	$('.company').html('<option value="0">请选择招聘单位</option>');
	$('.position').html('<option value="0">请选择岗位</option>');*/
	$('.political option:eq(0)').prop('selected', true);
	$('.level option:eq(0)').prop('selected', true);
	$('.degree option:eq(0)').prop('selected', true);
	$('.other').attr('disabled', true);
	flag=true;
	for(var i = 1, length1 = $('.company option').length; i < length1; i++){
		$('.company option').eq(1).remove();
	}
	for(var i = 1, length1 = $('.position option').length; i < length1; i++){
		$('.position option').eq(1).remove();
	}
	for(var i = 1, length1 = $('.other option').length; i < length1; i++){
		$('.other option').eq(1).remove();
	}
}


/*初始化日期控件*/
function initDatePicker(){
	$('#datepicker').datepicker({
	  dateFormat: "yy-mm-dd"
	});
}

/*文件上传显示图片*/
function upload(){
	$('.upload').on('change', function(ev) {
		var reg=/image+/g;
		var reader=new FileReader();
		var img=new Image();
		reader.onload=function (ev) {
				img.src=ev.target.result;		
				if(reg.test(imageFile.type.toLowerCase())&&(imageFile.size<40960))
				{
					var imgWidth;
					var imgHeight;
					img.onload=function(){
						imgWidth=img.width;
						imgHeight=img.height;
						$('.header').attr('src', ev.target.result);
						/*console.log(imageFile+' '+img.width+' '+img.height+' '+img.src);*/
						if (imgWidth>=130&&imgWidth<=150&&imgHeight>=170&&imgHeight<=190) {	
							$('.header').attr('src', ev.target.result);
						}
						else{
							$('.header').attr('src', '');
							$('.header').attr('alt', '照片像素不符合要求');
							
						}
					}
				}
				else{
					if(imageFile.size>40960)
					{
						$('.header').attr('src', '');
						$('.header').attr('alt', '文件大小偏大');
					}
					else{
						$('.header').attr('src', '');
						$('.header').attr('alt', '照片格式不对');
					}
				}
			}

		var imageFile = this.files[0];
        reader.readAsDataURL(imageFile);
	});
}

/*取消图片默认行为*/
function preventImgDefault(){
	$('img').on('mousedown',function (ev) {
		ev.preventDefault();
	});
}
/*验证身份证号*/
function validateIdCard(){
	var reg=/^\d{17}\w{1}$/;
	if (reg.test($('.idCard').val())) {
		return true;
	}
	else
	{
		return false;
	}
}

/*验证手机号*/
function validatePhone(){
	var reg=/^\d{11}$/;
	if (reg.test($('.tel').val())) {
		return true;
	}
	else
	{
		return false;
	}
}

/*验证字段是否填写完整*/
function validateOther(){
	if (($('.name').val()!='')&&($('.date').val()!='')&&($('.political').val()!=0)&&($('.nowWorking').val()!='')&&($('.company').val()!=0)&&($('.position').val()!=0)&&($('.highestSchool').val()!='')&&($('.highestDepartment').val()!='')&&($('.level').val()!=0)&&($('.degree').val()!=0)) {
		if (($('.other').val()!='null')&&($('.other').attr('disabled')==undefined)) {
			return true;
		}
		if ($('.other').attr('disabled')) {
			return true;
		}
		return false;
	}
	else
	{
		return false;
	}
}

/*比较身份证与出生日期的一致性*/
function compareCardAndDate(){
	var idcard=$('.idCard').val();
	var date=$('.date').val();

	var dateArr=date.split('-');

	var year=idcard.substring(6,10);
	var month=idcard.substring(10,12);
	var day=idcard.substring(12,14);

	if (year==dateArr[0]&&month==dateArr[1]&&day==dateArr[2]) {
		return true;
	}
	else
	{
		return false;
	}
}

/*验证checkbox是否满足要求*/
function validateCheckBox(){
	if ($('.otherflag').css('display')!='none'&&$('.otherflag').prop('checked')==true) {
		return true;
	}
	if ($('.otherflag').css('display')=='none') {
		return true;
	}
	return false;
}