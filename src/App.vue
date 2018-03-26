<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script text="text/ecmascipt-6">
export default {
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    @import "~common/stylus/variable"
    color: $color-theme
</style>
