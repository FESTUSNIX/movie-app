import { NextResponse } from 'next/server'
import { getTVSeasonDetails } from '@/lib/getTVSeasonDetails'

export async function GET(request: Request, { params }: { params: { id: number; seasonNumber: number } }) {
	const { id, seasonNumber } = params

	const data = await getTVSeasonDetails(id, seasonNumber)

	return NextResponse.json(data)
}
