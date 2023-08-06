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
    icon: IconBrandTailwind, 
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
      'Welcome to the Mental Health Hub Frequently Asked Questions section. Find answers to common questions about our platform and our mission to provide mental health resources and support.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'What is Mental Health Hub?',
      description: 'Mental Health Hub is a platform dedicated to providing mental health resources, support, and information for individuals seeking help and guidance in managing their mental well-being.',
    },
    {
      title: 'How can I access mental health resources on the platform?',
      description: 'All our mental health resources and support are freely accessible to anyone visiting the website. You can explore our blog articles, helpline information, and other resources without any subscriptions or fees.',
    },
    {
      title: 'Is my personal information secure on Mental Health Hub?',
      description: 'Yes, we prioritize user privacy and security. Any personal information shared with us is handled according to our strict privacy policy. We use encryption and secure protocols to safeguard your data.',
    },
    {
      title: 'What mental health issues does Mental Health Hub cover?',
      description: 'Mental Health Hub covers a wide range of mental health topics, including anxiety, depression, stress management, self-care practices, coping strategies, and more. Our goal is to address various mental health concerns and provide valuable insights and support.',
    },
    {
      title: 'Is the helpline available 24/7?',
      description: 'Yes, our mental health helpline is available 24/7 to provide immediate assistance and support to individuals in distress. Trained mental health professionals are always ready to listen and help.',
    },
    {
      title: 'Can I volunteer to contribute to Mental Health Hub?',
      description: 'Yes, we welcome volunteers who are passionate about mental health advocacy and support. You can contact us through the website to explore volunteer opportunities and ways to contribute to our mission.',
    },
    {
      title: 'How can I support Mental Health Hub?',
      description: 'You can support Mental Health Hub by spreading awareness about mental health, sharing our resources with others, and contributing to our cause through donations or volunteering.',
    },
  ],
};

// FAQS data 2 (Additional FAQs)
export const faqsData2: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Welcome to the Mental Health Hub Frequently Asked Questions section. Below are some common questions and answers about our platform and mental health support. If you have more questions, feel free to reach out to us!',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'Is Mental Health Hub a substitute for professional therapy?',
      description: 'Mental Health Hub provides valuable mental health information and resources, but it is not a substitute for professional therapy or medical advice. If you are experiencing severe mental health issues, we recommend seeking help from a licensed mental health professional.',
    },
    {
      title: 'How can I find relevant blog articles on specific mental health topics?',
      description: 'You can explore our blog section, where articles are categorized based on mental health topics. You can use the search bar or browse the different categories to find articles that match your interests and concerns.',
    },
    {
      title: 'Are the blog articles written by mental health professionals?',
      description: 'Our blog articles are written by a team of qualified mental health professionals, psychologists, and experienced writers. We ensure that all content is evidence-based and accurate.',
    },
    {
      title: 'Can I share my mental health journey on Mental Health Hub?',
      description: 'Yes, we encourage individuals to share their mental health journeys and experiences to inspire others and break the stigma surrounding mental health. You can contact us if you wish to contribute your story.',
    },
    {
      title: 'What other resources are available on Mental Health Hub?',
      description: 'In addition to blog articles and the helpline, Mental Health Hub offers self-assessment tools, coping techniques, mindfulness exercises, and educational materials to help individuals manage their mental health.',
    },
    {
      title: 'Does Mental Health Hub offer support for loved ones of individuals with mental health issues?',
      description: 'Yes, we understand the importance of supporting loved ones of individuals facing mental health challenges. We provide resources and information to help friends and family better understand and assist their loved ones.',
    },
    {
      title: 'Can I request specific topics to be covered in future blog articles?',
      description: 'Absolutely! We value user feedback and suggestions. If you have specific mental health topics you would like to see covered in our blog, you can reach out to us, and we will consider them for future content.',
    },
  ],
};

// FAQS3 data (Mental Health Hub FAQs)
export const faqs3Data: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle: 'Do you have other questions about the Mental Health Hub?',
    position: 'left',
  },
  items: [
    {
      title: 'What services does the Mental Health Hub provide?',
      description: `The Mental Health Hub offers a wide range of mental health services, including individual counseling, group therapy, psychiatric evaluations, crisis intervention, and educational workshops on various mental health topics.`,
    },
    {
      title: 'How do I schedule an appointment with a mental health professional?',
      description: `To schedule an appointment, simply visit our website and click on the "Appointments" section. You can choose from a list of available mental health professionals and select a date and time that suits you best.`,
    },
    {
      title: 'Are the services at the Mental Health Hub confidential?',
      description: `Yes, we prioritize the confidentiality and privacy of our clients. All interactions and discussions with our mental health professionals are kept strictly confidential, following ethical and legal guidelines.`,
    },
    {
      title: 'What types of mental health issues does the Mental Health Hub address?',
      description: `The Mental Health Hub provides support for a wide range of mental health concerns, including anxiety, depression, stress management, relationship issues, grief, trauma, and more. Our team of professionals is well-equipped to address various mental health challenges.`,
    },
    {
      title: 'Is the Mental Health Hub suitable for children and adolescents?',
      description: `Yes, we offer specialized services for children and adolescents, including child counseling and play therapy. Our professionals have expertise in working with young individuals to provide age-appropriate and effective mental health care.`,
    },
    {
      title: 'What if I need immediate assistance or in a crisis?',
      description: `If you are experiencing a mental health crisis or need immediate assistance, please call the emergency helpline provided on our website or visit your nearest emergency room. Our team is also available for crisis intervention during regular business hours.`,
    },
    {
      title: 'Do you accept insurance for mental health services?',
      description: `Yes, we accept insurance from various providers. Please check our website for a list of accepted insurance plans or contact our billing department for more information.`,
    },
    {
      title: 'Can I switch to a different mental health professional if needed?',
      description: `If you feel that your current mental health professional is not the right fit for you, we understand. You have the option to request a change and work with a different professional who better aligns with your needs and preferences.`,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnText: 'uppercase',
    btnType: 'primary',
  },
};

// FAQS4 data (Mental Health Hub Testimonials)
export const faqs4Data: FAQsProps = {
  header: {
    title: 'Testimonials',
    subtitle:
      'Hear what our clients have to say about their experiences with the Mental Health Hub.',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'Counseling Services',
        href: '/tab1',
      },
      items: [
        {
          title: 'Life-Changing Support',
          description:
            'The counseling services at the Mental Health Hub have been life-changing for me. The therapist I worked with was compassionate, understanding, and provided valuable insights that helped me navigate through difficult times.',
        },
        {
          title: 'Safe and Comforting Environment',
          description:
            'I always felt safe and supported during my therapy sessions at the Mental Health Hub. The environment is comforting, and the staff is welcoming. It made discussing my mental health concerns much easier.',
        },
        {
          title: 'Empowering and Insightful Workshops',
          description:
            'Attending the educational workshops provided by the Mental Health Hub has been an empowering experience. The workshops cover important topics related to mental health and provide valuable tools for self-growth and resilience.',
        },
      ],
    },
    {
      link: {
        label: 'Children and Adolescents',
        href: '/tab2',
      },
      items: [
        {
          title: 'Compassionate Care for My Child',
          description:
            'I am grateful for the compassionate care my child received at the Mental Health Hub. The child counseling sessions helped my child express their emotions and cope with difficulties in a positive way.',
        },
        {
          title: 'Effective Play Therapy',
          description:
            'Play therapy at the Mental Health Hub has been highly effective in helping my child open up and communicate their feelings. The play therapist connected with my child on their level, creating a nurturing therapeutic experience.',
        },
        {
          title: 'Positive Changes in My Teenager',
          description:
            'Working with the mental health professionals at the Mental Health Hub has brought positive changes in my teenager. They have become more confident and better equipped to handle stress and challenges.',
        },
      ],
    },
    {
      link: {
        label: 'Crisis Intervention',
        href: '/tab3',
      },
      items: [
        {
          title: 'Timely Support During a Crisis',
          description:
            'I reached out to the Mental Health Hub during a crisis, and they provided timely and supportive intervention. The crisis counselor was understanding and helped me regain stability and hope.',
        },
        {
          title: 'Caring and Professional Team',
          description:
            'The mental health professionals who assisted me during my crisis were caring and professional. They made sure I felt heard and offered guidance to help me cope with the difficult situation.',
        },
        {
          title: 'A Place of Healing',
          description:
            'The Mental Health Hub became a place of healing for me during a challenging time. The crisis intervention services were crucial in helping me move forward and find the strength to overcome obstacles.',
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

// Feature data for the Mental Health Hub
export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">Mental Health Hub</span>
      </>
    ),
    subtitle:
      'Explore the exciting features of the Mental Health Hub that provide a holistic and supportive mental health experience.',
    highlight: 'Features',
  },
  items: [
    {
      title: 'Professional Counseling Services',
      description:
        'Access a wide range of professional counseling services, including individual therapy, group therapy, and specialized counseling for children and adolescents.',
      icon: IconArrowDown,
      link: {
        label: 'Learn more',
        href: '/counseling',
      },
    },
    {
      title: 'Interactive Workshops and Webinars',
      description:
        'Participate in interactive workshops and webinars conducted by mental health experts to gain insights, coping strategies, and self-care practices.',
      icon: IconArrowDown,
      link: {
        label: 'Explore now',
        href: '/workshops',
      },
    },
    {
      title: 'Crisis Intervention and Support',
      description:
        'Receive immediate support during mental health crises through our 24/7 helpline and crisis intervention services.',
      icon: IconArrowDown,
      link: {
        label: 'Get help',
        href: '/crisis-support',
      },
    },
    {
      title: 'Personalized Treatment Plans',
      description:
        'Benefit from personalized treatment plans designed by our experienced mental health professionals to address your unique needs and goals.',
      icon: IconArrowDown,
      link: {
        label: 'Learn more',
        href: '/treatment-plans',
      },
    },
    {
      title: 'Community Support Groups',
      description:
        'Connect with others facing similar mental health challenges through our community support groups and find comfort in shared experiences.',
      icon: IconArrowDown,
      link: {
        label: 'Join a group',
        href: '/support-groups',
      },
    },
    {
      title: 'Online Self-Help Resources',
      description:
        'Access a variety of self-help resources, including articles, videos, and guided exercises, to promote mental well-being and personal growth.',
      icon: IconArrowDown,
      link: {
        label: 'Explore resources',
        href: '/self-help',
      },
    },
  ],
};

// Feature2 data for the Mental Health Hub
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
        href: '/live-chat',
      },
    },
    {
      title: '24/7 Helpline',
      description: 'Get round-the-clock support from our dedicated helpline.',
      icon: IconHeadset,
      link: {
        href: '/helpline',
      },
    },
  ],
};

// Feature data 3 for the Mental Health Hub
export const featuresData3: FeaturesProps = {
  header: {
    title: 'Additional Services',
  },
  items: [
    {
      title: 'Online Workshops and Events',
      description: 'Participate in a variety of online workshops and events on mental health topics and self-care practices.',
      icon: IconArrowDown,
    },
    {
      title: 'Mental Health Education',
      description: 'Access educational resources and articles to deepen your understanding of mental health and well-being.',
      icon: IconArrowDown,
    },
    {
      title: 'Telehealth Services',
      description: 'Connect with mental health professionals remotely through secure and confidential telehealth appointments.',
      icon: IconArrowDown,
    },
    {
      title: 'Crisis Prevention Planning',
      description: 'Work with our experts to create a personalized crisis prevention plan to manage potential mental health crises.',
      icon: IconArrowDown,
    },
    {
      title: 'Parent and Caregiver Support',
      description: 'Receive guidance and support for parents and caregivers of individuals dealing with mental health challenges.',
      icon: IconArrowDown,
    },
    {
      title: 'Wellness Assessments',
      description: 'Assess your mental well-being and track your progress on the journey to better mental health and happiness.',
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
