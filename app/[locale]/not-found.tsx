import { useTranslations } from "next-intl";

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  const translations = useTranslations();

  return <p className="max-w-[460px]">{translations("not_found_message")}</p>;
}
