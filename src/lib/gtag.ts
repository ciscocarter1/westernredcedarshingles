declare function gtag(...args: unknown[]): void;

export const GOOGLE_ADS_ID = "AW-17483688284";
export const GOOGLE_ADS_CONVERSION_LABEL = "AW-17483688284/bP2sCL2kyu4bENzS75BB";

/** Fires the Google Ads conversion event. Safe to call on the server (no-op). */
export function trackAdsConversion() {
  if (typeof window === "undefined") return;
  const g = (window as unknown as { gtag?: typeof gtag }).gtag;
  if (typeof g !== "function") return;
  g("event", "conversion", {
    send_to: GOOGLE_ADS_CONVERSION_LABEL,
    value: 1.0,
    currency: "USD",
  });
}
