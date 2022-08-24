import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import CustomImage from './Image'

interface ContactChatProps {
    avatar: string;
    name: string;
    lastMessage?: string;
    time?: string;
    status?: string;

}

const ContactChat = ({avatar, name, lastMessage, time,status}:ContactChatProps) => {
  return (
    <Box cursor={'pointer'} _hover={{bg:"#F0F2F5"}} className="chat-border">
    <Flex p={"10px 16px"} justifyContent="center" align={'center'} borderBottom={'1px solid #efefef'}>
        <CustomImage src={'https://www.google.com/img/google.png'} width={'60px'} height={'60px'} alt={''} borderRadius={''} />
        <Box ml={4}>
        <Text>{name}</Text>
        <Text fontSize={11}>{lastMessage || status}</Text>
        </Box>
        <Box ml={'auto'} justifyContent="flex-end">
            <Text fontSize={11} fontWeight='bold' color={time === '12:00' ? 'teal' :'#efefef'}>{time}</Text>
        </Box>
    </Flex>
    {/* <Divider pl={16} width={200} justifyContent="flex-end"/> */}
    </Box>
  )
}

export default ContactChat