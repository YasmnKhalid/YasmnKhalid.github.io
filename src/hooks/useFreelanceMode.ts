'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { appSettings } from '../config/appSettings';

export function useFreelanceMode(): boolean {
  const [showFreelance, setShowFreelance] = useState<boolean>(
    appSettings.features.showFreelance
  );

  const searchParams = useSearchParams();

  useEffect(() => {
    // 1. Check URL query parameters
    const freelanceParam = searchParams.get('freelance');
    const modeParam = searchParams.get('mode');

    // Values that turn OFF freelance mode
    if (
      freelanceParam === 'false' ||
      freelanceParam === '0' ||
      modeParam === 'enterprise' ||
      modeParam === 'corporate'
    ) {
      setShowFreelance(false);
      try {
        sessionStorage.setItem('portfolio_show_freelance', 'false');
      } catch {
        // Ignore sessionStorage restrictions if cookies/storage blocked
      }
      return;
    }

    // Values that turn ON freelance mode
    if (
      freelanceParam === 'true' ||
      freelanceParam === '1' ||
      modeParam === 'freelance'
    ) {
      setShowFreelance(true);
      try {
        sessionStorage.setItem('portfolio_show_freelance', 'true');
      } catch {
        // Ignore
      }
      return;
    }

    // 2. Fall back to persisted session setting if present
    try {
      const stored = sessionStorage.getItem('portfolio_show_freelance');
      if (stored !== null) {
        setShowFreelance(stored === 'true');
        return;
      }
    } catch {
      // Ignore
    }

    // 3. Fall back to the default appSettings flag
    setShowFreelance(appSettings.features.showFreelance);
  }, [searchParams]);

  return showFreelance;
}
