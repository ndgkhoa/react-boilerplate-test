import { Divider, Input, Button, Form, Flex, message } from 'antd';
import { useNavigate } from 'react-router-dom';

import { GoogleIcon } from '~/components/icons';
import { useLoginWithEmail } from '~/features/auth/hooks/mutations/use-login-with-email';
import { useLoginWithGoogle } from '../hooks/mutations/use-login-with-google';
import { useAuthStore } from '~/features/auth/hooks/use-auth-store';
import { AuthProviders } from '~/features/auth/types/AuthProviders';

type LoginFormType = {
  Email: string;
  Password: string;
};

export const LoginForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const { mutate: loginWithEmail, isPending: isLoginWithEmailPending } = useLoginWithEmail();
  const { mutate: loginWithGoogle, isPending: isLoginWithGooglePending } = useLoginWithGoogle();
  const { setAuth } = useAuthStore();

  const onLogin = (values: LoginFormType) => {
    loginWithEmail(values, {
      onSuccess: (response) => {
        setAuth({
          ...response.data.Data,
          isAuthenticated: true,
          provider: AuthProviders.Local,
        });
        navigate('/');
      },
      onError: () => {
        message.error('Tài khoản hoặc mật khẩu không đúng!');
      },
    });
  };

  const disabled = isLoginWithEmailPending || isLoginWithGooglePending;

  return (
    <>
      <Flex wrap align="center" gap="small">
        <Button
          disabled={disabled}
          loading={isLoginWithGooglePending}
          className="flex-1"
          size="large"
          icon={<GoogleIcon className="h-6 w-6 max-w-6 min-w-6" />}
          type="default"
          onClick={() => loginWithGoogle()}
        >
          <span className="font-light">Đăng nhập với Google</span>
        </Button>
      </Flex>
      <Divider plain>Hoặc</Divider>
      <Form disabled={disabled} form={form} size="large" layout="vertical" onFinish={onLogin}>
        <Form.Item<LoginFormType>
          label="Email"
          name="Email"
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
          loading={isLoginWithEmailPending}
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
