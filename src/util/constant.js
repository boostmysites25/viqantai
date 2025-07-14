import {
  Smartphone,
  Users,
  Code,
  Cpu,
  Bot,
  Database,
  Cloud,
  Box,
  MemoryStick,
  Gamepad2,
  Network,
  CpuIcon,
  BotIcon,
  CloudCog,
  CloudDrizzle,
} from "lucide-react";
import file from "../assets/images/png/file.png";
import graph from "../assets/images/png/graph.png";
import rocket from "../assets/images/png/rocket.png";
import start from "../assets/images/png/start.png";
import integrity from "../assets/images/png/integrity.png";
import quality from "../assets/images/png/quality.png";
import success from "../assets/images/png/success.png";
import Infinite from "../assets/images/png/Infinite.png";
//industries
import governance from "../assets/images/industries/governance.jpg";
import fintech from "../assets/images/industries/fintech.jpg";
import healthcare from "../assets/images/industries/healthcare.jpg";
import advancedrobotics from "../assets/images/industries/advancedrobotics.jpg";
import energy from "../assets/images/industries/energy.jpg";
import edtech from "../assets/images/industries/edtech.jpg";
import space from "../assets/images/industries/space.jpg";
import security from "../assets/images/industries/security.jpg";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";
//portfolio
import nanoflow from "../assets/portfolio/nanoflow.png";
import padipal from "../assets/portfolio/padipal.png";
import cryptopadie from "../assets/portfolio/cryptopadie.png";

import { CgWebsite } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  FaAppStoreIos,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiFlutter } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

export const companyDetails = {
  name: "ViQantAI",
  email: "ViQantAI@gmail.com",
  phone: "+91-8639916341",
  address: "company address",
  whatsapp:"https://wa.me/918639916341",
  socialLinks: [
    {
      href: "https://www.linkedin.com/company/viqantai-tech-services-pvt-ltd/",
      icon: FaLinkedin,
    },
    {
      href: "https://www.instagram.com/viqantai?igsh=MWsydXcwNWRvaTVmYQ%3D%3D&utm_source=qr",
      icon: FaInstagram,
    },
    { href: "https://x.com/ViQantAI", icon: FaXTwitter },
    {
      href: "https://www.youtube.com/@ViQantAI",
      icon: FaYoutube,
    },
  ],
  whatsapp: "",
};

export const services = [
  {
    title: "Mobile App Development",
    link: "mobile-app-development",
    description:
      "We build secure, high-performance iOS and Android apps with user-friendly designs.",
    icon: Smartphone,
    bgColor: "bg-blue-500",
  },
  {
    title: "UX/UI Design",
    link: "ux-ui-design",
    description:
      "Crafting intuitive interfaces that ensure accessibility and seamless user experiences.",
    icon: Users,
    bgColor: "bg-gray-900",
  },
  {
    title: "AR & VR Development",
    link: "ar-vr-development",
    description:
      "Create immersive experiences for training, visualization, and entertainment.",
    icon: Box,
    bgColor: "bg-gray-900",
  },
  {
    title: "Full Stack Web Development",
    link: "full-stack-web-development",
    description:
      "Develop responsive websites and scalable web applications with secure architectures.",
    icon: Code,
    bgColor: "bg-gray-900",
  },
  {
    title: "AI Calling Agency",
    link: "ai-calling-agency",
    description:
      "Automate customer interactions with intelligent voice agents for 24/7 support.",
    icon: Cpu,
    bgColor: "bg-gray-900",
  },
  {
    title: "Chatbot Development",
    link: "chatbot-development",
    description:
      "Enhance customer support with AI-driven chatbots across multiple platforms.",
    icon: Bot,
    bgColor: "bg-gray-900",
  },
  {
    title: "Artificial Intelligence Solutions",
    link: "artificial-intelligence-solutions",
    description:
      "Implement AI-powered systems to automate processes and gain insights.",
    icon: MemoryStick,
    bgColor: "bg-gray-900",
  },
  {
    title: "Robot Process Automation",
    link: "robot-process-automation",
    description: "Automate repetitive tasks to boost efficiency and accuracy.",
    icon: Bot,
    bgColor: "bg-gray-900",
  },
  {
    title: "Data Science & Analytics",
    link: "data-science-analytics",
    description:
      "Transform data into actionable insights using advanced analytics.",
    icon: Database,
    bgColor: "bg-gray-900",
  },
  {
    title: "Blockchain Development",
    link: "blockchain-development",
    description:
      "Build secure, decentralized applications with smart contracts.",
    icon: Cloud,
    bgColor: "bg-gray-900",
  },
  {
    title: "Game Development",
    link: "game-development",
    description:
      "Create engaging games across mobile, console, and VR platforms.",
    icon: Gamepad2,
    bgColor: "bg-gray-900",
  },
  {
    title: "IoT Development",
    link: "iot-development",
    description:
      "Develop smart connected systems for real-time monitoring and automation.",
    icon: Network,
    bgColor: "bg-gray-900",
  },
  {
    title: "Machine Learning Services",
    link: "machine-learning-services",
    description:
      "Build custom ML models to predict trends and optimize processes.",
    icon: CpuIcon, // Common AI-related icon
    bgColor: "bg-gray-900",
  },
  {
    title: "Cloud Computing Services",
    link: "cloud-computing-services",
    description:
      "Scale infrastructure with secure, flexible, and cost-effective cloud solutions.",
    icon: CloudDrizzle, // Common cloud-related icon
    bgColor: "bg-gray-900",
  },
  {
    title: "Natural Language Processing",
    link: "natural-language-processing",
    description:
      "Develop applications that understand human language for better engagement.",
    icon: BotIcon, // Common NLP-related icon
    bgColor: "bg-gray-900",
  },
  {
    title: "Cloud Migration Services",
    link: "cloud-migration-services",
    description:
      "Seamlessly transition to the cloud with minimal disruption and optimized performance.",
    icon: CloudCog, // Common cloud-related icon
    bgColor: "bg-gray-900",
  },
];
export const whyChooseUs = [
  "Cross-Domain Expertise: Our team’s deep knowledge spans fintech, gaming, healthcare, and more, delivering comprehensive solutions.",
  "Tailored Solutions: We customize every service to align with your unique business needs and goals.",
  "Commitment to Quality: Adhering to industry best practices, we deliver high-quality solutions that exceed expectations.",
  "Client-Centric Approach: Your success is our mission, with close collaboration to ensure solutions meet your vision.",
  "Agile & Future-Ready: We use cutting-edge frameworks for scalable, secure solutions with transparent delivery.",
];

export const testimonials = [
  {
    quote:
      "From concept to launch, ViQantAI's blockchain expertise was unmatched. Their team delivered a secure and scalable DeFi platform, guiding us through compliance with strategic insight.",
    author: "Elena K., CEO, FinTech Startup",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "ViQantAI turned our idea into an addictive mobile game. The polished, high-performing game they developed achieved over 1M downloads in just three months, exceeding our expectations.",
    author: "Marcus D., Creative Director, Indie Game Studio",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "ViQantAI's intelligent automation changed how we do business. Their RPA solutions freed up 40% of our finance team’s time, allowing us to focus on strategy rather than manual tasks.",
    author: "Priya M., CFO, Logistics Company",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "ViQantAI's AI team helped us personalize every customer interaction. The AI-driven recommendation engine they built boosted our user engagement by 35% in just two months.",
    author: "Sarah L., VP Marketing, SaaS Company",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "ViQantAI's web development delivers real results. They built a blazing-fast, SEO-friendly website with custom integrations, increasing our lead generation by 60% in the first quarter.",
    author: "Natalie F., Digital Marketing Lead, B2B Software Provider",
    rating: 5,
    gridClass: "col-span-1",
  },
];

export const highlights = [
  {
    id: 1,
    icon: file,
    title: "Transformative Technology Solutions",
    description:
      "From startups to enterprises, ViQantAI delivers innovative, scalable solutions in AI, blockchain, and cloud computing, driving growth and efficiency tailored to your business needs.",
  },
  {
    id: 2,
    icon: graph,
    title: "Cross-Domain Expertise",
    description:
      "Our team’s deep knowledge in fintech, gaming, healthcare, and more powers comprehensive solutions, from smart contracts to immersive games, ensuring your industry’s unique demands are met.",
  },
  {
    id: 3,
    icon: rocket,
    title: "Intelligent Automation & Insights",
    description:
      "ViQantAI’s AI and RPA solutions streamline workflows, enhance data processing, and provide predictive analytics, empowering your business with smarter, data-driven decisions.",
  },
  {
    id: 4,
    icon: start,
    title: "Future-Ready Innovation",
    description:
      "Step into tomorrow with ViQantAI’s cutting-edge technologies in machine learning, NLP, and cloud migration, designed to create secure, scalable, and transformative digital experiences.",
  },
];
export const faqs = [
  {
    question: "What is ViQantAI?",
    answer: `• ViQantAI is a technology solutions provider delivering innovative, scalable digital solutions.
• We specialize in blockchain, AI, app development, cloud computing, and more, helping businesses transform and grow.`,
  },
  {
    question: "How does ViQantAI function?",
    answer: `• ViQantAI collaborates closely with clients to understand their unique needs.
• We design, develop, and deploy tailored solutions using cutting-edge technologies, ensuring seamless integration and scalability.`,
  },
  {
    question: "What key services does ViQantAI provide?",
    answer: `• Blockchain Development – Secure smart contracts and decentralized apps.
• AI & Machine Learning – Predictive analytics and intelligent automation.
• App & Web Development – User-friendly, high-performance applications.
• Cloud Services – Scalable infrastructure and seamless migrations.`,
  },
  {
    question: "Who is ViQantAI designed for?",
    answer: `• Startups – Building scalable, innovative products from scratch.
• Enterprises – Optimizing operations with automation and cloud solutions.
• Industries – Fintech, gaming, healthcare, logistics, and more.
• Visionaries – Businesses seeking digital transformation through technology.`,
  },
  {
    question: "How does ViQantAI support business growth?",
    answer: `• Custom Solutions – Tailored to your specific business goals.
• Automation – Streamlining workflows with RPA and AI to boost efficiency.
• Data Insights – Leveraging data science for informed decision-making.
• Scalability – Building solutions that evolve with your business.`,
  },
  {
    question: "Does ViQantAI offer ongoing support?",
    answer: `• Post-Launch Support – Ensuring your solutions remain optimized.
• Maintenance – Regular updates and performance enhancements.
• Consulting – Strategic guidance for future technology adoption.`,
  },
  {
    question: "How do I get started with ViQantAI?",
    answer: `• Visit our website at [yourcompany.com] and fill out the contact form.
• Email us at hello@yourcompany.com or call +1 (555) 123-4567.
• Our team will respond within 24 hours to discuss your project.`,
  },
  {
    question: "What is the cost of ViQantAI’s services?",
    answer: `• Project-Based Pricing – Customized quotes based on your needs.
• Flexible Models – Options for fixed-cost or time-and-material contracts.
• Contact us for a detailed estimate tailored to your project scope.`,
  },
  {
    question: "How does ViQantAI ensure data security?",
    answer: `• Robust Encryption – Protecting sensitive data during development and deployment.
• Compliance Standards – Adhering to industry regulations for data protection.
• Secure Cloud Solutions – Implementing best practices for cloud storage and access.`,
  },
  {
    question: "Can ViQantAI integrate with existing systems?",
    answer: `• Seamless Integration – Connecting new solutions with your current infrastructure.
• Custom APIs – Building interfaces for smooth data flow.
• Legacy Modernization – Upgrading outdated systems during cloud migration.`,
  },
  {
    question: "How does ViQantAI stay ahead in technology?",
    answer: `• Future-Ready Tech Stack – Using the latest frameworks and tools.
• Continuous Innovation – Investing in R&D for AI, blockchain, and cloud.
• Industry Expertise – Deep knowledge across diverse sectors.`,
  },
  {
    question: "Where can I get more information or support?",
    answer: `• Visit [yourcompany.com] for service details and case studies.
• Email hello@yourcompany.com for inquiries.
• Call +1 (555) 123-4567 to speak with our team directly.`,
  },
];

export const coreValues = [
  {
    id: 1,
    icon: integrity,
    title: "Expertise",
    description:
      "Our deep knowledge across diverse domains ensures innovative and reliable technology solutions.",
  },
  {
    id: 2,
    icon: quality,
    title: "Quality",
    description:
      "We adhere to industry best practices, delivering high-quality solutions that exceed expectations.",
  },
  {
    id: 3,
    icon: success,
    title: "Customer Success",
    description:
      "Your success is our priority, with tailored solutions designed to achieve your business goals.",
  },
  {
    id: 4,
    icon: Infinite,
    title: "Innovation",
    description:
      "We push boundaries with cutting-edge technologies, driving digital transformation for your business.",
  },
];

export const visionAndMission = [
  {
    title: "Our Vision",
    description:
      "To be a global leader in transformative technology, delivering innovative solutions that empower businesses to thrive in the digital era.",
  },
  {
    title: "Our Mission",
    description:
      "To partner with businesses worldwide, providing tailored, scalable solutions in AI, blockchain, cloud, and more to drive growth, efficiency, and digital transformation.",
  },
  {
    title: "Our Journey",
    description:
      "Founded as a technology innovator, ViQantAI has grown into a trusted partner for startups and enterprises, delivering cutting-edge solutions across industries like fintech, gaming, and healthcare.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    // icon: require("./assets/images/icons/online-shopping.png"),
    img: CgWebsite,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: GoFileMedia,
    // icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: TfiLayoutMediaRightAlt,
    // icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: MdOutlineDashboardCustomize,
    // icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: FaAppStoreIos,
    // icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: IoLogoAndroid,
    // icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: SiFlutter,

    // icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: TbDeviceMobileCode,
    // icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

export const futureTechSectors = [
  {
    id: 1,
    img: governance,
    title: "Governance & Law",
    description:
      "AI-driven governance systems, decentralized smart city infrastructure, and AI-optimized public resource management for transparent and efficient decision-making.",
  },
  {
    id: 2,
    img: fintech,
    title: "Fintech & Decentralized Economy",
    description:
      "Holo-economy platforms integrating AI, blockchain, and quantum computing, self-regulating DeFi ecosystems, and quantum-secure financial systems.",
  },
  {
    id: 3,
    img: healthcare,
    title: "Healthcare & Bioinformatics",
    description:
      "AI-augmented healthcare ecosystems, personalized genetic and consciousness-based medicine, and neural AI interfaces for mind-body optimization.",
  },
  {
    id: 4,
    img: advancedrobotics,
    title: "Advanced Robotics & Automation",
    description:
      "Quantum AI-driven manufacturing, sentient AI collaborators in R&D, and self-sustaining AI factories for intelligent industrial solutions.",
  },
  {
    id: 5,
    img: energy,
    title: "Energy & Climate Sustainability",
    description:
      "AI-based universal energy flow management, quantum blockchain for global resource distribution, and zero-point energy-powered decentralized grids.",
  },
  {
    id: 6,
    img: edtech,
    title: "Edtech & Meta-Learning",
    description:
      "AI-driven knowledge expansion networks, holo-academies for experiential learning, and quantum neuro-learning systems for accelerated education.",
  },
  {
    id: 7,
    img: space,
    title: "Space & Extraterrestrial Expansion",
    description:
      "Astrocomputing networks utilizing AI and quantum for space travel, terraforming AI systems, and extraterrestrial economy with Web 5.0 communication.",
  },
  {
    id: 8,
    img: security,
    title: "Advanced Defense & Autonomous Security",
    description:
      "AI-driven autonomous weapon systems, private military contracting for force projection, and directed energy and hypersonic tech for advanced defense.",
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const blockchainPortfolio = [
  {
    id: 1,
    img: nanoflow,
    title: "Nanoflow",
    link: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
  },
  {
    id: 2,
    img: padipal,
    title: "Padipal",
    link: "https://padiepal.com",
  },
  {
    id: 3,
    img: cryptopadie,
    title: "Cryptopadie",
    link: "https://cryptopadie.com/",
  },
];
