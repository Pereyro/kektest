<template>
    <div class="kekfon">
        <movie-item :film="film1" />
        <movie-item :film="film2" />
    </div>
</template>

<script>
import MovieItem from "@/entities/film/MovieItem";

export default {
    components: {
        MovieItem
    },

    data() {
        return {
            film1: {id: 1, title: 'Jopa1', desc: 'Blabla'},
            film2: {id: 2, title: 'Jopa2', desc: 'Blabla'}
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