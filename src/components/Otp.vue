<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-8 offset-md-2 text-center mt-5">
                <div class="logo">
                    <img class="rounded" src="https://picsum.photos/45" alt="">
                    <p><span>Brand Name</span></p>
                </div>
                <div class="register mt-3">
                    <div class="row justify-content-center">
                        <h5><span>Confirm your OTP</span></h5>
                        <div class="col-5 col-md-6">
                            <input type="text" v-model="otpCode" class="form-control shadow-none text-center"  placeholder="0000">
                        </div>
                        <div v-if="isVerify" class="col-8">
                            <small class="text-danger">OTP Code Error</small>
                        </div>
                    </div>
                    
                    <div class="mt-3">
                        <button @click="submit()" class="btn btn-primary btn-sm">VERIFY</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Otp",
    data(){
        return{
            otpCode:'',
            isVerify:false
        }
    },
    methods:{
        submit() {
            this.isVerify = true
            console.log("submit")
        }
    }
}
</script>

<style scoped>

</style>