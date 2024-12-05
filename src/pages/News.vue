<template>
    <Jumbotron :headline="$t('news.jumbotron_1.headline')" :body="$t('news.jumbotron_1.body')" :gradient="true">
    </Jumbotron>
    <div class="container d-flex flex-column flex-fill mt-3">
        <div class="row">
            <div class="col-md-6">
                <div class="card shadow mb-3">
                    <div class="card-body d-flex flex-column">
                        <p class="card-text mb-0"><small class="text-body-secondary">{{
                            $t('news.card_row_1.card_1.headline_date') }}</small></p>
                        <h5 class="card-title">{{ $t('news.card_row_1.card_1.headline') }}</h5>
                        <p class="card-text">{{ $t('news.card_row_1.card_1.body') }}</p>
                        <p class="card-text"> <a :href="$t('news.card_row_1.card_1.body_link_1')" class="link-secondary" target="_blank">{{
                            $t('news.card_row_1.card_1.body_link_1_title') }}</a></p>
                        <p class="card-text"> <a :href="$t('news.card_row_1.card_1.body_link_2')" class="link-secondary" target="_blank">{{
                            $t('news.card_row_1.card_1.body_link_2_title') }}</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Jumbotron from '@/components/Jumbotron.vue';
import { useLocalizedMetadata } from "@/utils/useLocalizedMetadata"

useLocalizedMetadata({ title: "header.navigation.news" })
</script>

<style lang="scss">
.card-icon {
    display: flex;
    justify-content: center;
    margin-bottom: .5rem;
}
</style>