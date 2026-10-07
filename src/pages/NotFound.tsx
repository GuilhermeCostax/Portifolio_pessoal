import { Link } from 'react-router-dom';
import SiteLayout from '@/components/layout/SiteLayout';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return <SiteLayout>
    <section className="min-h-[80vh] grid place-items-center px-6 pt-32 text-center">
      <div>
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Página não encontrada.</p>
        <Button asChild><Link to="/">Voltar ao início</Link></Button>
      </div>
    </section>
  </SiteLayout>;
}
