import { Skeleton } from "@/components/ui/skeleton";

export const AboutSkeleton = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <Skeleton className="h-12 sm:h-16 w-1/3 mx-auto mb-12 sm:mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center max-w-5xl mx-auto">
          <div className="flex justify-center md:justify-end order-1 md:order-none">
            <Skeleton className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full" />
          </div>
          <div className="space-y-6 sm:space-y-8 order-2 md:order-none">
            <div className="space-y-4 sm:space-y-6">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <Skeleton className="h-12 w-48" />
          </div>
        </div>
      </div>
    </section>
  );
};