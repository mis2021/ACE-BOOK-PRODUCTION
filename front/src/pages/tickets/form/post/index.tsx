import React from 'react'
import type { NextPageWithLayout } from '@/types';
import { getLayout } from '@/components/layouts/layout';
import ModIndexClassicLayout from '@/components/layouts/mod-index-classic';
import DashboardIndex from '@/app/dashboard';
import { adminOnly } from '@/utils/auth-utils';
import PromotionSliders from '@/components/promotions/promotions';

type Props = {}

const variables = {
  type: 'grocery',
}
const PostTicketForm: NextPageWithLayout = () => {
  return (
    <>
      <ModIndexClassicLayout>
        <>
        PostTicketForm
        </>
      </ModIndexClassicLayout>
    </>
  )
}
PostTicketForm.getLayout = getLayout;

PostTicketForm.authenticate = {
  permissions: adminOnly,
};

export default PostTicketForm