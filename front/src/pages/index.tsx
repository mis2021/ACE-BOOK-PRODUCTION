import React from 'react'
import type { NextPageWithLayout } from '@/types';
import { getLayout } from '@/components/layouts/layout';
import ModIndexClassicLayout from '@/components/layouts/mod-index-classic';
import DashboardIndex from '@/app/dashboard';
import { adminOnly } from '@/utils/auth-utils';

type Props = {}

const IndexPage :  NextPageWithLayout = () => {
  return (
    <ModIndexClassicLayout>
      <DashboardIndex />
    </ModIndexClassicLayout>
  )
}
IndexPage.getLayout = getLayout;

IndexPage.authenticate = {
  permissions: adminOnly,
};

export default IndexPage