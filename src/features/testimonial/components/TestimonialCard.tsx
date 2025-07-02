import { Box, Card, Flex, Icon, Text } from "@chakra-ui/react";
import { ITestimonial } from "../types";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaUser, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function TestimonialCard({
  name,
  role,
  quotes,
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
      _hover={{
        bgColor: "gray.50",
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
            color={"gray.300"}
            border={"1px"}
            borderColor={"black"}
          />
        </Box>
        <Card.Description px={5}>{quotes}</Card.Description>
        <Icon color={"gray.300"} ml={"auto"}>
          <ImQuotesRight />
        </Icon>
      </Card.Body>
      <Card.Footer>
        <Flex gap={5}>
          <Icon my={"auto"} w={5} h={5}>
            <FaUser />
          </Icon>
          <Box>
            <Flex gap={2}>
              <Text as={"h3"} color={"gray.900"}>
                {name}
              </Text>
              <Link href={url}>
                <Icon my={"auto"}>
                  <FaLinkedin />
                </Icon>
              </Link>
            </Flex>
            <Text color={"gray.500"} fontSize={"sm"}>
              {role}
            </Text>
          </Box>
        </Flex>
      </Card.Footer>
    </Card.Root>
  );
}
