import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { Modal, Tooltip } from '~/components/ui';
import RoleForm from '~/features/role-control/role/components/role/role-form';

const CreateRoleModal = () => {
  return (
    <Modal>
      <Modal.Opens opens="create-role-modal">
        <Tooltip title="Thêm nhóm quyền">
          <Button size="large" type="primary" icon={<PlusOutlined />} />
        </Tooltip>
      </Modal.Opens>
      <Modal.Window name="create-role-modal" modalProps={{ title: 'Thêm nhóm quyền' }}>
        <RoleForm />
      </Modal.Window>
    </Modal>
  );
};

export default CreateRoleModal;
