"use client";

import { type PropsWithChildren } from "react";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOURCES_VALUE_LABEL_MAP, SourceValue } from "@/constants";
import { useFavoriteSource } from "@/hooks/useFavoriteSource";

type SourceTitleProps = PropsWithChildren<{
  sourceValue: SourceValue;
}>;

export function SourceTitle({
  sourceValue,
  children,
}: Readonly<SourceTitleProps>) {
  const { state, handleToggleFavoriteSource } = useFavoriteSource(sourceValue);

  return (
    <div className="flex items-center gap-2">
      <h2 className="text-lg font-semibold text-red-700">
        {children ? children : SOURCES_VALUE_LABEL_MAP[sourceValue]}
      </h2>

      <Button
        variant="ghost"
        disabled={state.isLoading}
        className="disabled:text-gray-50-500 p-0 transition-all disabled:cursor-not-allowed data-[is-favorite=true]:scale-110 lg:hover:scale-110"
        title="Add to favorite sources"
        data-is-favorite={state.isFavorite}
        onClick={handleToggleFavoriteSource}
      >
        <StarIcon
          size={32}
          data-is-loading={state.isLoading}
          className={
            "text-yellow-400 data-[is-loading=true]:cursor-not-allowed data-[is-loading=true]:text-gray-500"
          }
          strokeWidth={0.5}
          fill={state.isFavorite ? "yellow" : "white"}
        />
      </Button>
    </div>
  );
}
