import { NextResponse } from 'next/server'
import { getSearchResults } from '@/lib/getSearchResults'

export async function GET(request: Request, { params }: { params: { slug: string; page: string } }) {
	const { slug, page } = params

	const data = await getSearchResults(slug, page)

	return NextResponse.json(data)
}
