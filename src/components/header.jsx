import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { useDisclosure, Button, ThemeProvider, CSSReset } from "@chakra-ui/core"
import Modal from './modal_certificates'

const Header = ({ siteTitle }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return(
    <header
      style={{
        background: 'rebeccapurple',
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <ThemeProvider>
          <CSSReset />
          <Button height='32px' onClick={onOpen}>Open Modal</Button>
        </ThemeProvider>
        <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose}></Modal>
      </div>
    </header>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
