import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import CloseIcon from 'src/assets/SvgIcons/CloseIcon'
import CustomImage from './Image'

const ContactProfileDrawer = () => {
  return (
    <Box>
        <Box
            bg="chatheader"
            p={"10px 14px"}
            display={"flex"}
            columnGap={10}
            width="33rem"
            // justifyContent="space-between"
            alignItems={"center"}
            height="3.7rem"
            borderLeft={"1px solid #D1D7DB"}
          >
            <Box cursor={'pointer'}>
              <CloseIcon />
            </Box>
            <Box>
              <Text fontSize={14}>Contact Profile</Text>
            </Box>
          </Box>
        <Box columnGap={10} boxShadow={5} width={"33rem"}>
        <Box display={'flex'} bg="#fff" mb={2} alignItems='center' boxShadow={"md"} pt={6} pb={2} justifyContent="center" flexDir={'column'}>
            <CustomImage src={'https://www.google.com/img/google.png'} width={'13rem'} height={'13rem'} alt={''} borderRadius={''} />
            <Text fontSize="md" fontWeight={'light'}>Name</Text>
            <Text fontSize="md" fontWeight={'light'}>Phone Number</Text>
        </Box>
        <Box bg={"#fff"} height="100px" mb={2} boxShadow={"md"}>
            hello
        </Box>
        <Box bg={"#fff"} mb={2} height="150px" boxShadow={"md"}>
            hello
        </Box>
        <Box bg={"#fff"} mb={2} height="135px" boxShadow={"md"}>
            hello
        </Box>
        <Box bg={"#fff"} mb={2} height="130px" boxShadow={"md"}>
            hello
        </Box>
        </Box>
    </Box>
  )
}

export default ContactProfileDrawer