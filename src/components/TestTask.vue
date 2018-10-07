<template>
  <div class="table-x">
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>{{taskNumber}}</th>
          <th>{{taskContent}}</th>
          <th>{{taskFinished}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="Task in Tasks"
            :key="Task.id"
            class="">
          <th class="">{{Task.id}}</th>
          <th class="">{{Task.content}}</th>
          <th class=""
              v-text="judgeVoidFinished(Task.isFinished)"
              @click="changeState(Task)"></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import localStorage from '@/components/Storage'
export default {
  name: 'allTask',
  data () {
    return {
      allTaskList: '全部任务',
      isFinishenTaskList: '已完成',
      notFinishenTaskList: '未完成',
      taskNumber: '序号',
      taskContent: '任务内容',
      taskFinished: '完成情况',
      Tasks: localStorage.get('Tasks')
    }
  },
  methods: {
    judgeVoidFinished: function (boolean) {
      if (boolean === true) {
        return '已完成'
      } else if (boolean === false) {
        return '未完成'
      }
    },
    changeState: function (Task) {
      Task.isFinished = !Task.isFinished
    }
  },
  watch: {
    Tasks: {
      handler: function (val, oldval) {
        localStorage.save('Tasks', this.Tasks)
      },
      deep: true
    }
  },
  mounted: function () {
  }
}
</script>
<style>
</style>
