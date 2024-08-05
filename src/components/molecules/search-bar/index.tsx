import type { ComponentPropsWithoutRef } from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SearchBarProps = ComponentPropsWithoutRef<typeof Input>;

export function SearchBar({ ...props }: SearchBarProps) {
  return (
    <form className="flex w-full items-center justify-stretch space-x-2">
      <Input
        name="q"
        type="search"
        placeholder="Search Keywords or terms"
        className="rounded-sm font-bold placeholder:font-light lg:p-6 lg:text-lg"
        {...props}
      />

      <Button
        className="size-12 border border-transparent lg:hover:bg-gray-200"
        variant="ghost"
        size="sm"
        title="Click search icon or press Enter/Return"
        type="submit"
      >
        <SearchIcon size={24} />
      </Button>
    </form>
  );
}
