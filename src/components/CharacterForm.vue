<template>
    <div class="container">
        <div class="row">
            <personal-options></personal-options>
            <ability-options></ability-options>
        </div>
    </div>
</template>

<script>
import api from '../services/apiServices'
import AbilityOptions from '../components/AbilityOptions.vue'
import PersonalOptions from '../components/PersonalOptions.vue'

export default {
    data() {
        return {

        }
    },
    methods: {
        consoled() {
            console.log(this.races)
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
