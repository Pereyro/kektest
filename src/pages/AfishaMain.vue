<template>
    <div class="root">
        <!-- <h1 class="title">Afisha</h1> -->
        <div class="wrapper">
            <div> </div>
            <div>
                <movie-list :films="films"/>
            </div>
            <div></div>

            
        </div>
        
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

</style>