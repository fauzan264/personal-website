"use client";
import {
  Box,
  Grid,
  Flex,
  Text,
  Heading,
  Card,
  Avatar,
  Wrap,
  WrapItem,
  Tag,
  ClientOnly,
} from "@chakra-ui/react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CardProject from "@/features/portfolio/components/CardProject";
import JobItem from "@/features/jobs/components/JobItem";
import CertificateItem from "@/features/certificates/components/CertificateItem";
import TestimonialCard from "@/features/testimonial/components/TestimonialCard";

import { jobs } from "@/features/jobs/data/jobs";
import { certificates } from "@/features/certificates/data/certificates";
import { testimonials } from "@/features/testimonial/data/testimonials";
import { portfolios } from "@/features/portfolio/data/portfolios";

import { useColorModeValue } from "@/components/ui/color-mode";

export default function Home() {
  const gradientBg = useColorModeValue(
    `
    radial-gradient(circle at 20% 50%, rgba(148, 163, 184, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(100, 116, 139, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(71, 85, 105, 0.4) 0%, transparent 50%)
    `,
    `
    radial-gradient(circle at 20% 50%, rgba(100, 116, 139, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(148, 163, 184, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(71, 85, 105, 0.15) 0%, transparent 50%)
    `
  );

  const techs = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.JS",
    "Express.JS",
    "Python",
    "Go",
    "PHP",
    "Git",
    "Codeigniter",
    "SQL",
  ];

  return (
    <ClientOnly>
      <Box
        id="hero"
        pt={20}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"0 2rem"}
        background={gradientBg}
      >
        <Box textAlign={"center"}>
          <Text as="h1" fontSize={"5xl"} fontWeight={"bold"}>
            Ahmad Fauzan
          </Text>
          <Text as="p" color={"gray.500"} fontSize={"xl"} fontWeight={"bold"}>
            Software Engineer
          </Text>
        </Box>
      </Box>
      <Box id="about-me" title="About Me" color={"gray.800"} px={10}>
        <Flex
          py={"28"}
          mx={"auto"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex={1} px={{ md: 10 }} pb={10}>
            <Card.Root
              p={"10"}
              maxW={"xl"}
              w={"full"}
              bg={useColorModeValue("white", "#131b2b")}
              borderColor={"rgba(71, 85, 105, 0.3)"}
            >
              <Card.Body gap="2" alignItems={"center"}>
                <Avatar.Root
                  size="xl"
                  rounded={"full"}
                  fontSize={"5xl"}
                  p={20}
                  bg={useColorModeValue("gray.100", "#3a485c")}
                >
                  {/* <Avatar.Image src="https://picsum.photos/200/300" />
                  <Avatar.Fallback name="Fauzan" /> */}
                  👨‍💻
                </Avatar.Root>
                <Card.Title
                  mt="2"
                  fontSize={"lg"}
                  fontWeight={"semibold"}
                  color={useColorModeValue("blue.800", "blue.100")}
                >
                  Fauzan
                </Card.Title>
                <Card.Description
                  fontSize={"lg"}
                  color={useColorModeValue("blue.800", "blue.100")}
                >
                  Software Engineer
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </Box>
          <Box flex={2}>
            <Text
              as={"h2"}
              mb={5}
              fontSize={"2xl"}
              fontWeight={"semibold"}
              color={useColorModeValue("blue.800", "blue.100")}
            >
              About Me
            </Text>
            <Text
              as={"p"}
              mb={4}
              fontSize={"lg"}
              color={useColorModeValue("blue.800", "blue.100")}
            >
              I am a passionate Web Developer with a strong desire to
              continuously learn and enhance my skills in Software Engineering.
              Always eager to improve and adapt to new technologies, I strive to
              stay ahead in the fast-evolving field of web development.
            </Text>
            <Text
              as={"p"}
              mb={4}
              fontSize={"lg"}
              color={useColorModeValue("blue.800", "blue.100")}
            >
              My goal is to apply my knowledge to create innovative and
              efficient solutions, while constantly refining my expertise to
              meet the demands of the industry.
            </Text>
            <Wrap gap={3} mt={10}>
              {techs.map((tech) => (
                <WrapItem key={tech}>
                  <Tag.Root
                    size={"lg"}
                    variant={"subtle"}
                    bgColor={"blue.500"}
                    color={"blue.100"}
                    borderRadius={"full"}
                    px={4}
                    py={2}
                  >
                    <Tag.Label>{tech}</Tag.Label>
                  </Tag.Root>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </Flex>
      </Box>
      <Box
        px={5}
        pt={20}
        py={20}
        color={useColorModeValue("blue.800", "blue.100")}
      >
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={10}>
          <Box px={{ md: 10 }}>
            <Heading mb={10}>Working Experiences</Heading>

            {jobs.map((job, i) => {
              return (
                <JobItem
                  key={i}
                  image={job.image}
                  company={job.company}
                  status={job.status}
                  position={job.position}
                  from={job.from}
                  until={job.until}
                />
              );
            })}
          </Box>
          <Box px={{ md: 10 }}>
            <Heading mb={10}>Certificates & Achievement</Heading>

            {certificates.map((certificate, i) => {
              return (
                <CertificateItem
                  key={i}
                  title={certificate.title}
                  publisher={certificate.publisher}
                  issue_date={certificate.issue_date}
                />
              );
            })}
          </Box>
        </Grid>
      </Box>
      <SectionWrapper
        id="portfolio"
        title="Portfolios"
        color={useColorModeValue("blue.800", "blue.200")}
      >
        <Grid
          templateColumns={{
            base: "repeat(1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          justifyItems={"center"}
        >
          {portfolios.map((portfolio, i) => (
            <CardProject
              key={i}
              image={portfolio.image}
              title={portfolio.title}
              description={portfolio.description}
              technologies={portfolio.technologies}
              link={portfolio.url}
            />
          ))}
        </Grid>
      </SectionWrapper>

      <SectionWrapper
        id={"testimonial"}
        title={"What My Teammates Say"}
        color={useColorModeValue("blue.800", "blue.200")}
      >
        <Grid
          templateColumns={{
            base: "repeat(1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={4}
          my={10}
        >
          {testimonials.map((testimonial, i) => {
            return (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                role={testimonial.role}
                quotes={testimonial.quotes}
                url={testimonial.url}
                avatar={testimonial.avatar}
              />
            );
          })}
        </Grid>
      </SectionWrapper>
      {/* 
      <SectionWrapper id="contact" title="contact" color={"gray.800"}>
        <Box justifyItems={"center"}>
          <Fieldset.Root
            size="md"
            invalid
            justifyContent={"center"}
            maxW={"md"}
            py={20}
            px={5}
          >
            <Fieldset.Content>
              <Field.Root>
                <Field.Label>Your Name</Field.Label>
                <Input type={"text"} name="name" />
              </Field.Root>
            </Fieldset.Content>
            <Fieldset.Content>
              <Field.Root>
                <Field.Label>Phone Number</Field.Label>
                <Input type={"text"} name="phone_number" />
              </Field.Root>
            </Fieldset.Content>
            <Fieldset.Content>
              <Field.Root>
                <Field.Label>Email</Field.Label>
                <Input type={"email"} name="email" />
              </Field.Root>
            </Fieldset.Content>
            <Fieldset.Content>
              <Field.Root>
                <Field.Label>Message</Field.Label>
                <Textarea name="message" />
              </Field.Root>
            </Fieldset.Content>
            <Button colorPalette="orange" variant="solid" my={5}>
              <RiMailLine /> Submit
            </Button>
          </Fieldset.Root>
        </Box>
      </SectionWrapper> */}
    </ClientOnly>
  );
}
