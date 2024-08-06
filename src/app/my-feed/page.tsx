import { FavoriteSources } from "@/components/organisms/favorite-sources";

export default function MyFeed() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">My Feed</h1>

      <strong className="font-medium">
        Welcome! Here you can manage your feed and other settings.
      </strong>

      <FavoriteSources />
    </div>
  );
}
