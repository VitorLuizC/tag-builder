<template lang="pug">
  b-input-group
    b-form-input(:value='formatarTag(tag)', disabled)
    b-input-group-button(slot='right')
      b-button(:variant='\'danger\'', @click='exclude(tag.id)') Excluir
        i.glyphicon.glyphicon-trash
      b-button(:variant='\'primary\'', @click='edit(tag.id)') Editar
        i.glyphicon.glyphicon-pencil
</template>

<script>
  import * as types from '../store/types.js'

  export default {
    props: {
      tag: {
        type: Object,
        required: true
      }
    },
    methods: {
      formatarTag({ link, date, UTM, UTMI }) {
        return `${link}?utm=${UTM.source}`
      },
      exclude(id) {
        this.$store.dispatch(types.TAGS_DELETE, id)
      },
      edit(id) {
        this.$store.dispatch(types.TAGS_UPDATE, id)
      }
    }
  }
</script>
