import { useI18n } from "vue-i18n";
import { useHead } from "@unhead/vue";

interface Metadata {
  title: string;
}

export function useLocalizedMetadata(meta: Metadata) {
  const { t } = useI18n();

  useHead({
    title: () => t(meta.title),
  });
}
