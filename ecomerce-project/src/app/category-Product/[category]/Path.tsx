'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
export  function Path() {
    const path=usePathname()
    let element:any=''
    for (let index = 18; index < path.length; index++) {
      if( path[index]!='%'){if(path[index]!='2'){if(path[index]!='0') { element += path[index];}else { element += ' ';}}} }
  return element
}
