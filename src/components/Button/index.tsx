// import style
import style from './style.module.css';

// import type Lucide
import type { LucideIcon } from 'lucide-react';

type ButtonProps = {
  icon: LucideIcon;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant: 'primary' | 'secondary';
} & React.ComponentProps<'button'>;

export function Button({ icon: Icon, variant, handleClick, ...rest }: ButtonProps) {
  const buttonVariant = {
    primary: 'primary',
    secondary: 'secondary',
  };

  return (
    <button
      onClick={handleClick}
      className={`${style.button} ${style[buttonVariant[variant]]}`}
      {...rest}
    >
      <Icon fill="currentColor" />
    </button>
  );
}
