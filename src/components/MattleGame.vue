<template>
    <div class="mattle-container">

        <MattleGuessInput :availableAnswersList="presidentsList" @submit="processGuess"/>

        <div class="answers-container">

            <MattleCategories />

            <div class="guess-container">
                <TransitionGroup name="fade-in">
                    <GuessRow v-for="guess in guessedPresidents" :key="guess" :guessedPresident="guess" :answerPresident="answerPresident"/>
                </TransitionGroup>
            </div>

        </div>

        <Transition name="victory">
            <VictoryModal v-if="showVictory" :guessAttempts="guessCount" @close="setupNewGame"/>
        </Transition>
    </div>
</template>

<script>
import { createPresidents } from '@/models/PresidentList.js'
import MattleGuessInput from '@/components/MattleGuessInput.vue'
import MattleCategories from './MattleCategories.vue'
import GuessRow from '@/components/GuessRow.vue'
import VictoryModal from '@/components/VictoryModal.vue'

export default {
    name: 'MattleGame',
    components: {
        MattleGuessInput,
        MattleCategories,
        GuessRow,
        VictoryModal
    },
    data() {
        return {
            presidentsList: [],
            answerPresident: Object,
            guessPresident: Object,
            guessedPresidents: [],
            guessCount: 0,
            showVictory: false,
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
            this.guessCount +=1
            if(this.guessPresident === this.answerPresident) {
                this.showVictory = true
            }
        },
		setupNewGame() {
            this.showVictory = false

            this.answerPresident = {}
            this.guessPresident = {}
            this.guessedPresidents = []
            this.guessCount = 0

            this.pickRandomPresident()
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

.fade-in-enter-active,
.fade-in-leave-active {
	transition: opacity .25s ease-in;
}

.fade-in-enter-from,
.fade-in-leave-to {
	opacity: 0;
}

.victory-enter-active,
.victory-leave-active{
    transition: opacity .15s ease-in;
}

.victory-enter-from,
.victory-leave-to {
	opacity: 0;
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