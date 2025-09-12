import { NextResponse } from 'next/server';

// helper to generate a random nonce
function generateNonce() {
  return Buffer.from(crypto.randomUUID()).toString('base64');
}

export function middleware(request) {
  const nonce = generateNonce();

  const res = NextResponse.next();

  // Attach nonce to request so React server components can access it
  res.headers.set('x-nonce', nonce);

  // Example CSP policy (allow self, Zoho, and Cal embed)
  const csp = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' https://gc.zohopublic.com https://schedule.paradane.com;
    connect-src 'self' https://gc.zohopublic.com https://schedule.paradane.com;
    style-src 'self' 'unsafe-inline';
    frame-src https://gc.zohopublic.com https://schedule.paradane.com;
  `.replace(/\s{2,}/g, ' ').trim();

  res.headers.set('Content-Security-Policy', csp);

  return res;
}
