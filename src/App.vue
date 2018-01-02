<template>
  <div id="app">
    <character-form></character-form>
  </div>
</template>

<script>
import CharacterForm from './components/CharacterForm.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    CharacterForm
  }
}
</script>

<style>
#app {
  padding-top: 5%;
}
</style>
