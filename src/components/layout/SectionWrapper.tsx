import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ISectionWrapper {
  id: string;
  title: string;
  bgColor: string;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  title,
  bgColor = "white",
  children,
}: ISectionWrapper) {
  return (
    <Box id={id} pt={10} px={10} py={20} bgColor={bgColor}>
      <Heading fontSize={"xl"} textAlign={"center"} fontWeight={"normal"}>
        {title}
      </Heading>
      {children}
    </Box>
  );
}
