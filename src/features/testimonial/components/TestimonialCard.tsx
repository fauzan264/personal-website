import { Box, Card, Flex, Icon, Text } from "@chakra-ui/react";
import { ITestimonial } from "../types";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaUser, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function TestimonialCard({
  name,
  role,
  quotes,
  avatar,
  url,
}: ITestimonial) {
  return (
    <Card.Root
      maxW={"sm"}
      gap={4}
      py={5}
      px={10}
      mx={"auto"}
      shadow={"md"}
      transition={"ease-in-out"}
      transitionDuration={"slow"}
      bg={useColorModeValue("white", "#131b2b")}
      _hover={{
        bgColor: useColorModeValue("blue.100", "#1a2538"),
        shadow: "xl",
      }}
    >
      <Card.Body my={10}>
        <Box
          border={"1px"}
          borderColor={"black"}
          display={"inline-flex"}
          borderRadius={"md"}
        >
          <Icon
            as={ImQuotesLeft}
            color={"blue.300"}
            border={"1px"}
            borderColor={"black"}
          />
        </Box>
        <Card.Description px={5}>{quotes}</Card.Description>
        <Icon color={"blue.300"} ml={"auto"}>
          <ImQuotesRight />
        </Icon>
      </Card.Body>
      <Card.Footer>
        <Flex gap={5}>
          {avatar ? (
            <Box
              w={14}
              h={14}
              display={"block"}
              position={"relative"}
              rounded={"full"}
              overflow={"hidden"}
            >
              <Image
                src={avatar}
                alt={name}
                style={{ objectFit: "cover" }}
                fill
              />
            </Box>
          ) : (
            <Icon my={"auto"} w={5} h={5}>
              <FaUser />
            </Icon>
          )}
          <Box>
            <Flex gap={2}>
              <Text as={"h3"} color={useColorModeValue("blue.800", "blue.200")}>
                {name}
              </Text>
              <Link href={url}>
                <Icon my={"auto"}>
                  <FaLinkedin />
                </Icon>
              </Link>
            </Flex>
            <Text
              color={useColorModeValue("blue.700", "blue.100")}
              fontSize={"sm"}
            >
              {role}
            </Text>
          </Box>
        </Flex>
      </Card.Footer>
    </Card.Root>
  );
}
