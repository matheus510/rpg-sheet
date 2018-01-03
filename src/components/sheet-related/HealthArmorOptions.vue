<template>
      <div class="col-xs-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Personal Information</h3>
            </div>
            <div class="panel-body">
                <div class="form-group">
                    <label for="armorClass">Armor Class</label>
                    <input v-model="name" type="number" class="form-control" id="armorClass">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../services/apiServices'

export default {
    props: ['player'],
    data() {
        return {
            armorClass: '',
            hitPoints: '',
            armor: '',
            shield: '',
            other: '',
            damageResistance: '',
            damageReduction: '',
            conditions: [],
        }
    },
    computed: {
        hitDice() {
            let hitDice = 0
            switch (this.player.class) {
                case 'Barbarian':
                    hitDice = 12
                    break
                case 'Warrior':
                case 'Paladin':
                case 'Ranger':
                    hitDice = 10
                    break
                case 'Bard':
                case 'Cleric':
                case 'Druid':
                case 'Monk':
                case 'Rogue':
                case 'Warlock':
                    hitDice = 8
                    break                    
                case 'Wizard':
                case 'Sorcerer':
                    hitDice = 6
                    break

                
            }
            return hitDice
        }
    }
}
</script>

<style>

</style>
