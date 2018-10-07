<template>
  <div class=""
       v-if="$store.state.state.isShowed">
    <div class="router-link">
      <router-link to="/allTask"
                   class="btn btn-link">{{allTaskList}}</router-link>
      <router-link to="/notFinishedTask"
                   class="btn btn-link">{{notFinishenTaskList}}</router-link>
      <router-link to="/isFinishedTask"
                   class="btn btn-link">{{isFinishenTaskList}}</router-link>
      <!-- <router-link to="/testTask"
                   class="btn btn-link">{{testTaskList}}</router-link> -->

    </div>
    <!-- <loading v-show="showLoading" /> -->

    <router-view class=""
                 :key="1"></router-view>
  </div>

</template>
<script>
import Loading from '@/components/Loading'
export default {
  name: 'TaskList',

  data () {
    return {
      allTaskList: '全部任务',
      isFinishenTaskList: '已完成',
      notFinishenTaskList: '未完成',
      testTaskList: '从Mock.js获取的模拟后台数据',
      taskNumber: '序号',
      taskContent: '任务内容',
      taskFinished: '完成情况'
    }
  },
  components: {
    Loading
  },
  mounted: function () {
    this.vueGet()
    // this.JUDGEVOIDSHOWED()
  },
  computed: {
    tasksLength: function () {
      return this.$store.state.state.Tasks.length
    }
  },
  methods: {
    ...{
      vueGet: function () {
        const data = {url: this.$store.state.state.Url.get}
        this.$store.dispatch('getData', data)
      }
      // JUDGEVOIDSHOWED: function () {
      //   console.log(this.$store)
      //   this.$store.commit('CHANGESHOWSTATUS', this.tasksLength)
      // }
    }
  }
}
</script>
<style>
.router-link {
  text-align: left;
}
loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
