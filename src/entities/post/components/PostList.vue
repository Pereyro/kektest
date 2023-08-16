<template>
    <div>
        <h2>Post list:</h2>
        <post-item v-for="post in posts" :post='post' :key="post.id"
        @remove="$emit('remove', post)"
        />
    </div>
</template>


<script>
import PostItem from '@/entities/post/components/PostItem.vue';
export default {
    components: {PostItem},
    props: {
        posts: {
            type: Array,
            requared: true
        }
    }
}

</script>


<style scoped>

</style>
