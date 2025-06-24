import { NextRequest, NextResponse } from 'next/server';
import { trackResourceDownload, trackPageView } from '@/lib/firestore';

export const dynamic = "force-static";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, resourceId, page } = body;

    let result;

    switch (type) {
      case 'download':
        if (!resourceId) {
          return NextResponse.json(
            { error: 'Resource ID required for download tracking' },
            { status: 400 },
          );
        }
        result = await trackResourceDownload(resourceId);
        break;

      case 'page_view':
        if (!page) {
          return NextResponse.json(
            { error: 'Page required for page view tracking' },
            { status: 400 },
          );
        }
        result = await trackPageView(page);
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid tracking type' },
          { status: 400 },
        );
    }

    if (!result.success) {
      throw new Error(result.error);
    }

    return NextResponse.json({
      success: true,
      message: 'Event tracked successfully',
    });
  } catch (error) {
    console.error('Tracking API error:', error);
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 },
    );
  }
}
