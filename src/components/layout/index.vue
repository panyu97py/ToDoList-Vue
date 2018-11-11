<template>
  <div :class="classObj">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>
<script>
import { Navbar, Sidebar, AppMain } from './components'
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse () {
      return this.sidebar.open
    },
    classObj () {
      return {
        hideSidebar: this.isCollapse,
        openSidebar: !this.isCollapse
      }
    }
  },
  mounted () {

  }
}
</script>
