<template>
    <div class="loginform">
        <kek-input class="input_form" placeholder="email:" v-model="user.email"/>
        <kek-input class="input_form" placeholder="Password:" type="password" v-model="user.password"/>
        <my-buttons class="subbmit_btn" @click="putPass"><strong>Submit</strong></my-buttons>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
    data () {
        return {
            user: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        putPass() {
            localStorage.setItem('userToken', 'myAuthToken');
            localStorage.setItem('isAuthenticated', true);
            this.$store.dispatch('updateAuthentication', true); // Или передайте false, чтобы сменить состояние

            console.log('ya-ya zer gut')
            this.$router.push('/')

        }
    }
}


</script>

<style scoped>
.loginform {
    /* border: 2px solid white; */
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 60%;
}
.subbmit_btn {
    margin-top: 24px;
    margin-right: auto;
    background-color: rgb(42, 42, 42);
}

.input_form {
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 16px;
}

</style>