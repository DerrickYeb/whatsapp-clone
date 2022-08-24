import { Box, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BackArrowIcon } from 'src/assets/SvgIcons/BackArrowIcon'
import { FilterIcon } from 'src/assets/SvgIcons/FilterIcon'
import { SearchIcon } from 'src/assets/SvgIcons/SearchIcon'

interface SearchProps{
    placeholder?: string;
    onclick?: () => void;
    isFilter?: boolean;
    swapIcon?: boolean;
}


const SearchComponent = ({placeholder, onclick,isFilter,swapIcon}: SearchProps) => {
  return (
    <Flex w={"100%"} zIndex={2}  justifyContent="space-between" align="center"  p={"10px 14px"}> 
        <InputGroup bg={'chatheader'} w="30rem" borderRadius={'full'}>
         {/* eslint-disable-next-line react/no-children-prop */}
        <InputLeftElement children={swapIcon ? <SearchIcon />: <BackArrowIcon color='teal'/>}/>
        <Input onClick={onclick} _placeholder={{fontSize: 12}}  placeholder={placeholder}/>
        </InputGroup>
        {
            isFilter &&(<Box>
                <FilterIcon />
                </Box>)
        }
      </Flex>
  )
}

export default SearchComponent