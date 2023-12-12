export const errorInputStyles = (errorMessage) => {
  return errorMessage
    ? "border-fontError focus:outline-none focus:border-fontError"
    : " border-cardGray focus:outline-none focus:border-primary";
};
