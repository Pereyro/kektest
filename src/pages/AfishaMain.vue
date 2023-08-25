<template>
    <div class="kekfon">
        <movie-list :films="films"/>
    </div>
</template>

<script>
import MovieList from "@/entities/film/MovieList";

export default {
    components: {
        MovieList
    },

    data() {
        return {
            films: [
                {id: 1, title: 'Jopa1', year: 2011, desc: 'Blabla'},
                {id: 2, title: 'Jopa2', year: 2021, desc: 'Blabla'},
                {id: 3, title: 'Jopa3', year: 2023, desc: 'Aaaaaa'}
            ]
        }
    },
}

</script>


<style scoped>
.kekfon {
    /* Добавьте следующие стили */
    background-image: url('kek_fon.png');
    background-repeat: no-repeat;
    background-size: cover; /* Растянуть изображение на весь элемент */
    background-position: center center; /* Позиционирование изображения по центру */
    height: 100vh; /* Занимать всю высоту экрана */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
}

</style>