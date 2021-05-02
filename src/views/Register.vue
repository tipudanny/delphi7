<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-8 offset-md-2 text-center">
                <div class="logo">
                    <img class="rounded" src="https://picsum.photos/45" alt="">
                    <p><span>Brand Name</span></p>
                </div>
                <div class="register mt-3">
                    <div class="row justify-content-center">
                        <div class="col-3 col-md-2">
                            <input type="text" v-model="userInfo.USER_MOBILECC" class="form-control shadow-none"  placeholder="+00">
                        </div>
                        <div class="col-5 col-md-6">
                            <input type="text" v-model="userInfo.USER_MOBILE" @keyup="phoneValidate()" class="form-control shadow-none"  placeholder="017xxxxxxxx">
                        </div>
                        <div v-if="checkMobile" class="col-8">
                            <small class="text-danger">Mobile registered or pending Verification</small>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-4 mt-3">
                            <input type="text" v-model="userInfo.USER_FIRSTNAME" class="form-control shadow-none"  placeholder="First Name">
                        </div>
                        <div class="col-4 mt-3">
                            <input type="text" v-model="userInfo.USER_LASTNAME" class="form-control shadow-none"  placeholder="Last Name">
                        </div>
                        <div class="col-8 mt-3">
                            <input type="password" v-model="userInfo.USER_PASSWORD" class="form-control shadow-none"  placeholder="Password">
                        </div>
                        <div class="col-8 mt-3">
                            <input type="password" v-model="userInfo.CONFIRM_PASSWORD" class="form-control shadow-none"  placeholder="Confirm password">
                        </div>
                        <div class="col-8 mt-3">
                            <input type="email" v-model="userInfo.USER_EMAIL" class="form-control shadow-none" placeholder="email@example.com">
                        </div>
                    </div>
                    <div class="mt-3">
                        <button @click="register()" class="btn btn-primary btn-sm">SIGN UP</button>
                        <button class="btn btn-danger btn-sm">CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'Register',
    mounted() {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.common['Content-Type'] = 'application/json';
    },
    data(){
        return{
            userInfo:{
                USER_FIRSTNAME:'',
                USER_LASTNAME:'',
                USER_EMAIL:'',
                USER_MOBILE:'',
                USER_MOBILECC:'',
                USER_PASSWORD:'',
                CONFIRM_PASSWORD:'',
            },
            checkMobile:false,
        }
    },
    methods:{
        phoneValidate(){
            if (this.userInfo.USER_MOBILE == ''){
                this.checkMobile = false
            }
        },
        register(){
            axios.post('https://ec2-3-141-194-71.us-east-2.compute.amazonaws.com/users/register',this.userInfo)
                .then((response)=>{
                    if (response.ResponseCode == 201 || response.ResponseCode == 202){
                        router.push({ path: 'otp-confirmation' })
                    }
                    else if(response.ResponseCode == -1){
                        this.checkMobile == true
                    }
            }).catch(errors =>{
                console.log(errors)
            })
        }
    },
}
</script>

<style scoped lang="scss">
.container{
    & > div{
        margin-top: 40px;
        & > div{
            .logo{
                margin-bottom: 35px;
                align-items: center;
                display: inline-flex;
                p{
                    margin:0;
                    margin-left: 15px;
                    font-size: 18px;
                    font-weight: 600;
                    border-bottom: 1px solid;
                    display: inline-flex;
                }
            }
            .register{
                //background: #f1f1f1;
                padding: 15px;
                button{
                    margin-right: 20px;
                }
            }
        }
    }
}
</style>
