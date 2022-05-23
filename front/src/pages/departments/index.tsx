import type { NextPageWithLayout } from '@/types';
import { getLayout } from '@/components/layouts/layout';
import Button from '@/components/ui/button';
import NotFound from '@/components/ui/not-found';
import { useTranslation } from 'next-i18next';
import rangeMap from '@/lib/range-map';
import CouponLoader from '@/components/ui/loaders/coupon-loader';
import { useShops } from '@/framework/shop';
import ErrorMessage from '@/components/ui/error-message';
import ShopCard from '@/components/ui/cards/shop';
import { SHOPS_LIMIT } from '@/lib/constants';
import LabelDescCard from '@/components/ui/cards/labelDescriptionCard';
export { getStaticProps } from '@/framework/shops-page.ssr';
import { gql, useQuery } from '@apollo/client';
import { GET_ALL_DEPTS } from '../../graphql/queries/departments/departmentQueries';
import _ from 'lodash';
import Card from '@/components/admin/components/common/card';
import Search from '@/components/admin/components/common/search';
import LinkButton from '@/components/admin/components/ui/link-button';
import ModClassicLayout from '@/components/layouts/mod-classic';

const DeptPage: NextPageWithLayout = () => {
  const { t } = useTranslation('common');
  const limit = SHOPS_LIMIT;

  const { data: alldepts, refetch } = useQuery(GET_ALL_DEPTS);
  console.log('alldepts', alldepts);

  const { shops, isLoading, isLoadingMore, hasMore, loadMore, error } =
    useShops({
      limit,
      is_active: 1,
    });
  if (error) return <ErrorMessage message={error.message} />;
  if (!isLoading && !shops.length) {
    return (
      <div className="min-h-full bg-gray-100 px-4 pt-6 pb-8 lg:p-8">
        <NotFound text="text-no-shops" />
      </div>
    );
  }

  const handleSearch = () => {
    console.log('fdsafdsafsd');
  };

  return (
    <ModClassicLayout>
      <div className="bg-gray min-h-screen  ">
        <div className="mx-auto flex w-full max-w-none flex-col  pt-14">
         
          <Card className="mb-8 flex flex-col items-center xl:flex-row">
            <div className="mb-4 md:w-2/4 xl:mb-0">
              <h1 className="text-xl font-semibold text-heading">
                Departments
              </h1>
            </div>

            <div className="ms-auto flex w-full flex-col items-center space-y-4 md:space-x-4 md:flex-row md:space-y-0 xl:w-1/2">
            {/* <div className="ms-auto flex w-full flex-col items-center space-y-4 md:flex-row md:space-y-0 xl:w-1/2 mx-6"> */}
              <Search onSearch={handleSearch} />

              <LinkButton
                href="/departments/create"
                className="md:ms-6 mx-3 h-12 w-full md:w-auto"
              >
                <span className="block md:hidden xl:block">
                  + New Department
                </span>
                <span className="hidden md:block xl:hidden">
                  + New Department
                </span>
              </LinkButton>
            </div>
          </Card>

          <Card className=" mb-8 flex  flex-col items-center xl:flex-row">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
              {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> */}

              {isLoading && !shops.length ? (
                <>
                  {rangeMap(limit, (i) => (
                    <CouponLoader key={i} uniqueKey={`shops-${i}`} />
                  ))}
                </>
              ) : (
                <>
                  {_.get(alldepts, 'departments.data') ? (
                    <>
                      {' '}
                      {_.get(alldepts, 'departments.data').map((d) => (
                        <LabelDescCard data={d} key={d._id} />
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </div>
          </Card>
          {hasMore && (
            <div className="mt-8 flex items-center justify-center lg:mt-12">
              <Button onClick={loadMore} loading={isLoadingMore}>
                {t('text-load-more')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </ModClassicLayout>
  );
};
DeptPage.getLayout = getLayout;

export default DeptPage;
