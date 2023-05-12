<template>

    <div class="mattle-container">

        <MattleGuessInput :availableAnswersList="presidentsList" @submit="processGuess"/>

        <div class="answers-container">

            <MattleCategories />

            <div class="guess-container">
                <TransitionGroup name="fade" mode="out-in">
                    <GuessRow v-for="guess in guessedPresidents" :key="guess" :guessedPresident="guess" :answerPresident="answerPresident"/>
                </TransitionGroup>
            </div>

        </div>

    </div>


</template>

<script>
import { createPresidents } from '@/models/PresidentList.js'
import MattleGuessInput from '@/components/MattleGuessInput.vue'
import MattleCategories from './MattleCategories.vue'
import GuessRow from '@/components/GuessRow.vue'

export default {
    name: 'MattleGame',
    components: {
        MattleGuessInput,
        MattleCategories,
        GuessRow
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

    .answers-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 300px;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .guess-container {
        display: flex;
        flex-direction: column-reverse;
        max-width: 840px;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }

    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    @media only screen and (max-width: 550px) {

        .answers-container {
            overflow-x: auto;
        }

    }
</style>