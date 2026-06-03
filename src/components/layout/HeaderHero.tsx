"use client";
import { Box, Flex, Text, Link, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import { keyframes } from "@emotion/react";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

export default function HeaderHero() {
  return (
    <Box
      as="section"
      id="hero"
      w="full"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      pt={{ base: 20, md: 0 }}
      px={{ base: 6, md: 16, lg: 24 }}
      position="relative"
      overflow="hidden"
      bg="#0f172a"
      _before={{
        content: '""',
        position: "absolute",
        top: "20%",
        left: "10%",
        width: "300px",
        height: "300px",
        borderRadius: "full",
        bg: "rgba(100, 116, 139, 0.15)",
        filter: "blur(80px)",
        zIndex: 0,
      }}
      _after={{
        content: '""',
        position: "absolute",
        bottom: "10%",
        right: "15%",
        width: "400px",
        height: "400px",
        borderRadius: "full",
        bg: "rgba(59, 130, 246, 0.1)",
        filter: "blur(100px)",
        zIndex: 0,
      }}
    >
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
        justify="space-between"
        w="full"
        maxW="1200px"
        mx="auto"
        gap={{ base: 10, md: 16 }}
        zIndex={1}
        position="relative"
      >
        {/* Left side — Text content */}
        <Box
          flex={1}
          animation={`${fadeInUp} 0.8s ease-out`}
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="#94a3b8"
            fontWeight="medium"
            mb={3}
            letterSpacing="wider"
            textTransform="uppercase"
          >
            Hello,
          </Text>

          <Text
            as="h1"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color="#e2e8f0"
            lineHeight="1.1"
            mb={4}
          >
            I&apos;m{" "}
            <Text
              as="span"
              bgGradient="linear(to-r, #3b82f6, #60a5fa)"
              bgClip="text"
              color="transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #3b82f6, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ahmad Fauzan
            </Text>
          </Text>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="#94a3b8"
            mb={6}
            maxW="480px"
            lineHeight="1.7"
          >
            I build beautifully crafted software, and I love what I do.
          </Text>

          <Text
            fontSize="md"
            color="#64748b"
            mb={8}
          >
            Software Engineer
          </Text>

          {/* Stats row */}
          <Flex gap={{ base: 6, md: 10 }} flexWrap="wrap">
            <Box>
              <Text
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                color="#e2e8f0"
                lineHeight="1"
              >
                2+
              </Text>
              <Text
                fontSize="sm"
                color="#64748b"
                textTransform="uppercase"
                letterSpacing="wider"
                mt={1}
              >
                Years
                <br />
                Experience
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                color="#e2e8f0"
                lineHeight="1"
              >
                10+
              </Text>
              <Text
                fontSize="sm"
                color="#64748b"
                textTransform="uppercase"
                letterSpacing="wider"
                mt={1}
              >
                Projects
                <br />
                Completed
              </Text>
            </Box>
          </Flex>

          {/* Social buttons */}
          <Flex gap={3} mt={8} flexWrap="wrap">
            <Link
              href="https://github.com/fauzan264"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                aria-label="GitHub"
                variant="outline"
                size="lg"
                borderColor="rgba(148, 163, 184, 0.3)"
                color="#e2e8f0"
                borderRadius="xl"
                _hover={{
                  bg: "rgba(59, 130, 246, 0.15)",
                  borderColor: "#3b82f6",
                  color: "#60a5fa",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.25s ease"
              >
                <FaGithub size={20} />
              </IconButton>
            </Link>

            <Link
              href="https://www.linkedin.com/in/fauzan264"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                aria-label="LinkedIn"
                variant="outline"
                size="lg"
                borderColor="rgba(148, 163, 184, 0.3)"
                color="#e2e8f0"
                borderRadius="xl"
                _hover={{
                  bg: "rgba(59, 130, 246, 0.15)",
                  borderColor: "#3b82f6",
                  color: "#60a5fa",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.25s ease"
              >
                <FaLinkedin size={20} />
              </IconButton>
            </Link>

            <Link
              href="https://www.instagram.com/ah.fauzann_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                aria-label="Instagram"
                variant="outline"
                size="lg"
                borderColor="rgba(148, 163, 184, 0.3)"
                color="#e2e8f0"
                borderRadius="xl"
                _hover={{
                  bg: "rgba(59, 130, 246, 0.15)",
                  borderColor: "#3b82f6",
                  color: "#60a5fa",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.25s ease"
              >
                <FaInstagram size={20} />
              </IconButton>
            </Link>

            <Link
              href="mailto:fauzan.c4@gmail.com"
            >
              <IconButton
                aria-label="Email"
                variant="outline"
                size="lg"
                borderColor="rgba(148, 163, 184, 0.3)"
                color="#e2e8f0"
                borderRadius="xl"
                _hover={{
                  bg: "rgba(59, 130, 246, 0.15)",
                  borderColor: "#3b82f6",
                  color: "#60a5fa",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.25s ease"
              >
                <HiOutlineMail size={20} />
              </IconButton>
            </Link>
          </Flex>
        </Box>

        {/* Right side — Profile photo with decorative elements */}
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          animation={`${scaleIn} 0.8s ease-out 0.2s both`}
        >
          {/* Decorative circle behind photo */}
          <Box
            position="absolute"
            width={{ base: "280px", md: "380px", lg: "420px" }}
            height={{ base: "280px", md: "380px", lg: "420px" }}
            borderRadius="full"
            bg="linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(100, 116, 139, 0.1) 100%)"
            border="1px solid rgba(148, 163, 184, 0.1)"
            animation={`${float} 6s ease-in-out infinite`}
          />

          {/* Secondary decorative blob */}
          <Box
            position="absolute"
            top={{ base: "-10px", md: "-20px" }}
            right={{ base: "10px", md: "20px" }}
            width={{ base: "60px", md: "80px" }}
            height={{ base: "60px", md: "80px" }}
            borderRadius="full"
            bg="rgba(59, 130, 246, 0.2)"
            border="1px solid rgba(59, 130, 246, 0.3)"
            animation={`${float} 4s ease-in-out infinite 1s`}
          />

          {/* Small dot decoration */}
          <Box
            position="absolute"
            bottom={{ base: "20px", md: "40px" }}
            left={{ base: "10px", md: "0px" }}
            width={{ base: "30px", md: "40px" }}
            height={{ base: "30px", md: "40px" }}
            borderRadius="full"
            bg="rgba(148, 163, 184, 0.2)"
            border="1px solid rgba(148, 163, 184, 0.3)"
            animation={`${float} 5s ease-in-out infinite 0.5s`}
          />

          {/* Profile photo */}
          <Box
            position="relative"
            width={{ base: "250px", md: "340px", lg: "380px" }}
            height={{ base: "300px", md: "420px", lg: "460px" }}
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="0 25px 60px rgba(0, 0, 0, 0.4)"
            border="2px solid rgba(148, 163, 184, 0.15)"
          >
            <Image
              src="/images/my-photo.jpg"
              alt="Portrait of Ahmad Fauzan"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
