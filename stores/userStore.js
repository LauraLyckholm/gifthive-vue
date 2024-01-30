import { defineStore } from "pinia";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const apiWithEndpoint = (endpoint) => `${BASE_URL}/user-routes/${endpoint}`;

export const useUserStore = defineStore("userStore", () => {
    const state = {
        username: "",
        accessToken: "",
        password: "",
        errorMessage: "",
        isLoggedIn: false
    }

    const login = async (username, password) => {
        if (!username || !password) {
            state.errorMessage = "Please enter both username and password";
            return;
        };

        try {
            const response = await fetch(apiWithEndpoint("login"), {
                method: "POST",
                body: JSON.stringify({ username, password })
            })
            const data = await response.json();
            state.username = data.username;
            state.accessToken = data.accessToken;
            state.isLoggedIn = true;

            localStorage.setItem("username", data.username);
            localStorage.setItem("accessToken", data.accessToken);

        } catch (error) {
            state.errorMessage = "Something went wrong, please try again";

            state.username = "";
            state.password = "";
            state.accessToken = "";
        }
    }


    return {
        state,
        login
    }
});