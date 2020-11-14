import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  IconButton,
  Heading,
} from '@chakra-ui/react';
import {
  GrPrevious,
  GrNext,
  GrLock,
  GrUnlock,
} from 'react-icons/gr';

function Carousel({ images }) {
  const [isLocked, setLocked] = useState(false);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => { setSlide(slide >= (images.length - 1) ? 0 : (slide + 1)); };
  const prevSlide = () => { setSlide(slide <= 0 ? (images.length - 1) : (slide - 1)); };

  useEffect(() => {
    if (!isLocked) {
      const i = setInterval(nextSlide, 6000);
      return () => clearInterval(i);
    }
    return () => { };
  });

  return (
    <Box
      aria-label="masthead"
      aria-roledescription="carousel"
      pos="relative"
      role="group"
      overflow="hidden"
      mt={3}
      w="100%"
      h="md"
      mx="auto"
      borderRadius={16}
    >
      {images.map((image, index) => (
        <Box
          aria-roledescription="slide"
          aria-label={image.desc}
          aria-hidden={slide === index ? 'false' : 'true'}
          h="100%"
          l="0"
          overflow="hidden"
          pos="absolute"
          transform={`translateX(${(index - slide) * 100}%)`}
          transition="all 0.5s 250ms ease-out"
          top="0"
          w="100%"
        >
          <Box
            t="0"
            l="0"
            w="100%"
            h="100%"
            bgImage={`url(${image.src})`}
            bgSize="cover"
            bgPos="center center"
            pos="absolute"
          />
          <Heading
            as="h3"
            bg="rgba(0, 0, 0, 0.4)"
            l="0"
            t="0"
            p={2}
            color="white"
            fontSize="4xl"
            pos="absolute"
            w="100%"
          >
            {image.text}
          </Heading>
        </Box>
      ))}
      <IconButton
        colorScheme="red"
        aria-label="Go to previous slide"
        icon={<GrPrevious />}
        onClick={prevSlide}
        isRound
        pos="absolute"
        left={2}
        top="0"
        bottom="0"
        my="auto"
        size="sm"
      />
      <IconButton
        colorScheme="red"
        aria-label={isLocked ? 'Start slide rotation' : 'Stop slide rotation'}
        icon={isLocked ? <GrLock /> : <GrUnlock /> }
        onClick={() => setLocked(!isLocked)}
        isRound
        pos="absolute"
        left="0"
        right="0"
        mx="auto"
        size="md"
        bottom={2}
      />
      <IconButton
        colorScheme="red"
        aria-label="Go to next slide"
        icon={<GrNext />}
        onClick={nextSlide}
        isRound
        pos="absolute"
        right={2}
        top="0"
        bottom="0"
        my="auto"
        size="sm"
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
