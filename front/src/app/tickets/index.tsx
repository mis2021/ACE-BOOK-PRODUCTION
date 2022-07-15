import React, { useEffect, useState } from 'react'
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
import { GET_ALL_TICKETS } from '@graphql/operations/tickets/ticketQueries';
import _ from 'lodash';
import { TicketFormValues, TicketVarType } from '@/types/tickets/ticketType';
import { ticketStatusIdentifier, ticketTypeIdentifier } from '@/constants/options';

type Props = {}

type StateType = {
  ticketData: any[];
}

const initialData: StateType = {
  ticketData: []
}

const TicketIndex = (props: Props) => {
  const { alignLeft, alignRight } = useIsRTL();
  const [state, setState] = useState(initialData)
  const { data: allTickets, refetch } = useQuery(GET_ALL_TICKETS, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });



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
    {
      title: "Requesting Department",
      dataIndex: 'requestingDepartment',
      key: 'requestingDepartment',
      align: 'left',
      ellipsis: true,
    },
    {
      title: "Type",
      dataIndex: 'type',
      key: 'type',
      align: 'left',
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: 'status',
      key: 'status',
      align: 'left',
      ellipsis: true,
    },
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


  useEffect(() => {
    if (_.get(allTickets, 'tickets.data')) {
      const structuredTicket = _.get(allTickets, 'tickets.data').map((item: any) => {
        let dataload : TicketFormValues = _.cloneDeep(item);
        dataload.requestingDepartment = _.get(item, "requestingDepartment.name")
        dataload.type = ticketTypeIdentifier( _.get(item, "type"), "name") 
        dataload.status = ticketStatusIdentifier( _.get(item, "status"), "name") 

        return dataload
      });
      setState((p) => ({ ...p, ticketData: structuredTicket }));
    }
  }, [allTickets]);
 
  return (
    <div>
      <HeaderDetails
        title={'Tickets'}
        buttonName={'+ Create Ticket'}
        buttonRoute={'/tickets/form'}
      />
      <ACDataTable columns={columns} data={state.ticketData} />
    </div>
  )
}

export default TicketIndex