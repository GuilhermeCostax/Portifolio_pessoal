import {
  HeroSkeleton,
  AboutSkeleton,
  ProjectsSkeleton,
  SkillsSkeleton,
  ContactSkeleton
} from '@/components/skeletons';

interface SkeletonLoaderProps {
  type: 'hero' | 'about' | 'projects' | 'skills' | 'contact';
}

const SkeletonLoader = ({ type }: SkeletonLoaderProps) => {
  const skeletonComponents = {
    hero: HeroSkeleton,
    about: AboutSkeleton,
    projects: ProjectsSkeleton,
    skills: SkillsSkeleton,
    contact: ContactSkeleton,
  };

  const SkeletonComponent = skeletonComponents[type];
  
  return SkeletonComponent ? <SkeletonComponent /> : null;
};

export default SkeletonLoader;