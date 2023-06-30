import { useParams } from "react-router-dom";

export const ContactDetails = () => {
  let params = useParams();
  let userId = params.userId;
  if (userId == 1) {
    return <h1>His name is Mahmoud</h1>;
  }
  if (userId == 2) {
    return <h1>His name is Shaheer</h1>;
  }
  if (userId == 3) {
    return <h1>His name is Ryan</h1>;
  } else {
    return <h1>Here are details about User {userId}</h1>;
  }
};
