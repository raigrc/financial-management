import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/lib/prisma";
import { getVerificationTokenByEmail } from "../data/verification-token";

export const generateVerificationToken = async (identifier: string) => {
  const token = uuidv4();

  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(identifier);

  if (existingToken) {
    await prisma.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      identifier,
      token,
      expires,
    },
  });

  return verificationToken;
};
