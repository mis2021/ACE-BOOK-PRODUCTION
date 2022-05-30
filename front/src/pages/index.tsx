import React from 'react'
import type { NextPageWithLayout } from '@/types';
import { getLayout } from '@/components/layouts/layout';
import ModIndexClassicLayout from '@/components/layouts/mod-index-classic';
import PostIndex from '@/app/posts';

type Props = {}

const IndexPage :  NextPageWithLayout = () => {
  return (
    <ModIndexClassicLayout>
      <>
      <PostIndex/>
      <PostIndex/>
      </>
    </ModIndexClassicLayout>
  )
}
IndexPage.getLayout = getLayout;
export default IndexPage