
"use client";

import React, { useRef, type ReactNode, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile'; // Import useIsMobile

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
  const isMobile = useIsMobile(); // Get mobile state

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return; // Disable on mobile

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
      glareRef.current.style.background = `radial-gradient(circle at ${mouseXpercentage}% ${mouseYpercentage}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 60%)`;
    }
  }, [perspective, maxRotation, scaleOnHover, isMobile]); // Add isMobile to dependencies

  const handleMouseLeave = useCallback(() => {
    if (isMobile || !cardRef.current) return; // Disable on mobile

    cardRef.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    cardRef.current.style.transition = 'transform 0.3s ease-out';
    
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
      glareRef.current.style.background = 'none';
    }
  }, [perspective, isMobile]); // Add isMobile to dependencies

  const cardClassName = cn(
    'relative overflow-hidden',
    className
  );
  
  const glareClassName = cn(
    'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out',
    className?.includes('rounded-') ? className?.match(/rounded-(lg|md|sm|xl|2xl|3xl|full)/)?.[0] || 'rounded-lg' : 'rounded-lg'
  );

  // Conditionally apply event handlers
  const mouseMoveHandler = isMobile ? undefined : handleMouseMove;
  const mouseLeaveHandler = isMobile ? undefined : handleMouseLeave;
  // Conditionally apply initial transform style for 3D effect
  const initialTransform = isMobile 
    ? 'perspective(none) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' // No 3D effect on mobile
    : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;


  return (
    <div
      ref={cardRef}
      onMouseMove={mouseMoveHandler}
      onMouseLeave={mouseLeaveHandler}
      className={cardClassName}
      style={{
        transformStyle: isMobile ? 'flat' : 'preserve-3d', // No preserve-3d on mobile
        transform: initialTransform,
        transition: 'transform 0.3s ease-out',
      }}
    >
      {children}
      {!isMobile && ( // Only render glare if not mobile
        <div 
          ref={glareRef} 
          className={glareClassName}
          style={{ zIndex: 1 }} 
        />
      )}
    </div>
  );
}
