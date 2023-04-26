import { NextResponse } from 'next/server'
import { getTrending } from '@/lib/getTrending'

export async function GET(request: Request) {
	const data = await getTrending()

	return NextResponse.json(data)
}
