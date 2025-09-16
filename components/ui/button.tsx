import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:scale-[1.02] active:scale-[0.98] transform-gpu",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary/90 backdrop-blur-sm border border-white/20",
        destructive:
          "bg-destructive text-white shadow-lg hover:shadow-xl hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 backdrop-blur-sm border border-red-300/20",
        outline:
          "border-2 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl hover:bg-white/20 hover:text-accent-foreground dark:bg-white/5 dark:border-white/20 dark:hover:bg-white/10 border-white/30",
        secondary:
          "bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl hover:bg-secondary/80 backdrop-blur-sm border border-white/10",
        ghost:
          "hover:bg-white/10 hover:text-accent-foreground dark:hover:bg-white/5 backdrop-blur-sm hover:shadow-md border border-transparent hover:border-white/20",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80 transition-colors",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-4",
        sm: "h-8 rounded-md gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-12 rounded-lg px-8 has-[>svg]:px-6 text-base font-semibold",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
