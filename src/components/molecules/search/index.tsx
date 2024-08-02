import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

export function SearchBar() {
  return (
    <Button variant="ghost" size="fit">
      <SearchIcon size={24} />
    </Button>
  );
}
