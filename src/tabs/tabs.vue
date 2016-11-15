<template>
  <div class="mdl-tabs is-upgraded">
    <!-- Generated tab links -->
    <div class="mdl-tabs__tab-bar">
      <a class="mdl-tabs__tab"
        v-for="tab in tabs"
        track-by="id"
        :class="{ 'is-active': isSelected(tab) }"
        @click="selectTab(tab)"
      >{{tab.title}}
        <tabLink :noRippleEffect="noRippleEffect"></tabLink>
      </a>
    </div>
    <!-- Tabs content -->
    <slot></slot>
  </div>
</template>

<style scoped>
  a.mdl-tabs__tab {
    cursor: pointer;
  }
</style>

<script>
import propFill from '../mixins/prop-fill'
import tabLink from './tab-link.vue'

// indexOf with object
function findTabIndex (tabs, id) {
  for (let i = 0; i < tabs.length; ++i) {
    if (tabs[i].id === id) {
      return i
    }
  }
  return -1
}

export default {
  props: {
    selected: {
      required: true,
      twoWay: true
    },
    noRippleEffect: {
      fill: true,
      required: false
    }
  },
  data () {
    return {
      tabs: [],
      selectedSelf: ''
    }
  },
  methods: {
    selectTab ({id}) {
      this.selectedSelf = id
      this.$emit('mdlchange', this.selectedSelf)
    },
    isSelected ({id}) {
      return id === this.selectedSelf
    },
    addTab (tab) {
      // TODO check for duplicates and throw error
      this.tabs.push(tab)
    },
    updateTab ({id}, tab) {
      const index = findTabIndex(this.tabs, id)
      if (index > -1) this.tabs.splice(index, 1, tab)
    },
    removeTab ({id}) {
      const index = findTabIndex(this.tabs, id)
      if (index > -1) this.tabs.splice(index, 1)
    }
  },
  watch: {
    selected () {
      this.selectedSelf = this.selected
    }
  },
  mounted () {
    this.selectedSelf = this.selected
  },
  mixins: [propFill],
  components: {
    tabLink
  }
}
</script>
