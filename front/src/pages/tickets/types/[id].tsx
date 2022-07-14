import React from 'react'
import type { NextPageWithLayout } from '@/types';
import { getLayout } from '@/components/layouts/layout';
import { adminOnly } from '@/utils/auth-utils';
import ModClassicLayout from '@/components/layouts/mod-classic';
import _ from 'lodash';
import { useRouter } from 'next/router';
import TicketTypeForm from '@/app/configurations/ticketTypes/forms';
import { breadcrumbType } from '@/types/custom';
import { isMobile } from 'react-device-detect';
type Props = {}


const TicketTypes: NextPageWithLayout = () => {
    const { query } = useRouter();
    const { searchType, id, ...restQuery } = query;

    const breadcrumbs: breadcrumbType[] = [
        {
            title: 'Configurations',
            route: '/configurations',
            isHome: true,
            hidden: isMobile ? true : false
        },
        {
            title: 'Ticket Types',
            route: '/tickets/types',
          
        },
        {
            title: 'Type',
            isCurrent: true,
            route: '#',
        },
    ];

    return (
        <>
            <ModClassicLayout breadcrumb={breadcrumbs}>
                <>
                    <div className='pt-5'>
                        <TicketTypeForm code={id as string}/>
                        
                    </div>
                </>
            </ModClassicLayout>
        </>
    )
}
TicketTypes.getLayout = getLayout;

TicketTypes.authenticate = {
    permissions: adminOnly,
};

export default TicketTypes