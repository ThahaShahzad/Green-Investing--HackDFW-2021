import { Heading, Container, Text, Link } from '@chakra-ui/react'

const ESG = () => {
  return (
    <Container mt='20' mb='40'>
      <Heading py='4'>What is ESG?</Heading>
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
  )
}

export default ESG
