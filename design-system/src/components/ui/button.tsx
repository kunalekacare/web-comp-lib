import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground active:bg-accent/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70",
        ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent/80",
        link: "text-primary underline-offset-4 hover:underline active:text-primary/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Debug logging for button rendering
    const buttonClasses = buttonVariants({ variant, size, className });
    const finalClasses = cn(buttonClasses);
    
    // Log button details for debugging
    React.useEffect(() => {
      console.log('🔘 Button Component Debug:');
      console.log('  - Variant:', variant);
      console.log('  - Size:', size);
      console.log('  - Base classes:', buttonClasses);
      console.log('  - Final classes:', finalClasses);
      
      // Check computed styles after render
      setTimeout(() => {
        const buttonElement = document.querySelector('[data-button-debug]') as HTMLElement;
        if (buttonElement) {
          const computedStyle = getComputedStyle(buttonElement);
          console.log('  - Computed padding-left:', computedStyle.paddingLeft);
          console.log('  - Computed padding-right:', computedStyle.paddingRight);
          console.log('  - Computed background-color:', computedStyle.backgroundColor);
          console.log('  - Computed height:', computedStyle.height);
        }
      }, 50);
    }, [variant, size, buttonClasses, finalClasses]);
    
    return (
      <Comp
        className={finalClasses}
        ref={ref}
        data-button-debug="true"
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
