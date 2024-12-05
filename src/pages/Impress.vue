<template>
    <Jumbotron :headline="$t('impress.jumbotron_1.headline')" :body="$t('impress.jumbotron_1.body')" :gradient="true">
    </Jumbotron>
    <div class="container mt-3">
        <p>{{ $t("impress.body.line_1") }}</p>
        <i18n-t keypath="impress.body.line_2" tag="p" scope="global">
            <br>
            <br>
            <br>
        </i18n-t>
        <p>{{ $t("impress.body.line_3") }}</p>
        <p>{{ $t("impress.body.line_4") }}</p>
        <i18n-t keypath="impress.body.line_5" tag="p" scope="global" class="card-text">
            <a :href="`mailto:${$t('impress.body.line_5_link_1')}`" target="_blank">{{
                $t('impress.body.line_5_link_1') }}</a>
        </i18n-t>
        <i18n-t keypath="impress.body.line_6" tag="p" scope="global" class="card-text">
            <a :href="$t('impress.body.line_6_link_1')" target="_blank">{{
                $t('impress.body.line_6_link_1_body') }}</a>
            <a :href="$t('impress.body.line_6_link_2')" target="_blank">{{
                $t('impress.body.line_6_link_2_body') }}</a>
        </i18n-t>
        <p>{{ $t("impress.body.line_7") }}</p>
        <i18n-t keypath="impress.body.line_8" tag="p" scope="global" class="card-text">
            <a :href="$t('impress.body.line_8_link_1')" target="_blank">{{
                $t('impress.body.line_8_link_1_body') }}</a>
        </i18n-t>
        <i18n-t keypath="impress.body.line_9" tag="p" scope="global" class="card-text">
            <br>
            <br>
            <br>
            <br>
            <br>
            <a :href="`mailto:${$t('impress.body.line_9_link_1')}`" target="_blank">{{
                $t('impress.body.line_9_link_1') }}</a>
        </i18n-t>
        <i18n-t keypath="impress.body.line_10" tag="p" scope="global" class="card-text">
            <a :href="$t('impress.body.line_10_link_1')" target="_blank">{{
                $t('impress.body.line_10_link_1_body') }}</a>
            <a :href="$t('impress.body.line_10_link_2')" target="_blank">{{
                $t('impress.body.line_10_link_2_body') }}</a>
            <a :href="$t('impress.body.line_10_link_3')" target="_blank">{{
                $t('impress.body.line_10_link_3_body') }}</a>
            <a :href="$t('impress.body.line_10_link_4')" target="_blank">{{
                $t('impress.body.line_10_link_4_body') }}</a>
            <a :href="$t('impress.body.line_10_link_5')" target="_blank">{{
                $t('impress.body.line_10_link_5_body') }}</a>
            <a :href="$t('impress.body.line_10_link_6')" target="_blank">{{
                $t('impress.body.line_10_link_6_body') }}</a>
            <a :href="$t('impress.body.line_10_link_7')" target="_blank">{{
                $t('impress.body.line_10_link_7_body') }}</a>
            <a :href="$t('impress.body.line_10_link_8')" target="_blank">{{
                $t('impress.body.line_10_link_8_body') }}</a>
        </i18n-t>
        <p>{{ $t("impress.body.line_11") }}</p>
        <i18n-t keypath="impress.body.line_12" tag="p" scope="global" class="card-text">
            <a :href="`mailto:${$t('impress.body.line_12_link_1')}`" target="_blank">{{
                $t('impress.body.line_12_link_1') }}</a>
        </i18n-t>
        <p>{{ $t("impress.body.line_13") }}</p>
        <i18n-t keypath="impress.body.line_14" tag="p" scope="global" class="card-text">
            <a :href="$t('impress.body.line_14_link_1')" target="_blank">{{
                $t('impress.body.line_14_link_1_body') }}</a>
        </i18n-t>
    </div>
</template>

<script setup lang="ts">
import Jumbotron from '@/components/Jumbotron.vue'
import { useLocalizedMetadata } from "@/utils/useLocalizedMetadata"

useLocalizedMetadata({ title: "header.navigation.impress" })
</script>