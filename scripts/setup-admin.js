const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function createAdminUser() {
  const email = process.argv[2] || 'admin@marinebio.com';
  const password = process.argv[3] || 'admin123';
  const name = process.argv[4] || 'System Administrator';

  try {
    const passwordHash = await bcrypt.hash(password, 12);
    
    const { data, error } = await supabase
      .from('admin_users')
      .insert({
        email,
        password_hash: passwordHash,
        name,
        role: 'super_admin'
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating admin user:', error);
      return;
    }

    console.log('✅ Admin user created successfully!');
    console.log('📧 Email:', email);
    console.log('🔑 Password:', password);
    console.log('🛡️ Role: super_admin');
    console.log('');
    console.log('⚠️ Please change the password after first login.');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

createAdminUser();