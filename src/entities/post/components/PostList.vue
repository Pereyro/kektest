<template>
    <div v-if="posts.length > 0">
        <h2>Posts list:</h2>
        <post-item v-for="post in posts" :post='post' :key="post.id"
        @remove="$emit('remove', post)"
        />
    </div>
    <div v-else>
        <h2 style="color:brown">Poshol hah</h2>
    </div>
    <div v-show="posts.length == 0">Kuvshinchik pust</div>
    <div v-show="posts.length > 0">
        chitay posti bleat
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
