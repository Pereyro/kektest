<template>
    <div class="kekfon">

        <div class="pleer">
            <!-- <video style="width: 100%; height: 100%;" controls autoplay>
                <source src="/videos/video_2023-08-08_16-43-25.mp4" type="video/mp4">
            </video> -->
        </div>
        <!-- <div><img src="/images/icebear.jpeg" alt="Image 1" /></div> -->

    </div>
</template>

<script>

</script>
 


<style scoped>
.kekfon {
    /* Добавьте следующие стили */
    background-image: url('~/public/images/kekfon.png');
    background-repeat: no-repeat;
    background-size: cover; /* Растянуть изображение на весь элемент */
    background-position: center center; /* Позиционирование изображения по центру */
    height: 100vh; /* Занимать всю высоту экрана */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
}


/* .title {
    /* color: aqua; */
/* } */ 

.pleer {
    height: 600px;
    width: 800px;
    border: 4px solid white;
}

</style>