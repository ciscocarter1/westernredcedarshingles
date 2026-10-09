declare function gtag(...args: unknown[]): void;

export interface LowesClickParams {
  product_name: string;
  grade: string;
  link_url: string;
}

/**
 * Fires the GA4 lowes_product_click event with product detail parameters.
 * These parameters let us see which product and grade people are clicking to buy.
 * Also registers as the custom dimensions grade, product_name, link_url in GA4.
 */
export function trackLowesClick(params: LowesClickParams) {
  if (typeof window === "undefined") return;
  const g = (window as unknown as { gtag?: typeof gtag }).gtag;
  if (typeof g !== "function") return;
  g("event", "lowes_product_click", {
    event_category: "outbound",
    event_label: "lowes_item_3976",
    product_name: params.product_name,
    grade: params.grade,
    link_url: params.link_url,
  });
}

/** Fires GA4 store_locator_search event when user searches for a store. */
export function trackStoreSearch(searchTerm: string, resultCount: number) {
  if (typeof window === "undefined") return;
  const g = (window as unknown as { gtag?: typeof gtag }).gtag;
  if (typeof g !== "function") return;
  g("event", "store_locator_search", {
    event_category: "store_locator",
    search_term: searchTerm,
    result_count: resultCount,
  });
}

/** Fires GA4 store_locator_click event when user clicks a store link. */
export function trackStoreClick(storeName: string, storeCode: string, linkUrl: string) {
  if (typeof window === "undefined") return;
  const g = (window as unknown as { gtag?: typeof gtag }).gtag;
  if (typeof g !== "function") return;
  g("event", "store_locator_click", {
    event_category: "store_locator",
    store_name: storeName,
    store_code: storeCode,
    link_url: linkUrl,
  });
}

/** Fires GA4 form_submit event on contact form success. */
export function trackFormSubmit(subject: string) {
  if (typeof window === "undefined") return;
  const g = (window as unknown as { gtag?: typeof gtag }).gtag;
  if (typeof g !== "function") return;
  g("event", "form_submit", {
    event_category: "contact",
    form_subject: subject,
  });
}

/** Fires GA4 file_download event for spec sheet and PDF downloads. */
export function trackFileDownload(fileName: string, fileUrl: string) {
  if (typeof window === "undefined") return;
  const g = (window as unknown as { gtag?: typeof gtag }).gtag;
  if (typeof g !== "function") return;
  g("event", "file_download", {
    event_category: "download",
    file_name: fileName,
    link_url: fileUrl,
  });
}
