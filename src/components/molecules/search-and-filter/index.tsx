"use client";

import { useRef, type ComponentPropsWithoutRef } from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HomePageProps } from "@/app/page";
import { DATE_RANGES, SOURCES } from "@/constants";
import { SelectLabel } from "@radix-ui/react-select";

type SearchBarProps = ComponentPropsWithoutRef<typeof Input> & {
  dateRange: HomePageProps["searchParams"]["date-range"];
  source: HomePageProps["searchParams"]["source"];
};

export function SearchAndFilter({
  dateRange,
  source,
  ...props
}: SearchBarProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [miscSource, ...sources] = SOURCES;
  const allSources = SOURCES.at(-1);

  function handleFormSubmit() {
    formRef.current?.submit();
  }

  return (
    <form method="GET" ref={formRef} className="flex flex-col gap-2">
      <div className="flex flex-col">
        <label className="text-lg" htmlFor="search">
          Search
        </label>

        <div className="flex w-full items-center justify-stretch space-x-2">
          <Input
            id="search"
            name="q"
            type="search"
            placeholder="Search keywords or terms"
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
        </div>
      </div>

      <div className="flex w-full gap-4">
        <div className="flex flex-col">
          <label className="text-lg" htmlFor="date-range">
            Date range
          </label>
          <Select
            name="date-range"
            defaultValue={dateRange}
            onValueChange={handleFormSubmit}
          >
            <SelectTrigger className="w-36" id="date-range">
              <SelectValue placeholder="Any time" />
            </SelectTrigger>
            <SelectContent>
              {DATE_RANGES.map((dateRange) => (
                <SelectItem key={dateRange.value} value={dateRange.value}>
                  {dateRange.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col">
          <label className="text-lg" htmlFor="date-range">
            Source
          </label>
          <Select
            name="source"
            defaultValue={source}
            onValueChange={handleFormSubmit}
          >
            <SelectTrigger className="w-44" id="date-range">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              {allSources != null && (
                <>
                  <SelectGroup>All sources</SelectGroup>
                  <SelectItem value={allSources.value}>
                    {allSources.label}
                  </SelectItem>
                </>
              )}
              <SelectGroup>
                <SelectLabel>Newspapers</SelectLabel>
                {sources.map((source) => {
                  if (source.value === "all") return null;

                  return (
                    <SelectItem key={source.value} value={source.value}>
                      {source.label}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Others</SelectLabel>
                <SelectItem value={miscSource.value}>
                  {miscSource.label}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </form>
  );
}
