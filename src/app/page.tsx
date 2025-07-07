"use client";
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  Heading,
  Stack,
  Button,
  Field,
  Input,
  Fieldset,
  Textarea,
} from "@chakra-ui/react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CardProject from "@/features/portfolio/components/CardProject";
import JobItem from "@/features/jobs/components/JobItem";
import CertificateItem from "@/features/certificates/components/CertificateItem";
import TestimonialCard from "@/features/testimonial/components/TestimonialCard";
import Image from "next/image";
import { RiMailLine } from "react-icons/ri";

import { jobs } from "@/features/jobs/data/jobs";
import { certificates } from "@/features/certificates/data/certificates";
import { testimonials } from "@/features/testimonial/data/testimonials";
import { portfolios } from "@/features/portfolio/data/portfolios";

import {
  BiLogoGoLang,
  BiLogoPython,
  BiLogoGithub,
  BiLogoPhp,
  BiLogoBootstrap,
} from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { DiCodeigniter, DiLaravel } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { SiChakraui } from "react-icons/si";
import Link from "next/link";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function Home() {
  return (
    <>
      <Stack
        mt={15}
        minH={"70vh"}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spaceY={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text as={"span"} position={"relative"}>
                Ahmad Fauzan
              </Text>
              <Text color={"red.400"} as={"span"} mt={5} display={"block"}>
                Web Developer
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              The project board is an exclusive resource for contract work.
              It&apos;s perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: "column", md: "row" }}>
              <Link href="#contact">
                <Button
                  rounded={"lg"}
                  bg={"red.400"}
                  color={"gray.200"}
                  fontWeight={"bold"}
                  padding={2}
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Contact
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"My photo"}
            width={800}
            height={250}
            src={"/images/me2.png"}
          />
        </Flex>
      </Stack>
      <Box mt={20}>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box position={"relative"} w={{ base: "50rem", md: "120rem" }}>
            <Image
              src={"/images/my-photo.jpg"}
              alt="my-photo"
              width={"500"}
              height={"450"}
            />

            <Box
              position={"absolute"}
              top={0}
              left={0}
              w={"100%"}
              h={"100%"}
              bgColor={"blackAlpha.600"}
              zIndex={1}
            />
          </Box>
          <SectionWrapper
            id="about-me"
            title="About Me"
            bgColor={"white"}
            color={"gray.800"}
          >
            <Text mt={5} fontSize={"xl"} color={"gray.600"}>
              I am a passionate Web Developer with a strong desire to
              continuously learn and enhance my skills in Software Engineering.
              Always eager to improve and adapt to new technologies, I strive to
              stay ahead in the fast-evolving field of web development. My goal
              is to apply my knowledge to create innovative and efficient
              solutions, while constantly refining my expertise to meet the
              demands of the industry.
            </Text>
          </SectionWrapper>
        </Flex>
      </Box>
      <SectionWrapper
        id="skill"
        title="Skills"
        color={"gray.800"}
        bgColor={useColorModeValue("gray.100", "gray.900")}
      >
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(6, 1fr)" }}
          mt={5}
          mx={{ base: 30, md: 60 }}
          gap={4}
          justifyItems={"center"}
        >
          {[
            BiLogoGoLang,
            BiLogoPython,
            BiLogoGithub,
            BiLogoPhp,
            BiLogoBootstrap,
            FaReact,
            DiCodeigniter,
            DiLaravel,
            TbBrandNextjs,
            GrMysql,
            SiChakraui,
          ].map((Icon, i) => (
            <GridItem
              key={i}
              rounded={"full"}
              border={"ButtonShadow"}
              bgColor={"black"}
              padding={5}
              cursor={"pointer"}
              transitionTimingFunction={"ease-in-smooth"}
              _hover={{
                bgColor: "gray.700",
              }}
            >
              <Icon size={"2rem"} color={"white"} />
            </GridItem>
          ))}
        </Grid>
      </SectionWrapper>
      <Box
        px={5}
        pt={20}
        py={20}
        bgColor={useColorModeValue("gray.100", "gray.900")}
      >
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={10}>
          <Box>
            <Heading mb={10} color={"gray.800"}>
              Working Experiences
            </Heading>

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
          <Box>
            <Heading mb={10} color={"gray.800"}>
              Certificates & Achievement
            </Heading>

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
        bgColor={"white"}
        color={"gray.800"}
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
        bgColor={"white"}
        color={"gray.800"}
      >
        <Grid
          templateColumns={{
            base: "repeat(1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
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
              />
            );
          })}
        </Grid>
      </SectionWrapper>

      <SectionWrapper
        id="contact"
        title="contact"
        bgColor={"white"}
        color={"gray.800"}
      >
        <Box justifyItems={"center"}>
          <Fieldset.Root
            size="md"
            invalid
            justifyContent={"center"}
            maxW={"md"}
            bgColor={"gray.50"}
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
      </SectionWrapper>
    </>
  );
}
