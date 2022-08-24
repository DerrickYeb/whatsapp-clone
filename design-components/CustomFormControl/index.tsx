import { Box, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { IFormControlTypes } from 'src/common/@types/DesignComponents/FormControl'

export const CustomFormControl:React.FC<IFormControlTypes> = ()  => {

  return (
    <Box>
      <Box>
        <VStack>
          <Text>{}</Text>
          <Input/>
        </VStack>
      </Box>
    </Box>
  )
}
