<template>
    <div>
      <div class="form-group">
        <label>{{ inputName }}</label>
        <select class="form-control" @change="updateInputValue" v-model="currentValue" :placeholder="inputName">
            <option v-for="item in items">{{ item.name }}</option>
        </select>
      </div>  
    </div>
</template>

<script>
import { EventBus } from '../../main'
export default {
    props: ['model', 'inputName', 'items'],
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
        if (this.inputName === "Race") {
          this.currentValue = info.characterInfo.race
        } else if (this.inputName === "Class") {
          this.currentValue = info.characterInfo.class
        }
      })
    }
}
</script>

<style>

</style>
