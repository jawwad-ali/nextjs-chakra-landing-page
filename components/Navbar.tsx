"use client";
import {
  Flex,
  Button,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";  
import { HamburgerIcon, CloseIcon} from "@chakra-ui/icons";
import NextLink from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [display, setDisplay] = useState("none");

  return (
    <Flex>
      <Flex
        pos="fixed"
        alignItems={"center"}
        w="100%"
        px="10"
        justifyContent={"space-between"}
      >
        {/* Logo */}
        <Box display={{ sm: "none", lg: "flex" }} width={"100%"}>
          <Image src={Logo} height={50} width={50} alt="Logo" />
        </Box>

        {/* Items */}
        <Flex
          display={{ base: "none", md: "none", lg: "flex" }}
          color="#48BB78"
          fontWeight={400}
        >
          <NextLink href="/" passHref>
            <Button
              variant={"ghost"}
              aria-label="Home"
              my={5}
              w="100%"
              _hover={{ textDecoration: "underline" }}
            >
              Home
            </Button>
          </NextLink>

          <NextLink href="/stores" passHref>
            <Button
              variant={"ghost"}
              aria-label="contact"
              my={5}
              w="100%"
              _hover={{ textDecoration: "underline" }}
            >
              How it works
            </Button>
          </NextLink>

          <NextLink href="/stores" passHref>
            <Button
              variant={"ghost"}
              aria-label="contact"
              my={5}
              w="100%"
              _hover={{ textDecoration: "underline" }}
            >
              Features
            </Button>
          </NextLink>

          <NextLink href="/stores" passHref>
            <Button
              variant={"ghost"}
              aria-label="contact"
              my={5}
              w="100%"
              _hover={{ textDecoration: "underline" }}
            >
              Pricing
            </Button>
          </NextLink>
          <Button colorScheme={"green"} my={5}>
            Create Account
          </Button>
        </Flex>

        {/* Humburger menu */}
        <Box
          w="100%"
          justifyContent={"flex-end"}
          display={{ base: "flex", md: "flex", lg: "none" }}
        >
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr="2"
            icon={<HamburgerIcon />}
            onClick={() => setDisplay("flex")}
            mt="2"
            display={{ base: "flex", md: "flex", lg: "none" }}
          />
        </Box>

        {/* For mobile */}
        <Flex
          px="5"
          w="100vw"
          bgColor={"gray.50"}
          zIndex={50}
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir={"column"}
          display={display}
          right="1"
          bg='#48BB78' color='white'
        >
          <Flex justify="space-between">
            {/* mobile logo */}
            <Box display={{ sm: "flex", lg: "none" }} w="auto" width="50px">
              <Image src={Logo} height={50} width={50} alt="Logo" /> 
            </Box>

            {/* Menu close icon */}
            <IconButton
              mt="2"
              bg={{base:'none' , md:'none' }}
              mr="2"
              aria-label="Close menu"
              size="lg"
              onClick={() => setDisplay("none")}
              icon={<CloseIcon />}
            />
          </Flex>

          {/* items */}
          <Flex flexDir={{base:'column' , md:'row' , lg:'row'}} justifyContent={'space-between'} align="center">
            <NextLink href="/" passHref>
              <Button
                variant={"ghost"}
                aria-label="Home"
                my={5}
                w="100%"
                _hover={{ textDecoration: "underline" }}
              >
                Home
              </Button>
            </NextLink>

            <NextLink href="/stores" passHref>
              <Button
                variant={"ghost"}
                aria-label="contact"
                my={5}
                w="100%"
                _hover={{ textDecoration: "underline" }}
              >
                How it works
              </Button>
            </NextLink>

            <NextLink href="/stores" passHref>
              <Button
                variant={"ghost"}
                aria-label="contact"
                my={5}
                w="100%"
                _hover={{ textDecoration: "underline" }}
              >
                Features
              </Button>
            </NextLink>

            <NextLink href="/stores" passHref>
              <Button
                variant={"ghost"}
                aria-label="contact"
                my={5}
                w="100%"
                _hover={{ textDecoration: "underline" }}
              >
                Pricing
              </Button>
            </NextLink>
            <Button colorScheme={"green"} my={5} bg='white' color='#48BB78'>
              Create Account
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;