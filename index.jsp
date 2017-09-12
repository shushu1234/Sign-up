<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>大连大学公开招聘平台</title>
	<link rel="stylesheet"  type="text/css" href="lib/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet"  type="text/css" href="lib/normalize/normalize.css">
	<link rel="stylesheet"  type="text/css" href="lib/jquery-ui/jquery-ui.min.css">
	<link rel="stylesheet"  type="text/css" href="css/main.css">
	<script type="text/javascript" src="lib/html5shiv/html5shiv.min.js"></script>
	<script type="text/javascript" src="lib/respond/respond.min.js"></script>
</head>
<body>
	<!--[if lte IE 9]>
	<div class="alert alert-warning alert-danger ie-alert" role="alert">
		 <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		 <strong>警告!</strong>  &nbsp;请使用IE10及以上浏览器或者Chrome、FireFox等新版浏览器,否则无法上传照片
	</div>
    <![endif]-->
	<!--头部样式-->
	<header id="header">
			<h1 class="title">
				大连大学公开招聘平台
			</h1>
	</header>
	<!--/头部样式-->
	<!--主页面样式-->
	<section id="main">
			<table class="signup">
				<form role="form" id="form" enctype="multipart/form-data">
				<input type="hidden" name="action" value="insert">
				<input type="hidden" name="other" value="" class="otherData">
				<input type="hidden" name="othervalue" value="" class="othervalue">
					<tr></tr>
					<tr>
						<td>
							<div class="input-group has-feedback">
								<span class="input-group-addon">
						          	<span class="glyphicon glyphicon-user"></span>
						     	</span>
								<input type="text" class="name form-control" name="name" placeholder="请输入姓名">
								<span class="glyphicon form-control-feedback" aria-hidden="true"></span>
  								<span id="inputSuccess2Status" class="sr-only">(success)</span>
							</div>
						</td>
						<td rowspan="3" class="header-container">
							<img src="" alt="140*180大小，40K以内" class="header">
							<a href="javascript:;" class="upload-btn btn btn-primary">
								上传照片
							</a>
							<input type="file" class="upload" name="file">
						</td>
					</tr>
					<tr>
						<td>
							<span class="gender">
								<label>性别：</label>
								<label class="radio-inline">
									<input type="radio" name="sex" value="男" checked>男
								</label>
								<label class="radio-inline">
									<input type="radio" name="sex" value="女">女
								</label>
							</span>
						</td>	
					</tr>
					<tr>
						<td>
							<div class="input-group has-feedback">
								<span class="input-group-addon">
						          	<span class="glyphicon glyphicon-calendar"></span>
						     	</span>
								<input type="text" class="date form-control" name="birthday" placeholder="选择出生日期或输入:1996-06-01" id="datepicker">
								<span class="glyphicon form-control-feedback" aria-hidden="true"></span>
  								<span id="inputError2Status" class="sr-only">(error)</span>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<div class="input-group has-feedback">
								<span class="input-group-addon">
									<span class="glyphicon glyphicon-tags"></span>
								</span>
								<input type="text" class="idCard form-control" name="idcard" placeholder="请输入身份证号">
								<span class="glyphicon form-control-feedback" aria-hidden="true"></span>
  								<span id="inputError2Status" class="sr-only">(error)</span>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<select class="political form-control" name="political" autocomplete="off">
								<option value="">请选择政治面貌</option>
								<option value="中共党员">中共党员</option>
								<option value="民主党派成员">民主党派成员</option>
								<option value="无党派人士">无党派人士</option>
								<option value="共青团员">共青团员</option>
 								<option value="群众">群众</option> 
							</select>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<div class="input-group has-feedback">
								<span class="input-group-addon">
									<span class="glyphicon glyphicon-wrench"></span>
								</span>
								<input type="text" class="nowWorking form-control" name="work" placeholder="请填写现在工作单位">
								<span class="glyphicon form-control-feedback" aria-hidden="true"></span>
  								<span id="inputError2Status" class="sr-only">(error)</span>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<div class="input-group has-feedback">
								<span class="input-group-addon">
									<span class="glyphicon glyphicon-phone"></span>
								</span>
								<input type="text" class="tel form-control" name="telephone" placeholder="请填写联系电话">
								<span class="glyphicon form-control-feedback" aria-hidden="true"></span>
  								<span id="inputError2Status" class="sr-only">(error)</span>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<select class="company form-control select-item" name="punit" id="company">
								<option value="0">请选择部门</option>
							</select>
							<select class="position form-control select-item" name="ppost">
								<option value="0">请选择岗位</option>
							</select>
							<select class="other form-control select-item" name="apply" disabled="true">
								<option value="null">请选择应聘方向</option>
							</select>
						</td>
					</tr>

					<tr>
						<td colspan="2">
							<p class="help-block text-danger other-message">
								其他条件：无
							</p>
							<span class="otherflag-message">是否满足其他条件</span><input type="checkbox" value="true" name="otherflag" class="otherflag">

						</td>
					</tr>

					<tr>
						<td colspan="2">
							<!-- <div class="input-group">
								<span class="input-group-addon">
									<span class="glyphicon glyphicon-blackboard"></span>
								</span>
								<input type="text" class="level form-control" placeholder="学历要求" name="education" readonly>
							</div> -->
							<select class="level form-control second-select" name="education" autocomplete="off" id="level">
								<option value="0">请选择符合报考岗位要求的学历</option>								
								<option value="本科">本科</option>
								<option value="研究生">研究生</option>
								<option value="无">无</option>
							</select>
							<select class="degree form-control second-select" name="degree" autocomplete="off">
								<option value="0">请选择符合报考岗位要求的学位</option>
								<option value="学士">学士</option>
								<option value="硕士">硕士</option>
								<option value="博士">博士</option>						
								<option value="无">无</option>
							</select>
						</td>
					</tr>
					<!-- <tr>
						<td colspan="2">
							<div class="input-group">
								<span class="input-group-addon">
									<span class="glyphicon glyphicon-education"></span>
								</span>
								<input type="text" class="degree form-control" placeholder="学位要求" name="degree" readonly>
							</div>
						</td>
					</tr> -->
					<!-- <tr>
						<td colspan="2">
							<div class="input-group">
								<span class="input-group-addon">
									<span class="glyphicon glyphicon-phone"></span>
								</span>
								<input type="text" class="other form-control" name="pother" placeholder="其他要求" readonly>
							</div>
						</td>
					</tr> -->
					<tr>
						<td colspan="2">
							<div class="input-group has-feedback">
								<span class="input-group-addon">
									<span class="glyphicon glyphicon-pencil"></span>
								</span>
								<input type="text" class="highestSchool form-control highest" placeholder="请填写报考岗位要求学历的毕业院校" name="degschool">
								<span class="glyphicon form-control-feedback" aria-hidden="true"></span>
  								<span id="inputError2Status" class="sr-only">(error)</span>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<div class="input-group has-feedback">
								<span class="input-group-addon">
									<span class="glyphicon glyphicon-bookmark"></span>
								</span>
								<input type="text" class="highestDepartment form-control highest" name="degmajor" placeholder="请填写报考岗位要求学历毕业证书上的专业">
								<span class="glyphicon form-control-feedback" aria-hidden="true"></span>
  								<span id="inputError2Status" class="sr-only">(error)</span>
							</div>
						</td>
					</tr>					
				</form>		
				<tr>
					<td colspan="2" class="own-other">
						<span class="own-other-tip">
							<p align="left" style="color: red;">
								声明：本人郑重承诺以上填写并提交的信息真实、准确，无弄虚作假或与招考岗位要求的资格条件不符的情形，因信息不实、不符造成的一切后果由本人承担。
							</p>
							<div class="alert alert-info alert-danger" role="alert">

								<strong>重要提醒:</strong><p>附属中山医院，附属新华医院招聘岗位其他条件中要求具备执业医师资格的,其注册执业范围应与岗位要求专业一致。报名提交申请后不可修改。报名采取诚信承诺制，每名报考人员只限报考一个岗位，应如实提交有关信息，严格按照招聘岗位所需各项条件和要求报名。报考人员要保证联系方式填写准确无误，因所填报的通讯方式错误或通讯不畅所致后果，由报考人员自负。</p>
							</div>
						</span>
					</td>
				</tr>
				<tr>
					<td colspan="2">
						<input type="button" class="btn btn-primary btn-lg submit-btn"  value="提交申请">
					</td>
				</tr>
			</table>
	</section>
	<!--/主页面样式-->
	<!--底部样式-->
	<footer id="footer">
			<hr>
			<p class="copy">&copy;大连大学</p>
	</footer>
	<!--/底部样式-->
	<!--模态框-->
	<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
		<div class="modal-dialog modal-sm" role="document">
			<div class="modal-content">
				 <div class="modal-header">
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			     </div>
			      <div class="modal-body">
						<div class="alert alert-info alert-dismissible" role="alert">
							<strong>注意：</strong><p class="message">信息提交后不可修改，是否提交？</p>
						</div>
			      </div>
				  <div class="modal-footer">
					    <button type="button" class="btn btn-primary submit-comfirm">确认</button>
				  </div>
			</div>
		</div>
	</div>
	<!--/模态框-->

	<script type="text/javascript" src="lib/jquery/jquery-1.12.4.min.js"></script>
	<script type="text/javascript" src="lib/jquery-ui/jquery-ui.min.js"></script>
	<script type="text/javascript" src="lib/jquery-form/jquery.form.js"></script>
	<script type="text/javascript" src="lib/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>