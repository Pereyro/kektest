<template>
    <div class="post">
        <div>
            <div><strong>Название:</strong>{{ post.title }}</div>
            <div><strong>description:</strong>{{ post.body }}</div>
        </div>
        <my-buttons
        @click="$emit('remove', post)"
        >delete</my-buttons>
    </div>
</template>

<script>
import MyButtons from '@/shared/ui/MyButtons';

export default {
    components: {MyButtons},
    props: {
        post: {
            type: Object,
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
    align-items: center;
    display: flex;
    justify-content: space-between;
}

</style>