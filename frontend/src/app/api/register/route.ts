import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const response = await axios.post('http://localhost:8080/admin/register', body)
    return NextResponse.json({
      success: true,
      message: response.data.message
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error?.response.data.message
    })
  }
}
