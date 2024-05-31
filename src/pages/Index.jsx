import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} bg="background">
      {/* Header */}
      <Box bg="brand.800" color="white" py={4}>
        <Heading as="h1" size="xl" textAlign="center">
          Financial Times
        </Heading>
      </Box>

      {/* Navigation Bar */}
      <Box bg="brand.700" color="white" py={2}>
        <HStack spacing={8} justify="center">
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Home</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>News</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Markets</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Opinion</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>More</Link>
        </HStack>
      </Box>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} p={4}>
        {/* Articles Section */}
        <Box flex="3" p={4} bg="background">
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h2" size="lg">Sample Article 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box>
              <Heading as="h2" size="lg">Sample Article 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box>
              <Heading as="h2" size="lg">Sample Article 3</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="background" p={4} ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Sidebar</Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Additional Link 1</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Additional Link 2</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Additional Link 3</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="background" color="white" py={4} mt={8}>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
          <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#" _hover={{ color: "gray.400" }}><FaFacebook /></Link>
            <Link href="#" _hover={{ color: "gray.400" }}><FaTwitter /></Link>
            <Link href="#" _hover={{ color: "gray.400" }}><FaLinkedin /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;