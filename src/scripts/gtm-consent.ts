// This file handles Google Tag Manager consent settings

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Sets up GTM consent with default denied state
 */
export function setupGtmConsent() {
  if (typeof window === 'undefined') return;

  // Set default consent to denied for all categories
  if (window.gtag) {
    window.gtag('consent', 'default', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied'
    });
  }
}

/**
 * Updates GTM consent based on user's cookie choices
 * @param cookie - The cookie object from the cookie consent library
 */
type ConsentCookie = {
  categories: string[] | Record<string, boolean>;
};

export function updateGtmConsent(cookie: ConsentCookie) {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  // Handle both array and object formats for categories
  let hasAnalyticsConsent = false;
  
  if (Array.isArray(cookie.categories)) {
    // Handle array format (e.g., ['necessary', 'analytics'])
    hasAnalyticsConsent = cookie.categories.includes('analytics');
  } else if (typeof cookie.categories === 'object' && cookie.categories !== null) {
    // Handle object format (e.g., { necessary: true, analytics: true })
    hasAnalyticsConsent = !!cookie.categories.analytics;
  }
  
  window.gtag('consent', 'update', {
    'ad_storage': hasAnalyticsConsent ? 'granted' : 'denied',
    'ad_user_data': hasAnalyticsConsent ? 'granted' : 'denied',
    'ad_personalization': hasAnalyticsConsent ? 'granted' : 'denied',
    'analytics_storage': hasAnalyticsConsent ? 'granted' : 'denied'
  });
}
