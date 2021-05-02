<template>
    <div class="container mt-5">
        <div class="row">
            <div class="d-flex">
                <router-link to="/login" class="btn btn-sm btn-secondary">Login</router-link>
                <router-link to="/register" class="btn btn-sm btn-secondary">Register</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "Home"
}
</script>

<style scoped>
.btn{
    margin-left: 10px;
}
</style>