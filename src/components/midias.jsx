import React from 'react'
import { Stack, Box } from '@chakra-ui/core'

export default function Midias(){
    return(
        <Stack position='fixed' right='-4px' bottom='15%' padding='6px' borderTopLeftRadius='16px' borderBottomLeftRadius='16px'
            style={{
                border: 'solid #000 1px',
            }}
        >
            <a href='https://github.com/petcompufc' target='_Blank'><Box as='img' src='https://github.githubassets.com/pinned-octocat.svg' height='32px' width='32px' borderRadius='50%' marginBottom='0px'/></a>
            <a href='https://www.facebook.com/497503250349647/photos/2384375954995691' target='_Blank'><Box as='img' src='https://www.facebook.com/images/fb_icon_325x325.png' height='32px' width='32px' borderRadius='50%' marginBottom='0px'/></a>
            <a href="https://www.instagram.com/petcompufc" target='_Blank'><Box as='img' src='https://instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png' height='32px' width='32px' borderRadius='50%' marginBottom='0px'/></a>
            <a href="https://www.youtube.com/user/petcompufc/videos" target='_Blank'><Box as='img' src='https://s.ytimg.com/yts/img/favicon_144-vfliLAfaB.png' height='32px' width='32px' borderRadius='50%' marginBottom='0px'/></a>
            <a href="mailto:petcomp@ufc.br" target='_Blank'><Box as='img' src='https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico' height='32px' width='32px' borderRadius='50%' marginBottom='0px'/></a>
        </Stack>
    )
}