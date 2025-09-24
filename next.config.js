/** @type {import('next').NextConfig} */
const nextConfig = {
  // images.domains 설정은 외부 URL의 이미지를 next/image로 가져올 때 필요합니다.
  images: {
    domains: [
      'supabase.com',
      'images.unsplash.com',
      'marinebio.com',
      'localhost'
    ],
  },
  // env 설정은 .env.local 파일의 환경 변수를 클라이언트 측에서 사용할 수 있게 해줍니다.
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  // 'standalone' 옵션은 Docker와 같은 환경에 최적화된 배포용 폴더를 생성합니다.
  output: 'standalone'
}

module.exports = nextConfig