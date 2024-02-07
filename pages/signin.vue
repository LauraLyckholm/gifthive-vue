<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/userStore";
import Button from "../../components/button/Button.vue";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const userData = ref({
    username: "",
    password: "",
    isLoggedIn: false,
    errorMessage: "",
});

const handleLogin = async () => {
    const { data, error } = await useFetch(`${BASE_URL}/user-routes/login`, {
        method: "POST",
        body: {
            username: userData.value.username,
            password: userData.value.password,
        },
    });

    if (data) {
        localStorage.setItem("token", data.value.response.accessToken);
        localStorage.setItem("username", userData.value.username);
        localStorage.setItem("isLoggedIn", true);
        navigateTo("/");
        return;
    }

    if (error) {
        userData.errorMessage = error;
        console.log("error", error);
        userData.username = "";
        userData.password = "";
        return;
    }
}

</script>

<template>
    <h1>Welcome back! Let&apos;s log in!</h1>

    <form class="form-wrapper">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Username" v-model="userData.username" required />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password" v-model="userData.password" required />
        </div>
        <p class="error-message disclaimer">{{ userData.errorMessage }}</p>

        <Button class="primary" :handleOnClick="handleLogin" btnText="Login" />
        <div class="light-pair-text">
            <p class="disclaimer">First time here?</p>
            <p class="disclaimer">
                <a class="bold" href="/register">Register</a>
                for an
                account!
            </p>

        </div>
    </form>
</template>

<style lang="scss" scoped>
h2 {
    text-align: center;
}

.light-pair-text {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.error-message {
    color: red;
}
</style>