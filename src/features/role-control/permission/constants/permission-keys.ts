export const permissionKeys = {
  all: ['permissions'],
  lists: () => [...permissionKeys.all, 'list'],
  list: (params?: unknown) => [...permissionKeys.lists(), params],
  details: () => [...permissionKeys.all, 'details'],
  detail: (id?: string) => [...permissionKeys.details(), id],
  create: () => [...permissionKeys.all, 'create'],
  update: () => [...permissionKeys.all, 'update'],
  delete: () => [...permissionKeys.all, 'delete'],
};
