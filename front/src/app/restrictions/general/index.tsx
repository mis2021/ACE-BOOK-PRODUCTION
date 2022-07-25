import React from 'react'
import { adminOnly } from '@/utils/auth-utils';

type Props = {}

const GeneralRestriction = (children: JSX.Element[]) => {
    return (
        <div>
            {children}
        </div>
    )
}
GeneralRestriction.authenticate = {
    permissions: adminOnly,
};
export default GeneralRestriction