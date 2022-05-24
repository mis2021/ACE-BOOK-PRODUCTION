import React, {useState, useMemo} from 'react';
import { Table } from '@/components/ui/table';
import { useTranslation } from 'next-i18next';
import TitleWithSort from '@admin/components/ui/title-with-sort';
import {
  TagPaginator,
  QueryTagsOrderByColumn,
  SortOrder,
} from '__generated__/__types__';
import { useIsRTL } from '@/utils/locals';
import debounce from "lodash/debounce";
import ActionButtons from "@admin/components/common/action-buttons";


const ACDataTable = () => {
  const { t } = useTranslation();
  const rowExpandable = (record: any) => record.children?.length;
  const { alignLeft, alignRight } = useIsRTL();

  const [order, setOrder] = useState<SortOrder>(SortOrder.Desc);
  const [column, setColumn] = useState<string>();

  const debouncedHeaderClick = useMemo(
    () =>
      debounce((value) => {
        setColumn(value);
        setOrder(order === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc);
        // refetch({
        //   orderBy: [
        //     {
        //       column: value,
        //       order: order === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc,
        //     },
        //   ],
        // });
      }, 300),
    [order]
  );

  const onHeaderClick = (value: string | undefined) => ({
    onClick: () => {
      debouncedHeaderClick(value);
    },
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
          title={"Name"}
          ascending={
            order === SortOrder.Asc && column === QueryTagsOrderByColumn.Name
          }
          isActive={column === QueryTagsOrderByColumn.Name}
        />
      ),
      className: 'cursor-pointer',
      dataIndex: 'name',
      key: 'name',
      align: alignLeft,
      onHeaderCell: () => onHeaderClick(QueryTagsOrderByColumn.Name),
    },
    {
      title: "Slug",
      dataIndex: 'slug',
      key: 'slug',
      align: 'center',
      ellipsis: true,
    },
    {
      title:"Type",
      dataIndex: 'type',
      key: 'type',
      align: alignRight,

      render: (type: any) => (
        <div
          className="overflow-hidden truncate whitespace-nowrap"
          title={type?.name}
        >
          {type?.name}
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: 'id',
      key: 'actions',
      align: 'center',
      width: 90,
      render: (id: string) => (
        <ActionButtons
          id={id}
        //   editUrl={`${ROUTES.TAGS}/${id}/edit`}
          deleteModalView="DELETE_TAG"
        />
      ),
    },
  ];

  const data = [
    {
        "__typename": "Tag",
        "id": "1",
        "name": "FIrst Edition",
        "slug": "first-edition",
        "details": null,
        "image": {
            "__typename": "Attachment",
            "id": null,
            "thumbnail": null,
            "original": null
        },
        "icon": null,
        "type": {
            "__typename": "Type",
            "id": "8",
            "name": "Books",
            "slug": "books"
        }
    }]


  return (
    <>
      <div className="mb-6 overflow-hidden rounded shadow">
        <Table
          //@ts-ignore
          columns={columns}
          emptyText={t('table:empty-table-data')}
          //@ts-ignore
          data={data}
          rowKey="id"
          scroll={{ x: 1000 }}
          expandable={{
            expandedRowRender: () => '',
            rowExpandable: rowExpandable,
          }}
        />
      </div>
    </>
  );
};

export default ACDataTable;
