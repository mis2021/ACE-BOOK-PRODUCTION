import React from 'react'
import type { NextPageWithLayout } from '@/types';
import { getLayout } from '@/components/layouts/layout';
import ModIndexClassicLayout from '@/components/layouts/mod-index-classic';
import DashboardIndex from '@/app/dashboard';

type Props = {}

const IndexPage :  NextPageWithLayout = () => {
  return (
    <ModIndexClassicLayout>
      <DashboardIndex />
    </ModIndexClassicLayout>
  )
}
IndexPage.getLayout = getLayout;
export default IndexPage