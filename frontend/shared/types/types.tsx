export type TransitionsType = {
  hidden: {
    opacity: number;
    transition: {
      duration: number;
    };
  };
  visible: {
    opacity: number;
    transition: {
      duration: number;
      delay?: number;
    };
  };
};

export type ButtonType = {
  url: string;
  pageReference: {
    _ref: string;
  };
  title: string;
};

export type SlugType = {
  current: string;
};

export type SiteSettingsType = {
  referenceTitle: string;
  instagramUrl: string;
  tiktokUrl: string;
  facebookUrl: string;
  phone: string;
  email: string;
  officeAddress: string;
  officeGoogleMapsLink: string;
  termsAndConditions: any[];
};

export type TalentType = {
  name: string;
  slug: SlugType;
  tags: Array<string>;
  description: string;
  socialLinks: Array<SocialLinkType>;
  heroThumbnail: {
    asset: {
      url: string;
    };
  };
  heroGallery: {
    image: {
      asset: {
        url: string;
      };
      alt: string;
    };
  };
};

type SocialLinkType = {
  title: string;
  link: string;
};

export type HomePageType = {
  seoTitle: string;
  seoDescription: string;
  heroTitle: Array<MultiTypeBlockType>;
  heroMedia: MediaType;
  portfolioTitle: Array<MultiTypeBlockType>;
  partnersTitle: string;
  partnersLogos: Array<PartnerLogoType>;
  featuredTalent: Array<TalentType>;
  aboutTitle: Array<MultiTypeBlockType>;
  servicesList: Array<ServiceType>;
  gallery: Array<GalleryItemType>;
};

export type ContactPageType = {
  referenceTitle: string;
  seoTitle: string;
  seoDescription: string;
  forBrandsButtonTitle: string;
  forBrandsButtonLink: string;
  forTalentButtonTitle: string;
  forTalentButtonLink: string;
};

export type PortfolioPageType = {
  referenceTitle: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: Array<MultiTypeBlockType>;
};

export type AboutPageType = {
  referenceTitle: string;
  seoTitle: string;
  seoDescription: string;
  founderImage: {
    asset: {
      url: string;
    };
  };
  founderTitle: string;
  heroSubTitle: string;
  heroTitle: Array<MultiTypeBlockType>;
  heroDescription: string;
  servicesList: Array<ServiceType>;
  ourPeopleTitle: Array<MultiTypeBlockType>;
  people: Array<PersonType>;
};

export type ServiceType = {
  title: string;
  listItems: Array<string>;
};

export type PersonType = {
  name: string;
  position: string;
  image: {
    asset: {
      url: string;
    };
  };
};

export type GalleryItemType = {
  image: {
    asset: {
      url: string;
    };
    alt: string;
  };
  aspectRatio: "portrait" | "landscape";
};

export type PartnerLogoType = {
  partnerLogo: {
    image: {
      asset: {
        url: string;
      };
      alt: string;
    };
    title: string;
    logoLink?: string;
  };
};

export type MultiTypeBlockType = {
  text: string;
  fontStyle: "serif" | "allCaps";
};

export type MediaType = {
  media: {
    mediaType: "image" | "video";
    image: {
      asset: {
        url: string;
        metadata: {
          lqip: string;
        };
      };
      alt: string;
    };
    video: {
      asset: {
        playbackId: string;
      };
    };
  };
};

export type WorkPageType = {
  seoTitle: string;
  seoDescription: string;
};

export type ProjectType = {
  slug: SlugType;
};
