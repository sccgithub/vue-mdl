export default {
  data () {
    return {
      checkValue: ''
    }
  },
  props: {
    checked: {
      type: [Array, Boolean, Number],
      required: true,
      twoWay: true
    },
    disabled: {
      required: false
    },
    id: String,
    value: {
      required: false
    }
  },
  mounted () {
    if (this.checked instanceof Array && this.checked.indexOf(this.value) >= 0) {
      this.checkValue = true
    }
    this.changeChecked()
  },
  methods: {
    changeChecked () {
      if (this.checked instanceof Array) {
        if (this.checkValue && this.checked.indexOf(this.value) === -1) {
          this.checked.push(this.value)
        } else if (!this.checkValue && this.checked.indexOf(this.value) > -1) {
          this.checked.splice(this.checked.indexOf(this.value), 1)
        }
      } else {
        console.log('emit')
        this.$emit('mdlchange', this.checkValue)
      }
      this.$refs.input.checked = this.isChecked
    }
  },
  watch: {
    isChecked () {
      this.changeChecked()
    },
    checked () {
      if (this.checked instanceof Array && this.checked.indexOf(this.value) >= 0) {
        this.checkValue = true
      }
    },
    checkValue () {
      this.changeChecked()
    }
  },
  computed: {
    isChecked () {
      if (this.checked instanceof Array) {
        return this.checked.indexOf(this.value) >= 0
      } else {
        return this.checked
      }
    }
  }
}
