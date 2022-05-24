import type { NextPageWithLayout } from '@/types';
import { getLayout } from '@/components/layouts/layout';
export { getStaticProps } from '@/framework/shops-page.ssr';
import ModClassicLayout from '@/components/layouts/mod-classic';
import HeaderDetails from '@/components/ui/headers/header-details';
import ACDataTable from '@/components/tables/data-table';

const AccountsPage: NextPageWithLayout = () => {
  return (
    <ModClassicLayout >
      {/* Transfered to ModClassicLayout component */}
      {/* <div className="bg-gray min-h-screen  ">
        <div className="mx-auto flex w-full max-w-none flex-col  pt-14"> */}
      <>
        <HeaderDetails
          title={'Accounts'}
          buttonName={'+ New Account'}
          buttonRoute={'/accounts/create'}
        />

        <ACDataTable />
      </>
      {/* </div>
      </div> */}
    </ModClassicLayout>
  );
};
AccountsPage.getLayout = getLayout;

export default AccountsPage;
