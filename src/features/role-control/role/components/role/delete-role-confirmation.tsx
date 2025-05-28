import { App, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { Popconfirm, Tooltip } from '~/components/ui';
import { useDeleteRole } from '~/features/role-control/role/hooks/role/mutations/use-delete-role';
import type { Role } from '~/features/role-control/role/types/Role';
import { ServiceMessage } from '~/utils/service-message';

const DeletePermissionConfirmation = ({
  roleId,
  onDeleteSuccess,
}: {
  roleId?: Role['Id'];
  onDeleteSuccess?: () => void;
}) => {
  const { message } = App.useApp();
  const deleteMutation = useDeleteRole();

  const onDeleteClick = async (id?: Role['Id']) => {
    if (!id) return;
    try {
      const response = await deleteMutation.mutateAsync(id);
      deleteMutation.invalidate();
      message.success(ServiceMessage.success(response).message);
      if (onDeleteSuccess) {
        onDeleteSuccess();
      }
    } catch (error) {
      message.error(ServiceMessage.error(error).message);
    }
  };

  return (
    <Popconfirm
      title="Xóa nhóm quyền"
      description="Bạn chắc chắn muốn xóa nhóm quyền này?"
      onConfirm={() => onDeleteClick(roleId)}
    >
      <Tooltip title="Xóa nhóm quyền">
        <Button
          danger
          size="small"
          type="text"
          icon={<DeleteOutlined style={{ fontSize: 18 }} />}
        />
      </Tooltip>
    </Popconfirm>
  );
};

export default DeletePermissionConfirmation;
