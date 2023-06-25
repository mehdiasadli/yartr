import { Route, Routes } from 'react-router-dom';
import { HomePage, AuthPage } from '../../pages';

export default function Navigation() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/auth' element={<AuthPage />} />
    </Routes>
  );
}
