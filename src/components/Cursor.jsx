import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Only enable custom cursor on devices with a fine pointer (mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (cursor) {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;

        // Check if hovering over a clickable element
        const target = e.target;
        const isClickable = 
          target.tagName.toLowerCase() === 'a' ||
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') ||
          target.closest('button') ||
          target.classList.contains('clickable') ||
          target.classList.contains('cta-button') ||
          target.classList.contains('submit-btn') ||
          target.classList.contains('view-btn') ||
          target.classList.contains('inquire-btn');
          
        if (isClickable) {
          cursor.classList.add('cursor--link-hovered');
        } else {
          cursor.classList.remove('cursor--link-hovered');
        }
      }
    };

    const onMouseDown = () => cursor?.classList.add('cursor--clicked');
    const onMouseUp = () => cursor?.classList.remove('cursor--clicked');

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return <div ref={cursorRef} className="cursor"></div>;
};

export default Cursor;