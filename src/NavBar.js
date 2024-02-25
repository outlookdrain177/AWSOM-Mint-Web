import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Facebook from "./assets/assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/assets/social-media-icons/email_32x32.png";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  return (
    <Flex justify="space-between" align="center" padding="30px">
      {/* left side - Social media icons */}
      <Flex justify="space-around" width="40%" padding="0 75px">
        <Link href="https://www.facebook.com">
          <Image src={Facebook} boxSize="42px" margin="0 15px" />
        </Link>
        <Link href="https://www.twitter.com">
          <Image src={Twitter} boxSize="42px" margin="0 15px" />
        </Link>
        <Link href="https://www.gmail.com">
          <Image src={Email} boxSize="42px" margin="0 15px" />
        </Link>
      </Flex>

      {/* Right side - Sections and connect */}
      <Flex justify="space-around" align="center" width="40%" padding="30px">
        <Box margin="0 15px">About</Box>
        <Spacer />
        <Box margin="0 15px">Mint</Box>
        <Spacer />
        <Box margin="0 15px">Team</Box>
        <Spacer />

        {/* Connect */}

        {isConnected ? (
          <Box margin="0 15px">Connected</Box>
        ) : (
          <Button
            backgroundColor="#D6517D"
            borderRadius="5px"
            box-shadow="0px 2px 2px 1px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px"
            onClick={connectAccount}
          >
            Connect
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default NavBar;
