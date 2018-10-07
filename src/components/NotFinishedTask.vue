<template>
  <div class="">
    <table class="table table-bordered table-striped table-hover ">
      <thead>
        <tr>
          <th class="center">{{taskNumber}}</th>
          <th class="center">{{taskContent}}</th>
          <th class="center">{{taskFinished}}</th>
          <th class="center"> {{taskOperation}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="Task in Tasks"
            :key="Task.id"
            class=""
            v-if="Task.isFinished==false">
          <th class="center">{{Task.id}}</th>
          <th>{{Task.content}}</th>
          <th class="center"
              v-text="judgeVoidFinished(Task.isFinished)"
              @click="changeState(Task)"></th>
          <th class="center">
            <a @click="vueDeleta(Task)">{{taskOperationDelete}}</a>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'notFinishedTask',
  data () {
    return {
      // NewTask: localStorage.get('NewTask'),
      apiUrl: {
        modify: 'http://test.cn/TasksData/modify',
        delete: 'http://test.cn/TasksData/delete'
      },
      allTaskList: '全部任务',
      isFinishenTaskList: '已完成',
      notFinishenTaskList: '未完成',
      taskNumber: '序号',
      taskContent: '任务内容',
      taskFinished: '完成情况',
      taskOperation: '操作',
      taskOperationDelete: '删除'

    }
  },
  computed: {
    Tasks: function () {
      return this.$store.state.state.Tasks
    }
  },
  methods: {
    judgeVoidShowed: function () {
      if (this.$store.state.state.Tasks.length > 0) {
        this.isShowed = true
      } else {
        this.isShowed = false
      }
    },
    judgeVoidFinished: function (boolean) {
      if (boolean === true) {
        return '已完成'
      } else if (boolean === false) {
        return '未完成'
      }
    },
    changeState: function (Task) {
      const data = {
        url: this.$store.state.state.Url.modify,
        data: Task
      }
      this.$store.dispatch('changeStatus', data)
    },
    vuePost: function (url, data) {
      var successCallback = function () {}
      var erorCallback = function () {}
      this.$http.post(url, data).then(successCallback, erorCallback)
    },
    vueDeleta: function (Task) {
      const data = {
        url: this.$store.state.state.Url.delete,
        data: Task
      }
      this.$store.dispatch('deleteTasks', data)
    }
  }
}
</script>
<style>
th {
  word-break: break-all;
  word-wrap: break-all;
}
</style>
