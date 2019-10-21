<template>
	
	<div>
		<div style="float:right;">
			<el-button type="primary">查看</el-button>
			<el-button @click="add" type="primary">增加</el-button>
			<el-button type="primary">修改</el-button>
			<el-button type="danger">删除</el-button>
		</div>
		<el-table :data="tableData" style="width: 100%" border>
			<el-table-column
			width="50"
			prop="user_id"
			label=""
			>
				<el-checkbox></el-checkbox>
			</el-table-column>
			<el-table-column
			 prop="user_name"
			 label="用户名"
			 ></el-table-column>
			 <el-table-column
			 prop="name"
			 label="姓名"
			></el-table-column>
			<el-table-column
			 prop="role"
			 label="职称"
			 ></el-table-column>
			<el-table-column
			 prop="xi"
			 label="所在系"
			 ></el-table-column>
			 <el-table-column
			 prop="xi_class"
			 label="班级"
			 ></el-table-column>
			<el-table-column
			 prop="nowtype"
			 label="现阶段"
			 ></el-table-column>
		</el-table>
		
		<el-button-group style="float: right;margin-top: 30px;">
		  <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
		  <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
		</el-button-group>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				tableData:[
					{
						user_name:'1001',
						name:'小明',
						role:'学生',
						xi:'电气与机器计算机工程系',
						xi_class:'软件172',
						nowtype:'积极分子'
					},
					{
						user_name:'1002',
						name:'小明',
						role:'学生',
						xi:'电气与机器计算机工程系',
						xi_class:'软件172',
						nowtype:'积极分子'
					},
					{
						user_name:'1003',
						name:'小明',
						role:'学生',
						xi:'电气与机器计算机工程系',
						xi_class:'软件172',
						nowtype:'积极分子'
					},
					{
						user_name:'1004',
						name:'小明',
						role:'学生',
						xi:'电气与机器计算机工程系',
						xi_class:'软件172',
						nowtype:'积极分子'
					},
				],
			}
		},
		methods: {
			name() {
				
			},
			add(){
				this.$router.push({  //核心语句
					path:'/add',   //跳转的路径
					query:{           //路由传参时push和query搭配使用 ，作用时传递参数

					}
				})
			}
		},
	}
</script>

<style>
</style>
