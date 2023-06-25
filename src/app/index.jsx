import GlobalProvider from '../config/providers';
import AppLayout from './layouts/AppLayout';
import Navigation from './routes';

export default function App() {
  return (
    <GlobalProvider>
      <AppLayout>
        <Navigation />
      </AppLayout>
    </GlobalProvider>
  );
}
