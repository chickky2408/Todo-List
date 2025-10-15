This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.










# 📝 Todo List Application

Next.js Todo List Application with localStorage persistence, dark mode, and filtering capabilities.

## 🚀 Demo

- **Live Demo**: https://todolist-ecru-theta.vercel.app
- **GitHub Repository**: https://github.com/chickky2408/Todo-List

## ✨ Features

### ฟีเจอร์หลัก (Required)
- ✅ **เพิ่มงาน (Add Todo)**: ช่อง input และปุ่ม Add เพื่อเพิ่มรายการใหม่
- ✅ **แสดงรายการงาน (List Todos)**: แสดงรายการทั้งหมดพร้อมชื่อและปุ่มลบ
- ✅ **ลบงาน (Delete Todo)**: ลบรายการออกจาก list
- ✅ **เปลี่ยนสถานะงาน (Toggle Complete)**: คลิกที่รายการเพื่อสลับสถานะเสร็จ/ยังไม่เสร็จ
- ✅ **บันทึกข้อมูลลง localStorage**: ใช้ useEffect เพื่อเก็บข้อมูลถาวร

### ฟีเจอร์เสริม (Bonus)
- ✨ **Filter System**: กรองรายการเป็น "ทั้งหมด / เสร็จแล้ว / ยังไม่เสร็จ"
- 🎨 **UI สวยงาม & Responsive**: ออกแบบด้วย Tailwind CSS พร้อม animations
- 📅 **แสดงวันที่สร้าง**: บันทึกและแสดงวันเวลาที่สร้างแต่ละงาน
- 🌙 **Dark Mode**: สลับระหว่าง Light/Dark theme พร้อมบันทึกใน localStorage
- 📊 **Statistics Dashboard**: แสดงสถิติงานทั้งหมด, เสร็จแล้ว, และค้างอยู่

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Data Persistence**: localStorage
- **Deployment**: Vercel

## 📦 Installation

### 1. Clone the repository
```bash
git clone [your-github-url]
cd todo-list-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push โค้ดขึ้น GitHub
2. เข้า [Vercel](https://vercel.com)
3. Import repository
4. คลิก Deploy

หรือใช้ Vercel CLI:
```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
todo-list-app/
├── app/
│   ├── page.js          # Main Todo component
│   ├── layout.js        # Root layout
│   └── globals.css      # Global styles
├── public/              # Static assets
├── package.json
└── README.md
```

## 🎯 Key Features Implementation

### State Management
- ใช้ `useState` จัดการ todos, input, filter, และ dark mode
- ใช้ `useEffect` สำหรับ localStorage sync

### localStorage Persistence
```javascript
// โหลดข้อมูลเมื่อเริ่มต้น
useEffect(() => {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) setTodos(JSON.parse(savedTodos));
}, []);

// บันทึกทุกครั้งที่ todos เปลี่ยน
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
```

### Filter System
- Filter: "All", "Done", "Not Done"
- ใช้ `Array.filter()` กรองข้อมูลตาม state

## 🎨 UI/UX Highlights

- 🎭 Dark mode toggle พร้อมบันทึกค่า
- 📱 Responsive design สำหรับทุกขนาดหน้าจอ
- ✨ Smooth animations และ transitions
- 🎯 Hover effects และ active states
- 📊 Real-time statistics
- ⌨️ Keyboard support (Enter to add)

## 🔄 สิ่งที่อยากปรับปรุงเพิ่มเติม

- [ ] เพิ่ม Edit Todo feature
- [ ] Drag & drop เพื่อเรียงลำดับ
- [ ] Categories/Tags สำหรับแยกประเภทงาน
- [ ] Due date และ reminder system
- [ ] Search/Search functionality
- [ ] Export/Import เป็น JSON
- [ ] Animation เมื่อเพิ่ม/ลบ items
- [ ] Undo/Redo functionality
- [ ] Priority levels (High/Medium/Low)
- [ ] Backend integration (API/Database)

## 👨‍💻 Author

**[Your Name]**
- GitHub: [@yourusername]
- Email: your.email@example.com

## 📄 License

This project is open source and available under the MIT License.

---

Made with ❤️ for Frontend Intern Application
