<template>
    <div class="mattle-header">
        <h1 class="hollow-animation">Mattle</h1>
    </div>
</template>

<script>
export default {
    name: 'MattleHeader',
}
</script>

<style scoped>
.mattle-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    white-space: nowrap;
}

.hollow-animation {
    text-align: center;
    font-weight: bold;
    font-size: 80px;
    background-image: linear-gradient(to right, #05445E, #189AB4, #2E8BC0, #05445E); 
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;  
    animation: title-animation 135s linear infinite;
}

@keyframes title-animation {
    to {
        background-position: 1000vh;
    }
}
</style>