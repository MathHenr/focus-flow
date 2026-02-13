// import style
import style from './style.module.css';

// import type Lucide
import type { LucideIcon } from 'lucide-react';

type ButtonProps = {
  icon: LucideIcon;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: 'primary' | 'secondary';
};

export function Button({ icon: Icon, variant, handleClick }: ButtonProps) {
  const buttonVariant = {
    primary: 'primary',
    secondary: 'secondary',
  };

  const valueText = getComputedStyle(document.documentElement).getPropertyValue(
    '--text-default'
  );

  console.log(Icon);
  return (
    <button
      onClick={handleClick}
      className={`${style.button} ${style[buttonVariant[variant]]}`}
    >
      <Icon fill={valueText} />
    </button>
  );
}
