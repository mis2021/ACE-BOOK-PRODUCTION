import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { getLayout } from '@/components/layouts/layout';
import Home from './feed/[[...pages]]';
import { ROUTES } from '@/lib/routes';
import type { GetServerSideProps } from "next";
import { getAuthCredentials , allowedRoles,
  hasAccess,
  isAuthenticated} from '@/utils/auth-utils';

export default function IndexPage({ userPermissions }: any) {
  console.log("userPermissions", userPermissions)


  const { t } = useTranslation();
  return (
    <></>
  );
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
        "common",
        "table",
        "widgets",
      ])),
    },
  };
};
