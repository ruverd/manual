import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { cn } from '@/lib/utils';

import type { ButtonProps } from './button.types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          'inline-flex h-8 items-center justify-center whitespace-nowrap bg-primary px-[30px] py-[15px] text-[10px] font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-20 md:h-[45px] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
