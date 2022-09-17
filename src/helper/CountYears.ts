export const CountQuantityOfYears = (dateOfBirth: Date): number => {
  console.log(dateOfBirth);
  return new Date().getFullYear() - dateOfBirth.getFullYear();
};
