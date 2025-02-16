"use client";

import { useParams } from "next/navigation";

function page() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="mb-4 font-bold text-xl">page</h1>
    </div>
  );
}
export default page;
