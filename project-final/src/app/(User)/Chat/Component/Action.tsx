import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { BsArchive } from "react-icons/bs";
export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
       <div style={{fontSize:"20px",fontWeight:"600",paddingBottom:"10px",background:"#fff",width:"35px",height:"35px",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"
       }}>
        <button style={{position:"absolute",top:"0px"}}>...</button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80">
      <div className="flex items-center space-x-3">
    <h2 style={{fontSize:"15px",fontWeight:"600"}}>Archive</h2>  
<BsArchive/>
        </div>
      </PopoverContent>
    </Popover>
  )
}
