import { Flex, Heading, Icon, Text, Box } from "@chakra-ui/react";
import { IJobItem } from "../types";
import { FaBuilding } from "react-icons/fa";
import Image from "next/image";

export default function JobItem({
  image,
  company,
  status,
  position,
  from,
  until,
}: IJobItem) {
  return (
    <Flex gap={3} mb={5}>
      {image && <Image src={image} width={70} height={20} alt={"job image"} />}

      {!image && (
        <Icon width={70} height={20} color={"gray.800"}>
          <FaBuilding />
        </Icon>
      )}
      <Box>
        <Heading fontSize={"md"} color={"gray.800"}>
          {company} {`(${status})`}
        </Heading>
        <Heading fontSize={"sm"} color={"gray.600"}>
          {position}
        </Heading>
        <Text fontSize={"sm"} color={"gray.600"}>
          {from} - {until}
        </Text>
      </Box>
    </Flex>
  );
}
