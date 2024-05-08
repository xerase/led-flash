import React from 'react';

import { cn } from '@/lib/utils';
import { Heading } from '@/components/ui/heading';

type CalculatorHeadingProps = React.ComponentPropsWithoutRef<typeof Heading>;

export const CalculatorHeading = ({
  className,
  ...props
}: CalculatorHeadingProps) => {
  return (
    <Heading className={cn('font-normal', className)} as='h3' {...props} />
  );
};
