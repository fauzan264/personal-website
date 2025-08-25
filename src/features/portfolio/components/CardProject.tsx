import { Button, Card, Link, Flex, Box } from "@chakra-ui/react";
import ICardProject from "../types";
import { GrLinkNext } from "react-icons/gr";
import { Badge } from "@chakra-ui/react";
import Image from "next/image";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function CardProject({
  image,
  title,
  description,
  technologies,
  link,
}: ICardProject) {
  return (
    <Card.Root
      maxW="sm"
      overflow="hidden"
      mt={5}
      shadow={"md"}
      transition={"ease-in-out"}
      transitionDuration={"slow"}
      bg={useColorModeValue("white", "#131b2b")}
      _hover={{
        bgColor: useColorModeValue("blue.100", "#1a2538"),
        shadow: "lg",
      }}
    >
      <Box w={"full"} height={250} display={"block"} position={"relative"}>
        <Image
          src={image}
          alt="portfolio-image"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Card.Body p={5}>
        <Flex my={3}>
          {technologies.map((technology, i) => {
            return (
              <Badge key={i} px={1} mr={1} size={"sm"} colorPalette={"blue"}>
                {technology}
              </Badge>
            );
          })}
        </Flex>
        <Card.Title mt={2}>{title}</Card.Title>
        <Card.Description my={5}>{description}</Card.Description>
      </Card.Body>
      <Card.Footer p={5} justifyContent={"end"}>
        <Button
          asChild
          bgColor={"blue.500"}
          color={"white"}
          textStyle={"sm"}
          variant={"solid"}
          padding="2"
        >
          <Link href={link} target={"_blank"}>
            Link
            <GrLinkNext />
          </Link>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}
