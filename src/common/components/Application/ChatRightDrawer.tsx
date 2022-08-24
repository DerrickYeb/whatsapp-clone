import { Box, Text } from "@chakra-ui/react";
import React from "react";
import CloseIcon from "src/assets/SvgIcons/CloseIcon";
import ChatBoxHeader from "src/common/modules/ChatBoxHeader";
import ChatHistoryHeader from "src/common/modules/ChatHistory/ChatHistoryHeader";
import ContactProfileDrawer from "./ContactProfileDrawer";
import SearchComponent from "./SearchComponent";

interface RightDrawerProps {
  searchDrawer?: boolean;
  closeDrawer:() => void;
  contactProfilerDrawer?: boolean;
}

const ChatRightDrawer = ({
  searchDrawer,
  closeDrawer,
  contactProfilerDrawer,
}: RightDrawerProps) => {
  return (
    <Box width={"33rem"}>
      {searchDrawer && (
        <Box width={"33rem"} bg={"white"}>
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
            <Box cursor={'pointer'} onClick={closeDrawer}>
              <CloseIcon />
            </Box>
            <Box>
              <Text fontSize={14}>Search Messages</Text>
            </Box>
          </Box>
          <Box borderBottom={'1px solid #D1D7DB'}>
            <SearchComponent
              placeholder="Search for messages"
              isFilter={false}
              swapIcon={true}
            />
          </Box>
          <Box bg="#fff" height={"50.5rem"}>

          </Box>
        </Box>
      )}
      {contactProfilerDrawer && <Box width="33rem">
        <ContactProfileDrawer/>
        </Box>}
    </Box>
  );
};

export default ChatRightDrawer;
