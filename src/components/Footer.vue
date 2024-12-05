<template>
    <div class="container">
        <footer
            class="d-flex flex-wrap justify-content-center justify-content-md-between align-items-top py-3 my-4 border-top">
            <div class="col-md-5 d-flex flex-column justify-content-between mt-3 mt-md-0 order-1 order-md-0">
                <div class="text-center text-md-start">
                    <span class="d-block text-body-secondary">{{ $t("footer.github.body") }}</span>
                    <a class="d-inline-block link-secondary" href="https://github.com/Open-Source-KI-nrw"
                        target="_blank">
                        {{ $t("footer.github.link") }}
                        <svg class="bi" width="32" height="32" fill="currentColor">
                            <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#github" />
                        </svg>
                    </a>
                </div>
                <span class="text-body-secondary text-center text-md-start">© 2024 Open Source-KI.nrw</span>
            </div>
            <div class="col-8 col-md-5 col-lg-5 col-xl-4 justify-content-end order-0 order-md-1">
                <div class="row">
                    <div class="col-lg-6">
                        <span class="d-block text-body-secondary">{{ $t("footer.universities.body")
                            }}</span>
                        <a href="https://www.ruhr-uni-bochum.de/" class="d-flex align-items-center" target="_blank">
                            <img class="img-fluid img-thumbnail d-flex" style="padding: 0.5rem; background-color: #fff;"
                                :src="imgRUBLogoDE" :alt="$t('footer.logos.rub')">
                        </a>
                        <a href="https://www.uni-koeln.de/" target="_blank">
                            <img class="img-fluid img-thumbnail" style="padding: 0.5rem; background-color: #fff;"
                                :src="imgUzKLogo" :alt="$t('footer.logos.uzk')">
                        </a>
                    </div>
                    <div class="col-lg-6 d-flex flex-column">
                        <span class="d-block text-body-secondary mt-2 mt-lg-0">{{ $t("footer.mkw.body") }}</span>
                        <a href="https://www.mkw.nrw" target="_blank">
                            <img class="img-fluid img-thumbnail" style="padding: 0.5rem; background-color: #fff;"
                                :src="imgMKWLogo" :alt="$t('footer.logos.mkw')">
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import imgMKWLogoDE from "@/assets/logo_mkw_de_black.jpeg"
import imgMKWLogoEN from "@/assets/logo_mkw_en_black.jpeg"

import imgUzKLogoDE from "@/assets/logo_uzk_de_black.png"
import imgUzKLogoEN from "@/assets/logo_uzk_en_black.png"

import imgRUBLogoDE from "@/assets/logo_rub_de_black.jpg"

import { computed } from "vue";
import { useI18n } from "vue-i18n";

const i18nLocale = useI18n();

const imgMKWLogo = computed(() => i18nLocale.locale.value == "de" ? imgMKWLogoDE : imgMKWLogoEN)
const imgUzKLogo = computed(() => i18nLocale.locale.value == "de" ? imgUzKLogoDE : imgUzKLogoEN)
</script>