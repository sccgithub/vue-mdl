<template>
  <span ref="ripple"
        v-show="!noRippleEffect"
        class="mdl-tabs__ripple-container mdl-js-ripple-effect">
    <span class="mdl-ripple"></span>
  </span>
</template>

<script>
export default {
  props: {
    noRippleEffect: {
      required: false
    }
  },
  mounted () {
    if (window.componentHandler) {
      componentHandler.upgradeElement(this.$refs.ripple, 'MaterialRipple')
    }
  }
}
</script>
