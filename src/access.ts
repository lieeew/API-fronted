/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.LoginUserVO } | undefined) {
  // @ts-ignore
  const { loginUser } = initialState ?? {};
  return {
    canAdmin: loginUser && loginUser?.userRole === 'admin',
  };
}
