"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const register = async (formData: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  return { success: "Success!" };
};
