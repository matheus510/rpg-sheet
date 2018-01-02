<template>
    <div>
        <div class="col-xs-6">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title">Ability Scores</h3>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-xs-offset-4">
                            <div class="col-xs-6">Score</div>
                            <div class="col-xs-4">Modifier</div>
                        </div>
                    </div>
                    <div v-for='abilityScore in abilityScoreInfo' class="form-group">
                        <div class="row">
                            <div class="col-xs-4"><label>{{ abilityScore.abvName }}</label></div>
                            <div class="col-xs-4"><input v-model="abilityScore.score" class="form-control"></div>
                            <div class="col-xs-4">{{ abilityScoreModifier(abilityScore.score) }}</div>
                        </div>
                    </div>
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
            abilityScoreInfo:   [
                {
                    name: 'strenght',
                    abvName: 'STR',
                    score: 0,
                    bonus: 0
                }, 
                {
                    name: 'dexterity',
                    abvName: 'DEX',
                    score: 0,
                    bonus: 0
                }, 
                {
                    name: 'constitution',
                    abvName: 'CON',
                    score: 0,
                    bonus: 0
                },
                {
                    name: 'intelligence',
                    abvName: 'INT',
                    score: 0,
                    bonus: 0
                },
                {
                    name: 'wisdom',
                    abvName: 'WIS',
                    score: 0,
                    bonus: 0
                },
                {
                    name: 'charisma',
                    abvName: 'CHA',
                    score: 0,
                    bonus: 0
                }
            ]
            
        }
    },
    created() {
        let vm = this
        api.getAbilityScores(vm)
    },
    methods: {
        abilityScoreModifier(score) {
            console.log(score)
            let modifier = Math.floor(((score - 10) / 2))
            return modifier
        }
    }
}
</script>

<style>
.card {
    border: 1px solid #ccc;
}
</style>
