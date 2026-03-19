// Open Graph Configuration
export const OG_DEFAULTS = {
  siteName: "Login System",
  defaultDescription: "Secure login and chatbot system with authentication",
  defaultImage: "/sophoschat-logo.png", // Image in public folder
  imageWidth: 1200,
  imageHeight: 630,
  twitterHandle: "@yourhandle", // Update with your Twitter handle
  locale: "en_US",
};

// Helper to get absolute image URL for social media crawlers
export const getAbsoluteImageUrl = (imagePath = OG_DEFAULTS.defaultImage) => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // For client-side: use window.location.origin
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${imagePath}`;
  }
  
  // For server-side or crawlers: construct from environment or use current protocol
  const baseUrl = import.meta.env.VITE_APP_URL || "http://localhost:5174";
  return `${baseUrl}${imagePath}`;
};

// Page-specific metadata templates
export const pageMetadata = {
  home: {
    title: "Welcome to Login System",
    description: "Secure authentication and AI chatbot platform. Login or register to get started.",
    type: "website",
  },
  login: {
    title: "Login - Login System",
    description: "Sign in to your account to access our secure chatbot platform.",
    type: "website",
  },
  register: {
    title: "Register - Login System",
    description: "Create a new account and join our community. Quick, secure signup.",
    type: "website",
  },
  chatbot: {
    title: "Chatbot - Login System",
    description: "Chat with our AI assistant. Get answers and support powered by intelligent conversation.",
    type: "website",
  },
};

// Helper function to build complete OG meta object
export const buildOGMeta = (pageKey, customData = {}) => {
  const pageData = pageMetadata[pageKey] || pageMetadata.home;
  
  // Get base URL dynamically at runtime
  const baseUrl = typeof window !== 'undefined' 
    ? window.location.origin 
    : import.meta.env.VITE_APP_URL || "http://localhost:5174";
  
  const imagePath = customData.image || OG_DEFAULTS.defaultImage;
  
  // Always create absolute URL for image
  const absoluteImage = imagePath.startsWith('http') 
    ? imagePath 
    : `${baseUrl}${imagePath}`;

  return {
    title: customData.title || pageData.title,
    description: customData.description || pageData.description,
    type: customData.type || pageData.type,
    image: absoluteImage,
    imageWidth: customData.imageWidth || OG_DEFAULTS.imageWidth,
    imageHeight: customData.imageHeight || OG_DEFAULTS.imageHeight,
    url: customData.url || baseUrl,
    siteName: OG_DEFAULTS.siteName,
    locale: OG_DEFAULTS.locale,
  };
};
