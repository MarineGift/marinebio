# ��� MarineBio - Revolutionary Marine Technology

> 차세대 해양 나노섬유 기술로 지속가능한 미래를 만들어가는 혁신적인 웹 플랫폼

![MarineBio](https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=400&fit=crop)

## ✨ 주요 기능

- ���️ **완전한 관리자 CMS** - 콘텐츠, 사용자, 시스템 관리
- ��� **반응형 웹사이트** - 모든 디바이스 최적화
- ��� **보안 인증 시스템** - JWT 기반 관리자 로그인
- ��� **통합 커뮤니케이션** - 이메일/SMS 자동화
- ���️ **동적 갤러리** - 이미지 업로드 및 관리
- ��� **뉴스/공지사항** - 실시간 콘텐츠 관리
- ��� **캐러셀 시스템** - 메인 배너 관리
- ��� **멀티도메인 지원** - 여러 사이트 운영 가능

## ��� 빠른 시작

### 1. 저장소 클론
```bash
git clone https://github.com/MarineGift/marinebio.git
cd marinebio
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
```bash
cp .env.example .env.local
# .env.local 파일을 편집하여 실제 값 입력
```

### 4. 데이터베이스 설정
1. [Supabase](https://supabase.com)에서 프로젝트 생성
2. `supabase/schema.sql` 파일의 SQL 명령어 실행
3. 환경 변수에 Supabase 정보 입력

### 5. 관리자 계정 생성
```bash
npm run setup-admin admin@marinebio.com your_password "Admin User"
```

### 6. 개발 서버 실행
```bash
npm run dev
# README.md
cat > README.md << 'EOF'
# ��� MarineBio - Revolutionary Marine Technology

> 차세대 해양 나노섬유 기술로 지속가능한 미래를 만들어가는 혁신적인 웹 플랫폼

![MarineBio](https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=400&fit=crop)

## ✨ 주요 기능

- ���️ **완전한 관리자 CMS** - 콘텐츠, 사용자, 시스템 관리
- ��� **반응형 웹사이트** - 모든 디바이스 최적화
- ��� **보안 인증 시스템** - JWT 기반 관리자 로그인
- ��� **통합 커뮤니케이션** - 이메일/SMS 자동화
- ���️ **동적 갤러리** - 이미지 업로드 및 관리
- ��� **뉴스/공지사항** - 실시간 콘텐츠 관리
- ��� **캐러셀 시스템** - 메인 배너 관리
- ��� **멀티도메인 지원** - 여러 사이트 운영 가능

## ��� 빠른 시작

### 1. 저장소 클론
```bash
git clone https://github.com/MarineGift/marinebio.git
cd marinebio
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
```bash
cp .env.example .env.local
# .env.local 파일을 편집하여 실제 값 입력
```

### 4. 데이터베이스 설정
1. [Supabase](https://supabase.com)에서 프로젝트 생성
2. `supabase/schema.sql` 파일의 SQL 명령어 실행
3. 환경 변수에 Supabase 정보 입력

### 5. 관리자 계정 생성
```bash
npm run setup-admin admin@marinebio.com your_password "Admin User"
```

### 6. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## ���️ 기술 스택

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Email**: SendGrid
- **SMS**: Twilio  
- **Deployment**: Railway, Vercel, Docker
- **Icons**: Lucide React

## ��� 프로젝트 구조

```
marinebio/
├── app/                    # Next.js App Router
│   ├── admin/             # 관리자 대시보드
│   ├── api/               # API 라우트
│   ├── about/             # 회사소개
│   ├── products/          # 제품소개
│   ├── technology/        # 기술소개
│   ├── gallery/           # 갤러리
│   ├── press/             # 보도자료
│   ├── contact/           # 문의하기
│   ├── layout.tsx         # 메인 레이아웃
│   └── page.tsx           # 홈페이지
├── components/            # 재사용 컴포넌트
├── lib/                   # 유틸리티 함수
├── types/                 # TypeScript 타입
├── supabase/              # 데이터베이스 스키마
├── scripts/               # 유틸리티 스크립트
└── public/                # 정적 파일
```

## ���️ 관리자 기능

### 대시보드
- ��� 실시간 통계 (사용자, 문의, 갤러리, 슬라이드)
- ��� 빠른 작업 바로가기

### 콘텐츠 관리
- ��� 페이지 관리 (Markdown 지원)
- ��� 메뉴 구조 편집
- ���️ 갤러리 이미지 업로드
- ��� 메인 슬라이드 관리
- ��� 뉴스/공지사항 작성
- ��� 배너 관리

### 사용자 관리
- ��� 문의 내역 및 답변
- ��� 메일링 리스트 관리

## ��� 배포

### Railway (권장)
```bash
# Railway CLI 설치
npm install -g @railway/cli

# 로그인 및 배포
railway login
railway link
railway up
```

### Vercel
```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel --prod
```

### Docker
```bash
# 이미지 빌드
docker build -t marinebio .

# 컨테이너 실행
docker run -p 3000:3000 --env-file .env.local marinebio
```

## ��� 커뮤니케이션 설정

### SendGrid (이메일)
1. [SendGrid](https://sendgrid.com) 계정 생성
2. API 키 발급
3. 환경 변수에 설정

### Twilio (SMS)
1. [Twilio](https://twilio.com) 계정 생성
2. 전화번호 구매 및 설정
3. 환경 변수에 설정

## ���️ 보안 기능

- ��� JWT 기반 인증
- ���️ Row Level Security (RLS)
- ��� 비밀번호 암호화 (bcrypt)
- ��� API 라우트 보호
- ��� 입력 데이터 검증

## �� SEO 최적화

- ��� Meta tags 자동 생성
- ��� sitemap.xml 
- ��� robots.txt
- ��� Open Graph 지원
- ��� Twitter Cards

## ��� 디자인 시스템

- ��� Tailwind CSS 기반
- ��� Mobile-first 반응형
- ��� 다크모드 지원 준비
- ⚡ 부드러운 애니메이션
- ��� 접근성 고려

## ��� 모니터링

- ��� 실시간 방문자 추적
- ��� 이메일 발송 로그
- ��� 에러 로깅
- ��� 성능 메트릭

## ��� 기여하기

1. 저장소 포크
2. 기능 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add amazing feature'`)
4. 브랜치 푸시 (`git push origin feature/amazing-feature`)
5. Pull Request 생성

## ��� 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## ��� 지원

- ��� **이메일**: support@marinebio.com
- ��� **버그 리포트**: [GitHub Issues](https://github.com/MarineGift/marinebio/issues)
- ��� **토론**: [GitHub Discussions](https://github.com/MarineGift/marinebio/discussions)

## ��� 감사

- [Next.js](https://nextjs.org) - React 프레임워크
- [Supabase](https://supabase.com) - 백엔드 서비스
- [Tailwind CSS](https://tailwindcss.com) - CSS 프레임워크
- [Lucide](https://lucide.dev) - 아이콘 라이브러리

---

<div align="center">
  <strong>��� 바다에서 시작된 혁신, 미래로 향한 기술 ���</strong>
  <br/>
  <sub>MarineBio © 2025. All rights reserved.</sub>
</div>
