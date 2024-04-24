import { Meta, MetaProvider, Title } from '@solidjs/meta';
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
          <Meta name='description' content='Плам Плам' />
          <Meta
            name='viewport'
            content='width=device-width, initial-scale=1 user-scalable=no'
          />
          <Meta
            property='og:image'
            content='https://plumplum.co/images/og-image.jpg'
          />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}>
      <FileRoutes />
    </Router>
  );
}
