import { App, Button } from 'antd';
import { Trash2 } from 'lucide-react';

import { ConfirmationButton } from '~/components/buttons';
import { useDeleteUser } from '~/features/role-control/user/hooks/mutations/use-delete-user';
import { ServiceMessage } from '~/utils/service-message';
import type { User } from '~/features/role-control/user/types/User';

const DeleteUserConfirmation = ({
  userId,
  onDeleteSuccess,
}: {
  userId?: User['Id'];
  onDeleteSuccess?: () => void;
}) => {
  const { message } = App.useApp();
  const deleteMutation = useDeleteUser();

  const onDeleteClick = async (id?: User['Id']) => {
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
    <ConfirmationButton onOk={() => onDeleteClick(userId)}>
      <Button danger type="text" icon={<Trash2 size={18} strokeWidth={1.5} />} />
    </ConfirmationButton>
  );
};

export default DeleteUserConfirmation;
