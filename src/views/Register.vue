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
                            <input type="text" class="form-control shadow-none"  placeholder="+00">
                        </div>
                        <div class="col-5 col-md-6">
                            <input type="text" class="form-control shadow-none"  placeholder="017xxxxxxxx">
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-4 mt-3">
                            <input type="text" class="form-control shadow-none"  placeholder="First Name">
                        </div>
                        <div class="col-4 mt-3">
                            <input type="text" class="form-control shadow-none"  placeholder="Last Name">
                        </div>
                        <div class="col-8 mt-3">
                            <input type="password" class="form-control shadow-none"  placeholder="Password">
                        </div>
                        <div class="col-8 mt-3">
                            <input type="password" class="form-control shadow-none"  placeholder="Confirm password">
                        </div>
                        <div class="col-8 mt-3">
                            <input type="email" class="form-control shadow-none" placeholder="email@example.com">
                        </div>
                    </div>
                    <div class="mt-3">
                        <button class="btn btn-primary btn-sm">SIGN UP</button>
                        <button class="btn btn-danger btn-sm">CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
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
