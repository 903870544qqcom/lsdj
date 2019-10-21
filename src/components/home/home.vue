<template>
        <el-container style="height: 1000px; border: 1px solid #eee">
            <el-header height="150px">Header</el-header>
            <el-container>
                <el-aside width="250px">
                    <el-row class="tac">
                        <el-col :span="24">
                            <el-menu
                                    default-active="2"
                                    class="el-menu-vertical-demo">
                                <el-submenu index="1">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>管理员</span>
                                    </template>
                                    <el-menu-item index="1-1">
                                        <router-link to="/dept">Go to Foo</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="1-2">
                                        <router-link to="/role">Go to Bar</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="1-3">
										<router-link to="/stu_admin">
                                            <a>学生管理员</a>
                                        </router-link>
									</el-menu-item>
									<el-menu-item index="1-4">教师管理员</el-menu-item>
                                </el-submenu>

                                <el-submenu index="2">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>学生</span>
                                    </template>
                                    <el-menu-item index="2-1">积极分子</el-menu-item>
                                    <el-menu-item index="2-2">发展对象</el-menu-item>
                                    <el-menu-item index="2-3">预备党员</el-menu-item>
									<el-menu-item index="2-4">正式党员</el-menu-item>
                                </el-submenu>
								
								<el-submenu index="3">
								    <template slot="title">
								        <i class="el-icon-location"></i>
								        <span>教师</span>
								    </template>
								    <el-menu-item index="3-1">积极分子</el-menu-item>
								    <el-menu-item index="3-2">发展对象</el-menu-item>
								    <el-menu-item index="3-3">预备党员</el-menu-item>
									<el-menu-item index="3-4">正式党员</el-menu-item>
								</el-submenu>
								
								<el-submenu index="4">
								    <template slot="title">
								        <i class="el-icon-location"></i>
								        <span>访客</span>
								    </template>
								    <el-menu-item index="2-1">选项1</el-menu-item>
								    <el-menu-item index="2-2">选项2</el-menu-item>
								    <el-menu-item index="2-3">选项3</el-menu-item>
								</el-submenu>
								
								<el-submenu index="5">
								    <template slot="title">
								        <i class="el-icon-location"></i>
								        <span>访客</span>
								    </template>
								    <el-menu-item index="2-1">选项1</el-menu-item>
								    <el-menu-item index="2-2">选项2</el-menu-item>
								    <el-menu-item index="2-3">选项3</el-menu-item>
								</el-submenu>
								
                            </el-menu>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view>

                        </router-view>
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </template>
<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    a {
        text-decoraction: none;
    }

    .router-link-active {
        text-decoration: none;
    }
</style>
