import { useIsMutating, useMutation, useQueryClient } from '@tanstack/react-query';

import { queryClient } from '~/config/query-client';
import { permissionApi } from '~/features/role-control/permission/api/permission-api';
import { permissionKeys } from '~/features/role-control/permission/constants/permission-keys';

type Variables = Parameters<typeof permissionApi.delete>[0];
type Data = Awaited<ReturnType<typeof permissionApi.delete>>;

queryClient.setMutationDefaults(permissionKeys.delete(), {
  mutationFn: (vars: Variables) => permissionApi.delete(vars),
});

export const useDeletePermission = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<Data, Error, Variables>({
    mutationKey: permissionKeys.delete(),
  });

  const isMutating = useIsMutating({ mutationKey: permissionKeys.delete() });

  const invalidate = async () => {
    await queryClient.invalidateQueries({ queryKey: permissionKeys.all });
  };

  return { ...mutation, invalidate, isPending: mutation.isPending || Boolean(isMutating) };
};
