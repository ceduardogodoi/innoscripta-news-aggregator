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
import { SOURCES_VALUE_LABEL_MAP, SourceValue } from "@/constants";
import { storage } from "@/utils/storage";

export function FavoriteSources() {
  const [favoriteSources, setFavoriteSources] = useState<SourceValue[]>([]);

  useEffect(() => {
    const sources = storage.getFavoriteSources();
    setFavoriteSources(sources);
  }, []);

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
          <TableRow>
            {favoriteSources.map((favoriteSource) => (
              <>
                <TableCell key={favoriteSource}>
                  {SOURCES_VALUE_LABEL_MAP[favoriteSource]}
                </TableCell>
                <TableCell>
                  <Button
                    title={`Remove "${SOURCES_VALUE_LABEL_MAP[favoriteSource]}" from favorites`}
                    variant="ghost"
                  >
                    <TrashIcon className="text-red-500" />
                  </Button>
                </TableCell>
              </>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
