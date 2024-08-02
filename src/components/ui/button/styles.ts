import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex items-center justify-center whitespace-nowrap rounded-sm border border-transparent text-sm font-bold uppercase ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-red-800 bg-red-800 text-white hover:opacity-90",
        outline: "border-red-200 text-red-700 hover:opacity-80",
        secondary: "bg-white normal-case text-red-700 hover:opacity-80",
        ghost: "bg-transparent normal-case text-inherit hover:opacity-80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10",
        fit: "size-fit"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
