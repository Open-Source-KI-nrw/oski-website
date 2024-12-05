<template>
    <Jumbotron :headline="$t('contact.jumbotron_1.headline')" :body="$t('contact.jumbotron_1.body')" :gradient="true">
    </Jumbotron>
    <div class="container d-flex flex-column flex-fill justify-content-center mt-3">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="card shadow mb-3">
                    <div class="card-body">
                        <div class="card-icon">
                            <svg class="bi" width="32" height="32" fill="currentColor">
                                <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#envelope-paper-heart-fill" />
                            </svg>
                        </div>
                        <h5 class="card-title text-center">{{ $t("contact.card_row_1.card_1.headline") }}</h5>
                        <i18n-t keypath="contact.card_row_1.card_1.body" tag="p" scope="global" class="card-text">
                            <br>
                            <a :href="`mailto:${$t('contact.card_row_1.card_1.body_link_1')}`" class="link-secondary" target="_blank">{{
                                $t('contact.card_row_1.card_1.body_link_1') }}</a>
                        </i18n-t>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Jumbotron from '@/components/Jumbotron.vue';
import { useLocalizedMetadata } from "@/utils/useLocalizedMetadata"

useLocalizedMetadata({ title: "header.navigation.contact" })
</script>

<style lang="scss">
.card-icon {
    display: flex;
    justify-content: center;
    margin-bottom: .5rem;
}
</style>