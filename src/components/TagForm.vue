<template lang="pug">
  form(@submit.prevent='include')
    b-form-fieldset(label='Link')
      b-form-input(v-model='tag.link')
    b-form-fieldset(label='Source')
      b-form-input(v-model='tag.UTM.source')
    b-form-fieldset(label='Medium')
      b-form-input(v-model='tag.UTM.medium')
    b-form-fieldset(label='Campaign')
      b-form-input(v-model='tag.UTM.campaign')
    b-form-fieldset(label='Data')
      b-form-input(v-model='tag.date')
    b-form-fieldset(label='Habilitar UTMI')
      b-form-checkbox(v-model='hasUTMI')
    b-form-fieldset(label='UTMI')
      b-form-input(v-if='hasUTMI', v-model='tag.UTMI')
    b-button(:variant='\'primary\'') Gerar TAG
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../store/types.js'

  export default {
    computed: mapGetters({ tag: types.TAG_DATA }),
    data: () => ({
      hasUTMI: false
    }),
    methods: {
      include() {
        this.$store.dispatch(types.TAGS_INSERT, this.tag)
      }
    }
  }
</script>
