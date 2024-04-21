import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center bg-gray-900  text-white  h-screen ">
      <div className="text-center">
        <h1 className="text-2xl m-2">404 | Not Found </h1>

        <p className="text-slate-400 mb-2">
          No se ha podido encontrar el recurso
        </p>
        <Link className="border my-4 px-1 p-1 rounded-md" href="/">
          Retornar a Home
        </Link>
      </div>
    </div>
  );
}
