import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { sendConfirmationEmail, sendNotificationSMS } from '@/lib/communications';
import { extractDomain } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 도메인 자동 추출
    const domain = extractDomain(request.headers.get('origin') || '');
    
    // 데이터베이스에 저장
    const { data, error } = await supabaseAdmin
      .from('inquiry')
      .insert({
        name,
        email,
        message,
        domain,
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: '문의 등록 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    // 확인 이메일 발송 (비동기)
    try {
      await sendConfirmationEmail(email, name);
    } catch (emailError) {
      console.error('Email confirmation error:', emailError);
    }

    // SMS 알림 발송 (비동기)
    try {
      await sendNotificationSMS(`신규 문의가 접수되었습니다. 문의자: ${name}`);
    } catch (smsError) {
      console.error('SMS notification error:', smsError);
    }

    return NextResponse.json({
      success: true,
      message: '문의가 성공적으로 등록되었습니다.',
      data
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}