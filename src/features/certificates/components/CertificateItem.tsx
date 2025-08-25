import { Flex, Icon, Box, Heading, Text } from "@chakra-ui/react";
import { ICertificateItem } from "../types";
import { BsAward } from "react-icons/bs";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function CertificateItem({
  title,
  publisher,
  issue_date,
}: ICertificateItem) {
  return (
    <Flex gap={3} mb={5}>
      <Icon
        my={"auto"}
        width={50}
        height={50}
        color={useColorModeValue("blue.800", "blue.200")}
      >
        <BsAward />
      </Icon>
      <Box>
        <Heading
          fontSize={"md"}
          color={useColorModeValue("blue.800", "blue.200")}
        >
          {title}
        </Heading>
        <Heading
          fontSize={"sm"}
          color={useColorModeValue("blue.700", "blue.200")}
        >
          {publisher}
        </Heading>
        <Text fontSize={"sm"} color={useColorModeValue("blue.700", "blue.100")}>
          {issue_date}
        </Text>
      </Box>
    </Flex>
  );
}
