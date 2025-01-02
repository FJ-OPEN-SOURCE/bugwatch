export type FooterLink = {
  text?: string;
  imageURL?: string;
  href: string;
};

export const SocialLinks: FooterLink[] = [
  {
    imageURL: "Github",
    href: "https://www.github.com",
  },
  {
    imageURL: "LinkedIn",
    href: "https://www.linkedin.com",
  },
  {
    imageURL: "Instagram",
    href: "https://www.instagram.com",
  },
];

export const ProductLinks: FooterLink[] = [
  {
    text: "Download",
    href: "/download",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
  {
    text: "Locations",
    href: "/locations",
  },
  {
    text: "Countries",
    href: "/countries",
  },
  {
    text: "Blog",
    href: "/blog",
  },
];

export const EngageLinks: FooterLink[] = [
  {
    text: "Bugwatch?",
    href: "/info",
  },
  {
    text: "FAQ",
    href: "/faq",
  },
  {
    text: "Tutorials",
    href: "/tutorials",
  },
  {
    text: "About Us",
    href: "/about",
  },
  {
    text: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    text: "Terms of Service",
    href: "/terms-of-service",
  },
];
