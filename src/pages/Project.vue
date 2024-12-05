<template>
    <Jumbotron :headline="$t('project.jumbotron_1.headline')" :body="$t('project.jumbotron_1.body')" :gradient="true">
    </Jumbotron>
    <div class="container mt-3">
        <div class="row d-flex flex-column align-content-center">
            <div class="col-md-8">
                <div class="card shadow mb-3">
                    <div class="card-body">
                        <div class="card-icon">
                            <svg role="img" class="bi" width="32" height="32" fill="currentColor">
                                <title>{{ $t("project.card_row_1.card_1.image_alt") }}</title>
                                <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#suitcase-lg-fill" />
                            </svg>
                        </div>
                        <h4 class="card-title text-center">{{ $t('project.card_row_1.card_1.headline_1') }}</h4>
                        <h5 class="card-title text-center mt-3">{{ $t('project.card_row_1.card_1.headline_2') }}</h5>
                        <i18n-t keypath="project.card_row_1.card_1.body.line_1" tag="p" scope="global"
                            class="card-text">
                            <a :href="$t('project.card_row_1.card_1.body.line_1_link_1')" target="_blank"
                                class="link-secondary">{{
                                    $t('project.card_row_1.card_1.body.line_1_link_1_body') }}</a>
                        </i18n-t>
                        <p class="card-text">{{ $t('project.card_row_1.card_1.body.line_2') }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card shadow mb-3">
                    <div class="card-body">
                        <div class="card-icon">
                            <svg role="img" class="bi" width="32" height="32" fill="currentColor">
                                <title>{{ $t("project.card_row_1.card_2.image_alt") }}</title>
                                <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#rocket-takeoff-fill" />
                            </svg>
                        </div>
                        <h4 class="card-title text-center">{{ $t('project.card_row_1.card_2.headline_1') }}</h4>
                        <h5 class="card-title text-center mt-3">{{ $t('project.card_row_1.card_2.headline_2') }}</h5>
                        <p class="card-text">{{ $t('project.card_row_1.card_2.body.line_1') }}</p>
                        <p class="card-text">{{ $t('project.card_row_1.card_2.body.line_2') }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card shadow mb-3">
                    <div class="card-body">
                        <div class="card-icon">
                            <svg role="img" class="bi" width="32" height="32" fill="currentColor">
                                <title>{{ $t("project.card_row_1.card_3.image_alt") }}</title>
                                <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#globe" />
                            </svg>
                        </div>
                        <h4 class="card-title text-center">{{ $t('project.card_row_1.card_3.headline_1') }}</h4>
                        <h5 class="card-title text-center mt-3">{{ $t('project.card_row_1.card_3.headline_2') }}</h5>
                        <p class="card-text">{{ $t('project.card_row_1.card_3.body.line_1') }}</p>
                        <p class="card-text">{{ $t('project.card_row_1.card_3.body.line_2') }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card shadow mb-3">
                    <div class="card-body">
                        <div class="card-icon">
                            <svg role="img" class="bi" width="32" height="32" fill="currentColor">
                                <title>{{ $t("project.card_row_1.card_4.image_alt") }}</title>
                                <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#rocket-fill" />
                            </svg>
                        </div>
                        <h4 class="card-title text-center">{{ $t('project.card_row_1.card_4.headline_1') }}</h4>
                        <h5 class="card-title text-center mt-3">{{ $t('project.card_row_1.card_4.headline_2') }}</h5>
                        <p class="card-text">{{ $t('project.card_row_1.card_4.body.line_1') }}</p>
                        <p class="card-text">{{ $t('project.card_row_1.card_4.body.line_2') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Jumbotron :headline="$t('project.jumbotron_2.headline')" :body="$t('project.jumbotron_2.body')"></Jumbotron>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-6 d-flex">
                <div class="card shadow mb-3">
                    <div class="card-body">
                        <div class="card-icon">
                            <svg role="img" class="bi" width="32" height="32" fill="currentColor">
                                <title>{{ $t("project.card_row_2.card_1.image_alt") }}</title>
                                <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#binoculars-fill" />
                            </svg>
                        </div>
                        <h4 class="card-title text-center">{{ $t('project.card_row_2.card_1.headline_1') }}</h4>
                        <h5 class="card-title text-center mt-3">{{ $t('project.card_row_2.card_1.headline_2') }}</h5>
                        <p class="card-text">{{ $t('project.card_row_2.card_1.body.line_1') }}</p>
                        <p class="card-text">{{ $t('project.card_row_2.card_1.body.line_2') }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 d-flex">
                <div class="card shadow mb-3">
                    <div class="card-body">
                        <div class="card-icon">
                            <svg role="img" class="bi" width="32" height="32" fill="currentColor">
                                <title>{{ $t("project.card_row_2.card_2.image_alt") }}</title>
                                <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#chat-square-text-fill" />
                            </svg>
                        </div>
                        <h4 class="card-title text-center">{{ $t('project.card_row_2.card_2.headline_1') }}</h4>
                        <h5 class="card-title text-center mt-3">{{ $t('project.card_row_2.card_2.headline_2') }}</h5>
                        <p class="card-text">{{ $t('project.card_row_2.card_2.body.line_1') }}</p>
                        <p class="card-text">{{ $t('project.card_row_2.card_2.body.line_2') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Jumbotron from '@/components/Jumbotron.vue';
import { useLocalizedMetadata } from "@/utils/useLocalizedMetadata"

useLocalizedMetadata({ title: "header.navigation.project" })
</script>

<style lang="scss" scoped>
.card-icon {
    display: flex;
    justify-content: center;
    margin-bottom: .5rem;
}
</style>