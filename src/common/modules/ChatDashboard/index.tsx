import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import ChatLayout from '../Chat/ChatLayout'

const ChatDashboard = () => {
  return (
    <>
    <Box justifyContent={'center'} width='full' >
        {/* Chat Layout */}
        <Flex justifyContent={'center'}  alignItems='center'>
            <ChatLayout />
        </Flex>
        {/* <ChatLayout/> */}
    </Box>
    </>
  )
}

export default ChatDashboard