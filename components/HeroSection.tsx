"use client";
import {
  Box,
  Center,
  Button,
  Heading,
  SimpleGrid,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import { ChevronRightIcon } from "@chakra-ui/icons";
import HeroSectionImg from "../assets/hero.webp";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const HeroSection = () => {
  return (
    <SimpleGrid
      height={{ base: "100vh", lg: "87vh" }}
      columns={{ base: 1, md: 1, lg: 2 }}
      px={{ base: 8, md: 8, lg: 16 }}
      mt="16"
    >
      {/* Left column */}
      <Box
        display="flex"
        flexDir={"column"}
        justifyContent={"center"}
        mb={{ base: 5, md: 5, lg: 0 }}
      >
        <Heading as="h1" color="#276749">
          <Text className={inter.className}>
            Build this rad landing page from scratch
          </Text>
        </Heading>
        <Text pt="5" color="#718096" className={inter.className}>
          This is the subheader section where you describe the basic benefits of
          your product.
        </Text>
        <Box>
          <Button my={5} bg="#48BB78" color="white">
            Create your Account now <ChevronRightIcon ml="2" fontSize="20" />
          </Button>
        </Box>
        <Text pt="-1.5" color="#718096" className={inter.className}>
          No credit card required.
        </Text>
      </Box>

      {/* Right Section */}
      <Box display="flex" flexDir={"column"} justifyContent={"center"}>
        <Image src={HeroSectionImg} alt="Hero Section Image" />
      </Box>
    </SimpleGrid>
  );
};

export default HeroSection;
