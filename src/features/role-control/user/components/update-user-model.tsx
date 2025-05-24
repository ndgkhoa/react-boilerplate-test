import { Button } from 'antd';
import { PencilLine } from 'lucide-react';

import { Modal } from '~/components/ui';
import UserForm from '~/features/role-control/user/components/user-form';
import type { User } from '../types/User';

const UpdateUserModal = ({ user }: { user?: User }) => {
  if (!user) return null;

  const modalName = `update-user-modal-${user?.Id}`;

  return (
    <Modal>
      <Modal.Opens opens={modalName}>
        <Button icon={<PencilLine color="#facc15" size={18} strokeWidth={1.5} />} type="text" />
      </Modal.Opens>
      <Modal.Window name={modalName} modalProps={{ title: 'Cập nhật người dùng', width: '900px' }}>
        <UserForm user={user} />
      </Modal.Window>
    </Modal>
  );
};

export default UpdateUserModal;
