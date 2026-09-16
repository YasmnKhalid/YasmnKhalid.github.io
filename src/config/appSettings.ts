/**
 * Global Application Settings & Feature Flags
 * 
 * HOW TO TOGGLE FREELANCE MODE:
 * -------------------------------------------------------------
 * 1. Simple Setting:
 *    Change `DEFAULT_SHOW_FREELANCE` to `false` below.
 * 
 * 2. Environment Variable (.env.local or Vercel dashboard):
 *    Set NEXT_PUBLIC_SHOW_FREELANCE="false"
 * 
 * 3. Dynamic Link Sharing (No re-deploy needed!):
 *    Add `?freelance=false` or `?mode=enterprise` to any link you share.
 *    (e.g., https://your-portfolio.com/?freelance=false)
 * -------------------------------------------------------------
 */

// Change this to false whenever you want freelance hidden by default:
const DEFAULT_SHOW_FREELANCE = false;

export const appSettings = {
  features: {
    // Flag to control visibility of Freelance nav item & freelance callouts
    showFreelance:
      typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SHOW_FREELANCE !== undefined
        ? process.env.NEXT_PUBLIC_SHOW_FREELANCE === 'true'
        : DEFAULT_SHOW_FREELANCE,
  },
  contact: {
    email: 'khalidyasmin821@gmail.com',
  },
};

export type AppSettings = typeof appSettings;
