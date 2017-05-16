<template lang="pug">
  form.form
    b-form-input(
      v-model='tag.link',
    )
    b-form-input(
      v-model='tag.UTM.source',
    )
    b-form-input(
      v-model='tag.date',
    )
    b-form-input(
      v-model='tag.UTM.medium',
    )
    b-form-input(
      v-model='tag.UTM.campaign',
    )
    b-form-checkbox(
      v-model='hasUTMI',
    )
    b-form-input(
      v-if='hasUTMI',
      v-model='tag.UTMI',
    )
    b-button(:variant='\'primary\'' @click.prevent='include') Gerar TAG

    ul
      li(v-for='tag in tags')
        p {{ tag | format-tag }}

</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../store/types.js'

  export default {
    computed: mapGetters({
      tag: types.TAG_DATA,
      tags: types.TAGS_DATA
    }),

    data: () => ({
      hasUTMI: false
    }),

    methods: {
      include() {
        this.$store.dispatch(types.TAGS_INCLUDE, this.tag)
      }
    },

    filters: {
      'format-tag'(tag) {
        return `${tag.link}&utm_source=${tag.UTM.source}`
      }
    }
  }
</script>
