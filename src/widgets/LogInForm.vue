<template>
    <div class="loginform">
        <kek-input placeholder="email:" v-model="user.email"/>
        <kek-input placeholder="Password:" type="password" v-model="user.password"/>
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
            this.$store.dispatch('updateAuthentication', true); // Или передайте false, чтобы сменить состояние

            console.log('ya-ya zer gut')
            // this.$emit('authenticated', true);
            this.$router.push('/')

        }

        // async putPass() {
        //         try {
        //             const response = await axios.get("http://192.168.1.104:5000/getpass?pass=jopa");
        //             console.log(response)
        //         } 
        //         catch (e) {
        //             alert('Errrrrrorrrr')
        //         }

        //         localStorage.setItem('userToken', 'myAuthToken');

            // },
    }
}


</script>

<style scoped>
.loginform {
    border: 2px solid white;
    display: flex;
    align-items: center;
    display: flex;   
    align-items: left;
    flex-direction: column;
}
.subbmit_btn {
margin-top: 16px;

}

</style>