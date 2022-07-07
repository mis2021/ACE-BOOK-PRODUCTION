import React from 'react'
import type { NextPageWithLayout } from '@/types';
import { getLayout } from '@/components/layouts/layout';
import ModIndexClassicLayout from '@/components/layouts/mod-index-classic';
import { adminOnly } from '@/utils/auth-utils';
import HeaderDetails from '@/components/ui/headers/header-details';
import ModClassicLayout from '@/components/layouts/mod-classic';
import ActionButtons from "@admin/components/common/action-buttons";
import TitleWithSort from '@admin/components/ui/title-with-sort';
import { useIsRTL } from '@/utils/locals';
import ACDataTable from '@/components/tables/data-table';
import { useQuery } from '@apollo/client';
import { GET_ALL_TICKETS } from '@graphql/operations/accounts/accountQueries';
import _ from 'lodash';

type Props = {}

const TicketIndex = (props: Props) => {
    const { alignLeft, alignRight } = useIsRTL();
    const { data: allTickets, refetch } = useQuery(GET_ALL_TICKETS, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
    });

console.log("allTickets", allTickets)

    const columns = [
        // {
        //   title:"ID",
        //   dataIndex: 'id',
        //   key: 'id',
        //   align: 'center',
        //   width: 60,
        // },
        {
          title: (
            <TitleWithSort
              title={"Subject"}
              ascending={true}
              isActive={true}
            />
          ),
          className: 'cursor-pointer',
          dataIndex: 'subject',
          key: 'subject',
          align: alignLeft,
          // onHeaderCell: () => onHeaderClick(QueryTagsOrderByColumn.Name),
        },
        // {
        //   title: "Department",
        //   dataIndex: 'department',
        //   key: 'department',
        //   align: 'left',
        //   ellipsis: true,
        // },
        // {
        //   title: "Actions",
        //   dataIndex: 'id',
        //   key: 'actions',
        //   align: 'center',
        //   width: 90,
        //   render: (id: string) => (
        //     <ActionButtons
        //       id={id}
        //       // editUrl={`/accounts/${id}`}
        //       // editUrl={`${ROUTES.TAGS}/${id}/edit`}
        //       deleteModalView="DELETE_TAG"
        //     />
        //   ),
        // },
      ];

    return (
        <div>
            <HeaderDetails
                title={'Tickets'}
                buttonName={'+ Create Ticket'}
                buttonRoute={'/tickets/form'}
            />
             <ACDataTable columns={columns} data={_.get(allTickets, "tickets.data")} />
        </div>
    )
}

export default TicketIndex