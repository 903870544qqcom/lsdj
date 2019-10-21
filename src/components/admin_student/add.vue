
<template>

<el-form :inline="true" :model="formInline" class="demo-form-inline" >
	<el-row style="text-align: right">
		<el-button type="primary" @click="retureAd">返回</el-button>
	</el-row>
	<el-row type="flex">
	<el-form-item label="姓名">
		<el-input v-model="user_name" placeholder="姓名"></el-input>
	</el-form-item>
	<el-form-item label="性别" >
			<el-radio v-model="sex" label="1">男</el-radio>
			<el-radio v-model="sex" label="2">女</el-radio>
	</el-form-item>
	<el-form-item label="籍贯" >
		<el-input v-model="native"  placeholder="籍贯"></el-input>
	</el-form-item>
	</el-row>
	<el-row type="flex">
	<el-form-item label="出生年月">
		<div class="block">
			<span class="demonstration"></span>
			<el-date-picker
					v-model="value1"
					type="date"
					placeholder="选择日期">
			</el-date-picker>
		</div>
	</el-form-item>
	<el-form-item label="民族" >
		<el-input  placeholder="民族"></el-input>
	</el-form-item>
	<el-form-item label="学历学位（注明类别）" >
		<el-input  placeholder="学历学位"></el-input>
	</el-form-item>
	</el-row>
	<el-row type="flex">
		<el-form-item label="毕业院校">
			<el-input  placeholder="××省××市××县××学校"></el-input>
		</el-form-item>
		<el-form-item label="申请入党时间">
			<div class="block">
				<span class="demonstration"></span>
				<el-date-picker
						v-model="value2"
						type="date"
						placeholder="选择日期">
				</el-date-picker>
			</div>
		</el-form-item>
	</el-row>
	<el-row type="flex">
		<el-form-item label="身份证号码">
			<el-input  placeholder="身份证号码"></el-input>
		</el-form-item>
		<el-form-item label="联系电话">
			<el-input  placeholder="联系电话"></el-input>
		</el-form-item>
	</el-row>
	<el-row type="flex">
		<el-form-item label="户籍所在地">
			<el-input  placeholder="户口本上的户籍所在地"></el-input>
		</el-form-item>
		<el-form-item label="家庭住址">
			<el-input  placeholder="与身份证一致"></el-input>
		</el-form-item>
	</el-row>
	<el-row type="flex">
		<el-form-item label="现任职务">
			<el-input  placeholder="××班××（无职位写：学生）"></el-input>
		</el-form-item>
	</el-row>
	<el-row>
		<el-form-item label="本  人  经  历（从小学起按时间顺序填写）">
		</el-form-item>
	</el-row>
	<el-row>
		<el-form-item>
			<table border cellspacing="0" cellpadding="0" style="width: 100%">
				<tr>
					<td>起始年月</td>
					<td>截至年月</td>
					<td>在何地、何部门、任何职</td>
					<td>证明人</td>
				</tr>
				<tr v-for="item in user.tableData">
					<td><el-input v-model="item.stime"></el-input></td>
					<td><el-input v-model="item.etime"></el-input></td>
					<td><el-input v-model="item.addr"></el-input></td>
					<td><el-input v-model="item.people"></el-input></td>
				</tr>
			</table>
			<el-button type="primary" icon="el-icon-plus" @click="addRow">添加</el-button>
			<el-button type="primary" icon="el-icon-delete" @click="deleteRow">删除</el-button>
		</el-form-item>
	</el-row>
	<el-row>

	</el-row>
<!--	<el-row type="flex">-->
<!--		<el-form-item label="何时何地因何原因受过何种奖励或处分">-->
<!--			<el-input-->
<!--					type="textarea"-->
<!--					:rows="3"-->
<!--					placeholder="请输入内容"-->
<!--					v-model="textarea"-->
<!--			>-->
<!--			</el-input>-->
<!--		</el-form-item>-->
<!--	</el-row>-->
	<el-row>
	<el-form-item>
		<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
		<el-button @click="resetForm('ruleForm')">重置</el-button>
	</el-form-item>
	</el-row>
</el-form>
</template>

<script>
	export default {
		data() {
			return {
				formInline: {
					user: '',
					region: ''
				},
				user :{user_name:'',
				sex: '1',
				native:'',
				value1: '',
				value2: '',
				tableData:[
						{
					stime:'',//开始时间
					etime:'',//截至时间
					addr:'',//地址
					people:'',//证明人
				   }
				]}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			retureAd(){//返回
				this.$router.push({
					path:'/stu_admin',
					query:{

					}
				})
			},
			deleteRow(index) {
				this.user.tableData.splice(index, 1);
			},
			addRow(){
				this.user.tableData.push(
						{stime:'',
						etime:'',
						addr:'',
						people:''}
				);
			}
		}
	}
</script>
<style>
	.el-form--inline .el-form-item__label{
		float: left;
	}
	.el-main[data-v-7c66a6a2]{
		line-height:0px;
	}
</style>