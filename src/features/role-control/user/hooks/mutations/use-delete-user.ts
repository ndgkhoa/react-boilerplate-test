// import { useIsMutating, useMutation, useQueryClient } from '@tanstack/react-query';

// import { queryClient } from '~/config/query-client';

// import { standardFlightHoursApi } from '~/features/catalog/standard-flight-hours/api/standard-flight-hours-api';
// import { standardFlightHoursKeys } from '~/features/catalog/standard-flight-hours/constants/standard-flight-hours-keys';

// type Variables = Parameters<typeof standardFlightHoursApi.delete>[0];
// type Data = Awaited<ReturnType<typeof standardFlightHoursApi.delete>>;

// queryClient.setMutationDefaults(standardFlightHoursKeys.delete(), {
//   mutationFn: (vars: Variables) => standardFlightHoursApi.delete(vars),
// });

// export const useDeleteStandardFlightHours = () => {
//   const queryClient = useQueryClient();
//   const mutation = useMutation<Data, Error, Variables>({
//     mutationKey: standardFlightHoursKeys.delete(),
//   });

//   const isMutating = useIsMutating({ mutationKey: standardFlightHoursKeys.delete() });

//   const invalidate = async () => {
//     await queryClient.invalidateQueries({ queryKey: standardFlightHoursKeys.all });
//   };

//   return { ...mutation, invalidate, isPending: mutation.isPending || Boolean(isMutating) };
// };
