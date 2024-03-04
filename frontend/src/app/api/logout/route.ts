import axios from 'axios'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST() {
  try {
    const response = await axios.get('http://localhost:8080/admin/logout')
    cookies().delete('connect.sid')
    return NextResponse.json({
      success: true
    })
  } catch (error) {
    return NextResponse.json({
      success: false
    })
  }
}
