import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm text-[rgba(102,80,61,0.76)]"
    >
      {items.map((item, index) => (
        <div key={`${item.label}-${index}`} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="transition hover:text-[var(--color-ink)]">
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--color-ink)]">{item.label}</span>
          )}
          {index < items.length - 1 ? <ChevronRight className="h-4 w-4" /> : null}
        </div>
      ))}
    </nav>
  );
}
