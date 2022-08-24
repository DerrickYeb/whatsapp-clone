import { Box, Flex, Text } from '@chakra-ui/react'
import ContactChat from '@components/Application/ContactChat'
import CustomImage from '@components/Application/Image'
import React, { Children } from 'react'
import { ChatHeadMenuIcon } from 'src/assets/SvgIcons/chatHedMenuIcon';
import { SearchIcon } from 'src/assets/SvgIcons/SearchIcon';
import { StatusIcon } from 'src/assets/SvgIcons/statusIcon';

interface ChatBoxHeaderProps {
    avatar: string;
    name: string;
    status: string;
    openDrawerHandler:() => void;
}

const contacts=[
    {
        avatar: 'https://www.google.com/img/google.png',
        name: 'John Doe',
        lastMessage: 'Hello',
        time: 'last seen was yesterday',
    }
]

const ChatBoxHeader = ({avatar,name,status,openDrawerHandler}:ChatBoxHeaderProps) => {
  return (
    <Box _hover={{bg:"#F0F2F5"}} className="chat-border">
    <Flex p={"10px 16px"} justifyContent="center" align={'center'}>
        <Box cursor={'pointer'}>
        <CustomImage src={'https://www.google.com/img/google.png'} width={'42px'} height={'42px'} alt={''} borderRadius={''} />
        </Box>
        <Box ml={4}>
        <Text>{name}</Text>
        <Text fontSize={11}>{status}</Text>
        </Box>
        <Box display={'flex'} columnGap={4} ml={'auto'} justifyContent="flex-end">
            <Box onClick={openDrawerHandler} cursor={'pointer'}>
            <SearchIcon/>
            </Box>
            <ChatHeadMenuIcon />
        </Box>
    </Flex>
    {/* <Divider pl={16} width={200} justifyContent="flex-end"/> */}
    </Box>
  )
}

export default ChatBoxHeader