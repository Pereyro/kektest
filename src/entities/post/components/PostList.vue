<template>
    <div class="post" v-for="post in posts" :key="post.id">
        <div><strong>Название:</strong>{{ post.title }}</div>
        <div><strong>description:</strong>{{ post.body }}</div>
    </div>
</template>


<script>
export default {
    props: {
        posts: {
            type: Array,
            requared: true
        }
    }
}

</script>


<style scoped>
.post { 
    padding: 16px;
    border: 2px solid teal;
    margin-top: 16px;
}

</style>
