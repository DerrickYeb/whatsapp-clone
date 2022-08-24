import {
    Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerProps,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BackArrowIcon } from "src/assets/SvgIcons/BackArrowIcon";
import { SearchIcon } from "src/assets/SvgIcons/SearchIcon";
import ContactChat from "./ContactChat";

interface CustomDrawerProps{
    onClose: () => void;
    data?: any;
}
const contacts=[
    {
        avatar: 'https://www.google.com/img/google.png',
        name: 'John Doe',
        lastMessage: 'Hello',
        time: 'yesterday'
    },
    {
        avatar: 'https://www.google.com/img/google.png',
        name: 'John Doe',
        lastMessage: 'Hello',
        time: '12:00'
    },
    {
        avatar: 'https://www.google.com/img/google.png',
        name: 'John Doe',
        lastMessage: 'Hello',
        time: '12:00'
    }
]
const NewChatDrawer = ({data,onClose}:CustomDrawerProps) => {
    const [newIcon,setNewIcon] = React.useState(false);
    const handleClick = () => setNewIcon(!newIcon);

  return (
    <Box w={"35rem"}>
        <Box bg="#008069" h={107} display="flex"  flexDirection={"column"} justifyContent="flex-end">
           <HStack spacing={10} py={5} px={23}>
           <Box onClick={onClose} cursor="pointer">
            <BackArrowIcon color="white" />
            </Box>
            <Box>
            <Text color={"#fff"}>New Chat</Text>
            </Box>
           </HStack>
        </Box>
        <Flex w={"100%"} zIndex={2}  justifyContent="space-between" align="center"  p={"10px 14px"}> 
        <InputGroup bg={'chatheader'} w="33rem" borderRadius={'full'}>
         {/* eslint-disable-next-line react/no-children-prop */}
        <InputLeftElement children={newIcon ?<BackArrowIcon color='teal'/> :<SearchIcon /> }/>
        <Input onInput={handleClick} _placeholder={{fontSize: 12}}  placeholder='Search or start new chat'/>
        </InputGroup>
      </Flex>
      <Box>
          {contacts.map((contact, index) => (
              <Box key={index}>
                  <ContactChat avatar={contact.avatar} name={contact.name} status={contact.lastMessage}/>
              </Box>
          ))}
      </Box>
    </Box>
  )
};

export default NewChatDrawer;
