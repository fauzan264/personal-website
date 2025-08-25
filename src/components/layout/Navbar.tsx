"use client";
import { Box, Flex, Icon, Link, Stack, useDisclosure } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const { open, onToggle } = useDisclosure();
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#about-me" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonial", href: "#testimonial" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Box
      as="nav"
      w="100%"
      p="4"
      position="fixed"
      top={0}
      zIndex={1000}
      className="navbar"
    >
      <Flex justify="space-between" align="center" px={10}>
        {/* <Text fontSize="lg" fontWeight="bold" color="white">
          Fauzan
        </Text> */}
        <Box cursor={"pointer"}>
          <Image src={"/images/logo.png"} alt={"logo"} width={30} height={30} />
        </Box>

        {/* Mobile Icon Toggle */}
        <Box display={{ base: "block", md: "none" }} onClick={onToggle}>
          <Icon
            as={open ? TfiClose : RxHamburgerMenu}
            w={6}
            h={6}
            color="white"
            cursor="pointer"
          />
        </Box>

        {/* Desktop Nav Links */}
        <Flex
          gap="4"
          color="white"
          display={{ base: "none", md: "flex" }}
          justifyContent="flex-end"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              color={pathname === link.href ? "gray.400" : "white"}
            >
              {link.label}
            </Link>
          ))}
        </Flex>
      </Flex>

      {/* Mobile Nav Links */}
      {open && (
        <Stack
          mt={4}
          display={{ base: "flex", md: "none" }}
          color="white"
          gap={2}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              color={pathname === link.href ? "gray.400" : "white"}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      )}
    </Box>
  );
}
