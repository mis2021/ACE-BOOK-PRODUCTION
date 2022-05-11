import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { getLayout } from '@/components/layouts/layout';
import Home from './feed/[[...pages]]';
import { ROUTES } from '@/lib/routes';
import type { GetServerSideProps } from 'next';
import {
  getAuthCredentials,
  allowedRoles,
  hasAccess,
  isAuthenticated,
} from '@/utils/auth-utils';
import dynamic from 'next/dynamic';

const DynamicHome = dynamic(() => import('./feed/[[...pages]]'), {
  ssr: false,
});

const templateVar ={
  "products": {
      "type": "grocery",
      "limit": 30
  },
  "popularProducts": {
      "type_slug": "grocery",
      "limit": 10
  },
  "categories": {
      "type": "grocery",
      "limit": 1000,
      "parent": null
  },
  "types": {
      "type": "grocery"
  }
}

export default function IndexPage({ userPermissions }: any) {
  console.log('userPermissions', userPermissions);

  const { t } = useTranslation();
  return <><DynamicHome variables={templateVar} layout={"classic"} /> </>;
}

// LoginPage.getLayout = getLayout;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { locale } = ctx;
  const { token, permissions } = getAuthCredentials(ctx);
  // return {
  //   redirect: {
  //     destination: ROUTES.LOGIN,
  //     permanent: false,
  //   },
  // };
  // return {
  //   props: {
  //     ...(await serverSideTranslations(locale!, ['common', 'faq'])),
  //   },
  // };

  if (
    !isAuthenticated({ token, permissions }) ||
    !hasAccess(allowedRoles, permissions)
  ) {
    return {
      redirect: {
        destination: ROUTES.LOGIN,
        permanent: false,
      },
    };
  }
  return {
    props: {
      userPermissions: permissions,
      ...(await serverSideTranslations(locale!, [
        'common',
        'table',
        'widgets',
      ])),
    },
  };
};
