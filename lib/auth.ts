import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import { supabaseAdmin } from './supabase';

export async function verifyAuth(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Missing authorization header');
    }

    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    
    // 사용자 정보 조회
    const { data: admin, error } = await supabaseAdmin
      .from('admin_users')
      .select('*')
      .eq('id', decoded.userId)
      .eq('is_active', true)
      .single();

    if (error || !admin) {
      throw new Error('Invalid user');
    }

    return admin;
  } catch (error) {
    throw new Error('Authentication failed');
  }
}

export function generateToken(userId: string, email: string, role: string) {
  return jwt.sign(
    { userId, email, role },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  );
}