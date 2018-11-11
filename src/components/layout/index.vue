<template>
<div>
  <Sidebar/>
  <div>
<Navbar/>

<AppMain/>
  </div>

</div>

</template>
<script>
import { Navbar, Sidebar, AppMain } from './components'
export default {
  name: 'layout',
  components: {
    Navbar, Sidebar, AppMain
  },
  mounted () {
    console.log(this.$store)
  }

}
</script>
