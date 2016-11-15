<template lang="jade">
.mdl-card.mdl-shadow--2dp
  slot(name='title' v-if='title != ""')
    .mdl-card__title
      h2.mdl-card__title-text {{title}}
  slot(name='subtitle' v-if='subtitle != ""')
    .mdl-card__subtitle-text {{subtitle}}
  slot(name='supporting-text' v-if='supportingText != ""')
    .mdl-card__supporting-text {{supportingText}}
  slot(name='media' v-if='media != ""')
    .mdl-card__media
      img(:src='media')
  // TODO this was an anchor
  slot(name='actions' v-if='actions != ""')
    .mdl-card__actions.mdl-card--border
      mdl-anchor-button.mdl-js-ripple-effect(colored v-if='isActionsURL' v-bind:href='actions'
        v-bind:target='actionsTarget') {{actionsText}}
      mdl-button.mdl-js-ripple-effect(colored v-else v-on:click='triggerActionsEvent') {{actionsText}}
  // TODO some way of creating a menu or action
  slot(name='menu' v-if='menu != ""')
    .mdl-card__menu
      mdl-button.mdl-js-ripple-effect(icon @click='triggerMenuEvent')
        i.material-icons share

</template>

<script>
import mdlButton from './button.vue'
import mdlAnchorButton from './anchor-button.vue'

export default {
  computed: {
    isActionsURL () {
      if (typeof this.actions === 'string') {
        return this.actions.match(/^(https?:)?\/\//) != null
      } else {
        return false
      }
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    menu: {
      default: ''
    },
    actions: {
      type: String,
      default: ''
    },
    actionsTarget: {
      default: '_self',
      type: String
    },
    actionsText: String,
    media: {
      default: '',
      type: String
    },
    subtitle: {
      default: '',
      type: String
    },
    supportingText: {
      default: '',
      type: String
    }
  },
  methods: {
    triggerMenuEvent () {
      this.$emit(this.menu)
    },
    triggerActionsEvent () {
      this.$emit(this.actions)
    }
  },
  components: {
    mdlButton,
    mdlAnchorButton
  }
}
</script>
