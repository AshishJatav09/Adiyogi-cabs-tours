import Link from "next/link";

import { Footer } from "@/features/site/components/footer";
import { Navigation } from "@/features/site/components/navigation";
import { getCurrentLocale } from "@/shared/i18n/server";

export default async function NotFound() {
  const locale = await getCurrentLocale();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />
      <main className="mx-auto max-w-5xl px-6 py-28 text-center lg:px-10">
        <p className="text-sm uppercase tracking-[0.32em] text-[var(--color-accent)]">
          Page Not Found
        </p>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl text-[var(--color-ink)] sm:text-6xl">
          This route is not part of the current yatra map.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
          The page may have moved, or it may be part of a future expansion such as
          guides, bookings, or multilingual support.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white"
          >
            Return Home
          </Link>
          <Link
            href="/packages"
            className="rounded-full border border-[var(--color-line)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)]"
          >
            Explore Packages
          </Link>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  );
}

