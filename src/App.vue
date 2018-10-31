<template>
  <div id="app">
          <router-view/>
    <!-- <add-task>
      <router-view/>
    </add-task> -->

  </div>
</template>

<script>
import AddTask from '@/components/AddTask'
export default {
  name: 'App',
  data () {
    return {
      NewTask: ''
    }
  },
  components: {
    AddTask
  },
  mounted: function () {

  },
  methods: {
    AddTask: function (NewTask) {
      this.NewTask = NewTask
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
