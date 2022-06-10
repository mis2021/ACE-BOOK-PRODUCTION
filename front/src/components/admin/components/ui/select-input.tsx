import Select from '@admin/components/ui/select/select';
// import Select from "@admin/components/ui/select/select";
import { Control, Controller } from 'react-hook-form';

interface SelectInputProps {
  control: Control<any>;
  rules?: any;
  customStyle?: any;
  name: string;
  errors?: string;
  options: object[];
  [key: string]: unknown;
  isSearchable: boolean;
  placeholder: string;
}

const SelectInput = ({
  control,
  options,
  name,
  rules,
  errors,
  getOptionLabel,
  getOptionValue,
  isMulti,
  isClearable,
  isLoading,
  customStyle,
  isSearchable,
  placeholder,
  ...rest
}: SelectInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      {...rest}
      render={({ field }) => (
        <>
          <Select
            {...field}
            isSearchable={isSearchable}
            getOptionLabel={getOptionLabel}
            getOptionValue={getOptionValue}
            isMulti={isMulti}
            isClearable={isClearable}
            isLoading={isLoading}
            options={options}
            customStyle={customStyle}
            placeholder={placeholder}
          />
          {errors && (
            <p className="my-2 text-xs text-red-500 text-start">
              {errors}
            </p>
          )}
        </>
      )}
    />
  );
};

export default SelectInput;
