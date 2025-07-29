import {
  HeroSkeleton,
  AboutSkeleton,
  ProjectsSkeleton,
  SkillsSkeleton,
  ServicesSkeleton,
  ContactSkeleton
} from '@/components/skeletons';

interface SkeletonLoaderProps {
  type: 'hero' | 'about' | 'projects' | 'skills' | 'services' | 'contact';
}

const SkeletonLoader = ({ type }: SkeletonLoaderProps) => {
  const skeletonComponents = {
    hero: HeroSkeleton,
    about: AboutSkeleton,
    projects: ProjectsSkeleton,
    skills: SkillsSkeleton,
    services: ServicesSkeleton,
    contact: ContactSkeleton,
  };

  const SkeletonComponent = skeletonComponents[type];
  
  return SkeletonComponent ? <SkeletonComponent /> : null;
};

export default SkeletonLoader;