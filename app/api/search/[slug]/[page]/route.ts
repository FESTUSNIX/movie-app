import { NextResponse } from 'next/server'
import { getSearchResults } from '@/lib/search/getSearchResults'

export async function GET(request: Request, { params }: { params: { slug: string; page: string } }) {
	const { slug, page } = params
	const { searchParams } = new URL(request.url)

	const includeAdult = searchParams.get('include_adult')
	const mediaType = searchParams.get('media_type')

	const data = await getSearchResults(slug, page, mediaType as 'multi' | 'movie' | 'tv', includeAdult === 'true')

	return NextResponse.json(data)
}
