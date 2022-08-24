import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ChatHistory from "../ChatHistory";
import ChatBox from "./Chatbox/Index";

const ChatLayout = () => {
  return (
    <Box bg={"#fff"} height={"58em"} width={"100rem"} alignContent="center" my={'20px'}>
      <Grid
        templateAreas={`
                  "chat-history main"
                  `}
        // gridTemplateRows={"200px 1fr 30px"}
        // gridTemplateColumns={"340px 1fr"}
        color="blackAlpha.700"
        fontWeight="bold"
      >
        {/* <GridItem border="1px solid black" height={50} pl="2" area={"header"}>
          Header
        </GridItem> */}
        <GridItem height={'58rem'} minW="33rem"  area={"chat-history"}>
          <Box>
            <ChatHistory/>
        </Box>
        </GridItem>
        <GridItem  height={'58rem'} minW="65rem" area={"main"}>
          <ChatBox/>
        </GridItem>
        {/* <GridItem pl="2" height={"2rem"} width={'33rem'} bg="blue.300" area={"drawer"}>
          Chat Box
        </GridItem> */}
      </Grid>
    </Box>
  );
};

export default ChatLayout;
