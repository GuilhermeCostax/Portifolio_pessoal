import { useEffect } from 'react';
import { getPageMetadata, siteUrl, socialImage } from '@/data/seo';

export function usePageMetadata(pathname: string) {
  useEffect(() => {
    const metadata = getPageMetadata(pathname);
    const url = `${siteUrl}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;
    document.title = metadata.title;
    const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };
    setMeta('name', 'description', metadata.description);
    setMeta('name', 'robots', metadata.indexable ? 'index,follow' : 'noindex,follow');
    for (const prefix of ['og', 'twitter']) {
      const attribute = prefix === 'og' ? 'property' : 'name';
      setMeta(attribute, `${prefix}:title`, metadata.title);
      setMeta(attribute, `${prefix}:description`, metadata.description);
      setMeta(attribute, `${prefix}:image`, socialImage);
    }
    setMeta('property', 'og:url', url);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!metadata.indexable) {
      canonical?.remove();
    } else {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = url;
    }
  }, [pathname]);
}
