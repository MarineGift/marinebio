import React from 'react';
import { Users, Award, Target, Globe, Microscope, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">회사소개</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              MarineBio는 혁신적인 해양 나노섬유 기술을 통해 
              지속가능한 미래를 만들어가는 선도적인 바이오테크 기업입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">우리의 비전</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                해양 자원을 활용한 친환경 나노섬유 기술로 전 세계 지속가능성 문제를 해결하고,
                인류의 삶의 질 향상에 기여하는 것이 우리의 목표입니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">지속가능한 기술 혁신</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">글로벌 환경 보호</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">인류 복지 증진</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600" 
                alt="연구소 전경" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">핵심 가치</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 혁신적 연구개발</li>
                <li>• 환경 친화적 솔루션</li>
                <li>• 글로벌 파트너십</li>
                <li>• 지속가능한 성장</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">연구개발 경력</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">특허 보유</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">글로벌 파트너</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">전문 연구진</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}