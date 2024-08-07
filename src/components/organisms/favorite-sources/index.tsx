"use client";

import { TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { SOURCES_VALUE_LABEL_MAP, SourceValue } from "@/constants";
import { storage } from "@/utils/storage";

type FavoriteSourcesState = {
  sources: SourceValue[];
  isLoading: boolean;
};

export function FavoriteSources() {
  const [favoriteSources, setFavoriteSources] = useState<FavoriteSourcesState>({
    sources: [],
    isLoading: true,
  });

  useEffect(() => {
    const sources = storage.getFavoriteSources();
    setFavoriteSources((state) => ({
      ...state,
      sources,
      isLoading: false,
    }));
  }, []);

  function handleRemoveFromFavorites(source: SourceValue) {
    setFavoriteSources((state) => ({ ...state, isLoading: true }));

    storage.removeFavoriteSource(source);

    setFavoriteSources((state) => {
      const updatedSources = state.sources.filter(
        (stateSource) => stateSource !== source,
      );
      return {
        ...state,
        sources: updatedSources,
        isLoading: false,
      };
    });
  }

  return (
    <section>
      <Table>
        <TableCaption>A list of favorite sources</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Source</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {favoriteSources.isLoading && (
            <TableRow>
              <TableCell className="w-[70%]">
                <Skeleton className="h-10 w-full bg-gray-200" />
              </TableCell>
              <TableCell className="w-[30%]">
                <Skeleton className="h-10 w-full bg-gray-200" />
              </TableCell>
            </TableRow>
          )}

          {!favoriteSources.isLoading &&
            favoriteSources.sources.map((favoriteSource) => (
              <TableRow>
                <TableCell className="w-[70%]" key={favoriteSource}>
                  {SOURCES_VALUE_LABEL_MAP[favoriteSource]}
                </TableCell>
                <TableCell className="w-[30%]">
                  <Button
                    title={`Remove "${SOURCES_VALUE_LABEL_MAP[favoriteSource]}" from favorites`}
                    variant="ghost"
                    onClick={() => handleRemoveFromFavorites(favoriteSource)}
                  >
                    <TrashIcon className="text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </section>
  );
}
