import { getGenres } from '@/lib/getGenres'

import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const data = await getGenres()

	return NextResponse.json(data)
}
