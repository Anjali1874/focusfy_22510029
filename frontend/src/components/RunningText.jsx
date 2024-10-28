import React, { useEffect, useState } from 'react';

const RunningText = ({ quotes, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDisplaying, setIsDisplaying] = useState(true);

  useEffect(() => {
    const currentQuote = quotes[currentQuoteIndex];

    const displayText = () => {
      if (charIndex < currentQuote.length) {
        setDisplayedText((prev) => prev + currentQuote[charIndex]);
        setCharIndex((prev) => prev + 1); // Increment the character index
      } else {
        setIsDisplaying(false); // Stop displaying and wait
        setTimeout(() => {
          setDisplayedText(''); // Clear displayed text
          setCharIndex(0); // Reset character index
          setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length); // Move to the next quote
          setIsDisplaying(true); // Start displaying again
        }, 5000); // Wait for 5 seconds
      }
    };

    let intervalId;

    if (isDisplaying) {
      intervalId = setInterval(displayText, speed);
    }

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [quotes, speed, isDisplaying, currentQuoteIndex, charIndex]); // Add charIndex to dependencies

  return (
    <div style={{ fontSize: '3em', fontWeight: 'bold', color: '#F5DEB3', textAlign: 'center' }}>
      {displayedText}
    </div>
  );
};

export default RunningText;
