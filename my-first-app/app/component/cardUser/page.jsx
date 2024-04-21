import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardUser({ user }) {
  return (
    <>
      <div className="flex flex-col justify-center justify-items-center mx-5 my-5  p-5 bg-gray-700">
        <h1 className="text-xl text-sky-400">
          {user.first_name} {user.last_name}
        </h1>

        <Link href={`/component/${user.id}`}>
          <Image
            src={user.avatar}
            width={250}
            height={250}
            alt="picture of the author"
            quality={80}
          />
        </Link>

        <h5 className="text-rose-600 ">{user.email}</h5>
      </div>
      ;
    </>
  );
}
