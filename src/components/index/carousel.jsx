import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Image } from '@chakra-ui/core';

function Carousel({ images }) {
  const [isLocked, setLocked] = useState(false);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => { setSlide(slide >= (images.length - 1) ? 0 : (slide + 1)); };
  const prevSlide = () => { setSlide(slide <= 0 ? (images.length - 1) : (slide - 1)); };

  useEffect(() => {
    if (!isLocked) {
      const i = setInterval(nextSlide, 3000);
      return () => clearInterval(i);
    }
    return () => {};
  });

  return (
    <Box
      aria-label="masthead"
      aria-roledescription="carousel"
      pos="relative"
      role="group"
    >
      {images.map((image, index) => (
        <Image
          aria-roledescription="slide"
          aria-label={image.desc}
          display={slide === index ? '' : 'none'}
          src={image.src}
        />
      ))}
      <IconButton
        aria-label="Go to previous slide"
        icon="arrow-back"
        onClick={prevSlide}
        isRound
        pos="absolute"
        left={2}
        top="0"
        bottom="0"
        my="auto"
      />
      <IconButton
        aria-label={isLocked ? 'Start slide rotation' : 'Stop slide rotation'}
        icon={isLocked ? 'lock' : 'unlock'}
        onClick={() => setLocked(!isLocked)}
        isRound
        pos="absolute"
        bottom={2}
        left="0"
        right="0"
        mx="auto"
      />
      <IconButton
        aria-label="Go to next slide"
        icon="arrow-forward"
        onClick={nextSlide}
        isRound
        pos="absolute"
        right={2}
        top="0"
        bottom="0"
        my="auto"
      />
    </Box>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    desc: PropTypes.string,
  })).isRequired,
};

export default Carousel;
