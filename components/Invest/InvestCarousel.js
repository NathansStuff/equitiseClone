import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const InvestCarousel = ({
  children,
  show,
  header = 'Latest News',
  filter = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const [filterTestimonial, setFilterTestimonial] = useState('all');
  const length = children.length;
  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex(prevState => prevState + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    } else {
      setCurrentIndex(length - 1);
    }
  };

  const change1 = () => {
    setCurrentIndex(0);
  };

  const change = index => {
    setCurrentIndex(index + 1);
  };

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
      {filter.length == 0 ? (
        ''
      ) : (
        <div className='carousel-header'>
          <div>
            <h3>{header}</h3>
          </div>
        </div>
      )}
      <div className='carousel-header'>
        {filter.length == 0 ? (
          <div>
            <h3>{header}</h3>
          </div>
        ) : (
          <div className='carousel-filter'>
            <div
              className={`carousel-filter-each ${
                filterTestimonial == 'all' ? 'carousel-filter-each-active' : ''
              }`}
              onClick={() => setFilterTestimonial('all')}
            >
              <h4>All</h4>
            </div>
            {filter.map(fil => {
              return (
                <div
                  className={`carousel-filter-each ${
                    filterTestimonial == fil
                      ? 'carousel-filter-each-active'
                      : ''
                  }`}
                  onClick={() => setFilterTestimonial(fil)}
                >
                  <h4>{fil}</h4>
                </div>
              );
            })}
          </div>
        )}
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
            {children[length - 1]}
            {children}
            {children[0]}
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
        {children.map((child, index) => {
          if (index < 8 && index < children.length - 1) {
            return (
              <button
                onClick={() => {
                  change(index);
                }}
                className={
                  'carousel-slider-button' && currentIndex == index + 1
                    ? 'carousel-slider-button-active'
                    : ''
                }
              />
            );
          }
        })}
      </div>
      {
        (header = 'Latest News' ? (
          <div className='carousel-view-all'>
            <Link href='/news'>
              <button>View All</button>
            </Link>
          </div>
        ) : (
          <div />
        ))
      }
    </div>
  );
};

export default InvestCarousel;
