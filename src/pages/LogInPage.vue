<template>
    <body class="root">
        <div class="wrapper">
            <div></div>
            <div>
                <h1 class="title">PLEASE, LOG IN</h1>
                <log-in-form/>
            </div>
            <div></div>

        </div>

    </body>
   
</template>




<script>
import LogInForm from "@/widgets/LogInForm";

export default {
    components: {
        LogInForm
    },
    data () {
}
}
</script>

<style scoped> 

</style>