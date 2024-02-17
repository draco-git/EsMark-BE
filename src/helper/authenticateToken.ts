import { Secret, verify } from "jsonwebtoken";

export const authenticateToken = (token: string) => {
  return verify(token, process.env.SECRET_TOKEN as Secret);
};
