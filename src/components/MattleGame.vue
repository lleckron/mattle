<template>

    <div class="mattle-container">
        <MattleGuessInput :availableAnswersList="presidentsList" @submit="processGuess"/>
        <div class="answers-container">
    
        </div>
    </div>


</template>

<script>
import { createPresidents } from '@/models/PresidentList.js'
import MattleGuessInput from '@/components/MattleGuessInput.vue'
//import GuessRow from '@/components/GuessRow.vue'

export default {
    name: 'MattleGame',
    components: {
        MattleGuessInput,
        //GuessRow
    },
    data() {
        return {
            presidentsList: [],
            answerPresident: Object,
            guessPresident: Object,
            guessedPresidents: [],
            guessStyleList: [],
            guessCount: 0
        }
    },
    methods: {
        populatePresidentsList() {
            this.presidentsList = createPresidents()
        },
        pickRandomPresident() {
            const random = Math.floor(Math.random() * this.presidentsList.length)
            this.answerPresident = this.presidentsList[random]
        },
        processGuess(guess) {
            this.guessPresident = guess
            this.guessedPresidents.push(guess)
        }
    },
    mounted() {
        this.populatePresidentsList()
        this.pickRandomPresident()
    }
}
</script>

<style scoped>

</style>