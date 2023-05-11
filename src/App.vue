<template>

	<MattleHeader />

	<TransitionGroup name="fade-out" mode="in-out">

		<div v-if="topicClicked === false" class="description-container">
			<p class="description">Guess world leaders throughout History</p>
		</div>

		<div v-if="topicClicked === false" class="seal-container">
			<button class="play-button" @click="mattleSealClick()">
				<img src="@/assets/mattle-seal.png" alt="mattle seal" id="mattle-seal" draggable="false"/>
			</button>
		</div>

	</TransitionGroup>

	<Transition name="fade-in" mode="out-in">
		<MattleGame v-if="topicClicked === true"/>
	</Transition>

</template>

<script>
import MattleHeader from './components/MattleHeader.vue'
import MattleGame from '@/components/MattleGame.vue'

export default {
	name: 'App',
	components: {
		MattleHeader,
		MattleGame
	},
	data() {
		return {
			topicClicked: false,
		}
	},
	methods: {
		mattleSealClick() {
			const seal = document.getElementById('mattle-seal')
			seal.classList.add('seal-animation')
			this.topicClicked = true
			setTimeout(() => {
				seal.classList.remove('seal-animation')
			}, 500)
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Kanit:wght@300&display=swap');

html {
	margin: 0;
	padding: 0;
	min-width: 100vw;
	min-height: 100vh;
	font-family: 'Inter', sans-serif;
	font-family: 'Kanit', sans-serif;
	background-size: 400% 400%;
	background-image: linear-gradient(-45deg,#95eccc,#ffffff,#888888,#f0f0f0);
	animation: gradient 5s linear infinite;
}

.description-container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-width: 400px;
}

.description {
    margin: 0;
    font-size: 25px;
    text-align: center;
}

.seal-container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}

.play-button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 250px;
	margin: 35px 0 0 0;
	padding: 0;
	border: none;
	background: transparent;
}

.play-button:hover {
	cursor: pointer;
}

.play-button img {
	width: 100%;
	-webkit-user-select: none;
	user-select: none;
}

.seal-animation {
	animation-name: sealClick;
	-webkit-animation-name: sealClick;
	animation-duration: .5s;
	-webkit-animation-duration: .5s;
	animation-iteration-count: 1;
	-webkit-animation-iteration-count: 1;
	animation-timing-function: ease;
	-webkit-animation-timing-function: ease;
	animation-fill-mode: forwards;
	-webkit-animation-fill-mode: forwards;
}

@keyframes sealClick {
	0% {
		scale: 1;
	}
	50% {
		scale: .8;
	}
	100% {
		scale: 1;
	}
}

@-webkit-keyframes sealClick {
	0% {
		scale: 1;
	}
	50% {
		scale: .8;
	}
	100% {
		scale: 1;
	}
}

.fade-out-enter-active,
.fade-out-leave-active {
	transition: opacity 0.4s ease-out;
}

.fade-out-enter-from,
.fade-out-leave-to {
	opacity: 0;
}

.fade-in-enter-active,
.fade-in-leave-active {
	transition: opacity 2s ease-in;
}

.fade-in-enter-from,
.fade-in-leave-to {
	opacity: 0;
}

</style>
