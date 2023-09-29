import React from "react";
import { fetchAgents } from "@/utils";
import AutoResponse from "@/components/AutoResponse";
export default async function Home() {
  const allCars = await fetchAgents();

  return (
    <div>
      <AutoResponse />
    </div>
  );
}
