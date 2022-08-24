import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import ChatRightDrawer from '@components/Application/ChatRightDrawer'
import React, { useState } from 'react'
import ChatBoxHeader from '../../ChatBoxHeader'
import MessageBox from '../MessageBox/Index'

const ChatBox = () => {
  const [openDrawer,setDrawerOpen] = useState(false)

  const handleDrawerOpen = () => setDrawerOpen(!openDrawer)
  return (
    <Box bg={"chatheader"}>
      <SimpleGrid
      columns={openDrawer ? 2 : 1}>
        <GridItem>
        <Box>
       <Box bg={'chatheader'} width="100%" borderLeft={'1px solid #D1D7DB'} height="59px">
            <ChatBoxHeader avatar='' name='Jon Enoch Se' status='last seen yesterday' openDrawerHandler={handleDrawerOpen}/>
        </Box>
        <Box height={'50.8rem'} display='flex' flex-direction='column' width="100%" bg={'#F2EEE8'}>
          
        </Box>
        <Box bg={'chatheader'} width="100%" display={'flex'}>
            <MessageBox onDrawerOpen={openDrawer}/>
        </Box>
       </Box>
        </GridItem>
        {
          openDrawer && <GridItem width="30rem" height={"58rem"} overflowY="clip">
          <ChatRightDrawer contactProfilerDrawer closeDrawer={handleDrawerOpen}/>
        </GridItem>
        }
      </SimpleGrid>
       

          {/* Drawer Box */}
          {/* <Box shadow={20}>
          <ChatRightDrawer searchDrawer={true} />
          </Box> */}
    </Box>
  )
}

export default ChatBox