import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../lib/utils"

const Button = ({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
}) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(({ className }))}
      {...props}
    />
  )
}

export default Button
