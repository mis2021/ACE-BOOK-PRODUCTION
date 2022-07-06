import React from 'react'
import type { NextPageWithLayout } from '@/types';
import { getLayout } from '@/components/layouts/layout';
import ModIndexClassicLayout from '@/components/layouts/mod-index-classic';
import DashboardIndex from '@/app/dashboard';
import { adminOnly } from '@/utils/auth-utils';
import PromotionSliders from '@/components/promotions/promotions';
import TicketForm from '@/app/tickets/form';
import ModClassicLayout from '@/components/layouts/mod-classic';

type Props = {}

const variables = {
  type: 'grocery',
}

const breadcrumbs = [
  {
    title: 'Posts',
    route: '/',
    isHome: true,
  },
  {
    title: 'Create Ticket',
    route: '/tickets/form',
    isCurrent: true,
  },
];


const PostTicketForm: NextPageWithLayout = () => {
  return (
    <>
      <ModClassicLayout breadcrumb={breadcrumbs}>
        <>
          <TicketForm />
        </>
      </ModClassicLayout>
    </>
  )
}
PostTicketForm.getLayout = getLayout;

PostTicketForm.authenticate = {
  permissions: adminOnly,
};

export default PostTicketForm