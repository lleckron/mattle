<template>
    <div class="category-container">
        <div class="guess-category">
            <p>Image: </p>
        </div>
        <div class="guess-category">
            <p>Name: </p>
        </div>
        <div class="guess-category">
            <p>Birth Year: </p>
        </div>
        <div class="guess-category">
            <p>Birth State: </p>
        </div>
        <div class="guess-category">
            <p>President during war: </p>
        </div>
        <div class="guess-category">
            <p>Political Party: </p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.category-container {
    display: flex;
    flex-direction: row;
    position: relative;
    margin-top: 25px;
    max-width: 840px;
}

.guess-category {
    display: flex;
    margin: 10px 21px 0 0;
    width: 120px;
    min-height: 30px;
    max-height: 60px;
    align-items: center;
    border-bottom: 1px solid black;
}

.guess-category p {
    width: 120px;
    min-height: 30px;
    max-height: 60px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    white-space: pre-line;
}

@media only screen and (min-width: 550px) and (max-width: 820px){

    .category-container {
        left: 15px;
    }

    .guess-category {
        margin: 10px 15px 0 0;
        width: 80px;
        height: 60px;
    }

    .guess-category p {
        width: 80px;
        min-height: 30px;
        max-height: 60px;
        font-size: 15px;
    }
}

@media only screen and (min-width: 321px) and (max-width: 550px) {

    .category-container {
        left: 100px;
    }

    .guess-category {
        margin: 10px 14px 0 0;
        width: 80px;
        height: 60px;
    }

    .guess-category p {
        width: 80px;
        min-height: 30px;
        max-height: 60px;
        font-size: 14px;
    }
}

@media only screen and (max-width: 321px) {
    .category-container {
        left: 150px;
    }

    .guess-category {
        margin: 10px 14px 0 0;
        width: 70px;
        height: 60px;
    }

    .guess-category p {
        width: 70px;
        min-height: 30px;
        max-height: 60px;
        font-size: 14px;
    }
}

</style>