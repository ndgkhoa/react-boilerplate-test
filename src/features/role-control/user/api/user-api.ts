import type { AxiosRequestConfig } from 'axios';

import { axiosClient } from '~/config/axios';
import { env } from '~/config/env';
import type { BaseResponse } from '~/types';
import type {
  CreateUserBody,
  UpdateUserBody,
  User,
  UserSearchParams,
} from '~/features/role-control/user/types/User';

const BASE_URL = `${env.VITE_BASE_API_URL}/user`;

export const userApi = {
  getAll: (params?: UserSearchParams, config?: AxiosRequestConfig) => {
    const url = `${BASE_URL}/get-list`;
    return axiosClient.get<BaseResponse<User[]>>(url, { params, ...config });
  },
  getOne: (id: User['Id'], config?: AxiosRequestConfig) => {
    return axiosClient.get(`${BASE_URL}/get-by-id/${id}`, { ...config });
  },
  getInfoMine: () => {
    return axiosClient.get<{ User: User; Permissions: unknown[] }>(`${BASE_URL}/get-info-mine`);
  },
  create: (body: CreateUserBody) => {
    return axiosClient.post(`${BASE_URL}/create`, body);
  },
  update: ({ Id, ...body }: UpdateUserBody) => {
    return axiosClient.put(`${BASE_URL}/update/${Id}`, body);
  },
  delete: (id: User['Id']) => {
    return axiosClient.delete(`${BASE_URL}/delete/${id}`);
  },
};
