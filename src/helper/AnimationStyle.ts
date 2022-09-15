export const containerVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 3.5,
      duration: 1.2,
    },
  },
  hoverDefault: {
    scale: 1.05,
    transition: { duration: 0.4 },
  },
  tapDefault: {
    scale: 1,
  },
};
