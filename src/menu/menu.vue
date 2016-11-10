<template lang="jade">
ul.mdl-menu.mdl-js-menu(v-bind:for.once='forMsg')
  slot
</template>

<script>
export default {
  data () {
    return {
      forMsg: ''
    }
  },
  props: ['for'],
  mounted () {
    this.forMsg = this.for
    componentHandler.upgradeElement(this.$el, 'MaterialMenu')
  }
  // beforeDestroy () {
    // TODO Remove mdl event listeners added. This was previously
    // this.$el.MaterialMenu.mdlDowngrade()
    // But has been removed on 1.1
}
</script>
