// import { DeleteOutlined } from '@ant-design/icons';
// import { Button, Popconfirm, Tooltip } from '~/components/ui';
// import { useDeleteUser } from '../../hooks/users';
// import { ServiceMessage } from '~/utils/serviceMessage';
// import { App } from 'antd';

// export const DeleteUserConfirmation = ({ userId }: { userId?: string }) => {
//   const { mutate: deleteUser, invalidate } = useDeleteUser();
//   const { message } = App.useApp();
//   const onConfirm = (userId?: string) => {
//     if (!userId) return;
//     deleteUser(userId, {
//       onSuccess(response) {
//         invalidate();
//         message.success(ServiceMessage.success(response).message);
//       },
//       onError(error) {
//         message.error(ServiceMessage.error(error).message);
//       },
//     });
//   };
//   return (
//     <Popconfirm
//       title="Xóa người dùng"
//       description="Bạn chắc chắn muốn xóa người dùng này?"
//       onConfirm={() => onConfirm(userId)}
//     >
//       <Tooltip title="Xóa người dùng">
//         <Button
//           danger
//           size="small"
//           type="text"
//           icon={<DeleteOutlined style={{ fontSize: 18 }} />}
//         />
//       </Tooltip>
//     </Popconfirm>
//   );
// };
