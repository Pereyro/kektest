<template>
        <div class="signinform">
            <kek-input placeholder="First name:" class="input_form"/>
            <kek-input placeholder="Last name:" class="input_form"/>
            <kek-input placeholder="email:" class="input_form"/>
            <kek-input placeholder="Password:" type="password" class="input_form"/>
            <kek-input placeholder="Conform password:" type="password" class="input_form"/>
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