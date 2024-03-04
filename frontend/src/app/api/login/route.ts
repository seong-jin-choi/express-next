import axios from 'axios'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const response = await axios.post('http://localhost:8080/admin/login', body)
  const cookie = response.headers['set-cookie']
  if (cookie) {
    const [key, value] = cookie[0].split('=')
    cookies().set(key, value, {
      httpOnly: true,
      maxAge: 24 * 60 * 60
    })
    delete response.headers['set-cookie']

    return NextResponse.json({
      success: true
    })
  }

  return NextResponse.json({
    success: false,
    message: 'Credential Error'
  })

  //   if (resJson.success === true) {
  //     cookies().set('accessToken', resJson.accessToken, {
  //       httpOnly: true,
  //       maxAge: 24 * 60 * 60
  //     })
  //     cookies().set('refreshToken', resJson.refreshToken, {
  //       httpOnly: true,
  //       maxAge: 24 * 60 * 60
  //     })

  //     delete resJson.accessToken
  //     delete resJson.refreshToken

  //     return NextResponse.json(resJson)
  //   }

  return NextResponse.json({
    success: false,
    message: 'Credential Error'
  })
}
