import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ISectionWrapper {
  id: string;
  title: string;
  color: string;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  title,
  color,
  children,
}: ISectionWrapper) {
  return (
    <Box id={id} pt={10} px={10} py={20}>
      <Heading
        fontSize={"xl"}
        textAlign={"center"}
        fontWeight={"normal"}
        color={color}
      >
        {title}
      </Heading>
      {children}
    </Box>
  );
}
