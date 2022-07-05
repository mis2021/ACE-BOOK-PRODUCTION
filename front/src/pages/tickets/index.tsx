import React from 'react'
import type { NextPageWithLayout } from '@/types';
import { getLayout } from '@/components/layouts/layout';
import ModIndexClassicLayout from '@/components/layouts/mod-index-classic';
import { adminOnly } from '@/utils/auth-utils';
import HeaderDetails from '@/components/ui/headers/header-details';
import ModClassicLayout from '@/components/layouts/mod-classic';

type Props = {}

const variables = {
  type: 'grocery',
}
const Tickets: NextPageWithLayout = () => {
  return (
    <>
      <ModClassicLayout>
        {/* <DashboardIndex /> */}
        <>
          <HeaderDetails
            title={'Tickets'}
            buttonName={'+ Create Ticket'}
            buttonRoute={'/tickets/form'}
          />
        </>
      </ModClassicLayout>
    </>
  )
}
Tickets.getLayout = getLayout;

Tickets.authenticate = {
  permissions: adminOnly,
};

export default Tickets