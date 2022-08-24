import { Image } from '@chakra-ui/react'
import React from 'react'

interface ImageProps{
    src: string,
    width: string | number,
    height: string | number,
    alt: string,
    borderRadius: string | number
}
const CustomImage = ({src, width, height, alt, borderRadius}:ImageProps) => {
  return (
   <Image src='https://picsum.photos/200' cursor={'pointer'} height={height} width={width}  borderRadius='50%' alt={alt}/>
  )
}

export default CustomImage