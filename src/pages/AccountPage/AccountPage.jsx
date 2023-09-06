import { FormUser } from '../../components/Form/FormUser/FormUser';

import { Outlet } from 'react-router-dom';

import { PageWrapper } from './AccountPage.styled';

export default function AccountPage() {
  return (
    <div>
      <PageWrapper>
        <FormUser />
        <Outlet />
      </PageWrapper>
    </div>
  );
}
