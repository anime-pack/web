
"use client";

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile'; // Import useIsMobile

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  delay?: string; 
}

export function AnimatedSection({ children, className, delay, ...rest }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile(); // Get mobile state

  useEffect(() => {
    const currentThreshold = isMobile ? 0.01 : 0.1; // Conditional threshold

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: currentThreshold } // Use the determined threshold
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isMobile]); // Add isMobile to dependency array to re-run effect if it changes

  return (
    <div
      ref={sectionRef}
      className={cn(
        'fade-in-section w-full',
        isVisible && 'is-visible',
        delay,
        className
      )}
      {...rest} // Spread the rest of the props here (including id)
    >
      {children}
    </div>
  );
}

