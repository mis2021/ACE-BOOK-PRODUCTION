import HeaderDetails from '@/components/ui/headers/header-details'
import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_ALL_FBCATEGORY } from '@graphql/operations/feedbacks/feedbackQueries';
import TitleWithSort from '@admin/components/ui/title-with-sort';
import ActionButtons from "@admin/components/common/action-buttons";
import { useIsRTL } from '@/utils/locals';
import ACDataTable from '@/components/tables/data-table';
import _ from 'lodash';

type Props = {}

const FeedbackCategoryApp = (props: Props) => {
  const { alignLeft, alignRight } = useIsRTL();

  const { data: allFbCats, refetch } = useQuery(GET_ALL_FBCATEGORY, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  console.log("allFbCats", allFbCats)

  const columns = [
    {
      title: (
        <TitleWithSort
          title={"Name"}
          ascending={true}
          isActive={true}
        />
      ),
      className: 'cursor-pointer',
      dataIndex: 'name',
      key: 'name',
      align: alignLeft,
      // onHeaderCell: () => onHeaderClick(QueryTagsOrderByColumn.Name),
    },
    {
      title: "Actions",
      dataIndex: '_id',
      key: 'actions',
      align: 'center',
      width: 90,
      render: (id: string) => (
        <ActionButtons
          id={id}
          editUrl={`/accounts/${id}`}
          // editUrl={`${ROUTES.TAGS}/${id}/edit`}
          deleteModalView="DELETE_TAG"
        />
      ),
    },
  ];


  return (
    <div className='pt-5'>
      <HeaderDetails
        title={'Feedback Question Categories'}
        buttonName={'+ Category'}
        buttonRoute={'/feedback/categories/form'}
      />
      <ACDataTable columns={columns} data={_.get(allFbCats, "fbCategorys.data")} />
    </div>
  )
}

export default FeedbackCategoryApp