import React from 'react';

import { cn } from '@/lib/utils';
import { Star } from '@/components/ui/icon';

type CommentsStarsProps = React.HTMLAttributes<HTMLDivElement> & {
  rating: number;
};

export const CommentsStars = ({
  rating,
  className,
  ...props
}: CommentsStarsProps) => {
  return (
    <div
      className={cn('row-span-2 grid grid-cols-5 items-center', className)}
      {...props}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            'size-6',
            rating >= index ? 'text-yellow-500' : 'text-muted-foreground'
          )}
        />
      ))}
    </div>
  );
};