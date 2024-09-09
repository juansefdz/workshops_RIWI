"use client";
import Image from "next/image";
export default function Sidebar() {
  return (
    <div className="w-100 flex flex-col">
      <h2 className="text-2xl font-bold text-center p-4">
        App <span className="text-blue-700">TO-DO</span>
      </h2>
      <div className="flex flex-col justify-center items-center">
        <Image
          src="https://img.freepik.com/premium-photo/very-cute-looking-cartoon-character-with-glasses_865278-69807.jpg?size=626&ext=jpg"
          alt="to-do"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h4 className="mt-3 text-xl">Juansefdz</h4>
      </div>
      <div className="flex flex-col">
        <link href="/to-do/List-task">Lista de tareas </link>
        <link href="/to-do/task-done">Tareas Realizadas </link>
        <link href="/">Contador </link>
      </div>
    </div>
  );
}
