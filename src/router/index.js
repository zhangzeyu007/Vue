/*
 * @Description: 组件
 * @Author: 小鱼
 * @Date: 2020-10-06 18:06:45
 * @LastEditors: 海象
 * @LastEditTime: 2021-01-31 16:13:52
 */
import Vue from "vue";
import VueRouter from "vue-router";

// 1.use一下,VueRouter是一个插件
// 做了什么
// 声明两个全局组件
/*
 需求分析
 spa页面不能刷新
 hash #/about
 History api /about
 根据url显示对应的内容
 router-view
数据响应式: current变量持有url 地址, 一旦变化, 动态重新执行render函数

 任务
 1.实现VueRouter类
    处理路由选择
    监控url变化, hashchange
    响应这个变化
 2.实现install方法
   $router注册
   两个全局组件
*/

Vue.use(VueRouter);

// 2.声明一个路由表
// 通用页面: 不需要守卫, 可以直接访问
export const constRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login")
    // hidden: true // 导航菜单忽略该项
  },
  {
    path: "/",
    name: "Home",
    meta: {
      title: "Home" // 导航菜单项标题
    },
    component: () => import("@/views/Home")
  }
];
// 权限页面: 受保护的页面, 要求用户登录并拥有访问权限的角色才能访问
export const asyncRoutes = [
  {
    path: "/about",
    name: "About",
    meta: {
      title: "about",
      icon: "qq",
      roles: ["admin", "editor"]
    },
    component: () => import("@/views/About")
  }
];
// console.log(constRoutes);

// 3.创建一个Router实例
export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constRoutes
});
