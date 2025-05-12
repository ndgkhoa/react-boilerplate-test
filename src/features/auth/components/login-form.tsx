import { Divider, Input, Button, Form, Flex, message } from 'antd';
import { MicrosoftIcon } from '~/components/icons';
// import { useLoginWithEmail } from '../hooks/mutations/use-login-with-email';
// import { useLoginWithMicrosoft } from '../hooks/mutations/use-login-with-microsoft';
// import { useAuthStore } from '../hooks/useAuthStore';
// import { AuthProviders } from '../types/AuthProviders';
import { useNavigate } from 'react-router-dom';

type LoginFormType = {
  UserName: string;
  Password: string;
};

export const LoginForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // const { mutate: loginWithEmail, isPending: isLoginWithEmailPending } = useLoginWithEmail();
  // const { mutate: loginWithMicrosoft, isPending: isLoginWithMicrosoftPending } =
  //   useLoginWithMicrosoft();
  // const { setAuth } = useAuthStore();

  // const onLogin = (values: LoginFormType) => {
  //   loginWithEmail(values, {
  //     onSuccess: (response) => {
  //       setAuth({
  //         ...response.data.Data,
  //         isAuthenticated: true,
  //         provider: AuthProviders.Local,
  //       });
  //       navigate('/');
  //     },
  //     onError: () => {
  //       message.error('Tài khoản hoặc mật khẩu không đúng!');
  //     },
  //   });
  // };

  //const disabled = isLoginWithMicrosoftPending || isLoginWithEmailPending;

  return (
    <>
      <Flex wrap align="center" gap="small">
        <Button
          // disabled={disabled}
          //loading={isLoginWithMicrosoftPending}
          className="flex-1"
          size="large"
          icon={<MicrosoftIcon className="h-6 w-6 max-w-6 min-w-6" />}
          type="default"
          // onClick={() => loginWithMicrosoft()}
        >
          <span className="font-light">Đăng nhập với Microsoft</span>
        </Button>
      </Flex>
      <Divider plain>Hoặc</Divider>
      {/* <Form disabled={disabled} form={form} size="large" layout="vertical" onFinish={onLogin}> */}
      <Form form={form} size="large" layout="vertical">
        <Form.Item<LoginFormType>
          label="Tên đăng nhập"
          name="UserName"
          rules={[{ required: true, message: 'Không được bỏ trống trường này' }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item<LoginFormType>
          label="Mật khẩu"
          name="Password"
          rules={[{ required: true, message: 'Không được bỏ trống trường này' }]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Button
          // loading={isLoginWithEmailPending}
          block
          className="mt-2"
          htmlType="submit"
          size="large"
          type="primary"
        >
          Đăng nhập
        </Button>
      </Form>
    </>
  );
};
