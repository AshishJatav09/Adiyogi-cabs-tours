import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { GuideArticle } from "@/features/site/content/guides";

type GuideCardProps = {
  article: GuideArticle;
};

export function GuideCard({ article }: GuideCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.45rem] border border-[var(--color-line)] bg-[linear-gradient(170deg,rgba(255,251,244,0.98),rgba(224,240,247,0.96))] p-4 shadow-[var(--shadow-card)] sm:rounded-[1.8rem] sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-xs sm:tracking-[0.22em]">
        {article.accent}
      </p>
      <h3 className="mt-2.5 min-h-[3.9rem] text-balance text-[1.35rem] font-semibold leading-tight text-[var(--color-ink)] sm:mt-3 sm:min-h-[5.6rem] sm:text-[1.95rem]">
        {article.title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-medium uppercase tracking-[0.11em] text-[var(--color-muted)] sm:mt-4 sm:gap-2.5 sm:text-[11px] sm:tracking-[0.12em]">
        <span className="rounded-full border border-[var(--color-line)] bg-white/74 px-2.5 py-1 sm:px-3">{article.category}</span>
        <span className="rounded-full border border-[var(--color-line)] bg-white/74 px-2.5 py-1 sm:px-3">{article.readTime}</span>
      </div>
      <p className="mt-4 line-clamp-4 text-sm leading-6 text-[var(--color-muted)] sm:mt-5 sm:leading-7">{article.excerpt}</p>
      <p className="mt-3 line-clamp-1 text-[11px] text-[var(--color-accent)] sm:mt-4 sm:text-xs">Keyword: {article.seoKeyword}</p>
      <Link
        href={`/guides/${article.slug}`}
        prefetch={false}
        className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-semibold text-[var(--color-accent)] sm:pt-6 sm:text-sm"
      >
        View guide
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </article>
  );
}

