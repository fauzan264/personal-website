import { Flex, Heading, Icon, Text, Box } from "@chakra-ui/react";
import { IJobList } from "../types";
import { FaBuilding } from "react-icons/fa";
import Image from "next/image";

export default function JobItem({
  image,
  company,
  status,
  position,
  from,
  until,
}: IJobList) {
  return (
    <Flex gap={3} mb={5}>
      {image && <Image src={image} width={70} height={20} alt={"job image"} />}

      {!image && (
        <Icon width={70} height={20}>
          <FaBuilding />
        </Icon>
      )}
      <Box>
        <Heading fontSize={"md"}>
          {company} {`(${status})`}
        </Heading>
        <Heading fontSize={"sm"}>{position}</Heading>
        <Text fontSize={"sm"}>
          {from} - {until}
        </Text>
      </Box>
    </Flex>
  );
}
