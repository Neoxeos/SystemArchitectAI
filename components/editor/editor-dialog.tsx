import type { ReactNode } from "react"

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type EditorDialogContentProps = {
  title: string
  description?: string
  children?: ReactNode
  footerActions?: ReactNode
  className?: string
}

export function EditorDialogContent({
  title,
  description,
  children,
  footerActions,
  className,
}: EditorDialogContentProps) {
  return (
    <DialogContent
      className={cn(
        "border border-border bg-card text-card-foreground shadow-xl",
        className
      )}
    >
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {description ? (
          <DialogDescription>{description}</DialogDescription>
        ) : null}
      </DialogHeader>

      {children}

      {footerActions ? (
        <DialogFooter className="border-border bg-muted/50">
          {footerActions}
        </DialogFooter>
      ) : null}
    </DialogContent>
  )
}
