import React, { useState } from 'react';
import { Box, IconButton } from '@chakra-ui/core';

function Carousel() {
  const [isLocked, setLocked] = useState(0);

  return (
    <Box
      aria-label="masthead" 
      aria-roledescription="carousel"
      role="group"
    >
      <IconButton
        aria-label="Go to previous slide"
        icon="arrow-back"
        isRound
      />
      <IconButton
        aria-label={isLocked ? 'Start slide rotation' : 'Stop slide rotation'}
        icon={isLocked ? 'unlock' : 'lock'}
        onClick={() => setLocked(!isLocked)}
      />
      <IconButton
        aria-label="Go to next slide"
        icon="arrow-forward"
        isRound
      />
    </Box>
  );
}

export default Carousel;
