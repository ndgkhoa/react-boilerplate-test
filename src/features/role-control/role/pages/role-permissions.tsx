import { Container } from '~/components/ui';

const RolePermissions = () => {
  // const [editing, setEditing] = useState(false);

  // const [form] = Form.useForm();
  // const { message } = App.useApp();
  // const params = useParams<{ id: string }>();

  // const {
  //   data: resRoleActivities,
  //   isLoading: isRoleActivitiesLoading,
  //   isError: isRoleActivityError,
  //   error: RoleActivityError,
  // } = useRoleActivities(params.id);

  // const { mutate: updateRoleActivities, isPending: isUpdateRoleActivitiesPending } =
  //   useUpdateRoleActivities();

  // const { selectedRowKeys, rowSelectionProp, resetSelectedRowKeys } =
  //   useSelectedRowKeys<Activity>();

  // const cancelEditing = () => {
  //   form.setFieldsValue({ activities: resRoleActivities?.data?.Data?.Activities ?? [] });
  //   setEditing(false);
  // };

  // const onFinish = (values: { activities: RoleActivity[] }) => {
  //   updateRoleActivities(values.activities, {
  //     onSuccess(response) {
  //       setEditing(false);
  //       resetSelectedRowKeys();
  //       message.success(ServiceMessage.success(response).message);
  //     },
  //     onError(error) {
  //       message.error(ServiceMessage.error(error).message);
  //     },
  //   });
  // };

  // const activities = useMemo(
  //   () => resRoleActivities?.data?.Data?.Activities ?? [],
  //   [resRoleActivities]
  // );

  // const loading = isRoleActivitiesLoading || isUpdateRoleActivitiesPending;

  // useEffect(() => {
  //   form.setFieldsValue({ activities });
  // }, [form, activities]);

  // if (isRoleActivityError) return <ErrorPage subTitle={RoleActivityError.message} />;

  return (
    <Container
      showBack={{ enabled: true, link: '/role-control/roles' }}
      // title={resRoleActivities?.data?.Data?.RoleName}
      // extraRight={
      //   editing ? (
      //     <Space>
      //       <DeleteRoleActivitiesConfirmation
      //         roleActivitiyKeys={selectedRowKeys as string[]}
      //         resetSelectedRowKeys={resetSelectedRowKeys}
      //       />
      //       <Button size="large" onClick={cancelEditing}>
      //         Hủy bỏ
      //       </Button>
      //       <Button htmlType="submit" type="primary" size="large">
      //         Lưu thay đổi
      //       </Button>
      //     </Space>
      //   ) : (
      //     <Space>
      //       <DeleteRoleActivitiesConfirmation
      //         roleActivitiyKeys={selectedRowKeys as string[]}
      //         resetSelectedRowKeys={resetSelectedRowKeys}
      //       />
      //       <Button size="large" onClick={() => setEditing(true)}>
      //         Cập nhật
      //       </Button>
      //       <AddActivitiesModal />
      //     </Space>
      //   )
      // }
    >
      {/* <Form form={form} initialValues={{ activities }} onFinish={onFinish}>
        <Form.Item noStyle name="activities" valuePropName="dataSource">
          <RoleActivityList
            loading={loading}
            editing={editing}
            rowSelection={rowSelectionProp}
            pagination={{ hideOnSinglePage: true }}
          />
        </Form.Item>
      </Form> */}
      123
    </Container>
  );
};

export default RolePermissions;
