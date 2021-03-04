import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import {
  Box,
  IconButton,
  Image,
  Heading,
} from '@chakra-ui/react';
import {
  GrPrevious,
  GrNext,
  GrLock,
  GrUnlock,
} from 'react-icons/gr';

function Carousel({ slides }) {
  const [isLocked, setLocked] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => setSlideIndex(slideIndex >= (slides.length - 1) ? 0 : (slideIndex + 1));
  const prevSlide = () => setSlideIndex(slideIndex <= 0 ? (slides.length - 1) : (slideIndex - 1));

  useEffect(() => {
    if (!isLocked) {
      const i = setInterval(nextSlide, 6000);
      return () => clearInterval(i);
    }
    return () => { };
  });

  return (
    <Box
      aria-atomic="false"
      aria-label="masthead"
      aria-live={isLocked ? 'polite' : 'off'}
      aria-roledescription="carousel"
      pos="relative"
      role="group"
      overflow="hidden"
      my={3}
      w="100%"
      h="md"
      mx="auto"
      borderRadius={16}
    >
      {slides.map((slide, index) => (
        <Box
          aria-roledescription="slide"
          aria-hidden={slideIndex === index ? 'false' : 'true'}
          h="100%"
          key={slide.desc}
          left="0"
          overflow="hidden"
          pos="absolute"
          transform={`translateX(${(index - slideIndex) * 100}%)`}
          transition="all 0.5s 250ms ease-out"
          top="0"
          w="100%"
        >
          <Image
            alt={slide.desc}
            as={GatsbyImage}
            h="100%"
            image={slide.image}
            left={0}
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
            {slide.text}
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
        icon={isLocked ? <GrLock /> : <GrUnlock />}
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
  slides: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({
          layout: PropTypes.string,
          backgroundColor: PropTypes.color,
          images: PropTypes.shape({
            fallback: PropTypes.shape({
              src: PropTypes.string,
              srcSet: PropTypes.string,
              size: PropTypes.string,
            }),
            sources: PropTypes.arrayOf(PropTypes.shape({
              srcSet: PropTypes.string,
              type: PropTypes.string,
              sizes: PropTypes.string,
            })),
            widht: PropTypes.integer,
            height: PropTypes.integer,
          }),
        }),
      }),
    }),
    desc: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default Carousel;
