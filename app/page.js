'use client'
import { YAxis, XAxis, Line, LineChart } from 'recharts';
import { Card } from '@/components/ui/card';
export default function Page(){
  
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

  const revenue = [
    {rev: 20},
    {rev: 30},
    {rev: 50},
    {rev: 40},
    {rev: 50},
    {rev: 60},
    {rev: 70},
    {rev: 90},
  ]

  return(
    <div className='flex flex-col items-center'>
      <div className="flex flex-col gap-4 w-[1400px]">
        <div className='text-3xl font-semibold pt-4'>
          Dashboard
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <Card className='p-8 shadow-xl'>
              <div className='text-2xl font-semibold'>Total Lot Usage (%)</div>
              <LineChart width={600} height={300} data={usage} margin={{ top: 10, right: 10, bottom: 10, left: 10}}>
                <Line type="monotone" dataKey="usage"  strokeWidth={3}/>
              </LineChart>
              <div className='text-xl text-center'>Today</div>
            </Card>
            <Card className='p-8 shadow-xl'>
              <div className='text-2xl font-semibold'>Total Revenue</div>
              <LineChart width={600} height={300} data={revenue} margin={{ top: 10, right: 10, bottom: 10, left: 10}}>
                <Line type="monotone" dataKey="rev"  strokeWidth={3}/>
              </LineChart>
              <div className='text-xl text-center'>Year to date</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}