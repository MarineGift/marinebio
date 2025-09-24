// app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link' // Link 컴포넌트 import

const inter = Inter({ subsets: ['latin'] })

// 메타데이터 설정 (기존과 동일, 아주 잘 작성되었습니다)
export const metadata: Metadata = {
  title: 'MarineBio - Revolutionary Marine Technology',
  description: 'Leading provider of innovative marine nano-fiber technology for sustainable solutions',
  keywords: 'marine technology, nano-fiber, sustainable, biotechnology, MarineBio',
  authors: [{ name: 'MarineGift' }],
  openGraph: {
    title: 'MarineBio - Revolutionary Marine Technology',
    description: 'Leading provider of innovative marine nano-fiber technology',
    url: 'https://marinebio.com',
    siteName: 'MarineBio',
    images: [
      {
        url: 'https://marinebio.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MarineBio',
    description: 'Revolutionary Marine Technology',
    images: ['https://marinebio.com/og-image.jpg'],
  },
}

// 1. Header (내비게이션 바) 컴포넌트 분리
const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* 2. 로고에 Link 적용 */}
              <Link href="/" className="text-xl font-bold text-blue-600">
                MarineBio
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* 2. a 태그를 Link 태그로 변경 */}
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">홈</Link>
              <Link href="/about" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">회사소개</Link>
              <Link href="/products" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">제품소개</Link>
              <Link href="/technology" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">기술소개</Link>
              <Link href="/gallery" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">갤러리</Link>
              <Link href="/press" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">보도자료</Link>
              <Link href="/contact" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">문의하기</Link>
            </nav>
          </div>
          <div className="flex items-center">
            <Link href="/admin" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              관리자
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

// 1. Footer 컴포넌트 분리
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MarineBio</h3>
            <p className="text-gray-400">혁신적인 해양 나노섬유 기술로 지속가능한 미래를 만들어갑니다.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">회사</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {/* 2. a 태그를 Link 태그로 변경 */}
              <li><Link href="/about" className="hover:text-white">회사소개</Link></li>
              <li><Link href="/technology" className="hover:text-white">기술소개</Link></li>
              <li><Link href="/press" className="hover:text-white">보도자료</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">제품</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products" className="hover:text-white">제품소개</Link></li>
              <li><Link href="/gallery" className="hover:text-white">갤러리</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">지원</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-white">문의하기</Link></li>
              <li>이메일: info@marinebio.com</li>
              <li>전화: +82-2-1234-5678</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 MarineBio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header /> {/* 분리된 Header 컴포넌트 사용 */}
        <main>{children}</main>
        <Footer /> {/* 분리된 Footer 컴포넌트 사용 */}
      </body>
    </html>
  )
}