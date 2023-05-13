<template>
<div class="guess-div">
    <input type="text" id="guess-input" autocomplete="off" v-on:input="findGuessPresident()" v-on:keyup.enter="enterKeySelectPresident()">
    <button type="submit" id="guess-button" @click="submitPresident()" disabled>Guess</button>
    <div class="president-select-menu" v-if="togglePresidentChoices">
        <div class="president-option" v-for="president in matchList" :key="president" @click="selectPresident(president)">
            <img :src="require(`@/assets/presidents/${president.image}`)" />
            <p class="president-name">{{president.name}}</p>
        </div>
    </div>
</div>
</template>

<script>

export default ({
    name: 'MattleGuessInput',
    props: {
        availableAnswersList: Array,
    },
    data() {
        return {
            matchList: Array,
            orderedMatchList: Array,
            selectedPresident: Object,
            togglePresidentChoices: false,
            currentInput: String
        }
    },
    methods: {
        toggleOptionsOn() {
            this.togglePresidentChoices = true
        },
        toggleOptionsOff() {
            this.togglePresidentChoices = false
        },
        toggleSubmitOn() {
            document.querySelector('#guess-button').disabled = false
        },
        toggleSubmitOff() {
            document.querySelector('#guess-button').disabled = true
        },
        findGuessPresident() {
            this.toggleOptionsOn()
            this.toggleSubmitOff()
            const input = document.getElementById('guess-input').value
            this.currentInput = input
            const inputMatches = []
            if(input === "") {
                this.matchList = []
                this.orderedMatchList = []
                this.currentInput = ''
            } else {
                const regex = new RegExp(input,"i")
                for(const president of this.availableAnswersList) {
                    let name = president.name
                    let match = regex.exec(name)
                    if(match != null) {
                        inputMatches.push(president)
                    }
                }

                let sortedMatches = this.sortInputMatches(inputMatches, this.currentInput)
                this.matchList = sortedMatches
            }
        },
        sortInputMatches(inputMatches, input) {
            inputMatches.sort(function(a,b) {
                let inputLower = input.toLowerCase()
                let aLower = a.name.toLowerCase()
                let bLower = b.name.toLowerCase()

                let aStartsWith = aLower.startsWith(inputLower)
                let bStartsWith = bLower.startsWith(inputLower)

                let aContainsInput = aLower.includes(inputLower)
                let bContainsInput = bLower.includes(inputLower)

                if (aStartsWith && !bStartsWith) {
                    return -1
                } else if (!aStartsWith && bStartsWith) {
                    return 1
                } else if (aContainsInput && !bContainsInput) {
                    return -1
                } else if (!aContainsInput && bContainsInput) {
                    return 1
                } else {
                    return 0
                }
            })

            return inputMatches
        },
        selectPresident(president) {
            const input = document.getElementById('guess-input')
            input.value = president.name
            this.selectedPresident = president
            this.toggleOptionsOff()
            this.toggleSubmitOn()
        },
        enterKeySelectPresident() {
            if(this.matchList.length >= 1) {
                this.selectedPresident = this.matchList[0]
                this.toggleOptionsOff()
                this.toggleSubmitOn()
                this.submitPresident()
            }
        },
        submitPresident() {
            this.$emit('submit', this.selectedPresident)
            const input = document.getElementById('guess-input')
            input.value = ""
            this.toggleSubmitOff()
        }
    },
    created() {
        window.addEventListener('click', (event) => {
            if (!this.$el.contains(event.target)){
              this.toggleOptionsOff()
            }
        })
    }
})
</script>

<style scoped>
.guess-div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    margin: 15px 0 0 0;
    min-width: 500px;
}

#guess-input {
    margin: 0;
    padding: 0;
    min-height: 50px;
    max-height: 50px;
    min-width: 400px;
    max-width: 400px;
    border: none;
    box-shadow: 1px 1px 6px #08111e72;
    border-radius: 10px;
    font-size: 20px;
}

#guess-button {
    height: 55px;
    min-width: 75px;
    border: 2px solid #615f5f;
    background: #1e494672;
    color: #ffffff;
    box-shadow: 2px 2px 6px #08111e72;
    border-radius: 10px;
    margin-left: 10px;
    font-size: 20px;
}

#guess-button:hover {
    background: #08111e72;
    cursor: pointer;
}

#guess-button:disabled {
    background: #0a333072;
    box-shadow: none;
    color: #00ffeeb4;
    cursor: default;
}

.president-select-menu {
    position: absolute;
    z-index: 1;
    width: 500px;
    max-height: 300px;
    overflow-y: scroll;
    background: #ffffff;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 100%;
    text-align: center;
    box-shadow: 0 0 16px #000000;
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

.president-option {
    height: 80px;
}

.president-option:hover {
    background: #bdb0b0;
    cursor: pointer;
}

.president-option img {
    position: absolute;
    left: 0;
    height: 70px;
    width: 70px;
    padding: 5px 0 5px 0;
    margin-left: 2px;
    text-align: left;
}

.president-name {
    margin: 0;
    padding-top: 25px;
}

@media only screen and (min-width: 550px) and (max-width: 800px){
    .guess-div {
        min-width: 300px;
    }

    #guess-input {
        min-width: 250px;
    }

    .president-select-menu {
        width: 340px;
    }
}

@media only screen and (min-width: 350px) and (max-width: 550px) {

	.guess-div {
        min-width: 300px;
    }

    #guess-input {
        min-width: 250px;
    }

    .president-select-menu {
        width: 340px;
    }
}

@media only screen and (max-width: 350px) {
    .guess-div {
        min-width: 175px;
    }

    #guess-input {
        min-width: 175px;
    }

    .president-select-menu {
        width: 240px;
    }
}
</style>