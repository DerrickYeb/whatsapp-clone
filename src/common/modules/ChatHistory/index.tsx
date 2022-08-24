import { Box, Flex, Input, InputGroup, InputLeftElement, useDisclosure } from '@chakra-ui/react'
import ContactChat from '@components/Application/ContactChat'
import NewChatDrawer from '@components/Application/NewChatDrawer'
import React from 'react'
import { BackArrowIcon } from 'src/assets/SvgIcons/BackArrowIcon'
import { FilterIcon } from 'src/assets/SvgIcons/FilterIcon'
import { SearchIcon } from 'src/assets/SvgIcons/SearchIcon'
import ChatHistoryHeader from './ChatHistoryHeader'

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
const ChatHistory = () => {
  const [newIcon,setNewIcon] = React.useState(false);
  const{isOpen,onOpen,onClose} = useDisclosure();
  const handleClick = () => setNewIcon(!newIcon);
  return (
    <Box>
      
     

    {
      isOpen ? (<NewChatDrawer onClose={onClose}/>) : 
     <>
     <Box bg={'chatheader'} width={'100%'}>
      <ChatHistoryHeader onOpen={onOpen}/>
      </Box>
      <Flex borderBottom={'1px solid #D1D7DB'} w={"100%"} zIndex={2}  justifyContent="space-between" align="center"  p={"10px 14px"}> 
        <InputGroup bg={'chatheader'} w="30rem" borderRadius={'full'}>
         {/* eslint-disable-next-line react/no-children-prop */}
        <InputLeftElement children={newIcon ? <SearchIcon />: <BackArrowIcon color='teal'/>}/>
        <Input onClick={handleClick} _placeholder={{fontSize: 12}}  placeholder='Search or start new chat'/>
        </InputGroup>
        <Box>
        <FilterIcon />
        </Box>
      </Flex>
      <Box>
          {contacts.map((contact, index) => (
              <Box key={index}>
                  <ContactChat avatar={contact.avatar} name={contact.name} lastMessage={contact.lastMessage} time={contact.time} />
              </Box>
          ))}
      </Box>
     </>
    }

      
    </Box>
  )
}

export default ChatHistory