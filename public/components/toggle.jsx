/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kLrc8Ycz5IG
 */
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function Component() {
  return (
    <main className="bg-[#ffffff] min-h-screen flex items-start justify-end p-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="mt-4 mr-4" variant="outline">
            Menu
            <ArrowDownIcon className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2" side="bottom">
          <DropdownMenuItem>
            <Link href="#">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="#">Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}
