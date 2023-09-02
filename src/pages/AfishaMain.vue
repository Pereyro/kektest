<template>
    <div class="root">
        <!-- <h1 class="title">Afisha history</h1> -->
        <div class="wrapper">
            <div><button @click="fetchFilms">Get Posts</button></div>
            <div>
                <movie-item v-for="film in films" :film='film' :key="film.id"/>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import MovieItem from "@/entities/film/MovieItem";
// import axios from 'axios';
import { fetchFilms } from '@/shared/api';

export default {
    components: {
        MovieItem
    },

    data() {
        return {
            films: [
                {id: 1, title: 'Uitneil and Me', year: 2011, desc: 'Blabla'},
                {id: 2, title: 'Big angru Lis', year: 2021, desc: 'Blabla'},
                {id: 3, title: 'Jopa3', year: 2023, desc: 'Aaaaaa'},
                {id: '23-11-2018', title: 'Awakenings', year: 1990, desc: 'Доктор Малколм Сэйер, застенчивый врач и ученый, использует экспериментальные препараты, чтобы «пробуждать» обездвиженных жертв редкого заболевания.'},
                {id: '28-11-2018', title: 'Ночь на земле', year: 2004, desc: ''},
                {id: '29-11-2018', title: 'Жизнь как чудо', year: 2004, desc: ''},
                {id: '05-12-2018', title: "Matrimonio all'italiana", year: 1964, desc: ''},
            ]
        }
    },
    methods: {
        async fetchFilms() {
            try {
                const films = await fetchFilms();
                console.log(films);
                this.films = films;
            } 
            catch (e) {
                alert('Error fetching films');
            }
    },

    }
}
</script>


<style scoped>

</style>