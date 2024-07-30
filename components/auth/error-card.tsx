import { CardWrapper } from "./card-wrapper";
import { FaExclamationTriangle } from "react-icons/fa";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Someting went wrong"
      backButtonLabel="Go back to login"
      backButtonHref="/login"
    >
      <div className="w-full flex items-center justify-center">
        <FaExclamationTriangle className="fill-destructive" />
      </div>
    </CardWrapper>
  );
};
