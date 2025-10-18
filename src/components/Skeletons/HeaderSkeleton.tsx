import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const HeaderSkeleton: FC = () => {
  return (
    <div className="max-w-baseWidth w-full mx-auto p-2 xl:pt-12">
      <Skeleton className="h-10 w-full" />
    </div>
  );
};
