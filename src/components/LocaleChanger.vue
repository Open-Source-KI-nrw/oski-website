<template>
    <div class="locale-changer dropdown">
        <button @click.prevent="dropdownActive = !dropdownActive" :class="{ 'show': dropdownActive }"
            class="btn dropdown-toggle" type="button" :aria-expanded="dropdownActive">
            {{ currentLocale.toUpperCase() }}
        </button>
        <ul :class="{ 'show': dropdownActive }" class="dropdown-menu">
            <li v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`">
                <button :class="{ 'active': locale == currentLocale }" class="dropdown-item" :value="locale"
                    @click.prevent="selectLocale(locale)" :disabled="locale == currentLocale" type="button">{{
                        locale.toUpperCase() }}</button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useI18n } from "vue-i18n"

const i18nLocale = useI18n();

const dropdownActive = ref(false);

const currentLocale = computed(() => i18nLocale.locale.value);

const selectLocale = (locale: string) => { i18nLocale.locale.value = locale; dropdownActive.value = false; }


</script>

<style lang="scss">
.locale-changer {
    .dropdown-item {
        &:active {
            color: var(--bs-dropdown-link-hover-color);
            background-color: var(--bs-dropdown-link-hover-bg);
        }
    }
}
</style>