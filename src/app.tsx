import { MetaProvider, Title } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import './app.css';
import { addToCart } from '~/lib/cart';

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Пламбир</Title>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}>
      <FileRoutes />
    </Router>
  );
}
