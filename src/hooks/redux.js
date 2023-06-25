import { useSelector } from 'react-redux';

export function useSession() {
  return useSelector((state) => state.auth);
}
