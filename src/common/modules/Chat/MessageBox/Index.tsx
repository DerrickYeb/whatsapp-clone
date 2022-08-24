import { Box, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AttachmentIcon } from 'src/assets/SvgIcons/Attachment'
import { EmojiIcon } from 'src/assets/SvgIcons/Emoji'
import { MicrophoneIcon } from 'src/assets/SvgIcons/MicrophoneIcon'
import { SendMessageIcon } from 'src/assets/SvgIcons/SendIcon'
import { SmileyEmoji } from 'src/assets/SvgIcons/SmileyEmoji'

interface ChatBoxInputProps{
  onDrawerOpen:boolean
}

const MessageBox = ({onDrawerOpen}:ChatBoxInputProps) => {
  const[inputOnFocus,setinputOnFocus] = useState(false)

  const handleFocuse = () => setinputOnFocus(!inputOnFocus)


  return (
    <Box display={'flex'} columnGap={4} pl={4}   alignContent={'center'}>
        <Box py={4} cursor='pointer'>
        <SmileyEmoji/>
        </Box>
        <Box py={4} cursor='pointer'>
        <AttachmentIcon />
        </Box>
        <Box alignContent={'center'} display={'flex'} py={2}>
            {/* <input type="text" placeholder="Type a message" style={{width:'55rem', height:'40px',borderRadius:'5px'}}/> */}
            <Input onInput={handleFocuse}  alignContent={'center'} height={10} width={onDrawerOpen ? '24rem' : '57rem'}   type="text" bg={"white"} borderRadius={5} placeholder="Type a message" />
        </Box>
        <Box py={4}>
          {
            inputOnFocus ? (
              <Box cursor={'pointer'}><MicrophoneIcon />
              </Box>
            ):<Box cursor={'pointer'}><SendMessageIcon /></Box>

          }
        </Box>
    </Box>
  )
}

export default MessageBox