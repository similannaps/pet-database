import { deletePet, PetType } from "../actions";
import Link from "next/link";
import AddPetForm from "./AddPetForm";

// เพิ่มคำสั่งนี้เพื่ออนุญาตให้ดึงข้อมูลแบบ Dynamic ได้[cite: 28]
export const instant = false;

export default async function PetPage() {
  // ดึงข้อมูลจาก API โดยลบ cache: no-store ออก[cite: 28]
  const res = await fetch("http://localhost:4000/pets");
  const pets: PetType[] = await res.json();

  return (
    <div className="flex flex-col items-center py-10 space-y-8">
      <AddPetForm />

      <div className="flex flex-col space-y-4 w-64">
        <h3 className="font-bold text-center">List Pet</h3>
        {pets.map((pet, index) => (
          <div
            key={pet.id}
            className="bg-blue-50 border p-2 flex justify-between rounded text-sm relative" 
          >
            <div>
              <p><b>Type:</b> {pet.group}</p>
              <p><b>Gender:</b> {pet.gender}</p>
              <p><b>Age:</b> {pet.age} years</p>
            </div>
            
            <div className="flex flex-col items-end justify-between">
              <div className="flex space-x-1">
                <form action={deletePet.bind(null, pet.id)}>
                  <button className="bg-red-600 text-white px-2 py-0.5 rounded text-xs font-bold">X</button>
                </form>
                <Link href={`/pet/${pet.id}`}>
                  <button className="bg-green-600 text-white px-2 py-0.5 rounded text-xs font-bold">edit</button>
                </Link>
              </div>
              <div className="font-bold text-gray-500 bg-amber-50 px-2 rounded border mt-4">
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="font-bold pt-10">Copyright reserved 2026</p>
    </div>
  );
}