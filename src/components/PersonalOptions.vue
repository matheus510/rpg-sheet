<template>
    <div class="col-xs-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Personal Information</h3>
            </div>
            <div class="panel-body">
                <div class="form-group">
                    <label for="charName">Character Name</label>
                    <input v-model="characterInfo.name" type="text" class="form-control" id="charName">
                </div>
                <div class="form-group">
                    <label for="charRace">Race</label>
                    <select v-model="characterInfo.race" class="form-control" id="charRace">
                        <option v-for="race in races">{{ race.name }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="charClass">Class</label>
                    <select v-model="characterInfo.class" class="form-control" id="charClass">
                        <option v-for="role in classes">{{ role.name }}</option>
                    </select>
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
import api from '../services/apiServices'

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
                alignment: ''
            }
        }
    },
    created() {
        let vm = this
        api.getRaces(vm)
        api.getClasses(vm)
    }
}
</script>

<style>
@media only screen and (min-width : 768px) {
    .is-table-row {
        display: table;
    }
    .is-table-row [class*="col-"] {
        float: none;
        display: table-cell;
        vertical-align: top;
    }
}
</style>
