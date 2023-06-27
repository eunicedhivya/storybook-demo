import './mybutton.css';

interface ButtonProps {
  variant: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const MyButton = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = `storybook-button1--${variant}` ;
  return (
    <button
      type="button"
      className={['storybook-button1', `storybook-button1--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
