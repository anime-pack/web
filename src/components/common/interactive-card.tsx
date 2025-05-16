
"use client";

import React, { useRef, type ReactNode, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  perspective?: number;
  maxRotation?: number; // Degrees
  scaleOnHover?: number;
}

export function InteractiveCard({
  children,
  className,
  perspective = 1000,
  maxRotation = 5,
  scaleOnHover = 1.03,
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    cardRef.current.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, ${scaleOnHover})`;
    cardRef.current.style.transition = 'transform 0.05s linear';

    if (glareRef.current) {
      const mouseXpercentage = (x / rect.width) * 100;
      const mouseYpercentage = (y / rect.height) * 100;
      glareRef.current.style.opacity = '1';
      // A subtle white glare that moves with the mouse
      glareRef.current.style.background = `radial-gradient(circle at ${mouseXpercentage}% ${mouseYpercentage}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 60%)`;
    }
  }, [perspective, maxRotation, scaleOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      cardRef.current.style.transition = 'transform 0.3s ease-out';
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
      glareRef.current.style.background = 'none'; // Clear background
    }
  }, [perspective]);

  // Ensure className includes rounded corners if the card is meant to be rounded.
  // The glare overlay will attempt to inherit this.
  const cardClassName = cn(
    'relative overflow-hidden', // Added for glare containment and positioning
    className
  );
  
  // Match the border radius of the parent card, assuming it's typically 'rounded-lg' from ShadCN.
  // If 'className' prop provides a different radius, this glare might not perfectly match.
  // For more robust radius matching, the parent would need to pass its specific radius class.
  const glareClassName = cn(
    'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out',
    // Attempt to inherit border radius. This might need to be explicit if className doesn't work well.
    // For example, if className is 'rounded-xl', this should be 'rounded-xl' too.
    // We'll use a common default from ShadCN cards if className doesn't specify one.
    className?.includes('rounded-') ? className?.match(/rounded-(lg|md|sm|xl|2xl|3xl|full)/)?.[0] || 'rounded-lg' : 'rounded-lg'
  );


  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cardClassName}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      {children}
      <div 
        ref={glareRef} 
        className={glareClassName}
        style={{ zIndex: 1 }} // Ensure glare is on top of children
      />
    </div>
  );
}
