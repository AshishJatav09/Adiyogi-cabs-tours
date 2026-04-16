function normalizeSlug(value: string) {
  return decodeURIComponent(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/\+/g, " plus ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createTitleAlias(value: string) {
  return normalizeSlug(
    value
      .replace(/\b(package|tour|travel|guide|service|services|spiritual|premium)\b/gi, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

export function findByFlexibleSlug<T extends { slug: string; title?: string; name?: string }>(
  items: T[],
  incomingSlug: string,
) {
  const normalizedIncoming = normalizeSlug(incomingSlug);

  const exact = items.find((item) => normalizeSlug(item.slug) === normalizedIncoming);
  if (exact) return exact;

  const withAliases = items.find((item) => {
    const aliases = [
      normalizeSlug(item.slug),
      item.title ? normalizeSlug(item.title) : "",
      item.name ? normalizeSlug(item.name) : "",
      item.title ? createTitleAlias(item.title) : "",
      item.name ? createTitleAlias(item.name) : "",
    ].filter(Boolean);

    return aliases.some(
      (alias) =>
        alias === normalizedIncoming ||
        normalizedIncoming.includes(alias) ||
        alias.includes(normalizedIncoming),
    );
  });

  return withAliases;
}
