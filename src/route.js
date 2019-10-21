import VueRouter from 'vue-router';
import home from './components/home/home'
import dept_list from './components/dept/dept_list'
import dept_add from './components/dept/dept_add'
import role_list from './components/role/role_list'
import stu_admin from './components/admin_student/admin_student'
import add from './components/admin_student/add'

const routes = [
    {
        path: '/', component: home,
        hidden: true,
        children:[
            {
                path:'/dept',component: dept_list, hidden: false
            },
            {
                path:'/dept/add',component: dept_add, hidden: true
            },
            {
                path:'/role',component: role_list
            },
            {
                path:'/stu_admin',component: stu_admin ,hidden: true,
            },
            {
                path:'/add',component: add ,hidden: true
            }
        ]

    },

]
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
export default router;
