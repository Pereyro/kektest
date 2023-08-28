<template>
    <div class="root">
        <h1 class="title">{{ film.name }}</h1>
        <p>Movie with id = {{ $route.params.id }}</p>
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