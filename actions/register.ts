"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { getUserByEmail } from "@/data/user";

export const register = async (formData: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { email, password, name } = validatedFields.data;

  const hashPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email has already been used!" };
  }

  await prisma.user.create({
    data: {
      email,
      password: hashPassword,
      name,
    },
  });

  return { success: "User has been successfully created!" };
};
