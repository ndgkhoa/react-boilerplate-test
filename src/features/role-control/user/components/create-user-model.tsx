import { Button } from 'antd';
import { Plus } from 'lucide-react';

import { Modal } from '~/components/ui';
import UserForm from '~/features/role-control/user/components/user-form';

const CreateUserModal = () => {
  return (
    <Modal>
      <Modal.Opens opens="create-user-modal">
        <Button icon={<Plus size={16} />} type="primary">
          Tạo mới
        </Button>
      </Modal.Opens>
      <Modal.Window
        name="create-user-modal"
        modalProps={{ title: 'Tạo người dùng', width: '900px' }}
      >
        <UserForm />
      </Modal.Window>
    </Modal>
  );
};

export default CreateUserModal;
