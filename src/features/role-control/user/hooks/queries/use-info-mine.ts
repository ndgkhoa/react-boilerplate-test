import { useQuery } from '@tanstack/react-query';

import { userApi } from '~/features/role-control/user/api/user-api';

export const useInfoMine = () => {
  return useQuery({
    queryKey: ['info-mine'],
    queryFn: () => userApi.getInfoMine(),
  });
};
