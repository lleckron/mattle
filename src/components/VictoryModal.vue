<template>
    <div class="victory-modal">
        <div class="feedback-container">
            <h2 class="feedback">Nice Job!</h2>
            <p v-if="guessAttempts === 1">You guessed the right President in only {{guessAttempts}} try!</p>
            <p v-else>You guessed the right President in only {{guessAttempts}} tries!</p>
            <button class="return" @click="close()">New Game</button>
        </div>
    </div>
</template>

<script>
import confetti from 'canvas-confetti'

export default ({
    name: 'CorrectAnswer',
    props: {
        guessAttempts: Number
    },
    methods: {
        close() {
            this.$emit('close') 
        }
    },
    mounted() {
        confetti({
            ticks: 120
        })
    }
})
</script>

<style scoped>
.victory-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 20%;
    left: 0;
    right: 0;
}

.feedback-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 500px;
    background: #ffffff;
    border: 6px solid #c0c0c0;
    border-radius: 12px;
    box-shadow: 0 0 6px #000000;
}

.feedback {
    color: #ffffff;
    font-size: 35px;
}

.return {
    border: none;
    height: 50px;
    width: 120px;
    border-radius: 6px;
    background: #e9e9e9;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

.return:hover {
    background: #c9c9c9;
    box-shadow: 0 0 12px #000000;
}

</style>