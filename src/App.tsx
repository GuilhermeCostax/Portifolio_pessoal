import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Index from './pages/Index';

const Servicos = lazy(() => import('./pages/Servicos'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => (
  <ThemeProvider>
    <Toaster />
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Suspense fallback={<main className="min-h-screen grid place-items-center" aria-busy="true"><p role="status">Carregando página...</p></main>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </ThemeProvider>
);
export default App;
