import { getMovieDetails } from '@/lib/movie/getMovieDetails'

import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { id: number } }) {
	const id = params.id
	const data = await getMovieDetails(id)

	return NextResponse.json(data)
}
