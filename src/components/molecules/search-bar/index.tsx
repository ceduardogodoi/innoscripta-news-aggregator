import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <form className="flex w-full items-center justify-stretch space-x-2">
      <Input
        name="q"
        type="search"
        placeholder="Keyword or term"
        className="rounded-sm font-bold placeholder:font-light lg:p-6 lg:text-lg"
      />

      <Button
        className="size-12"
        variant="ghost"
        size="sm"
        title="Click search icon or press Enter/Return"
        type="submit"
      >
        <SearchIcon size={32} />
      </Button>
    </form>
  );
}
