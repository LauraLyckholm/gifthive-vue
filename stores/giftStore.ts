import { defineStore } from "pinia";
import boardData from "~/data/board.json"

export const useGiftStore = defineStore("giftStore", () => {
    const board = ref(boardData);

    return {
        board
    }
});