# Pet Database Web 🐾

เว็บแอปพลิเคชันสำหรับการจัดการข้อมูลสัตว์เลี้ยง พัฒนาขึ้นสำหรับวิชา SYS-103 Web Architecture โปรเจกต์นี้แสดงให้เห็นถึงการประยุกต์ใช้เทคโนโลยีการพัฒนาเว็บยุคใหม่ ทั้งระบบจัดการฟอร์ม การเชื่อมต่อ REST API และการตรวจสอบความถูกต้องของข้อมูล

## 🚀 ฟีเจอร์หลักของระบบ

- **ระบบ CRUD ครบวงจร**: สามารถเพิ่ม (Create), แสดงผล (Read), แก้ไข (Update) และลบ (Delete) ข้อมูลสัตว์เลี้ยงได้
- **Server Actions**: ใช้ Next.js Server Actions ในการจัดการข้อมูลฝั่งเซิร์ฟเวอร์โดยไม่ต้องสร้าง API Routes แยก
- **การตรวจสอบข้อมูล (Validation)**: ใช้ `Zod` ในการกำหนดเงื่อนไขข้อมูล เช่น ความยาวตัวอักษร, ประเภทเพศที่กำหนด (`male` / `female`), และช่วงอายุที่ถูกต้อง
- **UI ดีไซน์ตรงตามโจทย์**: ตกแต่งด้วย `Tailwind CSS` ตามข้อกำหนดและโทนสีของสถาปัตยกรรมระบบ
- **การแจ้งเตือนข้อผิดพลาดแบบเรียลไทม์**: แสดงข้อความแจ้งเตือนสีแดงใต้ฟอร์มทันทีเมื่อข้อมูลไม่ผ่านเงื่อนไข
- **Dynamic Routing**: หน้าแก้ไขข้อมูลเฉพาะรายการ (`/pet/[id]`)

## 🛠️ เทคโนโลยีที่ใช้

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Mock Backend**: [JSON Server](https://github.com/typicode/json-server)

## 📦 วิธีการติดตั้งและรันโปรเจกต์ในเครื่อง

ทำตามขั้นตอนด้านล่างนี้เพื่อรันโปรเจกต์ในเครื่องของคุณ:

### 1. โคลนรีพอนซิออรีลงมา
```bash
git clone https://github.com/similannaps/pet-database.git
cd pet-database
```

### 2. ติดตั้งแพ็กเกจที่จำเป็น
```bash
npm install
npm install zod
```

### 3. รัน JSON REST API Server
เปิดเทอร์มินัลหน้าต่างแรก แล้วรันคำสั่งจำลองเซิร์ฟเวอร์ (จะรันอยู่ที่พอร์ต 4000):
```bash
npx json-server --watch pet.json --port 4000
```

### 4. รันเว็บแอปพลิเคชัน Next.js
เปิดเทอร์มินัล **แท็บใหม่** แล้วรันคำสั่ง:
```bash
npm run dev
```
จากนั้นเปิดเบราว์เซอร์ไปที่ [http://localhost:3000/pet](http://localhost:3000/pet) เพื่อใช้งานเว็บไซต์ครับ

## 👤 ผู้จัดทำ
**สิมิลันนา พาล์เมียรี่ ชไวเกิร์ต (Similanna Palmieri Schvaigert)**
- สาขาวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ (AISE) วิทยาลัยการคอมพิวเตอร์ มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต
- GitHub: [@similannaps](https://github.com/similannaps)
