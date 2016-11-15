<template lang="jade">
.mdl-textfield.mdl-js-textfield(v-bind:class='{"mdl-textfield--floating-label": floatingLabel, "mdl-textfield--expandable": expandable, "is-dirty": isDirty, "is-disabled": disabled}')
  slot(v-if='expandable' name='expandable-button')
    label.mdl-button.mdl-js-button.mdl-button--icon(v-bind:for.once='id')
      i.material-icons {{expandable}}
  div(v-bind:class='{"mdl-textfield__expandable-holder": expandable}')
    slot(v-if='textarea' name='textarea')
      textarea.mdl-textfield__input(type='text' v-model='result' v-bind:required='required' v-bind:id.once='id' v-bind:rows='rows' v-bind:disabled='disabled' v-bind:readonly='readonly' v-bind:maxlength='maxlength')
    slot(v-else name='input')
      input.mdl-textfield__input(type='text' v-model='result' v-bind:id.once='id' v-bind:pattern='pattern' v-bind:disabled='disabled' v-bind:required='required' v-bind:readonly='readonly' v-bind:maxlength='maxlength')
    slot(name='Label')
      label.mdl-textfield__label(v-bind:for.once='id') {{Label}}
    slot(name='error')
      label.mdl-textfield__error(v-if='error') {{error}}
</template>

<script>
import propFill from './mixins/prop-fill'

export default {
  data () {
    return {
      result: ''
    }
  },
  props: {
    maxlength: {
      required: false
    },
    expandable: String,
    type: {
      type: String,
      default: 'text'
    },
    rows: {
      required: false
    },
    id: String,
    value: {
      required: false
    },
    disabled: {
      type: [Boolean, String],
      fill: true,
      required: false,
      default: false
    },
    required: {
      type: [Boolean, String],
      fill: true,
      required: false,
      default: false
    },
    readonly: {
      type: [Boolean, String],
      fill: true,
      required: false,
      default: false
    },
    label: String,
    pattern: String,
    error: String,
    textarea: {
      fill: true
    },
    floatingLabel: {
      required: false
    }
  },
  watch: {
    result () {
      this.$emit('mdlchange', this.result)
    },
    value () {
      this.result = this.value
    }
  },
  computed: {
    Label () {
      if (this.floatingLabel && this.label == null) {
        return this.floatingLabel
      } else {
        return this.label
      }
    },
    isDirty () {
      return this.result
    }
  },
  mounted () {
    if (window.componentHandler) {
      window.componentHandler.upgradeElement(this.$el)
    }
    this.result = this.value
  },
  mixins: [propFill]
}
</script>
