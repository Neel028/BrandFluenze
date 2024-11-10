import IconAdd from "@/components/svg/IconAds";
import IconMarketing from "@/components/svg/IconMarketing";
import IconInfluencer from "@/components/svg/InfluencerIcon";
import { Faq, Feature } from "@/types/common";

export const featuresData: Feature[] = [
    {
        icon:<IconInfluencer/>,
        title: "Influencer Connections",
        description: "Connect with top-tier influencers to amplify your brand's reach and engagement.",
        features: [
            "Tailored influencer matchmaking",
            "Campaign strategy and execution",
            "Performance tracking and analytics"
        ]
    },
    {
        icon:<IconMarketing/>,
        title: "Digital Marketing Experts",
        description: "Boost your online presence with our Top 1% talents having 10+ Years of Experience.",
        features: [
            "SEO Experts",
            "Social media Experts",
            "Content marketing Experts"
        ]
    },
    {
        icon:<IconAdd/>,
        title: "Marketing & Ads Expert",
        description: "Maximize your ROI with our Top 1% talents having 10+ Years of Experience in Brands.",
        features: [
            "Meta & Google Ads Experts",
            "Performance Marketing Experts",
            "ROI Growth Experts"
        ]
    }
];

export const accordionData: Faq[] = [
    {
      id: "item-1",
      question: "What is BrandFluenze?",
      answer:
        "BrandFluenze is a platform that connects brands with influencers, digital marketing experts, and content creators for seamless collaborations. It offers AI-driven suggestions for campaign optimization and helps brands and creators manage their campaigns efficiently.",
    },
    {
      id: "item-2",
      question: "How does BrandFluenze work for brands?",
      answer:
        "Brands can use BrandFluenze to easily connect with influencers and creators, create campaigns, and track engagement metrics to optimize their marketing efforts.",
    },
    {
      id: "item-3",
      question: "How does BrandFluenze help creators?",
      answer:
        "Creators can use BrandFluenze to find brands to collaborate with, manage partnerships, and access tools for campaign optimization.",
    },
    {
      id: "item-4",
      question: "What types of professionals can I find on BrandFluenze?",
      answer:
        "You can find influencers, digital marketers, content creators, and other professionals skilled in various areas of digital marketing.",
    },
    {
      id: "item-5",
      question: "How do I sign up as a brand or creator?",
      answer:
        "To sign up, visit the BrandFluenze website and follow the registration process. You can sign up as either a brand or a creator, depending on your needs.",
    },
  ];