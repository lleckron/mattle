<template>
    <div class="victory-modal">
        <div class="victory-container">
            <h2 class="victory-header">Nice Job!</h2>
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
    position: absolute;
    top: 0;
    bottom: 20%;
    left: 0;
    right: 0;
}

.victory-container {
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

.victory-header {
    background-image: linear-gradient(to right, #05445E, #189AB4, #2E8BC0, #05445E); 
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;  
    animation: title-animation 135s linear infinite;
    font-size: 35px;
}

@keyframes title-animation {
    to {
        background-position: 1000vh;
    }
}

.return {
    border: none;
    height: 50px;
    width: 375px;
    border-radius: 6px;
    background: #c0c0c0;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    top: 18%;
}

.return:hover {
    background: #b0b0b0;
}

@media only screen and (min-width: 400px) and (max-width: 600px) {

    .victory-modal {
        bottom: 10%;
    }

    .victory-container {
        height: 350px;
        width: 350px;
    }

    .return {
        width: 275px;
        top: 50px;
    }

}

@media only screen and (max-width: 399px) {

    .victory-modal {
        bottom: 30%;
    }

    .victory-container {
        height: 300px;
        width: 300px;
    }

    .return {
        width: 275px;
        top: 20px;
    }

    .victory-container p {
        font-size: 14px;
    }

}

@media only screen and (max-height: 800px) {

    .victory-modal {
        bottom: 5%;
    }

}

@media only screen and (max-width: 400px) and (max-height: 900px) {

    .victory-modal {
        bottom: 5%;
    }

}

@media only screen and (max-width: 400px){

    .victory-container {
        height: 250px;
        width: 250px;
    }

    .return {
        width: 200px;
        top: 10px;
    }

    .victory-container p {
        font-size: 12px;
    }

}

</style>