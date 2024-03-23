<template>
    <div class="row d-flex justify-content-center overflow-x-none">
        <div class="col-sm-12 col-md-5 p-4 mt-5">
            <h3>
                Login to continue
            </h3>

            <Toast v-if="feedback.message" :feedback="feedback"/>

            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                        >Email address</label
                    >
                    <input
                        type="email"
                        v-model="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"
                        >Password</label
                    >
                    <input
                        type="password"
                        v-model="password"
                        class="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div class="my-3">
                    Don't have an account? <RouterLink to="create-account"> Create Account </RouterLink> 
                </div>
                <button type="submit" class="btn btn-primary" @click="login">Login</button>
            </form>

            
        </div>        
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Toast from '@/components/Toast.vue'

let email = ref("")
let password = ref("")
let feedback = reactive({
    message: '',
    status: ''
})

function login(e) {
    e.preventDefault()

    feedback.message = ''
    feedback.status = ''

    if(!email.value || !password.value) {
        feedback.message = "all inputs are required"
        feedback.status = 'failed'

        return
    }

    let user = localStorage.getItem("user")
    user = JSON.parse(user)

    if (user.email == email.value && user.password == password.value) {
        feedback.message = "log in success"
        feedback.status = 'success'        
    } else {
        feedback.message = "incorrect email or passowrd"
        feedback.status = 'failed'
    }

    // reset and hide feedback after 5seconds
    setTimeout(() => {
        feedback.message = ''
        feedback.status = ''
    }, 5000)
}
</script>

<style scoped></style>
