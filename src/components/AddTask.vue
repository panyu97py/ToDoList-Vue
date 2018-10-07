<template>
  <div>
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <img src="@/assets/logo.png"
             alt="图片加载失败"
             class="col-md-2 col-sm-2 col-xs-4 col-md-offset-5 col-xs-offset-4 col-sm-offset-5">
      </div>
    </div>
    <div class="col-md-offset-3 col-md-6  col-sm-offset-2 col-sm-8 col-xs-offset-1 col-xs-10">
      <form action="AddTask"
            class="input-group">
        <input type="text"
               class="form-control col-md-10 col-sm-10 col-xs-10"
               v-model="NewTasks"
               @keyup.enter="addData(NewTasks)">
        <p @click="addData(NewTasks)"
           class="input-group-addon btn ">{{ButtonAdd}}</p>
      </form>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddTask',
  data () {
    return {
      ButtonAdd: '添加任务',
      NewTasks: ''
    }
  },
  methods: {
    addData: function (data) {
      data = {
        url: this.$store.state.state.Url.add,
        data: data
      }
      this.$store.dispatch('addData', data)
    }
  }
}
</script>
<style>
slot {
  height: 60%;
}
.row div {
  text-align: center;
  padding-bottom: 20px;
}
</style>
