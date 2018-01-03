<template>
    <div class="group">      
      <label>{{ inputName }}</label>
      <input @input="updateInputValue" v-model="currentValue" type="text" required>
    </div>
</template>

<script>
import { EventBus } from '../../main'
export default {
    props: ['model', 'inputName'],
    data() {
        return {
            currentValue: ''
        }
    },
    methods: {
        updateInputValue() {
            EventBus.$emit(`${this.inputName}ValueUpdated`, this.currentValue)
        }
    },
    created() {
      EventBus.$on('randomCharacterLoaded', (info) => {
        if (this.inputName === "Name") {
          this.currentValue = info.characterInfo.name
        } else if (this.inputName === "Level") {
          this.currentValue = info.characterInfo.level
        }
      })
    }
}
</script>

<style scoped>

</style>
