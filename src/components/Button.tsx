import React, { useCallback } from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  children?: React.ReactNode;
  isBusy?: boolean;
  isDanger?: boolean;
  isDisabled?: boolean;
  onClick?: () => void | Promise<void | boolean>;
  to?: string;
  variant?: 'contained' | 'outlined' | 'text'
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, className = '', isBusy, isDisabled, onClick, to, type = "button", variant = "contained" }: Props): React.ReactElement<Props> => {

  const onClickHandler = useCallback(
    (): void => {
      if (isBusy || isDisabled) {
        return;
      }

      onClick && onClick();

      if (to) {
        window.location.hash = to;
      }
    },
    [isBusy, isDisabled, onClick, to]
  );

  var btnClass = classNames({
    [className]: true,
    'is-disabled': isDisabled || isBusy,
    'is-busy': isBusy,
    [variant]: true,

  });

  return (
    <button
      type={type}
      className={btnClass}
      disabled={isDisabled || isBusy}
      onClick={onClickHandler}
    >
      <div className='children'>{isBusy ? "Loading..." : children}</div>
    </button>
  );
}


export default Button