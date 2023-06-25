import { useMutation, useQuery } from 'react-query';

export function useFetch(key, fn, options) {
  return useQuery(key, fn, options);
}

export function useMutate(fn, options) {
  return useMutation(fn, options);
}
