// components/SmokyText.tsx

"use client";

import React, { useState, useEffect } from 'react';

// Define the type for the component's props
type SmokyTextProps = {
  children: React.ReactNode;
};

const SmokyText: React.FC<SmokyTextProps> = ({ children }) => {
  // State to hold the words, typed as an array of strings
  const [words, setWords] = useState<string[]>([]);

  // This effect runs when the children prop changes
  useEffect(() => {
    // Type-guard to ensure children is a string before splitting
    if (typeof children === 'string') {
      setWords(children.split(' '));
    }
  }, [children]);

  // The component returns the heading and a <style> tag with all necessary CSS
  return (
    <>
      <h1 className="smoky-text-container-ts">
        {words.map((word, index) => (
          <span
            key={index}
            className="smoky-word-ts"
            // The animation delay is staggered for each word
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {word}
          </span>
        ))}
      </h1>

      {/* 
        All the styles and animations are defined here, inside the component.
        They are scoped by unique class names to prevent conflicts.
      */}
      <style>
        {`
          .smoky-text-container-ts {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5em; /* Defines the space between words */
            justify-content: center; /* Optional: centers the text line */
          }

          .smoky-word-ts {
            display: inline-block;
            /* Initial state: invisible, blurred, and moved down */
            opacity: 0;
            filter: blur(4px);
            transform: translateY(20px);
            
            /* Apply the animation */
            animation: smoke-in-animation-ts 0.8s forwards;
          }

          /* The keyframe animation that creates the "smoke" effect */
          @keyframes smoke-in-animation-ts {
            to {
              opacity: 1;
              filter: blur(0);
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default SmokyText;