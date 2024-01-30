<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/userStore";
import Button from "../../components/button/Button.vue";

const { state, login } = useUserStore();

const handleLogin = async () => {
    try {
        await login(state.username, state.password);
        // const loggedInValue = localStorage.getItem("isLoggedIn");

        if (state.isLoggedIn === true) {
            console.log("isLoggedIn", state.isLoggedIn)
            navigateTo("/");
        }

        console.log("isLoggedIn", loggedInValue);
    } catch (error) {
        state.username = "";
        state.password = "";
    }
}

</script>

<template>
    <h1>Welcome back! Let&apos;s log in!</h1>
    <form class="form-wrapper">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Username" v-model="state.username" required />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password" v-model="state.password" required />
        </div>
        <p class="error-message disclaimer">{{ state.errorMessage }}</p>
        <Button class="primary" :handleOnClick="handleLogin" btnText="Login" />
        <div class="light-pair-text">
            <p class="disclaimer">First time here?</p>
            <!-- <p class="disclaimer">
                <NuxtLink @click={  handleClearOnNavigate } class="disclaimer bold" to="/register">Register</NuxtLink>
                for an
                account!
            </p> -->
        </div>
    </form>
</template>

<style lang="scss" scoped></style>