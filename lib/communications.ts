import sgMail from '@sendgrid/mail';

// SendGrid 설정
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function sendConfirmationEmail(email: string, name: string) {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('SendGrid not configured, skipping email');
    return;
  }

  const msg = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: '문의 접수 확인 - MarineBio',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">문의 접수가 완료되었습니다</h2>
        <p>안녕하세요 ${name}님,</p>
        <p>MarineBio에 문의해 주셔서 감사합니다. 접수된 문의는 신속히 검토 후 답변드리겠습니다.</p>
        <p>감사합니다.</p>
        <hr style="margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          본 메일은 자동 발송되는 메일입니다.
        </p>
      </div>
    `
  };

  await sgMail.send(msg);
}

export async function sendReplyEmail(email: string, name: string, replyMessage: string) {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('SendGrid not configured, skipping email');
    return;
  }

  const msg = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: '문의 답변 - MarineBio',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">문의 답변</h2>
        <p>안녕하세요 ${name}님,</p>
        <p>문의해 주신 내용에 대한 답변입니다:</p>
        <div style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
          ${replyMessage.replace(/\n/g, '<br>')}
        </div>
        <p>추가 문의사항이 있으시면 언제든 연락 주세요.</p>
        <p>감사합니다.</p>
      </div>
    `
  };

  await sgMail.send(msg);
}

export async function sendNotificationSMS(message: string) {
  // Twilio 구현은 선택사항
  console.log('SMS 알림:', message);
}