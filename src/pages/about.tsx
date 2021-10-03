import Head from 'next/head'

import LandingLayout from 'components/landing/layout'
import { Heading, Container, Text, Link } from '@chakra-ui/react'

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
        <Heading py='4'>About</Heading>
        <Text>What is ESG?</Text>
        <Text>
          ESG is a metric used to measure how &quot;green&quot; a company is based on their environmental, social, and
          corporate governance practices. Each category is given a score and the final ESG score is their sum.
          <Link
            href='https://en.wikipedia.org/wiki/Environmental,_social_and_corporate_governance'
            target='_blank'
            ml='1'
            textDecoration='underline'
            rel='noopener'>
            Learn more{' '}
          </Link>
        </Text>
      </Container>
    </>
  )
}

About.getLayout = LandingLayout

export default About
