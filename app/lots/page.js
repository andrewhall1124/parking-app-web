import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const data = [
  {
    name: 'Marriott Center',
    current_capacity: 55.25,
    open: true,
    optimization: 80.45,
    id: 12345,
  },
  {
    name: 'Jesse Knight Building',
    current_capacity: 55.25,
    open: true,
    optimization: 80.45,
    id: 12345,
  },
  {
    name: 'JFSB Underground',
    current_capacity: 55.25,
    open: false,
    optimization: 80.45,
    id: 12345,
  },
  {
    name: 'Tanner North',
    current_capacity: 55.25,
    open: true,
    optimization: 80.45,
    id: 12345,
  },
  {
    name: 'Richards Building',
    current_capacity: 55.25,
    open: false,
    optimization: 80.45,
    id: 12345,
  },
]

export default function Page(){
  return(
    <div className="flex flex-col items-center">
      <div className="px-4 w-[1400px]">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-semibold py-4">
            University Lots
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add new</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add new parking lot</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue=""
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    # of Spots
                  </Label>
                  <Input
                    id="username"
                    defaultValue=""
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="submit">Submit</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Card className="p-4 shadow-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Lot Name</TableHead>
                <TableHead>Current Capacity</TableHead>
                <TableHead>Open to students</TableHead>
                <TableHead>Pricing Optimization</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((data,index)=>(
                <Link legacyBehavior href={`lot/${data.id}`} key={index}>
                  <TableRow className='cursor-pointer'>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.current_capacity}%</TableCell>
                    <TableCell>{data.open ? 'Yes' : 'No'}</TableCell>
                    <TableCell>{data.optimization}%</TableCell>
                  </TableRow>
                </Link>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}