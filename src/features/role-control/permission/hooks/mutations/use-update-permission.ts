import { useIsMutating, useMutation, useQueryClient } from '@tanstack/react-query';

import { queryClient } from '~/config/query-client';

import { permissionApi } from '~/features/role-control/permission/api/permission-api';
import { permissionKeys } from '~/features/role-control/permission/constants/permission-keys';

type Variables = Parameters<typeof permissionApi.update>[0];
type Data = Awaited<ReturnType<typeof permissionApi.update>>;

queryClient.setMutationDefaults(permissionKeys.update(), {
  mutationFn: (vars: Variables) => permissionApi.update(vars),
});

export const useUpdatePermission = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<Data, Error, Variables>({
    mutationKey: permissionKeys.update(),
  });

  const isMutating = useIsMutating({ mutationKey: permissionKeys.update() });

  const invalidate = async () => {
    await queryClient.invalidateQueries({ queryKey: permissionKeys.all });
  };

  return { ...mutation, invalidate, isPending: mutation.isPending || Boolean(isMutating) };
};
