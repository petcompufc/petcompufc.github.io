import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Open Sans", sans-serif'
  },
  styles: {
    global: {
      '#gatsby-focus-wrapper': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minH: '100vh'
      }
    }
  }
})

export default theme
