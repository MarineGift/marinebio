'use client'
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  MessageSquare, 
  Images, 
  Monitor, 
  PlusCircle, 
  Edit, 
  Eye, 
  Trash2,
  FileText,
  Menu,
  Settings,
  BarChart3,
  Zap,
  Upload,
  Calendar
} from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 25,
    pendingInquiries: 8,
    galleryImages: 20,
    activeSlides: 15
  });

  const [activeTab, setActiveTab] = useState('content');
  const [activeContentTab, setActiveContentTab] = useState('pages');

  const StatCard = ({ icon: Icon, title, value, color }: any) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-3xl font-bold ${color}`}>{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${color === 'text-blue-600' ? 'bg-blue-100' : 
                                          color === 'text-red-600' ? 'bg-red-100' :
                                          color === 'text-purple-600' ? 'bg-purple-100' : 'bg-green-100'}`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
      </div>
    </div>
  );

  const TabButton = ({ isActive, onClick, children, icon: Icon }: any) => (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
        isActive 
          ? 'bg-blue-100 text-blue-700 border border-blue-200' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon className="w-4 h-4 mr-2" />
      {children}
    </button>
  );

  const QuickActionCard = ({ icon: Icon, title, description, color, onClick }: any) => (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow cursor-pointer group"
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-lg ${color} mr-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl mr-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">MarineBio 관리자 대시보드</h1>
                <p className="text-gray-600">효율적인 웹사이트 관리 시스템</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">시스템 관리</p>
                <p className="text-sm font-medium">웹사이트 현황을 관리합니다</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            icon={Users} 
            title="총 사용자" 
            value={stats.totalUsers} 
            color="text-blue-600" 
          />
          <StatCard 
            icon={MessageSquare} 
            title="미처리 문의" 
            value={stats.pendingInquiries} 
            color="text-red-600" 
          />
          <StatCard 
            icon={Images} 
            title="갤러리 이미지" 
            value={stats.galleryImages} 
            color="text-purple-600" 
          />
          <StatCard 
            icon={Monitor} 
            title="활성 슬라이드" 
            value={stats.activeSlides} 
            color="text-green-600" 
          />
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <TabButton
            isActive={activeTab === 'content'}
            onClick={() => setActiveTab('content')}
            icon={FileText}
          >
            콘텐츠 관리
          </TabButton>
          <TabButton
            isActive={activeTab === 'users'}
            onClick={() => setActiveTab('users')}
            icon={Users}
          >
            사용자 관리
          </TabButton>
          <TabButton
            isActive={activeTab === 'system'}
            onClick={() => setActiveTab('system')}
            icon={Settings}
          >
            시스템 설정
          </TabButton>
          <TabButton
            isActive={activeTab === 'analytics'}
            onClick={() => setActiveTab('analytics')}
            icon={BarChart3}
          >
            분석/리포트
          </TabButton>
        </div>

        {/* Content Area */}
        <div className="mb-8">
          {activeTab === 'content' && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <FileText className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">콘텐츠 관리</h3>
              <p className="text-gray-600">페이지, 갤러리, 뉴스 등의 콘텐츠를 관리합니다.</p>
            </div>
          )}
          {activeTab === 'users' && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">사용자 관리</h3>
              <p className="text-gray-600">문의 내역 및 메일링 리스트를 관리합니다.</p>
            </div>
          )}
          {activeTab === 'system' && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <Settings className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">시스템 설정</h3>
              <p className="text-gray-600">시스템 환경설정을 관리합니다.</p>
            </div>
          )}
          {activeTab === 'analytics' && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <BarChart3 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">분석/리포트</h3>
              <p className="text-gray-600">사이트 방문 통계와 리포트를 확인합니다.</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center mb-6">
            <Zap className="w-6 h-6 text-orange-500 mr-2" />
            <h2 className="text-xl font-bold text-gray-900">빠른 작업</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickActionCard
              icon={PlusCircle}
              title="새 페이지 추가"
              description="새로운 웹페이지를 생성합니다"
              color="bg-blue-500"
              onClick={() => alert('새 페이지 추가 기능')}
            />
            <QuickActionCard
              icon={Edit}
              title="새 공지사항 작성"
              description="공지사항을 작성하고 게시합니다"
              color="bg-green-500"
              onClick={() => alert('새 공지사항 작성 기능')}
            />
            <QuickActionCard
              icon={Upload}
              title="이미지 업로드"
              description="갤러리에 새 이미지를 업로드합니다"
              color="bg-purple-500"
              onClick={() => alert('이미지 업로드 기능')}
            />
            <QuickActionCard
              icon={Menu}
              title="메뉴 구조 편집"
              description="웹사이트 네비게이션을 수정합니다"
              color="bg-orange-500"
              onClick={() => alert('메뉴 구조 편집 기능')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}