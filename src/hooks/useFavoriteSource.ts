import { SourceValue } from "@/constants";
import { storage } from "@/utils/storage";
import { useEffect, useState } from "react";

export function useFavoriteSource(sourceValue: SourceValue) {
  const [state, setState] = useState({
    isFavorite: false,
    isLoading: true,
  });

  useEffect(() => {
    const isSourceFavorite = storage.isFavoriteSource(sourceValue);

    setState({
      isLoading: false,
      isFavorite: isSourceFavorite,
    });
  }, []);

  function handleToggleFavoriteSource() {
    if (state.isFavorite) {
      storage.removeFavoriteSource(sourceValue);
    } else {
      storage.addFavoriteSource(sourceValue);
    }

    setState((currentState) => ({
      ...currentState,
      isFavorite: !currentState.isFavorite,
    }));
  }

  return {
    state,
    handleToggleFavoriteSource,
  };
}
