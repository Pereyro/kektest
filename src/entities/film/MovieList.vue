<template>
    <div v-if="films.length > 0">
        <h2>Film list:</h2>
        <movie-item v-for="film in films" :film='film' :key="film.id"
        />
    </div>
    <div v-else>
        <h2 style="color:brown">oshol hah</h2>
    </div>
</template>


<script>
import MovieItem from '@/entities/film/MovieItem.vue';
export default {
    components: {MovieItem},
    props: {
        films: {
            type: Array,
            requared: true
        }
    }
}

</script>


<style scoped>

</style>
