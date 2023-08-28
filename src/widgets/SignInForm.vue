<template>
        <div class="signinform">
            <kek-input placeholder="First name:"/>
            <kek-input placeholder="Last name:"/>
            <kek-input placeholder="email:"/>
            <kek-input placeholder="Password:" type="password"/>
            <kek-input placeholder="Conform password:" type="password"/>
            <my-buttons class="subbmit_btn"><strong>Submit</strong></my-buttons>
        </div>
</template>

<script>

</script>

<style scoped>

.signinform {
    display: flex; /* Используем flex layout */
    align-items: center;
    flex-direction: column; 
    
}
.subbmit_btn {
    margin-top: 16px;

}

</style>