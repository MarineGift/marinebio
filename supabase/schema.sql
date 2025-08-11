-- MarineBio Supabase Database Schema
-- 해양 나노섬유 기술 회사용 CMS 시스템

-- 1. 문의 테이블 (inquiry)
CREATE TABLE inquiry (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    domain VARCHAR(255) NOT NULL, -- 자동 추출된 도메인
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_replied BOOLEAN DEFAULT FALSE,
    replied_at TIMESTAMP WITH TIME ZONE,
    reply_message TEXT
);

-- 2. 갤러리 테이블 (gallery)
CREATE TABLE gallery (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    image_url TEXT NOT NULL,
    caption TEXT,
    alt_text VARCHAR(255),
    domain VARCHAR(255) NOT NULL, -- 멀티홈페이지 구분
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. 뉴스/공지사항 테이블 (news)
CREATE TABLE news (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    slug VARCHAR(255) UNIQUE,
    domain VARCHAR(255) NOT NULL,
    status VARCHAR(20) DEFAULT 'draft', -- draft, published, archived
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    views INTEGER DEFAULT 0,
    featured_image TEXT,
    tags TEXT[] -- PostgreSQL array for tags
);

-- 4. 캐러셀/슬라이드 테이블 (carousel)
CREATE TABLE carousel (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    image_url TEXT NOT NULL,
    title VARCHAR(255),
    subtitle TEXT,
    description TEXT,
    button_text VARCHAR(100),
    button_link TEXT,
    domain VARCHAR(255) NOT NULL,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. 메일링 리스트 테이블 (mailing_list)
CREATE TABLE mailing_list (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    domain VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    unsubscribed_at TIMESTAMP WITH TIME ZONE,
    UNIQUE(email, domain)
);

-- 6. 관리자 사용자 테이블 (admin_users)
CREATE TABLE admin_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin', -- admin, super_admin, editor
    domain VARCHAR(255), -- 특정 도메인만 관리하는 경우
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. 페이지 콘텐츠 테이블 (pages)
CREATE TABLE pages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    content TEXT,
    meta_title VARCHAR(255),
    meta_description TEXT,
    domain VARCHAR(255) NOT NULL,
    template VARCHAR(100) DEFAULT 'default', -- page template type
    is_published BOOLEAN DEFAULT FALSE,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(slug, domain)
);

-- 8. 메뉴 구조 테이블 (menus)
CREATE TABLE menus (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    url VARCHAR(255),
    parent_id UUID REFERENCES menus(id),
    domain VARCHAR(255) NOT NULL,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    target VARCHAR(20) DEFAULT '_self', -- _self, _blank
    icon VARCHAR(100), -- icon class name
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. 배너 테이블 (banners)
CREATE TABLE banners (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url TEXT NOT NULL,
    link_url TEXT,
    alt_text VARCHAR(255),
    domain VARCHAR(255) NOT NULL,
    position VARCHAR(50) DEFAULT 'header', -- header, sidebar, footer
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. 설정 테이블 (settings)
CREATE TABLE settings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    key VARCHAR(255) NOT NULL,
    value TEXT,
    domain VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(key, domain)
);

-- 인덱스 생성
CREATE INDEX idx_inquiry_domain ON inquiry(domain);
CREATE INDEX idx_inquiry_created_at ON inquiry(created_at DESC);
CREATE INDEX idx_inquiry_is_replied ON inquiry(is_replied);

CREATE INDEX idx_gallery_domain ON gallery(domain);
CREATE INDEX idx_gallery_active ON gallery(is_active);
CREATE INDEX idx_gallery_order ON gallery(display_order);

CREATE INDEX idx_news_domain ON news(domain);
CREATE INDEX idx_news_status ON news(status);
CREATE INDEX idx_news_published ON news(published_at DESC);

CREATE INDEX idx_carousel_domain ON carousel(domain);
CREATE INDEX idx_carousel_active ON carousel(is_active);
CREATE INDEX idx_carousel_order ON carousel(display_order);

CREATE INDEX idx_mailing_domain ON mailing_list(domain);
CREATE INDEX idx_mailing_active ON mailing_list(is_active);

CREATE INDEX idx_pages_domain ON pages(domain);
CREATE INDEX idx_pages_published ON pages(is_published);

CREATE INDEX idx_menus_domain ON menus(domain);
CREATE INDEX idx_menus_parent ON menus(parent_id);
CREATE INDEX idx_menus_order ON menus(display_order);

CREATE INDEX idx_banners_domain ON banners(domain);
CREATE INDEX idx_banners_position ON banners(position);
CREATE INDEX idx_banners_active ON banners(is_active);

CREATE INDEX idx_settings_domain ON settings(domain);

-- RLS (Row Level Security) 정책 활성화
ALTER TABLE inquiry ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE carousel ENABLE ROW LEVEL SECURITY;
ALTER TABLE mailing_list ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE menus ENABLE ROW LEVEL SECURITY;
ALTER TABLE banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- 샘플 데이터 삽입
INSERT INTO admin_users (email, password_hash, name, role) VALUES 
('admin@marinebio.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewKyNIbc6e7UdLFa', 'System Admin', 'super_admin');

INSERT INTO settings (key, value, domain, description) VALUES 
('site_title', 'MarineBio', 'marinebio.com', 'Website title'),
('site_description', 'Revolutionary marine nano-fiber technology', 'marinebio.com', 'Website description'),
('smtp_host', '', 'marinebio.com', 'SMTP server host'),
('smtp_port', '587', 'marinebio.com', 'SMTP server port'),
('admin_phone', '', 'marinebio.com', 'Admin phone number for notifications');

-- 업데이트 함수 및 트리거
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pages_updated_at BEFORE UPDATE ON pages
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_settings_updated_at BEFORE UPDATE ON settings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
EOF

echo "✅ 핵심 API 및 데이터베이스 파일들이 생성되었습니다!"
echo ""
echo "📂 추가로 생성된 파일들:"
echo "- lib/supabase.ts (데이터베이스 클라이언트)"
echo "- lib/utils.ts (유틸리티 함수들)"
echo "- lib/auth.ts (인증 시스템)"
echo "- lib/communications.ts (이메일/SMS)"
echo "- app/api/contact/route.ts (문의 API)"
echo "- app/api/mailing/subscribe/route.ts (메일링 API)"
echo "- app/api/admin/login/route.ts (관리자 로그인)"
echo "- app/admin/page.tsx (관리자 대시보드)"
echo "- supabase/schema.sql (데이터베이스 스키마)"
echo ""