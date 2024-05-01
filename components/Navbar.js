import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
        <Link className="text-white font-bold " href={"/"}>
          Code
        </Link>
        <Link className="bg-white p-2" href={"/pages/add-topic"}>
          Add Topic
        </Link>
      </nav>
    </div>
  );
}
