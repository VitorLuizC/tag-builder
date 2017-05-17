<template lang="pug">
  .form
    tag-item(v-for='tag in tags', :key='tag.id', :tag='tag')
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../store/types.js'
  import TagItem from './TagItem.vue'

  export default {
    computed: mapGetters({ tags: types.TAGS_DATA }),
    components: { TagItem }
  }
</script>
