<template>
    <div class="container">
        <div class="row">
            <personal-options></personal-options>
            <ability-options></ability-options>
            <button class="waves-effect waves-teal btn-flat" @click="loadCharacter">load random character</button>
        </div>
    </div>
</template>

<script>
import api from '../../services/apiServices'
import { EventBus } from '../../main'

import AbilityOptions from './AbilityOptions.vue'
import PersonalOptions from './PersonalOptions.vue'

const mockCharacter = {
    characterInfo: {
        level: '20',
        name: 'Bilbo Baggins',
        player: 'Matheus',
        alignment: 'Chaotic Evil',
        race: 'Elf',
        class: 'Barbarian',
    },
    abilityScores: [
                {
                    name: 'strenght',
                    abvName: 'STR',
                    score: 16,
                    racialBonus: 0,
                    otherBonus: 0
                }, 
                {
                    name: 'dexterity',
                    abvName: 'DEX',
                    score: 16,
                    racialBonus: 0,
                    otherBonus: 0
                }, 
                {
                    name: 'constitution',
                    abvName: 'CON',
                    score: 16,
                    racialBonus: 0,
                    otherBonus: 0
                },
                {
                    name: 'intelligence',
                    abvName: 'INT',
                    score: 10,
                    racialBonus: 0,
                    otherBonus: 0
                },
                {
                    name: 'wisdom',
                    abvName: 'WIS',
                    score: 10,
                    racialBonus: 0,
                    otherBonus: 0
                },
                {
                    name: 'charisma',
                    abvName: 'CHA',
                    score: 15,
                    racialBonus: 0,
                    otherBonus: 0
                }
            ]
}

export default {
    data() {
        return {

        }
    },
    methods: {
        loadCharacter() {
            EventBus.$emit('randomCharacterLoaded', mockCharacter)
        }
    },
    created() {

    },
    components: {
        AbilityOptions,
        PersonalOptions
    }
}
</script>

<style>
.card {
    border: 1px solid #ccc;
}
</style>
