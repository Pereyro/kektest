<template>
    <div class="root">
        <div class="wrapper">
            <div>
                <p class="title">Movie with id = {{ $route.params.id }}</p>
            </div>
            <div><!-- <h1 class="title">{{ $route.params }}</h1> -->
                <p class="title">Title: {{ $route.query.title }}</p>
                <p class="title">Year: {{ $route.query.year }}</p>
                <p class="title">Desc: {{ $route.query.desc }}</p></div>
            <div>
                
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

</style>