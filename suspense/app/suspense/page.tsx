import { Suspense } from "react";
import PostFeed from "@/Components/Suspense/PostFeed";
import Weather from "@/Components/Suspense/Weather";

export default function Posts() {
  return (
    <section className="flex flex-col gap-4 justify-center items-center w-full h-screen">
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  );
}
