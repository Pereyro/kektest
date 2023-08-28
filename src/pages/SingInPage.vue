<template>
    <body class="root">
        
        <div class="wrapper">
            <div>
            </div>
            <div>
                <h1 class="title">PLEASE SIGN IN:</h1>
                <sign-in-form/>
            </div>
            <div></div> 
        </div>
    </body>
</template>

<script>
    import SignInForm from "@/widgets/SignInForm";
    export default {
        components: {
            SignInForm,
        }
    }
</script>

<style scoped>

</style>