import { Skeleton } from "@/components/ui/skeleton";

export const HeroSkeleton = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <Skeleton className="h-12 sm:h-16 md:h-20 w-3/4 mx-auto mb-4 sm:mb-6" />
        <Skeleton className="h-6 sm:h-8 w-1/2 mx-auto mb-6 sm:mb-8" />
        <Skeleton className="h-4 w-2/3 mx-auto mb-2" />
        <Skeleton className="h-4 w-1/2 mx-auto mb-8 sm:mb-12" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-12 w-32" />
        </div>
        <div className="flex justify-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
      </div>
    </section>
  );
};