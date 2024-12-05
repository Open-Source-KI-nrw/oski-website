<template>
    <div :class="['p-5', 'text-center', classObject]">
        <div class="container py-5">
            <h1 class="text-body-emphasis">{{ headline }}</h1>
            <p class="col-lg-8 mx-auto lead">{{ body }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    headline?: string,
    body?: string,
    gradient?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    headline: "Lorem",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    gradient: false
})


const classObject = computed(() => ({
    "bg-body-tertiary": !props.gradient,
    "bg-body-gradient": props.gradient
}))

</script>

<style lang="scss">
.bg-body-gradient {
    background: linear-gradient(-45deg, #f0663b, #e41363, #23a6d5, #14b38e);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;

    h1,
    h2,
    p {
        text-shadow: .125rem .375rem .25rem rgba(#000, .25);
    }
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>