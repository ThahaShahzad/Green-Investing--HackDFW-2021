import { AiOutlineStock, AiFillDatabase } from 'react-icons/ai'
import { FaEnvira } from 'react-icons/fa'
import logoImg from './images/GreenInvestLogo.jpg'
import DesignIllustration from './images/hero-green.jpg'
import FacebookIcon from './images/facebook-icon.svg'
import TwitterIcon from './images/twitter-icon.svg'
import YoutubeIcon from './images/youtube-icon.svg'
//api/auth/signin
export const LandingPageDetails = {
  Header: {
    logo: {
      logoText: 'GreenInvesting',
      logoImg: logoImg
    },
    links: [
      // { linkText: 'About', linkRoute: '/landing/about' },
      // { linkText: 'Pricing', linkRoute: '/landing/pricing' },
      // { linkText: 'Contact Us', linkRoute: '/landing/contact-us' },
      // { linkText: 'Login', linkRoute: '/auth/signin', secondary: true },
      { linkText: 'Get Started', linkRoute: '/dash', primary: true }
    ]
  },
  Hero: {
    heading: 'GreenInvesting',
    description: 'Greenify your portfolio',
    primaryButtonText: 'Learn more',
    primaryButtonUrl: '/about',
    watchVideoButtonText: 'Get Started',
    watchVideoYoutubeUrl: 'https://www.youtube.com/embed/_GuOjXYl5ew',
    imageSrc: DesignIllustration
  },
  Features: {
    cards: [
      {
        imageSrc: AiOutlineStock,
        title: 'Invest',
        description: 'Build your wealth in areas you belive will have the best impact',
        url: 'https://timerse.com'
      },
      {
        imageSrc: FaEnvira,
        title: 'Eco-Conscious',
        description:
          'Invest wisely and support companies that meet your environmental vision',
        url: 'https://google.com'
      },
      {
        imageSrc: AiFillDatabase,
        title: 'Data',
        description: 'Up to date information on the top companies in the market',
        url: 'https://reddit.com'
      }
    ],
    heading: 'Our Goal',
    subheading: '',
    description: 'We provide insights to empower your investment choices.'
  },
  MainFeatures: {
    cards: [
      {
        imageSrc:
          'https://images.unsplash.com/photo-1550699026-4114bbf4fb49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80',
        subtitle: 'Paid',
        title: 'Loachella, NYC',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        url: 'https://timerse.com'
      },

      {
        imageSrc:
          'https://images.unsplash.com/photo-1543423924-b9f161af87e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        subtitle: 'Free',
        title: 'Rock In Rio, Upstate',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        url: 'https://timerse.com'
      },

      {
        imageSrc:
          'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80',
        subtitle: 'Exclusive',
        title: 'Lollapalooza, Manhattan',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        url: 'https://timerse.com'
      }
    ]
  },
  Pricing: {
    subheading: '',
    heading: 'Affordable Pricing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    plans: [
      {
        name: 'Basic',
        price: ['$3', 'per student/month'],
        oldPrice: '',
        description: 'Starter plan',
        features: ['Up to 200 Students'],
        url: 'https://google.com'
      },
      {
        name: 'Plus',
        price: ['$5', 'per student/month'],
        oldPrice: '',
        description: 'Suggested plan',
        features: ['Unlimited Students', 'Chat Feature'],
        url: 'https://google.com',
        featured: 'Recomended'
      },
      {
        name: 'Pro',
        price: ['$7', 'per student/month'],
        oldPrice: '',
        description: 'Best plan',
        features: ['Unlimited Students', 'Chat Feature', 'Comprehenssive statistics'],
        url: 'https://google.com'
      }
    ],
    primaryButtonText: 'Get Started'
  },
  Testimonials: {
    subheading: 'Testimonials',
    heading: "Customer's Review",
    testimonials: [
      {
        imageSrc:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80',
        quote:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        customerName: 'Charlotte Hale'
      },
      {
        imageSrc:
          'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
        quote:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        customerName: 'Adam Cuppy'
      },
      {
        imageSrc:
          'https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80',
        quote:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        customerName: 'Steven Marcetti'
      }
    ]
  },
  FAQ: {
    subheading: 'FAQS',
    heading: 'You have Questions ?',
    description: 'And we have got answers to all of them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    faqs: [
      {
        question: 'What is Quran Tracker?',
        answer: 'Quran Tracker is a tool used to make your Quran class easier to manage, track, and grade.'
      },
      {
        question: 'How does it work?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        question: 'What kind of payment methods do you accept ?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        question: 'Is there a subscribption service to get the latest templates ?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        question: 'Are the templates compatible with the React ?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        question: 'Do you really support Internet Explorer 11 ?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ]
  },
  GetStarted: {
    text: 'Developers all over the world are happily using Treact.',
    primaryLinkText: 'Get Started',
    primaryLinkUrl: '/auth/signip',
    secondaryLinkText: 'Contact Us',
    secondaryLinkUrl: '/landing/contact-us',
    pushDownFooter: true
  },
  Footer: {
    links: [
      // { linkText: 'Home', linkRoute: '/' }
      // { linkText: 'About', linkRoute: '/landing/about' },
      // { linkText: 'Contact Us', linkRoute: '/landing/contact-us' },
      // { linkText: 'Privacy Policy', linkRoute: '/landing/privacy-policy' },
      // { linkText: 'Terms of Service', linkRoute: '/landing/terms-of-service' }
    ],
    socialLinks: [
      { linkIcon: FacebookIcon, linkHref: 'https://facebook.com' },
      { linkIcon: TwitterIcon, linkHref: 'https://twitter.com' },
      { linkIcon: YoutubeIcon, linkHref: 'https://youtube.com' }
    ],
    logo: {
      logoText: 'GreenInvesting',
      logoImg: logoImg
    }
  }
}
