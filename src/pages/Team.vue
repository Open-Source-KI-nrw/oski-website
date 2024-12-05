<template>
    <Jumbotron :headline="$t('team.jumbotron_1.headline')" :body="$t('team.jumbotron_1.body')" :gradient="true">
    </Jumbotron>
    <div class="container mt-3">
        <div class="row mb-3">
            <div class="col-12">
                <h2>{{ $t("team.card_row_1.headline") }}</h2>
            </div>
            <div class="col-lg-4 col-md-6 d-flex">
                <ProfileCard :headline="$t('team.card_row_1.card_4.headline')" :body="$t('team.card_row_1.card_4.body')"
                    :affiliation="$t('team.card_row_1.card_4.affiliation')" :image="ImgRow1Card4"></ProfileCard>
            </div>
            <div class="col-lg-4 col-md-6 d-flex">
                <ProfileCard :headline="$t('team.card_row_1.card_1.headline')" :body="$t('team.card_row_1.card_1.body')"
                    :affiliation="$t('team.card_row_1.card_1.affiliation')" :image="ImgRow1Card1"></ProfileCard>
            </div>
            <div class="col-lg-4 col-md-6 d-flex">
                <ProfileCard :headline="$t('team.card_row_1.card_2.headline')" :body="$t('team.card_row_1.card_2.body')"
                    :contact="$t('team.card_row_1.card_2.contact')" :image="ImgPlaceholder"></ProfileCard>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h2>{{ $t("team.card_row_3.headline") }}</h2>
            </div>
            <div class="col-lg-3 col-md-3 d-flex">
                <ProfileCard :headline="$t('team.card_row_3.card_1.headline')" :body="$t('team.card_row_3.card_1.body')"
                    :url="$t('team.card_row_3.card_1.url')" :image="ImgRow3Card1"></ProfileCard>
            </div>
            <div class="col-lg-3 col-md-3 d-flex">
                <ProfileCard :headline="$t('team.card_row_3.card_2.headline')" :body="$t('team.card_row_3.card_2.body')"
                    :url="$t('team.card_row_3.card_2.url')" :image="ImgRow3Card2"></ProfileCard>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Jumbotron from '@/components/Jumbotron.vue'
import ProfileCard from "@/components/ProfileCard.vue"
import { useLocalizedMetadata } from "@/utils/useLocalizedMetadata"

import ImgPlaceholder from "@/assets/placeholder.svg"

import ImgRow1Card1 from "@/assets/team/row_1_card_1.jpg"
import ImgRow1Card4 from "@/assets/team/row_1_card_4.png"

import ImgRow3Card1 from "@/assets/team/row_3_card_1.jpeg"
import ImgRow3Card2 from "@/assets/team/row_3_card_2.png"

useLocalizedMetadata({ title: "header.navigation.team" })
</script>

<style lang="scss">
.img-cover {
    object-fit: cover;
    object-position: center;
}
</style>