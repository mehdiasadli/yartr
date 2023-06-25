import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/features/auth.slice';
import { useMutate } from './query';

import AuthService from '../services/public.service';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const dispatch = useDispatch();

  const { mutate, isLoading } = useMutate(AuthService.signIn, {
    onSuccess: ({ data }) => {
      const payload = {
        user: data,
        token: data?.token,
        role: data?.role,
      };

      dispatch(login(payload));
    },
  });

  return { login: mutate, isLoading };
}

export function useRegister() {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutate(AuthService.signUp, {
    onSuccess: () => {
      navigate('/');
    },
  });

  return { signUp: mutate, isLoading };
}

export function useLogout() {
  const dispatch = useDispatch();

  function logOut() {
    dispatch(logout());
  }

  return { logOut };
}
