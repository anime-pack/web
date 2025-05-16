
"use client";

import React, { useRef, type ReactNode, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  perspective?: number;
  maxRotation?: number;
  scaleOnHover?: number;
}

export function InteractiveCard({
  children,
  className,
  perspective = 1000,
  maxRotation = 5, // Degrees
  scaleOnHover = 1.03,
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation based on mouse position from center
    // Invert rotateX for a more natural feel (top tilts away, bottom tilts away)
    const rotateX = ((y - centerY) / centerY) * -maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    cardRef.current.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, ${scaleOnHover})`;
    // Apply a quick transition during mouse move for smoother updates if needed, or rely on CSS transition
    cardRef.current.style.transition = 'transform 0.05s linear';
  }, [perspective, maxRotation, scaleOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      // Revert to a slower transition for the mouse leave effect
      cardRef.current.style.transition = 'transform 0.3s ease-out';
    }
  }, [perspective]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(className)}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: 'transform 0.3s ease-out', // Initial transition for mouse enter
      }}
    >
      {children}
    </div>
  );
}
