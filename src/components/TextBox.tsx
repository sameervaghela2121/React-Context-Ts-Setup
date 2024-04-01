import React from 'react'
import { get } from 'lodash';
import { Controller } from 'react-hook-form';

interface Props {
  label?: string;
  control?: any;
  errors?: any;
  name: string;
  type?: "text" | "password";
  className?: string;
  value?: string;
  info?: React.ReactNode;
  onChange?: (val: string) => void | undefined;
}

const TextBox = (props: Props) => {
  const { label = "", name = "", control, errors = {}, className, value = "", onChange, type = "text" } = props;

  return (
    <div className={className}>
      <div>
        <label>{label}</label>:&nbsp;&nbsp;
        {
          control ?
            <Controller
              render={({ field }) => <input {...field} type={type} autoComplete="off" placeholder=" " />}
              name={name}
              control={control}
              defaultValue=""
            /> : <input autoComplete="off" placeholder=" " name={name} defaultValue={value} type={type} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.value)} />
        }

        {get(errors, `${name}.message`) &&
          <span className='error-message'>
            {get(errors, `${name}.message`, "")}
          </span>
        }
      </div>
    </div>
  );
};

export default TextBox

