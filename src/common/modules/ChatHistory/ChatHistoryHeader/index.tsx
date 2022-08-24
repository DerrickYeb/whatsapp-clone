import { Box, Button, Image, Menu, MenuButton, MenuItem, MenuList, Tooltip, useDisclosure } from "@chakra-ui/react";
import CustomImage from "@components/Application/Image";
import NewChatDrawer from "@components/Application/NewChatDrawer";
import React from "react";
import { ChatHeadMenuIcon } from "src/assets/SvgIcons/chatHedMenuIcon";
import { NewChatIcon } from "src/assets/SvgIcons/newChatIcon";
import { StatusIcon } from "src/assets/SvgIcons/statusIcon";

interface OpenNewChat{
  onOpen:() => void;
}

const ChatHistoryHeader = ({onOpen}:OpenNewChat) => {
  // const{isOpen,onOpen,onClose} = useDisclosure();
  return (
    <Box
      p={"10px 14px"}
      display={"flex"}
      width="33rem"
      height="59px"
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Box>
        <CustomImage
          src={""}
          width={"40px"}
          height={"42px"}
          alt={""}
          borderRadius={""}
        />
      </Box>
      <Box
        justifyContent={"flex-end"}
        alignContent={"center"}
        display="flex"
        gap={5}
      >
          <StatusIcon />
        <Box onClick={onOpen}>
        <Tooltip
          label="New Chat"
          aria-label="New Chat"
          placement="top"
          color="green"
        >
          <NewChatIcon />
        </Tooltip>
        </Box>
        <Tooltip label="Auto start" placement="auto-start">
          <Menu placement="bottom">
            <MenuButton fontSize="14px"><ChatHeadMenuIcon /></MenuButton>
          <MenuList>
            <MenuItem fontSize="14px">New Group</MenuItem>
            <MenuItem fontSize="14px">Archieved</MenuItem>
            <MenuItem fontSize="14px">Starred messages</MenuItem>
            <MenuItem fontSize="14px">Settings</MenuItem>
            <MenuItem fontSize="14px">Log Out</MenuItem>
          </MenuList>
          </Menu>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default ChatHistoryHeader;
