<template lang="pug">
  .container
    .row
      .col-xs-12
        tag-form
    .row
      .col-xs-12
        tag-list
</template>

<script>
  import * as types from '../store/types.js'
  import TagForm from './TagForm.vue'
  import TagList from './TagList.vue'

  export default {
    components: { TagForm, TagList },
    created() {
      this.$store.dispatch(types.TAGS_LOAD)
    }
  }
</script>

<style lang="stylus">
  @require '~bootstrap/dist/css/bootstrap.css'
  @require '~bootstrap-vue/dist/bootstrap-vue.css'
</style>
