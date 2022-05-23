import Banner from '@/components/banners/banner';
import PromotionSliders from '@/components/promotions/promotions';
import Categories from '@/components/categories/categories';
import { Element } from 'react-scroll';
// import FilterBar from './filter-bar';
import ProductGridHome from '@/components/products/grids/home';
import type { HomePageProps } from '@/types';
import { getLayout } from '@/components/layouts/layout';
import ModClassicLayout from '@/components/layouts/mod-classic';
import DepartmentForm from '@/app/department/deptForm';
import Card from '@/components/admin/components/common/card';

const breadcrumbs = [
  {
    title: "Departments",
    route: "/departments",
    isHome: true,
  },
  {
    title: "Create",
    route: "ds",
    isCurrent: true,
  }
]

function CreateDeptPage() {
  return (
    <>
      <ModClassicLayout breadcrumb={breadcrumbs}>
          <DepartmentForm />
      </ModClassicLayout>
    </>
  );
}

CreateDeptPage.getLayout = getLayout;
export default CreateDeptPage;
