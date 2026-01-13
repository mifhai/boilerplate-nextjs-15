export type IQuery = Record<string, string | string[] | number | boolean | null | undefined>;

export function cleanQuery(query: IQuery) {
  const filtered = Object.entries(query).filter(
    ([, value]) => value !== null && value !== undefined && (typeof value !== "string" || value.trim() !== ""),
  );

  return Object.fromEntries(filtered);
}

export function objectToQueryParams(query: IQuery) {
  const entries = Object.entries(query);

  return `?${entries
    .map(([key, value]) => (value ? `${key}=${value}` : null))
    .filter(Boolean)
    .join("&")}`;
}
