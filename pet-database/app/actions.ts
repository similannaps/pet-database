"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// 1. Zod Verification[cite: 14]
const petSchema = z.object({
  group: z.string().min(3, "minimum 3 character").max(10),
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: 'Invalid option: expected one of "male"|"female"' }),
  }),
  age: z.coerce.number().min(1).max(10, "Too big: expected number to be <=10"),
});

// Pet Type[cite: 14]
export type PetType = {
  group: string;
  gender: string;
  age: number;
  id: string;
};

const API_URL = "http://localhost:4000/pets";

export async function addPet(prevState: any, formData: FormData) {
  const data = {
    group: formData.get("group"),
    gender: formData.get("gender"),
    age: formData.get("age"),
  };

  const parsed = petSchema.safeParse(data);

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  // Generate ID[cite: 11]
  const newPet = { ...parsed.data, id: Math.random().toString(36).substring(2, 9) };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPet),
  });

  revalidatePath("/pet");
  return { success: true };
}

export async function updatePet(id: string, prevState: any, formData: FormData) {
  const data = {
    group: formData.get("group"),
    gender: formData.get("gender"),
    age: formData.get("age"),
  };

  const parsed = petSchema.safeParse(data);

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" }, //[cite: 14]
    body: JSON.stringify(parsed.data),
  });

  revalidatePath("/pet");
  redirect("/pet"); //[cite: 10]
}

export async function deletePet(id: string) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  revalidatePath("/pet");
}