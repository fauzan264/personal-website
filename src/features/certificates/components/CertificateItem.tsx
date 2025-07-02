import { Flex, Icon, Box, Heading, Text } from "@chakra-ui/react";
import { ICertificateItem } from "../types";
import { BsAward } from "react-icons/bs";

export default function CertificateItem({
  title,
  publisher,
  issue_date,
}: ICertificateItem) {
  return (
    <Flex gap={3} mb={5}>
      <Icon my={"auto"} width={50} height={50}>
        <BsAward />
      </Icon>
      <Box>
        <Heading fontSize={"md"}>{title}</Heading>
        <Heading fontSize={"sm"}>{publisher}</Heading>
        <Text fontSize={"sm"}>{issue_date}</Text>
      </Box>
    </Flex>
  );
}
