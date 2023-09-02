<template>
    <div class="movie_container">
        <div class="movie_date"><h3 class="title">{{ film.id }}</h3></div>
        <div class="movie"> 
            <p><img class="movie_icon" src=""/></p>
            <div class="movie_annotation">
                <div class="title"><strong>{{ film.title }}</strong></div>
                <div><strong>Year:</strong> {{ film.year }}</div>
                <div><strong>Annotation:</strong> {{ film.desc }} </div>
            </div>
            <div class="button_container">
                    <!-- <my-buttons @click="$router.push(`/movies/${film.id}`)">read more</my-buttons> -->
                <my-buttons @click="openFilm(film)"><strong>view</strong></my-buttons>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    props: {
        film: {
            type: Object,
            requared: true
        }
    },
    methods: {
        watchMovie() {

        },
        openFilm(film) {
            this.$router.push({
                path: `/movies/${film.id}`,
                query: {
                    title: film.title,
                    desc: film.desc,
                    year: film.year
                }
            });
        }
    }
}

</script>


<style scoped>
.movie_container {
    display: grid;
    grid-template-columns: 1fr 3fr;
}

.movie_date {
    margin-top: 16px;
    /* border: 1px solid white; */
    border-radius: 50%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    /* width: 80px;
    height: 80px; */
    /* margin-bottom: auto; */
}
.movie {
    width:800px;
    display: flex; 
    margin-top: 16px;
    padding: 16px;
    border: 1px solid white;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 1ch;
    /* align-items: center; */
    /* bottom: 16px; */
    /* margin-right: auto; */
    /* justify-content: center; */
    /* justify-content: space-between; */
}

.movie_icon {
    width:80px;
    height:120px;
    float:left;
    margin-top: 4px;
    margin-left: auto;
    border: 1px solid whitesmoke;
    bottom: 16px;
    border-radius: 1ch;
}

.movie_annotation {
    color: aliceblue;
    margin-top: 16px;
    margin-left: 16px;
    
}

.button_container {
    display: flex;
    justify-content: flex-end; /* Выравнивание элементов справа */
    /* margin-top: 16px; */
    margin-left: auto;
    height: 30%;
    /* border: 2px solid white; */
    align-items: center;
}
</style>