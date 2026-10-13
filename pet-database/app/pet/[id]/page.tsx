import { PetType } from "../../actions";
import EditPetForm from "./EditPetForm";

// เพิ่มคำสั่งนี้เพื่ออนุญาตให้ดึงข้อมูลแบบ Dynamic ได้[cite: 29]
export const instant = false;

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // ลบ cache: no-store ออก[cite: 29]
  const res = await fetch(`http://localhost:4000/pets/${id}`);
  const pet: PetType = await res.json();

  return (
    <div className="flex items-center justify-center min-h-screen">
       <EditPetForm pet={pet} />
    </div>
  );
}