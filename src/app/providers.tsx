'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_POSTHOG_HOST as string,
    person_profiles: 'identified_only',
  })
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </PostHogProvider>
  );
}
