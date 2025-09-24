'use client'
import React, 'useState', 'useEffect' from 'react';
// next/image와 next/link를 import 합니다.
import Image from 'next/image';
import Link from 'next/link';
import { 
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ArrowRight,
  ChevronLeft, ChevronRight, Microscope, Leaf, Globe
} from 'lucide-react';

// --- 타입 정의 추가 ---
type Slide = {
  id: number;
  image_url: string;
  title: string;
  subtitle: string;
  description: string;
  button_text: string;
  button_link: string;
};

// --- 컴포넌트 외부로 데이터 분리 (불필요한 재생성 방지) ---
const slideData: Slide[] = [
  {
    id: 1,
    image_url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
    title: 'MarineBio',
    subtitle: 'Revolutionary Marine Technology',
    description: '차세대 해양 나노섬유 기술로 지속가능한 미래를 만들어갑니다',
    button_text: '자세히 보기',
    button_link: '/about'
  },
  {
    id: 2,
    image_url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200',
    title: 'Innovation',
    subtitle: 'Advanced Nano-Fiber Technology',
    description: '혁신적인 연구개발을 통해 새로운 가능성을 제시합니다',
    button_text: '기술 보기',
    button_link: '/technology'
  }
];

// 캐러셀 컴포넌트
const HeroCarousel: React.FC = () => {
  const [slides] = useState<Slide[]>(slideData); // 타입 적용
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return; // 슬라이드가 하나 이하면 실행 안함
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* --- 1. next/image 사용 --- */}
          <Image 
            src={slide.image_url} 
            alt={slide.title} 
            fill // 부모 요소를 꽉 채움
            style={{ objectFit: 'cover' }} // CSS의 object-cover와 동일
            priority={index === 0} // 첫 번째 이미지는 우선적으로 로드
            quality={80}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-8">
              <h2 className="text-4xl lg:text-6xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl lg:text-2xl mb-6 opacity-90">{slide.subtitle}</p>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80">{slide.description}</p>
              
              {/* --- 2. next/link 사용 --- */}
              <Link href={slide.button_link} className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                {slide.button_text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {slides.length > 1 && (
        <>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-10">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`} // 접근성 개선
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// 문의하기 컴포넌트
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // form 태그로 감쌀 경우를 대비
    // ... (기존 로직 동일)
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">문의하기</h2>
        <p className="text-gray-600">궁금한 점이 있으시면 언제든지 연락해 주세요.</p>
      </div>

      {/* 알림 메시지 부분은 기존 코드와 동일 */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" /> 문의가 성공적으로 접수되었습니다.
        </div>
      )}
      {submitStatus === 'error' && (
         <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
           <AlertCircle className="w-5 h-5 mr-2" /> 문의 접수 중 오류가 발생했습니다.
         </div>
      )}

      {/* --- 4. label 추가 (접근성 향상) --- */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="sr-only">이름</label>
          <input
            id="name"
            type="text"
            placeholder="이름 *"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">이메일</label>
          <input
            id="email"
            type="email"
            placeholder="이메일 *"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">문의 내용</label>
          <textarea
            id="message"
            placeholder="문의 내용 *"
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center"
        >
          {isSubmitting ? (
            <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div> 전송 중...</>
          ) : (
            <><Send className="w-5 h-5 mr-2" /> 문의하기</>
          )}
        </button>
      </form>
      {/* ... 하단 연락처 정보는 기존과 동일 */}
    </div>
  );
};


// (MailingSubscription 컴포넌트도 ContactForm과 유사하게 label을 추가해주면 좋습니다)

// HomePage 컴포넌트는 기존 코드와 동일
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-8">
        <HeroCarousel />
      </section>
      {/* ... 나머지 섹션들 */}
    </div>
  );
}