import { makeRouteHandler } from '@keystatic/next/route-handler';
import { NextResponse } from 'next/server';
import config from '../../../../../keystatic.config';

export function generateStaticParams() {
  return [{ params: ['keystatic'] }];
}

const handler = makeRouteHandler({
  config,
});

export async function GET(req: Request) {
  if (process.env.NODE_ENV === 'production') {
    return new NextResponse('Not Found', { status: 404 });
  }
  return handler.GET(req);
}

export async function POST(req: Request) {
  if (process.env.NODE_ENV === 'production') {
    return new NextResponse('Not Found', { status: 404 });
  }
  return handler.POST(req);
}
