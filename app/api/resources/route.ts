import { NextRequest, NextResponse } from 'next/server';
import { getResources } from '@/lib/firestore';

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || undefined;
    const featured = searchParams.get('featured') === 'true';

    const result = await getResources(category, featured);

    if (!result.success) {
      throw new Error(result.error);
    }

    return NextResponse.json({
      success: true,
      resources: result.resources,
    });
  } catch (error) {
    console.error('Resources API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch resources' },
      { status: 500 },
    );
  }
}
