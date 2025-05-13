import { memo } from 'react';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Flex, Layout } from 'antd';

import { useAuthStore } from '~/features/auth/hooks/use-auth-store';
import { AuthProviders } from '~/features/auth/types/AuthProviders';

export const Navbar = memo(() => {
  const authState = useAuthStore((state) => state.auth);
  const logout = useAuthStore((state) => state.logout);

  const onLogoutClick = () => {
    if (authState?.provider === AuthProviders.Local) {
      logout();
    }
  };

  const items: MenuProps['items'] = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Đăng xuất',
      onClick: onLogoutClick,
    },
  ];

  return (
    <Layout.Header className="bg-primary-default flex items-center justify-between border-l border-white px-4">
      <Flex className="w-full" align="center" justify="end" gap="small">
        <Dropdown menu={{ items }} trigger={['click']}>
          <Flex align="center" gap="small">
            <span className="text-white">{'hehehe'}</span>
            <Avatar className="bg-[#87d068]" icon={<UserOutlined />} />
          </Flex>
        </Dropdown>
      </Flex>
    </Layout.Header>
  );
});
