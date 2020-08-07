import React from 'react'
import { Stack, Box } from '@chakra-ui/core'

export default function Midias(){
    return(
        <Stack position='fixed' right='-4px' bottom='15%' padding='6px' borderTopLeftRadius='16px' borderBottomLeftRadius='16px'
            style={{
                border: 'solid #000 1px',
            }}
        >
            <a target='_Blank' href='https://github.com/petcompufc'>
                <Box as='img' height='32px' width='32px' borderRadius='50%' marginBottom='4px' src='https://github.githubassets.com/pinned-octocat.svg'/>
            </a>
            <a target='_Blank' href='https://www.facebook.com/PETCompUFC/'>
                <Box as='img' height='32px' width='32px' borderRadius='50%' marginBottom='4px' src='https://www.facebook.com/images/fb_icon_325x325.png'/>
            </a>
            <a target='_Blank' href="https://www.instagram.com/petcompufc">
                <Box as='img' height='32px' width='32px' borderRadius='50%' marginBottom='4px' src='https://instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png'/>
            </a>
            <a target='_Blank' href="https://www.youtube.com/user/petcompufc/videos">
                <Box as='img' height='32px' width='32px' borderRadius='50%' marginBottom='4px' src='https://s.ytimg.com/yts/img/favicon_144-vfliLAfaB.png'/>
            </a>
            <a target='_Blank' href="mailto:petcomp@ufc.br">
                <Box as='img' height='32px' width='32px' borderRadius='50%' marginBottom='0px' src='https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico'/>
            </a>
        </Stack>
    )
}