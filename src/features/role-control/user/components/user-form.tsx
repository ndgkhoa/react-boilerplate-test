import { App, Button, DatePicker, Flex, Form, Input, InputNumber, Switch } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import type { CreateUserBody, User } from '../types/User';

// import SelectEntity from './select-entity';
// import { DateTimeFormat } from '~/constants/DateTimeFormat';
import { ServiceMessage } from '~/utils/service-message';
import { useCreateUser } from '../hooks/mutations/use-create-user';
import { useUpdateUser } from '../hooks/mutations/use-update-user';

interface Props {
  onCloseModal?: () => void;
  user?: User;
}

interface FormValues extends CreateUserBody {}

const UserForm = (props: Props) => {
  const { message } = App.useApp();
  const [form] = Form.useForm<FormValues>();
  const createMutation = useCreateUser();
  const updateMutation = useUpdateUser();

  const isEditSession = Boolean(props.user?.Id);

  const createHandler = (values: FormValues) => {
    createMutation.mutate(
      { ...values },
      {
        onSuccess(response) {
          createMutation.invalidate();
          message.success(ServiceMessage.success(response).message);
          props?.onCloseModal?.();
        },
        onError(error) {
          message.error(ServiceMessage.error(error).message);
        },
      }
    );
  };
  const updateHandler = (values: FormValues) => {
    if (!props?.user?.Id) return;
    updateMutation.mutate(
      {
        ...values,
        Id: props?.user?.Id,
      },
      {
        onSuccess(response) {
          updateMutation.invalidate();
          message.success(ServiceMessage.success(response).message);
          props?.onCloseModal?.();
        },
        onError(error) {
          message.error(ServiceMessage.error(error).message);
        },
      }
    );
  };

  const loading = createMutation.isPending || updateMutation.isPending;

  return (
    <Form
      id="user-form"
      disabled={loading}
      form={form}
      layout="vertical"
      onFinish={isEditSession ? updateHandler : createHandler}
      initialValues={{
        // IsUsed: props?.user?.IsUsed ?? false,
        ...props?.user,
      }}
    >
      <Form.Item<FormValues>
        name="PhoneNumber"
        label="Số điện thoại"
        rules={[
          { required: true, message: 'Trường này là bắt buộc' },
          { type: 'number', message: 'Trường này bắt buộc là chữ số' },
        ]}
      >
        <InputNumber className="w-full" type="number" />
      </Form.Item>

      {/* <Form.Item<FormValues> name="Note" label="Ghi chú">
        <Input.TextArea placeholder="Ghi chú" />
      </Form.Item>
      <Form.Item<FormValues> name="IsUsed" valuePropName="checked" label="Trạng thái">
        <Switch checkedChildren="Đang SD" unCheckedChildren="Không SD" />
      </Form.Item> */}

      <Flex align="center" gap="small" justify="space-between" className="mt-6">
        <Button loading={loading} htmlType="submit" type="primary">
          Xác nhận
        </Button>
        <Button onClick={props.onCloseModal}>Hủy bỏ</Button>
      </Flex>
    </Form>
  );
};

export default UserForm;
