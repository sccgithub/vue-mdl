<template lang="jade">
label.mdl-checkbox.mdl-js-checkbox(v-bind:for.once='id' v-bind:class='{ "is-disabled": disabled}')
  input.mdl-checkbox__input(ref="input" type='checkbox' v-model="checkValue" v-bind:id.once='id'  v-bind:disabled='disabled' v-bind:value="value")
  span.mdl-checkbox__label
    slot
</template>

<script>
import common from '../mixins/toggle'
export default {
  mounted () {
    if (window.componentHandler) {
      componentHandler.upgradeElements(this.$el)
    }
  },
  mixins: [common]
}
</script>
