import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { GuideArticle } from "@/features/site/content/guides";

type GuideCardProps = {
  article: GuideArticle;
};

export function GuideCard({ article }: GuideCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.9rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,241,232,0.98))] p-6 shadow-[var(--shadow-card)]">
      <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
        {article.accent}
      </p>
      <h3 className="mt-3 min-h-[6rem] text-balance font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--color-ink)]">
        {article.title}
      </h3>
      <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
        <span>{article.category}</span>
        <span>{article.readTime}</span>
      </div>
      <p className="mt-5 line-clamp-4 text-sm leading-7 text-[var(--color-muted)]">{article.excerpt}</p>
      <p className="mt-4 line-clamp-1 text-xs text-[var(--color-accent)]">Keyword: {article.seoKeyword}</p>
      <Link
        href={`/guides/${article.slug}`}
        className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]"
      >
        View guide
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

