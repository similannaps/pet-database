"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { addPet } from "../actions";
import Image from "next/image";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="bg-green-600 text-white px-4 py-1 rounded font-bold">
      {pending ? "Add..." : "Add"} 
    </button>
  );
}

export default function AddPetForm() {
  const [state, formAction] = useActionState(addPet, { errors: {} });

  return (
    <div className="bg-amber-50 border p-4 rounded w-64">
      <h3 className="font-bold mb-4">Add Pet</h3>
      <form action={formAction} className="flex flex-col space-y-2 relative">
        
        <input name="group" placeholder="group" className="border p-1 bg-gray-50 rounded text-sm" />
        {state?.errors?.group && <p className="text-red-600 text-xs">{state.errors.group[0]}</p>}

        <input name="gender" placeholder="gender" className="border p-1 bg-gray-50 rounded text-sm" />
        {state?.errors?.gender && <p className="text-red-600 text-xs">{state.errors.gender[0]}</p>}

        <input name="age" placeholder="age" className="border p-1 bg-gray-50 rounded text-sm" />
        {state?.errors?.age && <p className="text-red-600 text-xs">{state.errors.age[0]}</p>}

        <div className="flex justify-between items-end pt-2">
          <SubmitButton />
          <img src="/pet.jpg" alt="pet" className="w-8 h-8 rounded-full object-cover" /> 
        </div>
      </form>
    </div>
  );
}