import { ONE_HOUR_IN_SECONDS } from "@/constants";

// time-based cache revalidation
export const revalidate = ONE_HOUR_IN_SECONDS;

export default function MyFeed() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">My Feed</h1>

      <strong className="font-medium">
        Welcome back! Here will be shown your favorite sources
      </strong>

      <section>
        <h3>You favorite sources:</h3>
      </section>
    </div>
  );
}
