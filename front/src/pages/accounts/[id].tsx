import React from 'react';
import type { NextPageWithLayout } from '@/types';
import { getLayout } from '@/components/layouts/layout';
import ModClassicLayout from '@/components/layouts/mod-classic';
import { useRouter } from 'next/router';
import AccountForm from '@/app/accounts/accForm';

type Props = {};

const EditAccount: NextPageWithLayout = (props: Props) => {
  const { query } = useRouter();
  const { searchType, id, ...restQuery } = query;

  const breadcrumbs = [
    {
      title: 'Accounts',
      route: '/accounts',
      isHome: true,
    },
    {
      title: 'Update',
      route: `/accounts/${id}`,
      isCurrent: true,
    },
  ];

  return (
    <div>
      <ModClassicLayout breadcrumb={breadcrumbs}>
        <AccountForm />
      </ModClassicLayout>
    </div>
  );
};
EditAccount.getLayout = getLayout;

export default EditAccount;
