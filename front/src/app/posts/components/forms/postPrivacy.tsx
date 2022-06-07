import React from 'react'
import * as categoriesIcon from "@admin/components/icons/category";
import { tagIcons } from '@/components/admin/components/tag/tag-icons';
import { getIcon } from "@utils/get-icon";
import Label from "@admin/components/ui/label";
import SelectInput from "@admin/components/ui/select-input";
import { postSelectStyles } from '@/components/admin/components/ui/select/post-select.styles';

type Props = {
    control: any
}

export const updatedIcons = tagIcons.map((item: any) => {
    item.label = (
        <div className="flex space-s-5 items-center">
            <span className="flex w-5 h-5 items-center justify-center">
                {getIcon({
                    iconList: categoriesIcon,
                    iconName: item.value,
                    className: "max-h-full max-w-full",
                })}
            </span>
            <span>{item.label}</span>
        </div>
    );
    return item;
});

const PostPrivacy = ({ control }: Props) => {
    return (
        <div>
            <div className="mb-5">
                {/* <Label>Privacy</Label> */}
                <div className='form-select-sm'>
                    <SelectInput
                        name="icon"
                        customStyle={postSelectStyles}
                        control={control}
                        options={updatedIcons}
                        isClearable={false}
                        isSearchable={false}
                    />
                </div>

            </div>
        </div>
    )
}

export default PostPrivacy