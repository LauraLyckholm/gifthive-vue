<script setup>

const props = defineProps([
    "class",
    "handleOnClick",
    "btnText"
]);
</script>

<template>
    <button type="submit" :class="props.class" @click.prevent="props.handleOnClick">
        {{ props.btnText }}
    </button>
</template>