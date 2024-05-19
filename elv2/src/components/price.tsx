import clsx from 'clsx';

const Price = ({
  amount,
  className,
  
}: {
  amount: string;
  className?: string;
}) => (
  <p suppressHydrationWarning={true} className={className}>
   {amount}
    <span className={clsx('ml-1 inline')}>$</span>
  </p>
);

export default Price;