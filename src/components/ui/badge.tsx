import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-4 py-2 text-xs font-medium",
  {
    variants: {
      variant: {
        blue:
          "border-transparent bg-brand-50 text-brand-800",
        yellow:
          "border-transparent bg-[#FEF8EC] text-[#8F5F00]",
        green:
          "border-transparent bg-[#F7FDF7] text-[#26631C]",
        purple:
          "border-transparent bg-[#F5EDFD] text-[#351254]",
      },
    },
    defaultVariants: {
      variant: "blue",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
