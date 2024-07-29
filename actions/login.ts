"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (formData: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  return { success: "Success!" };
};
