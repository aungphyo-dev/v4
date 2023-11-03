import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    let auth = request.cookies.get("auth")?.value;
        if (request.nextUrl.pathname.includes("/auth/login")){
            if (!auth){
                return NextResponse.next()
            }
        }else {
            if (auth){
                return NextResponse.next();
            }
        }
    return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/auth/:path*'],
}