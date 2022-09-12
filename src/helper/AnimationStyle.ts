export const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 3.5,
      duration: 1.2,
    },
  },
};
