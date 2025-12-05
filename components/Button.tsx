import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'third';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'rounded-full font-medium transition-all duration-300 inline-block';

  const variantStyles = {
    primary: 'border-0 bg-orange text-white hover:bg-navy-black hover:text-white',
    secondary: 'border-0 bg-orange text-black hover:bg-navy-black hover:text-white',
    third: 'border-0 bg-orange text-white hover:bg-white hover:text-gray-800',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
