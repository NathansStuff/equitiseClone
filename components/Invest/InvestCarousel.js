import React, { useEffect, useState } from 'react';

const InvestCarousel = props => {
  const { children, show } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  const change1 = () => {
    setCurrentIndex(0);
  };
  const change2 = () => {
    setCurrentIndex(1);
  };
  const change3 = () => {
    setCurrentIndex(2);
  };
  const change4 = () => {
    setCurrentIndex(3);
  };
  const change5 = () => {
    setCurrentIndex(4);
  };
  const change6 = () => {
    setCurrentIndex(5);
  };
  const change7 = () => {
    setCurrentIndex(6);
  };
  const change8 = () => {
    setCurrentIndex(7);
  };

  const change9 = () => {
    setCurrentIndex(8);
  };

//   const handleTransitionEnd = () => {
//     if (currentIndex === 0) {
//       setTransitionEnabled(false);
//       setCurrentIndex(length);
//     } else if (currentIndex === length + show) {
//       setTransitionEnabled(false);
//       setCurrentIndex(show);
//     }
//   };

  const handleTouchStart = e => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = e => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className='carousel-container'>
      <div className='carousel-header'>
        <div>
          <h3>Latest News</h3>
        </div>
        <div className='carousel-button'>
          <button onClick={prev} className='left-arrow'>
            <h4>&lt;</h4>
          </button>

          <button onClick={next} className='right-arrow'>
            <h4>&gt;</h4>
          </button>
        </div>
      </div>
      <div className='carousel-wrapper'>
        <div
          className='carousel-content-wrapper'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
      <div className='carousel-bottom'>
        <button
          onClick={change1}
          className={
            'carousel-slider-button' && currentIndex == 0
              ? 'carousel-slider-button-active'
              : ''
          }
        />
        <button
          onClick={change2}
          className={
            'carousel-slider-button' && currentIndex == 1
              ? 'carousel-slider-button-active'
              : ''
          }
        />
        <button
          onClick={change3}
          className={
            'carousel-slider-button' && currentIndex == 2
              ? 'carousel-slider-button-active'
              : ''
          }
        />
        <button
          onClick={change4}
          className={
            'carousel-slider-button' && currentIndex == 3
              ? 'carousel-slider-button-active'
              : ''
          }
        />
        <button
          onClick={change5}
          className={
            'carousel-slider-button' && currentIndex == 4
              ? 'carousel-slider-button-active'
              : ''
          }
        />
        <button
          onClick={change6}
          className={
            'carousel-slider-button' && currentIndex == 5
              ? 'carousel-slider-button-active'
              : ''
          }
        />
        <button
          onClick={change7}
          className={
            'carousel-slider-button' && currentIndex == 6
              ? 'carousel-slider-button-active'
              : ''
          }
        />
        <button
          onClick={change8}
          className={
            'carousel-slider-button' && currentIndex == 7
              ? 'carousel-slider-button-active'
              : ''
          }
        />
        <button
          onClick={change9}
          className={
            'carousel-slider-button' && currentIndex == 8
              ? 'carousel-slider-button-active'
              : ''
          }
        />
      </div>
    </div>
  );
};

export default InvestCarousel;
