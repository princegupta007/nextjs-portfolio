import { NextRequest, NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/firestore';

export const dynamic = "force-static";
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured') === 'true';
    const limit = searchParams.get('limit')
      ? parseInt(searchParams.get('limit')!)
      : undefined;

    const result = await getBlogPosts(featured, limit);
    console.log('Blog API result:', result);

    if (!result.success) {
      throw new Error(result.error);
    }

    return NextResponse.json({
      success: true,
      posts: result.posts,
    });
  } catch (error) {
    console.error('Blog API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 },
    );
  }
}
