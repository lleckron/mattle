<template>
    <div class="guess-row">
            <div class="guess-square">
                <img :src="require(`@/assets/presidents/${guessedPresident.image}`)" />
            </div>
        <div :class="'guess-square name ' + nameStyle">
            <p>{{guessedPresident.name}}</p>
        </div>
        <div :class="'guess-square ' + birthYearStyle">
            <p>{{guessedPresident.birthYear}}</p>
        </div>
        <div :class="'guess-square ' + birthStateStyle">
            <p>{{guessedPresident.birthState}}</p>
        </div>
        <div :class="'guess-square ' + warStyle">
            <p>{{guessedPresident.war}}</p>
        </div>
        <div :class="'guess-square ' + partyStyle">
            <p>{{guessedPresident.party}}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: "GuessRow",
    props: {
        guessedPresident: {},
        answerPresident: {}
    },
    data() {
        return {
            nameStyle: String,
            birthYearStyle: String,
            birthStateStyle: String,
            warStyle: String,
            partyStyle: String,
        }
    },
    methods: {
        checkName() {
            if(this.answerPresident.name == this.guessedPresident.name) {
                this.nameStyle = "correct"
            } else {
                this.nameStyle = "incorrect"
            }
        },
        checkYear() {
            if(this.answerPresident.birthYear == this.guessedPresident.birthYear) {
                this.birthYearStyle = "correct"
            } else if((this.guessedPresident.birthYear >= this.answerPresident.birthYear - 25) && (this.guessedPresident.birthYear <= this.answerPresident.birthYear + 25)) {

                if(this.guessedPresident.birthYear > this.answerPresident.birthYear) {
                    this.birthYearStyle = "similar-lower"
                } else {
                    this.birthYearStyle = "similar-higher"
                }

            }else {
                this.birthYearStyle = "incorrect"
            }
        },
        checkState() {
            if(this.answerPresident.birthState == this.guessedPresident.birthState) {
                this.birthStateStyle = "correct"
            } else {
                this.birthStateStyle = "incorrect"
            }

            if(this.guessedPresident.birthState.length >= 10) {
                this.birthStateStyle = this.birthStateStyle + " long"
            } else {
                this.birthStateStyle = this.birthStateStyle + " short"
            }
        },
        checkWar() {
            if(this.answerPresident.war == this.guessedPresident.war) {
                this.warStyle = "correct"
            } else {
                this.warStyle = "incorrect"
            }

            if(this.guessedPresident.war.length >= 10) {
                this.warStyle = this.warStyle + " long"
            } else {
                this.warStyle = this.warStyle + " short"
            }
        },
        checkParty() {
            if(this.answerPresident.party == this.guessedPresident.party) {
                this.partyStyle = "correct"
            } else {
                this.partyStyle = "incorrect"
            }

            if(this.guessedPresident.party.length >= 10) {
                this.partyStyle = this.partyStyle + " long"
            } else {
                this.partyStyle = this.partyStyle + " short"
            }
        },
    },
    mounted() {
        this.checkName()
        this.checkYear()
        this.checkState()
        this.checkWar()
        this.checkParty()
    }
}
</script>

<style scoped>

.guess-row {
    width: 100%;
    max-width: 840px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px 0 10px 0; 
}

.guess-square {
    margin-right: 17px;
    min-width: 120px;
    max-width: 120px;
    height: 130px;
    background: white;
    border: 2px solid #c0c0c0;
    box-shadow: 2px 4px 6px #08111e72;
}

.guess-square img {
    width: 120px;
    height: 130px;
    justify-content: center;
}

.guess-square p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    word-break: break-word;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    white-space: normal;
    color: #ffffff;
    text-shadow: 1px 1px 3px #000000;
}

.guess-square.name p{
    font-size: 20px;
}

.guess-square.long p{
    font-size: 15px;
}

.guess-square.short p{
    font-size: 23px;
}

.guess-square.correct {
    background: #10bd49;
}

.guess-square.incorrect {
    background: #d44a2f;
}

.guess-square.similar-higher {
    background: #e2e23a url('../assets/arrow-up.png') no-repeat;
    background-size: 110%;
    background-position-x: 50%;
    background-position-y: 50%;
}

.guess-square.similar-lower {
    background: #e2e23a url('../assets/arrow-down.png') no-repeat;
    background-size: 110%;
    background-position-x: 75%;
    background-position-y: 50%;
}

.guess-square.similar p {
    text-shadow: 1px 2px 3px #000000;
}

@media only screen and (min-width: 550px) and (max-width: 820px){

    .guess-row {
        left: 12px;
    }

    .guess-square {
        min-width: 80px;
        max-width: 80px;
        height: 100px;
        margin-right: 12px;
    }

    .guess-square img {
        width: 80px;
        height: 100px;
    }

    .guess-square p {
        font-size: 20px;
    }

    .guess-square.name p{
        font-size: 13px;
    }

    .guess-square.long p{
        font-size: 12px;
    }

    .guess-square.short p{
        font-size: 20px;
    }
}

@media only screen and (min-width: 321px) and (max-width: 550px) {
    .guess-row {
        left: 100px;
    }

    .guess-square {
        min-width: 78px;
        max-width: 78px;
        height: 100px;
        margin-right: 12px;
    }

    .guess-square img {
        width: 78px;
        height: 100px;
    }

    .guess-square p {
        font-size: 20px;
    }

    .guess-square.name p{
        font-size: 13px;
    }

    .guess-square.long p{
        font-size: 12px;
    }

    .guess-square.short p{
        font-size: 20px;
    }
}

@media only screen and (max-width: 321px) {
    .guess-row {
        left: 150px;
    }

    .guess-square {
        min-width: 68px;
        max-width: 68px;
        height: 100px;
        margin-right: 12px;
    }

    .guess-square img {
        width: 68px;
        height: 100px;
    }

    .guess-square p {
        font-size: 20px;
    }

    .guess-square.name p{
        font-size: 13px;
    }

    .guess-square.long p{
        font-size: 12px;
    }

    .guess-square.short p{
        font-size: 20px;
    }
}

</style>