<template>
    <div class="card shadow flex-fill mb-3">
        <div class="d-flex pt-2 justify-content-center">
            <div v-if="hasImage" class="w-25 ratio ratio-1x1 rounded-circle overflow-hidden">
                <img :src="image" class="card-img-top img-cover" :alt="headline">
            </div>
        </div>
        <div class="card-body d-flex flex-column">
            <h5 class="card-title text-center">{{ headline }}</h5>
            <p class="card-text mb-auto">{{ body }}</p>
            <p v-if="hasAffiliation" class="card-text mt-1">{{ affiliation }}</p>
            <p v-if="hasContact" class="card-text mt-1">{{ $t("general.contact") }}:
                <a :href="`mailto: ${contact}`" class="link-secondary" target="_blank">
                    {{ contact }}
                </a>
            </p>
            <p v-if="hasURL" class="card-text mt-1">
                <a :href="url" class="link-secondary" target="_blank">{{ url }}</a>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

interface Props {
    image?: string,
    headline: string,
    body: string,
    affiliation?: string,
    contact?: string,
    url?: string
}

const props = withDefaults(defineProps<Props>(), {
    image: undefined,
    headline: "Lorem",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    affiliation: undefined,
    contact: undefined,
    url: undefined
})

const hasImage = computed(() => props.image !== undefined)
const hasAffiliation = computed(() => props.affiliation !== undefined)
const hasContact = computed(() => props.contact !== undefined)
const hasURL = computed(() => props.url !== undefined)
</script>