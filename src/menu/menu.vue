<template lang="jade">
ul.mdl-menu.mdl-js-menu.mdl-js-ripple-effect(v-bind:data-mdl-for='forMsg')
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
    if (window.componentHandler) {
      componentHandler.upgradeElement(this.$el, 'MaterialMenu')
      let that = this
      document.querySelector('#' + this.for).addEventListener('click', function () {
        that.$el.MaterialMenu.toggle()
      }, false)
    }
  }
  // beforeDestroy () {
    // TODO Remove mdl event listeners added. This was previously
    // this.$el.MaterialMenu.mdlDowngrade()
    // But has been removed on 1.1
}
</script>
