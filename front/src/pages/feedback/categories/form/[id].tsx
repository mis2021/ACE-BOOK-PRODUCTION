import React from 'react'
import type { NextPageWithLayout } from '@/types';
import { getLayout } from '@/components/layouts/layout';
import ModIndexClassicLayout from '@/components/layouts/mod-index-classic';
import { adminOnly } from '@/utils/auth-utils';
import HeaderDetails from '@/components/ui/headers/header-details';
import ModClassicLayout from '@/components/layouts/mod-classic';
import TicketIndex from '@/app/tickets';
import Configs from '@/app/configurations';
import FbCategoryForm from '@/app/feedback/category/form';
import { useQuery } from '@apollo/client';
import { GET_ALL_FBCATQUE } from '@graphql/operations/feedbacks/feedbackQueries';
import { useRouter } from 'next/router';

type Props = {}

const breadcrumbs = [
    {
        title: 'Configurations',
        route: '/configurations',
        isHome: true,
    },
    {
        title: 'Feedback settings',
        route: '/feedback/categories',
        
    },
    {
        title: 'Update',
        route: '',
        isCurrent: true,
    },
];

const FbSpecCatForm: NextPageWithLayout = () => {
    const { query } = useRouter();
    const { searchType, id, ...restQuery } = query;

    const { data: allFbCQs, refetch } = useQuery(GET_ALL_FBCATQUE, {
        variables: {
            categoryId: id
        },
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
    });

    console.log("allFbCQs", allFbCQs)


    return (
        <>
            <ModClassicLayout breadcrumb={breadcrumbs}>
                <>
                    <FbCategoryForm />
                </>
            </ModClassicLayout>
        </>
    )
}
FbSpecCatForm.getLayout = getLayout;

FbSpecCatForm.authenticate = {
    permissions: adminOnly,
};

export default FbSpecCatForm