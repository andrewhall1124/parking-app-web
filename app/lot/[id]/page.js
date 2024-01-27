'use client'
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { LineChart, Line } from "recharts";

export default function Page(){
  const [open, setOpen] = useState(false)

  const toggleOpen = () =>{
    if(open){
      setOpen(false)
    } else{
      setOpen(true)
    }
  }

  const usage = [
    {usage: 0},
    {usage: 0},
    {usage: 0},
    {usage: 0},
    {usage: 5},
    {usage: 30},
    {usage: 50},
    {usage: 70},
    {usage: 80},
    {usage: 70},
    {usage: 50},
    {usage: 30},
    {usage: 5},
    {usage: 0},
    {usage: 0},
    {usage: 0},
    {usage: 0},
  ]

  const data = [
    {
      supply: 50,
      demmand: 10
    },
    {
      supply: 40,
      demmand: 20
    },
    {
      supply: 30,
      demmand: 30
    },
    {
      supply: 20,
      demmand: 40
    },
    {
      supply: 10,
      demmand: 50
    },
    {
      supply: 0,
      demmand: 60
    },
  ]

  return(
    <div className="flex flex-col items-center">
      <div className="w-[1400px]">
        <div className="text-3xl font-semibold py-4">
          Jesse Knight Building Parking Lot
        </div>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-4">
            <Card className="p-4 shadow-md">
              <div className="flex flex-col gap-4">
                <div className="text-2xl font-semibold">Open to Students</div>
                <div className="flex items-center space-x-2">
                  <Switch onClick={()=>toggleOpen()}/>
                  <div>
                    {open ? 'Yes' : 'No'}
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-4 shadow-md">
              <div className="flex flex-col gap-4">
                <div className="text-2xl font-semibold">Optimal Price</div>
                <div className="text-center">$5.21 / Day</div>
              </div>
            </Card>
          </div>
          <div className="flex gap-4">
            <Card className='p-8 shadow-xl'>
              <div className='text-2xl font-semibold'>Todays Capacity (%)</div>
              <LineChart width={600} height={300} data={usage} margin={{ top: 10, right: 10, bottom: 10, left: 10}}>
                <Line type="monotone" dataKey="usage"  strokeWidth={3}/>
              </LineChart>
              <div className='text-xl text-center'>Today</div>
            </Card>
            <Card className='p-8 shadow-xl'>
              <div className='text-2xl font-semibold'>Supply & Demmand</div>
              <LineChart width={600} height={300} data={data} margin={{ top: 10, right: 10, bottom: 10, left: 10}}>
                <Line type="monotone" dataKey="supply"  strokeWidth={3}/>
                <Line type="monotone" dataKey="demmand"  strokeWidth={3}/>
              </LineChart>
              <div className='text-xl text-center'>Last 16 Weeks</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
