import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { extractDomain } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: '유효한 이메일을 입력해주세요.' },
        { status: 400 }
      );
    }

    const domain = extractDomain(request.headers.get('origin') || '');
    
    const { data, error } = await supabaseAdmin
      .from('mailing_list')
      .upsert({
        email,
        domain,
        is_active: true,
        subscribed_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      if (error.code === '23505') { // 중복 키 오류
        return NextResponse.json(
          { error: '이미 구독된 이메일입니다.' },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json({
      success: true,
      message: '메일링 리스트에 성공적으로 등록되었습니다.'
    });

  } catch (error) {
    console.error('Mailing subscription error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}