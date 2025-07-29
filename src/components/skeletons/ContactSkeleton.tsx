import { Skeleton } from "@/components/ui/skeleton";

export const ContactSkeleton = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <Skeleton className="h-12 sm:h-16 w-1/3 mx-auto mb-6 sm:mb-8" />
        <Skeleton className="h-4 w-2/3 mx-auto mb-8 sm:mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-6 border rounded-lg space-y-6">
            <div className="flex items-center gap-4">
              <Skeleton className="h-6 w-6" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-4 w-48" />
            <div className="space-y-4">
              <Skeleton className="h-6 w-32" />
              <div className="flex flex-col sm:flex-row gap-3">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          </div>
          <div className="p-6 border rounded-lg space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};