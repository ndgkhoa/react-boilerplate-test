import type { AxiosRequestConfig } from 'axios';
import { axiosClient } from '~/config/axios';
import { env } from '~/config/env';
import type { BaseFilterParams, BaseResponse } from '~/types';
import type { User } from '~/features/role-control/user/types/User';

const BASE_URL = `${env.VITE_BASE_API_URL}/user`;

export const userApi = {
  getUsers: (params?: BaseFilterParams, config?: AxiosRequestConfig) => {
    const url = `${BASE_URL}/get-list`;
    return axiosClient.get<BaseResponse<User[]>>(url, { params, ...config });
  },
  getInfoMine: () => {
    return axiosClient.get<{ User: User; Permissions: unknown[] }>(`${BASE_URL}/get-info-mine`);
  },
  create: (user: FormData) => {
    return axiosClient.post(`${BASE_URL}/create`, user);
  },
  update: (body: { id: string; formData: FormData }) => {
    return axiosClient.put(`${BASE_URL}/update/${body.id}`, body.formData);
  },
  delete: (userId: string) => {
    return axiosClient.delete(`${BASE_URL}/delete/${userId}`);
  },
  detail: (userId: string) => {
    return axiosClient.get(`${BASE_URL}/get-by-id/${userId}`);
  },
};
