import { memo, useState } from 'react';
import { HomeOutlined, TeamOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Layout, Flex } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import LogoVietnamAirlinesFull from '~/assets/images/logo-vietnam-airlines-full.png';
import logoViags from '~/assets/images/logo-viags.png';

const items: MenuProps['items'] = [
  { key: '/', icon: <HomeOutlined />, label: 'Trang chủ' },
  {
    key: '/role-control',
    icon: <TeamOutlined />,
    label: 'Phân quyền',
    children: [
      { key: '/role-control/activities', label: 'Quyền' },
      { key: '/role-control/roles', label: 'Nhóm quyền' },
      { key: '/role-control/users', label: 'Người dùng' },
    ],
  },
];

export const Sidebar = memo(() => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const parentKey = `/${pathname.split('/')[1]}`;

  const [openKeys, setOpenKeys] = useState<string[]>([parentKey]);

  const onClick: MenuProps['onClick'] = (e) => navigate(e.key);

  const renderedLogo = (
    <Link to="/" className="flex h-16 items-center justify-center bg-blue-300">
      {collapsed ? (
        <img src={logoViags} className="h-10" />
      ) : (
        <img src={LogoVietnamAirlinesFull} className="h-11" />
      )}
    </Link>
  );

  return (
    <Layout.Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} width={280}>
      <Flex align="center" justify="center" className="h-16 bg-red-300">
        {renderedLogo}
      </Flex>
      <Menu
        theme="dark"
        onClick={onClick}
        mode="inline"
        items={items}
        openKeys={openKeys}
        selectedKeys={[pathname]}
        onOpenChange={(keys) => setOpenKeys(keys)}
        className={`h-[calc(100vh-110px)] overflow-y-auto transition-all duration-300 ${
          collapsed ? 'overflow-hidden' : 'overflow-y-auto'
        }`}
      />
    </Layout.Sider>
  );
});
