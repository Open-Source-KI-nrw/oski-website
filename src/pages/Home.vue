<template>
    <Jumbotron :headline="$t('home.jumbotron_1.headline')" :body="$t('home.jumbotron_1.body')" :gradient="true">
    </Jumbotron>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-6 d-flex">
                <Transition name="slide-in-left" appear>
                    <div v-show="pageLoaded" class="card flex-fill shadow mb-3" style="transition-delay: 0.25s;">
                        <div class="ratio ratio-21x9">
                            <img :src="ImgRow1Card1" class="card-img-top img-cover" style="object-position: 50% 10%;"
                                :alt="$t('home.card_row_1.card_1.image_alt')">
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">{{ $t('home.card_row_1.card_1.headline') }}</h5>
                            <p class="card-text">{{ $t('home.card_row_1.card_1.body') }}</p>
                            <p class="card-text"><small class="text-body-secondary">{{
                                $t('home.card_row_1.card_1.copyright') }}</small></p>
                        </div>
                    </div>
                </Transition>
            </div>
            <div class="col-md-6 d-flex">
                <Transition name="slide-in-right" appear>
                    <div v-show="pageLoaded" class="card flex-fill shadow mb-3" style="transition-delay: 0.25s;">
                        <div class="ratio ratio-21x9">
                            <img :src="ImgRow1Card2" class="card-img-top img-cover" style="object-position: 50% 35%;"
                                :alt="$t('home.card_row_1.card_2.image_alt')">
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">{{ $t('home.card_row_1.card_2.headline') }}</h5>
                            <p class="card-text">{{ $t('home.card_row_1.card_2.body') }}</p>
                            <p class="card-text mt-auto"><small class="text-body-secondary">{{
                                $t('home.card_row_1.card_2.copyright') }}</small></p>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
    <Jumbotron :headline="$t('home.jumbotron_2.headline')" :body="$t('home.jumbotron_2.body')"></Jumbotron>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4 d-flex">
                <Transition name="slide-in-bottom" appear>
                    <div v-show="pageLoaded" class="card flex-fill shadow mb-3" style="transition-delay: 1s;">
                        <div class="card-body">
                            <div class="card-icon">
                                <svg role="img" class="bi" width="32" height="32" fill="currentColor">
                                    <title>{{ $t("home.card_row_2.card_1.image_alt") }}</title>
                                    <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#person-fill-lock" />
                                </svg>
                            </div>
                            <h5 class="card-title text-center">{{ $t('home.card_row_2.card_1.headline') }}</h5>
                            <p class="card-text">{{ $t('home.card_row_2.card_1.body') }}</p>
                        </div>
                    </div>
                </Transition>
            </div>
            <div class="col-md-4 d-flex">
                <Transition name="slide-in-bottom" appear>
                    <div v-show="pageLoaded" class="card flex-fill shadow mb-3" style="transition-delay: 1.25s;">
                        <div class="card-body">
                            <div class="card-icon">
                                <svg role="img" class="bi" width="32" height="32" fill="currentColor">
                                    <title>{{ $t("home.card_row_2.card_2.image_alt") }}</title>
                                    <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#rulers" />
                                </svg>
                            </div>
                            <h5 class="card-title text-center">{{ $t('home.card_row_2.card_2.headline') }}</h5>
                            <p class="card-text">{{ $t('home.card_row_2.card_2.body') }}</p>
                        </div>
                    </div>
                </Transition>
            </div>
            <div class="col-md-4 d-flex">
                <Transition name="slide-in-bottom" appear>
                    <div v-show="pageLoaded" class="card flex-fill shadow mb-3" style="transition-delay: 1.5s;">
                        <div class="card-body">
                            <div class="card-icon">
                                <svg role="img" class="bi" width="32" height="32" fill="currentColor">
                                    <title>{{ $t("home.card_row_2.card_3.image_alt") }}</title>
                                    <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#person-raised-hand" />
                                </svg>
                            </div>
                            <h5 class="card-title text-center">{{ $t('home.card_row_2.card_3.headline') }}</h5>
                            <p class="card-text">{{ $t('home.card_row_2.card_3.body') }}</p>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import type { Ref } from 'vue'
import { useLocalizedMetadata } from "@/utils/useLocalizedMetadata"

import Jumbotron from '@/components/Jumbotron.vue'
import ImgRow1Card1 from "@/assets/home/row_1_card_1.png"
import ImgRow1Card2 from "@/assets/home/row_1_card_2.png"

const pageLoaded: Ref<boolean> = ref(false);

onMounted(() => {
    pageLoaded.value = true;
});

useLocalizedMetadata({ title: "header.navigation.home" })
</script>

<style lang="scss">
.img-cover {
    object-fit: cover;
    object-position: center;
}

.card-icon {
    display: flex;
    justify-content: center;
    margin-bottom: .5rem;
}
</style>