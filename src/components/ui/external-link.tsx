
import { ComponentPropsWithoutRef, forwardRef } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink as ExternalLinkIcon } from "lucide-react"

const ExternalLink = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<"a">>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300", className)}
        {...props}
      >
        {children}
        <ExternalLinkIcon className="h-3.5 w-3.5" />
      </a>
    )
  }
)

ExternalLink.displayName = "ExternalLink"

export { ExternalLink }
