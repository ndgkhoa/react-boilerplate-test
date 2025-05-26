import type { AxiosRequestConfig } from 'axios';

import { axiosClient } from '~/config/axios';
import { env } from '~/config/env';
import type { BaseResponse } from '~/types';
import type { User, UserSearchParams } from '~/features/role-control/user/types/User';

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
  create: (formData: FormData) => {
    return axiosClient.post(`${BASE_URL}/create`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  update: ({ id, formData }: { id: string; formData: FormData }) => {
    return axiosClient.patch(`${BASE_URL}/update/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  delete: (id: User['Id']) => {
    return axiosClient.delete(`${BASE_URL}/delete/${id}`);
  },
};
