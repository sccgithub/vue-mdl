<template lang="jade">
.mdl-tooltip(v-bind:for='forMsg' v-bind:class='{"mdl-tooltip--large": large}')
  slot
</template>

<script>
import propFill from './mixins/prop-fill'

export default {
  data () {
    return {
      forMsg: ''
    }
  },
  props: {
    for: {
      required: true,
      type: String
    },
    large: {
      fill: true
    }
  },
  mounted () {
    this.forMsg = this.for
    if (componentHandler) {
      componentHandler.upgradeElement(this.$el, 'MaterialTooltip')
    }
  },
  mixins: [propFill]
}
</script>
