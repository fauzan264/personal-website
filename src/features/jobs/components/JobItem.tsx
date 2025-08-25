import { Flex, Heading, Icon, Text, Box } from "@chakra-ui/react";
import { IJobItem } from "../types";
import { FaBuilding } from "react-icons/fa";
import Image from "next/image";
import { useColorModeValue } from "@/components/ui/color-mode";

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
        <Icon
          width={70}
          height={20}
          color={useColorModeValue("blue.800", "blue.200")}
        >
          <FaBuilding />
        </Icon>
      )}
      <Box>
        <Heading
          fontSize={"md"}
          color={useColorModeValue("blue.800", "blue.200")}
        >
          {company} {`(${status})`}
        </Heading>
        <Heading
          fontSize={"sm"}
          color={useColorModeValue("blue.700", "blue.200")}
        >
          {position}
        </Heading>
        <Text fontSize={"sm"} color={useColorModeValue("blue.700", "blue.100")}>
          {from} - {until}
        </Text>
      </Box>
    </Flex>
  );
}
