<template>
    <div class="row d-flex justify-content-center overflow-x-none">
        <div class="col-sm-12 col-md-5 p-4 mt-5">
            <h3>
                Create an account
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
                
                <div class="mb-3">
                    <label for="confirmPassword" class="form-label"
                        >Confirm Password</label
                    >
                    <input
                        type="password"
                        v-model="passwordConfirmation"
                        class="form-control"
                        id="confirmPassword"
                    />
                </div>
                <div class="my-3">
                    Already registered? <RouterLink to="/"> Login </RouterLink>
                </div>
                <button type="submit" class="btn btn-primary" @click="createAccount">Create Account</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Toast from '@/components/Toast.vue';

let email = ref("")
let password = ref("")
let passwordConfirmation = ref("")
let feedback = reactive({
    message: '',
    status: ''
})

function createAccount(e) {
    e.preventDefault()

    feedback.message = ''
    feedback.status = ''

    if (!email.value || !password.value) {
        feedback.message = "all inputs are required"
        feedback.status = 'failed'
        return
    }
    if (password.value != passwordConfirmation.value) {
        feedback.message = "password and password confirmation must match"
        feedback.status = 'failed'     
        return
    }

    let userObject = {
        email: email.value,
        password: password.value
    }

    localStorage.setItem("user", JSON.stringify(userObject))

    
    feedback.message = "account created"
    feedback.status = 'success'

    // reset and hide feedback after 5seconds
    setTimeout(() => {
        feedback.message = ''
        feedback.status = ''
    }, 5000)
}
</script>

<style scoped></style>
