import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const HeroSkeleton: FC = () => {
  return (
    <div className="max-w-baseWidth w-full mx-auto p-2 xl:py-12">
      <Skeleton className="w-full h-12 xl:w-0 xl:h-0" />

      <Skeleton className="w-full h-[524px] xl:h-[500px] mt-4 xl:mt-0" />
    </div>
  );
};
