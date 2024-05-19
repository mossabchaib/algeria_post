import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import style from '../Sidbar__phone.module.css'
export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild >
      <button className={style.btn}>+</button>
      </DialogTrigger>
      <DialogContent className={style.width}>
        <DialogHeader>
          <DialogTitle>Add platform</DialogTitle>
          <DialogDescription>
            Make Add to your platform here. Click add platform when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name"  className="text-right">
           uri
            </Label>
            <Input id="name" placeholder="add uri platform"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Platform
            </Label>
            <Input id="username" placeholder="add name platform" className="col-span-3" />
          </div>
        </div>
        <DialogFooter >
        <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"5px"}}>
       
          <Button type="submit" className="bg-blue-600">Add platforme</Button>
           <Button variant="secondary">cancel</Button> 
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
