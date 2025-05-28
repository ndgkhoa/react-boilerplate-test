import type { TableProps } from 'antd';
import { Empty, Space, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

import ErrorPage from '~/components/errors/error-page';
import { DateTimeFormat } from '~/constants/datetime-format';
import { useQueryParams } from '~/hooks/use-query-params';
import { useRoleList } from '~/features/role-control/role/hooks/role/queries/use-role-list';
import type { Role, RoleSearchParams } from '~/features/role-control/role/types/Role';
import UpdateRoleModal from '~/features/role-control/role/components/role/update-role-model';
import DeleteRoleConfirmation from '~/features/role-control/role/components/role/delete-role-confirmation';

const RoleList = (props: TableProps<Role> & { searchParams?: RoleSearchParams }) => {
  const { searchParams, ...tableProps } = props;
  const navigate = useNavigate();
  const roleQuery = useRoleList(searchParams);

  const { queryParams, setQueryParams } = useQueryParams();

  const handleDeleteSuccess = () => {
    const currentPage = queryParams.page || 1;
    const pageSize = queryParams.pageSize || 10;

    const totalRecordsAfterDelete = (roleQuery.data?.data?.TotalRecord ?? 1) - 1;
    const totalPagesAfterDelete = Math.ceil(totalRecordsAfterDelete / pageSize);

    const newPage =
      currentPage > totalPagesAfterDelete && currentPage > 1 ? currentPage - 1 : currentPage;
    setQueryParams({ page: newPage, pageSize });
  };

  const columns: TableProps<Role>['columns'] = [
    {
      title: '-',
      dataIndex: 'Id',
      key: 'Id',
      align: 'center' as const,
      render: (value, record) => {
        return (
          <Space>
            <UpdateRoleModal role={record} />
            <DeleteRoleConfirmation roleId={value} onDeleteSuccess={handleDeleteSuccess} />
          </Space>
        );
      },
      width: 100,
    },
    {
      title: 'STT',
      dataIndex: 'Id',
      key: 'Id',
      align: 'center' as const,
      render: (_, __, index) => {
        const currentPage = props.searchParams?.pageIndex || 1;
        const pageSize = props.searchParams?.pageSize || 10;
        return (currentPage - 1) * pageSize + index + 1;
      },
      width: 100,
    },
    {
      title: 'Nhóm quyền',
      dataIndex: 'RoleName',
      key: 'RoleName',
      width: 200,
    },
    {
      title: 'Mô tả',
      dataIndex: 'Description',
      key: 'Description',
      width: 200,
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'CreatedDate',
      key: 'CreatedDate',
      width: 200,
      align: 'center' as const,
      render: (value) => {
        const date = dayjs(value);
        return date.isValid() ? date.format(DateTimeFormat.viDate) : '';
      },
    },
  ];

  if (roleQuery.isError) {
    return <ErrorPage subTitle={roleQuery.error.message} />;
  }

  return (
    <Table
      bordered
      {...tableProps}
      rowKey="Id"
      loading={roleQuery.isPending}
      dataSource={roleQuery.data?.data.Data}
      columns={columns}
      scroll={{ x: 800 }}
      onRow={(record) => ({
        onClick: () => navigate(`/role-control/role/${record.Id}`),
        style: { cursor: 'pointer' },
      })}
      pagination={{
        hideOnSinglePage: true,
        total: roleQuery.data?.data.TotalRecord,
        current: props?.searchParams?.pageIndex,
        pageSize: props.searchParams?.pageSize,
        ...props.pagination,
      }}
      locale={{
        emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Không có dữ liệu" />,
      }}
    />
  );
};

export default RoleList;
