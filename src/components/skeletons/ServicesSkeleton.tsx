import { Skeleton } from "@/components/ui/skeleton";

export const ServicesSkeleton = () => {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header Skeleton */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-12 md:h-16 w-80 mx-auto" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
          <Skeleton className="h-6 w-96 mx-auto mb-4" />
          <Skeleton className="h-6 w-80 mx-auto" />
        </div>
        
        {/* Services Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 border rounded-2xl space-y-6">
              {/* Icon */}
              <Skeleton className="h-16 w-16 rounded-2xl" />
              
              {/* Title */}
              <Skeleton className="h-6 w-3/4" />
              
              {/* Description */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              
              {/* Features List */}
              <div className="space-y-3">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Skeleton className="h-2 w-2 rounded-full" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Skeleton */}
        <div className="text-center">
          <Skeleton className="h-12 w-80 mx-auto mb-4 rounded-2xl" />
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
      </div>
    </section>
  );
};