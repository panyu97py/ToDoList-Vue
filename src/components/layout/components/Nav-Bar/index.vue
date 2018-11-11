<template>
  <div>
    <hamburger :toggle-click="toggleSideBar" :is-active="isCollapse" class="hamburger-container" />
    <breadcrumb />
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>
<script>
import Hamburger from './components/Hamburger'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'navBar',
  components: {
    // Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse () {
      return this.sidebar.open
    }
  },
  methods: {
    ...mapActions(['toggleSideBar'])
  }
}
</script>
