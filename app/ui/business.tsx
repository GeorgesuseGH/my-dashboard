'use client'
import { Business } from "../lib/definitions"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
export function BusinessChart({ data }: { data: { month: string, total: number }[] }) {

  return (
    <div className="w-full h-80"> 
        <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="total" stroke="#a855f7" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


