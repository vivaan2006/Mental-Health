import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
  IconRss,
} from '@tabler/icons-react';
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialProps,
} from './types';

import cameraFrontImg from '~/assets/images/camera-front.webp';
import cameraBackImg from '~/assets/images/camera-back.webp';
import heroImg from '~/assets/images/hero.webp';
import hero2Img from '~/assets/images/hero2.jpg';
import gasImg from '~/assets/images/gas.jpg';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: '24/7 Mental Health Helpline Available! Call us anytime for assistance.',
  callToAction: {
    text: 'Learn More',
    href: '',
  },
  callToAction2: {
    text: 'Read Blog',
    href: '',
  },
};


// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Pages',
      icon: IconChevronDown,
      links: [
        {
          label: 'About',
          href: '/about',
        },
        {
          label: 'Contact',
          href: '/contact',
        },
        {
          label: 'FAQs',
          href: '/faqs',
        },
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
        {
          label: 'Terms & Conditions',
          href: '/terms',
        },
      ],
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Research',
      href: '/research',
    },
  ],
  actions: [
    {
      text: 'Donate Now',
      href: '/donate',
      targetBlank: false,
      btnType: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Hero data
export const heroData: HeroProps = {
  title: (
    <>
      Welcome to <span className="font-semibold">Mental Health Resources!</span>
      <span className="hidden md:inline"> - Empowering Minds for Better Mental Health</span>
    </>
  ),
  subtitle: (
    <>
      Mental Health Resources is a platform committed to providing resources and support for mental health. Our mission is to empower individuals with knowledge and tools to improve their mental well-being.
    </>
  ),
  callToAction: {
    text: 'Donate Now',
    href: '/donate',
    icon: IconBrandTailwind, // Replace with a relevant icon for mental health donation
    targetBlank: false,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Learn More',
    href: '/',
  },
  image: {
    src: heroImg,
    alt: 'Mental Health Resources',
  },
};

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'Empowering Minds Through Mental Health Support',
  subtitle:
    'Mental Health Resources believes that everyone deserves access to mental health resources and support. By contributing to our cause, you can make a difference in the lives of individuals facing mental health challenges. Together, let\'s create a healthier and happier future for all.',
  callToAction: {
    text: 'Donate Now',
    href: '/donate',
    targetBlank: false,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Contact Us',
    href: '/contact',
  },
  image: {
    src: hero2Img,
    alt: 'Mental Health Support',
  },
};


// SocialProof data
export const socialProofData: SocialProofProps = {
  images: [

  ],
};

// FAQS data
export const faqsData: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Welcome to the Educate! Frequently Asked Questions section. Find answers to common questions about our organization and our mission to provide educational resources to less fortunate regions.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'Who are we and what do we do?',
      description: `Educate! is a non-profit organization dedicated to providing educational resources from kindergarten to 12th grade for less fortunate regions and countries. Our mission is to empower young minds with knowledge and opportunities, enabling them to break the cycle of poverty through education.`,
    },
    {
      title: 'What values and principles guide our work?',
      description: `At Educate!, we uphold the values of accessibility, inclusivity, and sustainability. We believe that education is a fundamental right for every child, regardless of their background. Our principles include transparency, accountability, and a commitment to making a positive impact in the communities we serve.`,
    },
    {
      title: 'What is our experience?',
      description: `With years of experience in the education sector, we have successfully collaborated with schools, educators, and local communities to deliver educational resources where they are needed most. We have a proven track record of providing quality learning materials and support to underprivileged students.`,
    },
    {
      title: 'What is our team like?',
      description: `Our team is composed of passionate and dedicated individuals who believe in the power of education to transform lives. From educators and content creators to logistics and operations specialists, each member of our team plays a crucial role in fulfilling our mission.`,
    },
    {
      title: 'How do we engage with the community?',
      description: `We engage with local communities through partnerships with schools, NGOs, and other educational organizations. We conduct needs assessments and actively involve community members in the development and implementation of our programs. We believe in collaborative efforts to ensure the sustainability of our initiatives.`,
    },
    {
      title: 'What support channels do we offer?',
      description: `We offer various support channels, including email support, community forums, and regional helplines. Our team is always available to address any questions or concerns related to our organization, donations, and the impact of our programs.`,
    },
  ],
};

// FAQS data 2
export const faqsData2: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Welcome to the Educate! Frequently Asked Questions section. Below are some common questions and answers about our organization and the book donation process. If you have more questions, feel free to reach out to us!',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'What do I need to start donating books?',
      description: `To start donating books to Educate!, all you need is a collection of educational materials suitable for students from kindergarten to 12th grade. These can include textbooks, storybooks, educational games, and stationery items. You can check our donation guidelines on our website for more details.`,
    },

    {
      title: 'What impact will my book donation have?',
      description: `By donating books to Educate!, you are directly contributing to the education and future of students in less fortunate regions. Your donation can open doors to knowledge and opportunities that were previously unavailable to these students. Together, we can make a significant difference in their lives.`,
    },
    {
      title: 'How can I get involved and help further?',
      description: `We welcome volunteers, partners, and supporters who share our vision for education. You can get involved by participating in our community events, fundraising campaigns, or spreading awareness about our mission. Reach out to us via our contact page to explore collaboration opportunities.`,
    },
    {
      title: 'What is the process of receiving and distributing donations?',
      description: `Once we receive book donations, our team carefully inspects and categorizes them based on grade levels and subjects. We then work closely with local schools and educational institutions in less fortunate regions to distribute the books to students who need them the most. This ensures that the donations reach the intended beneficiaries effectively.`,
    },
    {
      title: 'Is my donation tax-deductible?',
      description: `Yes, Educate! is a registered non-profit organization, and donations are generally tax-deductible in accordance with local tax laws. You will receive a donation receipt for your contributions, which you can use for tax purposes.`,
    },
  ],
};

// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    // highlight: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'Which plan is best for me?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What are my payment options?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'How do I change my plan to a different one?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What happen at the end of my free trial?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'Can I import data from other tools?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'Can I cancel my plan at any time?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnText: 'uppercase',
    btnType: 'primary',
  },
};

// FAQS4 data
// Updated FAQs data
export const faqs4Data: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Here are some common questions and answers to help you better understand Educate! and our mission to empower children through education.',
    highlight: 'FAQS',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          title: 'What is Educate!?',
          description:
            'Educate! is a non-profit organization dedicated to providing a rich and interactive learning experience for children. We aim to inspire, educate, and empower young minds by offering curated educational content and personalized learning paths.',
        },
        {
          title: 'How can I contribute to Educate!?',
          description:
            'You can support our mission by donating directly to provide access to quality education for underprivileged children. We also welcome volunteers and partnerships with like-minded organizations to expand our reach.',
        },
        {
          title: 'How does Educate! make education accessible to underprivileged children?',
          description:
            'For every subscription to our educational platform, we sponsor a child in need, ensuring that more children have access to quality learning resources and opportunities.',
        },
        {
          title: 'Who are the educators and mentors at Educate!?',
          description:
            'Our team consists of experienced and dedicated educators and mentors who are passionate about nurturing the talents and creativity of every child. They create engaging content and support personalized learning journeys.',
        },
        {
          title: 'Can children explore subjects at their own pace?',
          description:
            'Yes, at Educate!, we believe in personalized learning, allowing children to explore subjects and topics at their own pace and according to their unique learning styles.',
        },
        {
          title: 'How can I join the supportive learning community at Educate!?',
          description:
            'You can join our vibrant learning community by becoming a subscriber. Our community allows children to collaborate, share ideas, and grow together in a positive and inspiring environment.',
        },
      ],
    },
    {
      link: {
        label: 'Donations and Sponsorship',
        href: '/tab2',
      },
      items: [
        {
          title: 'How can I donate to Educate!?',
          description:
            'Donating to Educate! is simple. Visit our website and click on the "Donate" button to contribute directly to our programs. Your donations make a meaningful impact in providing education to those in need.',
        },
        {
          title: 'Is my donation tax-deductible?',
          description:
            'Yes, Educate! is a registered non-profit organization, and your donations are tax-deductible in accordance with local regulations. You will receive a tax receipt for your contribution.',
        },
        {
          title: 'What happens to my donation?',
          description:
            'Your donation directly supports our educational initiatives, including sponsoring underprivileged children, developing engaging content, and providing resources for educators and mentors.',
        },
        {
          title: 'Can I sponsor a specific child?',
          description:
            'While we don’t offer direct child sponsorship, your donation contributes to our pool of sponsored children, ensuring that each child receives equal opportunities for education and personal growth.',
        },
        {
          title: 'Are there other ways to support Educate! besides donations?',
          description:
            'Absolutely! In addition to monetary donations, you can contribute by spreading awareness about our cause, volunteering your time and skills, or forming partnerships with Educate! to expand our reach and impact.',
        },
        {
          title: 'How can organizations partner with Educate!?',
          description:
            'If your organization shares our vision for education and empowerment, we welcome partnerships to create a larger impact together. Please reach out to us through the contact form for more details.',
        },
      ],
    },
    {
      link: {
        label: 'Getting Started',
        href: '/tab3',
      },
      items: [
        {
          title: 'How do I access Educate! courses and resources?',
          description:
            'All courses and educational resources at Educate! are completely free for every child. Simply visit our website, sign up for a free account, and you will have full access to our engaging learning materials.',
        },
        {
          title: 'How can I get help with technical issues?',
          description:
            'If you encounter any technical issues or need assistance while using our platform, you can reach out to our friendly support team through the contact form, and they will be happy to assist you.',
        },
        {
          title: 'Can I cancel my subscription at any time?',
          description:
            'You do not need to worry about subscription cancellations, as all content and resources are available for free. However, if you have any concerns or questions, our support team is here to help.',
        },
        {
          title: 'How can I provide feedback or suggest improvements?',
          description:
            'We welcome feedback and suggestions from our subscribers to continually enhance our platform and learning experience. You can share your thoughts through the contact form or by reaching out to our support team.',
        },
      ],
    },
  ],
};

// CallToAction data
export const callToActionData: CallToActionProps = {

};

// Updated call to action data
export const callToActionData2: CallToActionProps = {
  title: 'Still have questions?',
  subtitle:
    'If you have any more questions or need further assistance, feel free to get in touch with us. Our dedicated support team is here to help you every step of the way.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnType: 'primary',
  },
};

// Feature data
export const featuresData: FeaturesProps = {
  header: {
  title: (
  <>
  What you get with <span className="whitespace-nowrap">Educate!</span>
  </>
  ),
  subtitle:
  'Explore the exciting features of Educate! that provide a seamless learning experience for students and educators alike.',
  highlight: 'Features',
  },
  items: [
  {
  title: 'Comprehensive Course Material',
  description:
  'Access a wide range of course materials, including lectures, readings, quizzes, and assignments, to enhance your learning journey.',
  icon: IconArrowDown,
  link: {
  label: 'Learn more',
  href: '/courses',
  },
  },
  {
  title: 'Interactive Learning Widgets',
  description:
  'Engage in interactive learning with our widgets that make studying enjoyable and foster a deeper understanding of the subjects.',
  icon: IconArrowDown,
  link: {
  label: 'Explore now',
  href: '/widgets',
  },
  },
  {
  title: 'Real-Time Progress Tracking',
  description:
  'Stay on top of your progress with real-time tracking and performance analytics. Identify areas for improvement and excel in your studies.',
  icon: IconArrowDown,
  link: {
  label: 'Check progress',
  href: '/progress',
  },
  },
  {
  title: 'Collaborative Study Groups',
  description:
  'Connect with your peers and form study groups to share knowledge, discuss topics, and work together on group assignments.',
  icon: IconArrowDown,
  link: {
  label: 'Join a group',
  href: '/groups',
  },
  },
  {
  title: 'Expert Instructor Support',
  description:
  'Get personalized guidance and support from expert instructors who are passionate about helping you succeed in your academic journey.',
  icon: IconArrowDown,
  link: {
  label: 'Meet instructors',
  href: '/instructors',
  },
  },
  {
  title: 'Community Forums',
  description:
  'Participate in vibrant community forums where you can seek advice, share insights, and engage in discussions with like-minded learners.',
  icon: IconArrowDown,
  link: {
  label: 'Join forums',
  href: '/forums',
  },
  },
  ],
  };
  
  // Feature2 data
  export const featuresData2: FeaturesProps = {
  header: {
  title: 'Support Center',
  subtitle: 'Looking for assistance or have questions? Our support team is here to help!',
  },
  items: [
  {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions in our comprehensive FAQ section.',
  icon: IconHelp,
  link: {
  href: '/faqs',
  },
  },
  {
  title: 'Live Chat Support',
  description: 'Chat with our support team in real-time for immediate assistance.',
  icon: IconMessages,
  link: {
  href: '/',
  },
  },
  {
  title: '24/7 Helpline',
  description: 'Get round-the-clock support from our dedicated helpline.',
  icon: IconHeadset,
  link: {
  href: '/',
  },
  },
  ],
  };
  
  // Feature data 3
  export const featuresData3: FeaturesProps = {
  header: {
  title: 'Services',
  },
  items: [
  {
  title: 'Comprehensive Course Material',
  description: 'Access a wide range of course materials to enhance your learning experience.',
  icon: IconArrowDown,
  },
  {
  title: 'Interactive Learning Widgets',
  description: 'Engage in interactive learning with our widgets for a better grasp of subjects.',
  icon: IconArrowDown,
  },
  {
  title: 'Real-Time Progress Tracking',
  description: 'Stay updated on your progress with real-time tracking and analytics.',
  icon: IconArrowDown,
  },
  {
  title: 'Collaborative Study Groups',
  description: 'Form study groups and collaborate with peers on group assignments.',
  icon: IconArrowDown,
  },
  {
  title: 'Expert Instructor Support',
  description: 'Receive personalized guidance and support from our expert instructors.',
  icon: IconArrowDown,
  },
  {
  title: 'Community Forums',
  description: 'Engage in vibrant community forums to seek advice and share insights.',
  icon: IconArrowDown,
  },
  ],
  };
  
  // Content data
  export const contentData: ContentProps = {
  header: {
  title: 'Discover the World of Educate!',
  subtitle: 'Experience a new way of learning with our innovative platform.',
  highlight: 'Content',
  },
  content:
  'Embark on an enriching educational journey with Educate! Our platform offers a wide array of features and services to make learning enjoyable, interactive, and rewarding. Explore the world of knowledge with us!',
  items: [
  {
  title: 'Personalized Learning',
  description:
  'Receive personalized learning paths tailored to your individual needs and learning pace.',
  },
  {
  title: 'Hands-On Projects',
  description:
  'Gain practical experience and develop essential skills through hands-on projects and simulations.',
  },
  {
  title: 'Collaborative Environment',
  description:
  'Connect and collaborate with learners from diverse backgrounds, fostering a rich learning experience.',
  },
  ],
  image: {
  src: cameraFrontImg,
  alt: 'Educational Image',
  },
  isReversed: false,
  isAfterContent: false,
  };
  
  // Content2 data
  export const content2Data: ContentProps = {
  content:
  'Experience a new world of knowledge with Educate! Our platform offers an immersive and interactive learning environment where you can discover, learn, and grow. Join us on this journey today!',
  items: [
  {
  title: 'Live Webinars',
  description: 'Participate in live webinars hosted by industry experts and renowned educators.',
  },
  {
  title: 'Skill Badges',
  description: 'Earn skill badges and certifications to showcase your expertise.',
  },
  {
  title: 'Career Guidance',
  description: 'Access career guidance and support to excel in your professional journey.',
  },
  ],
  image: {
  src: cameraBackImg,
  alt: 'Online Learning Image',
  },
  isReversed: true,
  isAfterContent: true,
  };
  
  
// Steps data
export const stepsData: StepsProps = {
  title: 'How Educate Works?',
  items: [
    {
      title: 'Step 1',
      description: '"Educate" conducts a thorough evaluation to identify regions and communities in underserved areas that require educational support the most. Factors such as socio-economic conditions and limited access to formal education guide the selection process, ensuring focused efforts where the impact can be profound.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description: '"Educate" initiates a donation program to offer technology resources, such as educational apps and devices, to underserved communities. This discreet program aims to bridge the digital divide, empowering children in need with valuable tools for learning and growth.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description: '"Educate" implements an innovative training approach for teachers and students, utilizing technology-driven tools and resources to enhance their skills and knowledge. This discreet and secure method ensures that participants can benefit from a personalized learning experience',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
      icon: IconCheck,
    },
  ],
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
};

// Team data
export const teamData: TeamProps = {
  header: {
    title: '',
    subtitle:
      '',
  },
  teams: [
    {
      name: '',
      occupation: '',
      image: {
        src: '',
        alt: '',
      },
      items: []
    },
    {
      name: '',
      occupation: '',
      image: {
        src: '',
        alt: '',
      },
      items: [
      ],
    },
    {
      name: '',
      occupation: '',
      image: {
        src: '',
        alt: '',
      },
      items: [
        {
          title: '',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: '',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: '',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: '',
      occupation: '',
      image: {
        src: '',
        alt: '',
      },
      items: [
        {
          title: '',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: '',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: '',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    title: 'Why expanding education is important?',
    subtitle: '',
    // highlight: 'Testimonial',
  },
  testimonials: [
    {
      name: 'Malala Yousafzai',
      occupation: 'Pakistani Female Education Activist',
      comment: 'One child, one teacher, one pen and one book can change the world.',
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Malcolm X',
      occupation: 'American Human Rights Activist',
      comment: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.',
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Nelson Mandela',
      occupation: 'First President of South Africa',
      comment: 'Education is the most powerful weapon you can use to change the world.',
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
  ],
};

// Pricing data
export const pricingData: PricingProps = {
  header: {
    title: 'Educate\'s Core Curriculum',
    subtitle: '',
    // highlight: 'Pricing',
  },
  prices: [
    {
      title: 'Elementary',
      value: 0,
      period: 'Grades K - 6',
      texts: [
        'Available in English and Spanish',
        'Core subjects in Math, Science, History, and English',
        'Videos and virtual assignments and live progress tracking',
        'Content from Kindergarten to Grade 6',
      ],
      callToAction: {
        text: 'Enroll in Elementary School',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'Middle',
      value: 0,
      period: 'Grades 7 - 8',
      texts: ['Available in English and Spanish', 'Core subjects in Math, Science, History, and English', 'Videos, virutal assignments, and discussion forum for dynamic learning environment', 'Content from Grade 7 to Grade 8'],
      callToAction: {
        text: 'Enroll in Middle School',
        href: '/',
      },
      hasRibbon: false,
      ribbonTitle: '',
    },
    {
      title: 'High',
      value: 0,
      period: 'Grade 9 - 12',
      texts: [
        'Available in English and Spanish',
        'Core subjects in Math, Science, History, and English',
        'Videos, virtual assignments, discussion forums, and college counseling for interactive learning experience',
        'Content from Grade 9 to Grade 12',
      ],
      callToAction: {
        text: 'Enroll in High School',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Comparison data
export const comparisonData: ComparisonProps = {
  header: {
    title: "What's available for each plan?",
    subtitle:
      'Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.',
    // highlight: 'Comparison',
  },
  columns: [
    {
      title: 'compare plans',
      items: [

      ],
    },
    {
      title: 'basic',
      items: [
        
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'standard',
      items: [
       
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'premium',
      items: [
        
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
  ],
};

// Stats
export const statsData: StatsProps = {
  items: []
};

// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Get in Touch',
    subtitle: 'Empowering Young Minds with Knowledge',
    highlight: 'Contact',
  },
  content:
    'If you have any questions about our program or need some help, feel free to use the contact form to reach out to us.',
  items: [
    {
      title: 'Our Address',
      description: ['7350 S 900 E', 'Midvale, UT', '84047'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (801) 897-6896', 'Email: contact@educate.org'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working Hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'email',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Get in Touch',
    subtitle: 'Inspire, Educate, and Empower',
    highlight: 'Contact',
  },
  content:
    'If you have any inquiries or would like to learn more about our initiatives, please don\'t hesitate to get in touch with us. We are eager to make a difference!',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street', 'New York, USA'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Email: info@educate.org'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working Hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Involved?',
    description:
      'We welcome you to join us in our mission to empower young minds with knowledge. Please share your interests, and we will be glad to assist you further!',
    inputs: [
      {
        type: 'text',
        label: 'First Name',
        name: 'firstName',
        autocomplete: 'given-name',
        placeholder: 'Your first name',
      },
      {
        type: 'text',
        label: 'Last Name',
        name: 'lastName',
        placeholder: 'Your last name',
      },
      {
        type: 'email',
        label: 'Email Address',
        name: 'email',
        placeholder: 'Your email address',
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General Inquiries',
        },
        {
          label: 'Volunteering Opportunities',
        },
        {
          label: 'Donation and Sponsorship',
        },
        {
          label: 'Partnerships',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How Can We Assist You?',
      name: 'textarea',
      placeholder: 'Share your message...',
    },
    checkboxes: [
      {
        label: 'I have read and agree to the Privacy Policy.',
        value: '',
      },
      {
        label: 'Please subscribe me to the Educate! newsletter for updates.',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Footer data
export const footerData: FooterProps = {
  title: 'Educate!',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/vivaan2006/Educate_Website' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="">
        {' '}
        Educate!
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['7350 S 900 E', 'Midvale, UT 84047'],
    },
    {
      title: 'Phone',
      texts: ['Reception: +1 (801) 897-6896', 'Office: +1 (385) 429-1350'],
    },
    {
      title: 'Email',
      texts: ['Office: educate@gmail.com', ''],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200">
        {' '}
        Educate!
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};
