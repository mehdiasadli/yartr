import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import MantineProvider from './mantine';
import ReactQueryProvider from './reactQuery';
import ReduxProvider from './redux';

export default function GlobalProvider({ children }) {
  return (
    <BrowserRouter>
      <ReduxProvider>
        <ReactQueryProvider>
          <Toaster />
          <MantineProvider>{children}</MantineProvider>
        </ReactQueryProvider>
      </ReduxProvider>
    </BrowserRouter>
  );
}
