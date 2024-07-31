import { prisma } from "@/lib/prisma";

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findUnique({
      where: {
        token,
      },
    });

    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenByEmail = async (identifier: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        identifier,
      },
    });

    return verificationToken;
  } catch {
    return null;
  }
};
