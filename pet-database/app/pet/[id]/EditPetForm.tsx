"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { updatePet, PetType } from "../../actions";

function UpdateButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="bg-green-600 text-white px-4 py-1 rounded font-bold mt-2">
      {pending ? "Update..." : "Update"} 
    </button>
  );
}

export default function EditPetForm({ pet }: { pet: PetType }) {
  const updatePetWithId = updatePet.bind(null, pet.id);
  const [state, formAction] = useActionState(updatePetWithId, { errors: {} });

  return (
    <div className="w-64">
      <h3 className="font-bold mb-4 text-xl">Edit</h3>
      <form action={formAction} className="flex flex-col space-y-2">
        <input name="group" defaultValue={pet.group} className="border p-1 bg-white rounded text-sm" />
        {state?.errors?.group && <p className="text-red-600 text-xs">{state.errors.group[0]}</p>}

        <input name="gender" defaultValue={pet.gender} className="border p-1 bg-white rounded text-sm" />
        {state?.errors?.gender && <p className="text-red-600 text-xs">{state.errors.gender[0]}</p>}

        <input name="age" type="number" defaultValue={pet.age} className="border p-1 bg-white rounded text-sm" />
        {state?.errors?.age && <p className="text-red-600 text-xs">{state.errors.age[0]}</p>}

        <div className="pt-2">
          <UpdateButton />
        </div>
      </form>
    </div>
  );
}