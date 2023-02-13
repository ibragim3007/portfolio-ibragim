export const CountQuantityOfYears = (dateOfBirth: Date): number => {
  return new Date().getFullYear() - dateOfBirth.getFullYear();
};
