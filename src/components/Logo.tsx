import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 50 }: LogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
      >
        <defs>
          {/* Logo heart gradient: Pink to Magenta matching the image */}
          <linearGradient id="heartGradient" x1="120" y1="50" x2="380" y2="450" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ec1c5a" />
            <stop offset="50%" stopColor="#d9124a" />
            <stop offset="100%" stopColor="#8d042c" />
          </linearGradient>

          {/* Logo woman silhouette: Sleek dark charcoal/blue matching the image */}
          <linearGradient id="ladySilhouette" x1="150" y1="180" x2="350" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#151b2a" />
            <stop offset="100%" stopColor="#0a0c12" />
          </linearGradient>

          {/* Core shadow for elegant visual depth */}
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* 1. Big Pink Heart (Background) */}
        <path
          d="M250 435C246 432 105 320 62 215C20 115 102 30 185 75C220 94 240 128 250 148C260 128 280 94 315 75C398 30 480 115 438 215C395 320 254 432 250 435Z"
          fill="url(#heartGradient)"
          className="transition-transform duration-300 transform origin-center hover:scale-[1.03]"
        />

        {/* 2. Stunning Vector Art Silhouette of the Seated Lady (matches the posture, wavy hair, crossed legs, and heels in the logo image) */}
        <g filter="url(#softShadow)">
          {/* Beautiful flowing wavy hair block */}
          <path
            d="M250 78 C240 78, 222 84, 212 95 C190 118, 174 150, 182 185 C186 205, 172 230, 202 245 C208 248, 218 240, 215 220 C210 185, 235 150, 245 140 C250 135, 255 135, 255 140 C265 150, 290 185, 285 220 C282 240, 292 248, 298 245 C328 230, 314 205, 318 185 C326 150, 310 118, 288 95 C278 84, 260 78, 250 78 Z"
            fill="url(#ladySilhouette)"
          />

          {/* Elegant face outline/chin */}
          <path
            d="M232 142 C232 170, 268 170, 268 142 C268 128, 232 128, 232 142 Z"
            fill="#ffffff"
            stroke="url(#ladySilhouette)"
            strokeWidth="3.5"
          />

          {/* Sexy lady body curve (hourglass shape chest down to hips to match the cartoon illustration logo) */}
          <path
            d="M230 190 C195 245, 210 270, 240 285 C242 286, 252 288, 255 288 C258 288, 268 286, 270 285 C300 270, 315 245, 280 190 C265 165, 235 165, 230 190 Z"
            fill="url(#ladySilhouette)"
          />
          
          {/* Hourglass corset line white accents */}
          <path
            d="M232 205 C238 220, 248 235, 252 255 M268 205 C262 220, 252 235, 248 255"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Seductively curved legs: sitting and leaning forward */}
          <path
            d="M210 285 C165 340, 150 375, 195 440 C210 460, 232 478, 245 492 C247 494, 252 494, 254 491 C254 491, 235 442, 238 412 C242 382, 215 362, 232 305 L210 285 Z"
            fill="url(#ladySilhouette)"
          />
          <path
            d="M280 285 C325 340, 340 375, 295 440 C280 460, 258 478, 245 492 C243 494, 238 494, 236 491 C236 491, 255 442, 252 412 C248 382, 275 362, 258 305 L280 285 Z"
            fill="url(#ladySilhouette)"
          />

          {/* High Heels styling accents */}
          <path
            d="M243 488 L232 465 L236 462"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M247 488 L258 465 L254 462"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Left Arm leaning out */}
          <path
            d="M214 200 C180 220, 138 260, 116 295 L124 300 C146 265, 188 225, 222 205 Z"
            fill="url(#ladySilhouette)"
          />

          {/* Right Arm leaning out */}
          <path
            d="M286 200 C320 220, 362 260, 384 295 L376 300 C354 265, 312 225, 278 205 Z"
            fill="url(#ladySilhouette)"
          />
        </g>
      </svg>
    </div>
  );
}
