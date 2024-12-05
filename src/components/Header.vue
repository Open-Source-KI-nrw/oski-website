<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-lg">
            <router-link class="navbar-brand" to="/">Open Source-KI.nrw</router-link>
            <button class="navbar-toggler" type="button" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" :aria-expanded="isCollapseShown" aria-label="Toggle navigation"
                ref="collapseToggle" @click.prevent="toggleCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div :class="{ 'show': isCollapseShown }" class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav nav-underline text-center text-lg-start me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/news">{{ $t("header.navigation.news") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/project">{{ $t("header.navigation.project") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/team">{{ $t("header.navigation.team") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">{{ $t("header.navigation.contact") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/impress">{{ $t("header.navigation.impress") }}</router-link>
                    </li>
                </ul>
                <LocaleChanger></LocaleChanger>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import LocaleChanger from '@/components/LocaleChanger.vue'
import { ref } from 'vue';

const isCollapseShown = ref(false)

const toggleCollapse = (() => {
    isCollapseShown.value = !isCollapseShown.value
})
</script>