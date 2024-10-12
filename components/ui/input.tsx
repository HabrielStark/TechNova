import * as React from &quot;react&quot;

import { cn } from &quot;@/lib/utils&quot;

export interface InputProps
  extends React.InputHTMLAttributes&lt;HTMLInputElement&gt; {}

const Input = React.forwardRef&lt;HTMLInputElement, InputProps&gt;(
  ({ className, type, ...props }, ref) =&gt; {
    return (
      &lt;input
        type={type}
        className={cn(
          &quot;flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;,
          className
        )}
        ref={ref}
        {...props}
      /&gt;
    )
  }
)
Input.displayName = &quot;Input&quot;

export { Input }
