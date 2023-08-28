<template>
    <div class="movie">
        <p>
            <!-- <h3 class="movie_title">Movie name:</h3> -->
            <img class="movie_icon" src=""/>
            
        </p>
        
        <div class="movie_annotation">
            <div class="title"><strong>{{ film.title }}</strong></div>
            <div><strong>Year:</strong> {{ film.year }}</div>
            <div><strong>Annotation:</strong> {{ film.desc }} </div>
            
        </div>
        
        <div class="button_container">
                <my-buttons @click="$router.push(`/movies/${film.id}`)">read more</my-buttons>
                
                <!-- <my-buttons @click="watchMovie" style="align-items: center;">watch</my-buttons> -->
                        
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

        }
    }
}

</script>


<style scoped>
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
    display: flex;
}
</style>