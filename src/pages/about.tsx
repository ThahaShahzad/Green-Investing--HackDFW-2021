import Head from 'next/head'

import LandingLayout from 'components/landing/layout'
import { Heading, Container, Text, Flex } from '@chakra-ui/react'

const About = () => {
  return (
    <>
      <Head>
        <title>About - Green Investing</title>
        <meta
          name='description'
          content='Green Investing is a way to make sure your portfolio can have a positive impact on the world. By choosing companies with higher esg ratings, you can make sure your portfolio stays green.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container mt='20' mb='40'>
        <Heading py='8'>Our Story</Heading>
        <Flex flexDirection='column' gridGap='4'>
          <Heading size='lg'>Inspiration</Heading>
          <Text>
            We wanted to help people choose greener companies to invest into. Allowing them to make this choice may help
            drive larger actions to effect the environment in a positive way.
          </Text>
          <Heading size='lg'>What it does</Heading>
          <Text>
            Get/calculate ratings for a company’s environmental impact, social impact, and corporate governance from a
            data set. Use the three ratings to calculate a company’s single average ESG score Shows users the average
            ESG rating of their chosen portfolio Search companies by their ESG rating.
          </Text>
          <Heading size='lg'>How we built it</Heading>
          <Text>NextJS ChakraUI TailwindCSS TypeScript</Text>
          <Heading size='lg'>Challenges we ran into</Heading>
          <Text>
            Data sets were hard to come by and there is limit access to free data from API&apos;s. We were able to pull
            some data from the EsgEnterprise API in order to mock data for our demo in a JSON file.
          </Text>
          <Heading size='lg'>Accomplishments that we&apos;re proud of</Heading>
          <Text>
            Being able to get data to use for the site given the limited resources. Completing a working MVP prototype
            for the presentation deadline.
          </Text>
          <Heading size='lg'>What we learned</Heading>
          <Text>
            Not being familiar with how ESG works, we had to spend some time looking into it further before we presented
            it on our website. Some of us learned more about using NextJS and the other technologies used for this
            project.
          </Text>
          <Heading size='lg'>What&apos;s next for GreenInvesting</Heading>
          <Text>
            Login functionality, Import user portfolios, more complex search of the datasets, larger datasets,
            suggestions for users based on preferences, and user education on companies green initiatives.
          </Text>
        </Flex>
      </Container>
    </>
  )
}

About.getLayout = LandingLayout

export default About
