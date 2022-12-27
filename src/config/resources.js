/*
 * Configuration file for the links.
 */

const resources = {
  website: {
    name: "Website",
    url: "https://www.robinkloeckner.com/",
    icon: "IconGlobe",
    img: "img/website.jpg",
    enableHeaderIcon: true,
    enableCard: {
      textOnly: false
    }
  },
  github: {
    name: "GitHub",
    url: "https://github.com/robinkloeckner",
    icon: "IconGitHub",
    enableHeaderIcon: true,
    enableCard: {
      textOnly: false
    }
  },
  setup: {
    name: "Setup",
    url: "#",
    icon: "IconGlobe",
    enableHeaderIcon: false,
    enableCard: {
      textOnly: true
    }
  },
  blog: {
    name: "Blog",
    url: "#",
    icon: "IconGlobe",
    enableHeaderIcon: true,
    enableCard: false
  }
};

export default resources;