<template>
    <div class="root">
        <!-- <h1 class="title">Afisha history</h1> -->
        <div class="wrapper">
            <div></div>
            <div>
                <movie-item v-for="film in films" :film='film' :key="film.id"/>
            </div>
            <div></div>
        </div>
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
            films: [
                {id: 1, title: 'Uitneil and Me', year: 2011, desc: 'Blabla'},
                {id: 2, title: 'Big angru Lis', year: 2021, desc: 'Blabla'},
                {id: 3, title: 'Jopa3', year: 2023, desc: 'Aaaaaa'}
            ]
        }
    },
}
</script>


<style scoped>

</style>