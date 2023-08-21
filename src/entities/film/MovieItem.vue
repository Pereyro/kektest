<template>
    <div class="movie">
        <p>
            <!-- <h3 class="movie_title">Movie name:</h3> -->
            <img class="movie_icon" src=""/>
            
        </p>
        
        <div class="movie_annotation">
            <div><strong>Movie name:</strong> {{ film.title }}</div>
            <div><strong>Movie description:</strong> {{ film.desc }} </div>
            <div class="button_container">
                <my-buttons>view</my-buttons>
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
    }
}

</script>


<style scoped>
.movie {
    width:800px;
    display: flex; 
    margin-top: 16px;
    padding: 16px;
    border: 4px solid white;
    background: rgba(0, 0, 0, 0.5);
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
    border: 3px solid whitesmoke;
    bottom: 16px;
}

.movie_annotation {
    color: aliceblue;
    margin-top: 16px;
    margin-left: 16px;
    
}

.button_container {
    display: flex;
    justify-content: flex-end; /* Выравнивание элементов справа */
    margin-top: 16px;
}
</style>