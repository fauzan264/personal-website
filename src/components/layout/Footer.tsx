import {
  Box,
  Flex,
  Link as ChakraLink,
  Stack,
  Text,
  // useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { ReactNode } from "react";
import Link from "next/link";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <ChakraLink
      as={"a"}
      // bg={useColorModeValue('blackAlpha.100', 'whiteAlpa.100')}
      bgColor={"blackAlpha.300"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        // bg: useColorModevalue('blackAlpha.200', 'whiteAlpha.200'),
        bgColor: "blackAlpha.500",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </ChakraLink>
  );
};

export default function Footer() {
  return (
    <Box bgColor={"red.400"} color={"white"}>
      <Flex
        as={Stack}
        maxW={"6xl"}
        py={4}
        // direction={{ base: 'column', md: 'row' }}
        flexDirection={{ base: "column", md: "row" }}
        // spaceX={4}
        marginX={"auto"}
        gap={4}
        justifyItems={{ base: "center", md: "space-between" }}
        alignItems={{ base: "center", md: "center" }}
      >
        <Text>
          © 2020 - 2025{" "}
          <ChakraLink asChild fontWeight={"bold"}>
            <Link href={"https://fauzan264.netlify.app"}>Fauzan</Link>
          </ChakraLink>{" "}
          using Chakra UI
        </Text>
        <Flex
          direction={"row"}
          gap={4}
          marginLeft={{ base: "unset", md: "auto" }}
          justifyContent={"flex-end"}
        >
          <SocialButton label={"Linkedin"} href={"#"}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={"Github"} href={"#"}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
        </Flex>
      </Flex>
    </Box>
  );
}
