<template>
    <div class="col-xs-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Personal Information</h3>
            </div>
            <div class="panel-body">
                <div class="form-group">
                    <style-input :model="characterInfo.name" inputName="Name"></style-input>
                </div>
                <div class="form-group">
                    <style-input :model="characterInfo.level" inputName="Level"></style-input>
                </div>
                <div class="form-group">
                    <style-select :model="characterInfo.race" inputName="Race" :items="races"></style-select>
                </div>
                <div class="form-group">
                    <style-select :model="characterInfo.class" inputName="Class" :items="classes"></style-select>
                </div>
                <div class="form-group">
                    <label for="charAlignment">Alignment</label>
                    <select v-model="characterInfo.alignment" class="form-control" id="charAlignment">
                        <option v-for="alignment in alignments">{{ alignment }}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { EventBus } from '../../main'

import api from '../../services/apiServices'

import StyleInput from '../layout-related/StyleInput.vue'
import StyleSelect from '../layout-related/StyleSelect.vue'

export default {
    data() {
        return {
            alignments: ['Chaotic Evil', 'Chaotic Neutral', 'Chaotic Good', 'Neutral Evil', 'Neutral', 'Neutral Good', 'Lawful Evil', 'Lawful Neutral', 'Lawful Good'],
            races: [],
            classes: '',
            characterInfo: {
                level: '',
                name: '',
                player: '',
                alignment: '',
                race:'',
                class:''
            }
        }
    },
    created() {
        let vm = this
        api.getRaces(vm)
        api.getClasses(vm)
        EventBus.$on('NameValueUpdated', (data) => {
            this.characterInfo.name = data
        })
        EventBus.$on('LevelValueUpdated', (data) => {
            this.characterInfo.level = data
        })
        EventBus.$on('RaceValueUpdated', (data) => {
            this.characterInfo.race = data
        })
        EventBus.$on('randomCharacterLoaded', (characterInformation) => {
            this.characterInfo = characterInformation.characterInfo
        })
    },
    components: {
        StyleInput,
        StyleSelect
    }
}
</script>

<style>
</style>
