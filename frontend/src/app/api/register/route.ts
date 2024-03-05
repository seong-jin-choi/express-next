import axios from 'axios'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const response = await axios.post('http://localhost:8080/admin/register', body)

  return NextResponse.json({
    success: true
  })
}
