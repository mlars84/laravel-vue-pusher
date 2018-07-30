<template>
    <div>
        <toolbar />
        <router-view></router-view>
        <app-footer />
    </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    Toolbar,
    AppFooter
  },
  data: () => ({})
}
</script> 

<style>

</style>
