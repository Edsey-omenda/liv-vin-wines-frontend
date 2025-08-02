import React from "react";
import { useRouteUtils } from "./useRouteUtils";

// Hook for managing page metadata
export const usePageMeta = () => {
  const { currentRoute } = useRouteUtils();

  React.useEffect(() => {
    if (currentRoute?.meta?.title) {
      document.title = currentRoute.meta.title;
    }

    if (currentRoute?.meta?.description) {
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", currentRoute.meta.description);
      }
    }
  }, [currentRoute]);

  return {
    title: currentRoute?.meta?.title,
    description: currentRoute?.meta?.description,
    breadcrumb: currentRoute?.meta?.breadcrumb,
  };
};
