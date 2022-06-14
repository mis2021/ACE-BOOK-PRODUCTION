import React from 'react'
import { getLayout } from '@/components/layouts/layout';
import ModClassicLayout from '@/components/layouts/mod-classic';
import DashboardIndex from '@/app/dashboard';
import Feedlayout from '@/components/layouts/feed-layout';
import ModIndexClassicLayout from '@/components/layouts/mod-index-classic';
import { getAuthCredentials, isAuthenticated } from "@utils/auth-utils";
import _ from 'lodash'

type Props = {}

const SpecificDepartment = (props: Props) => {
    const { token, permissions, id, user } = getAuthCredentials();


    return (
        <div>
            <ModIndexClassicLayout>
                <>
                    {/* <Feedlayout> */}
                    <DashboardIndex departmentId={_.get(user, "departmentOnDuty._id")} />
                    {/* </Feedlayout> */}
                </>
            </ModIndexClassicLayout>
        </div>
    )
}
SpecificDepartment.getLayout = getLayout;
export default SpecificDepartment