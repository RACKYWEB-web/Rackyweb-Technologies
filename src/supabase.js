import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://snokjgbdikpeszcbjhey.supabase.co'
const supabaseAnonKey = 'sb_publishable_jSMiDDrOLt2FkRVb5zVL-Q_b9Xba7wP'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)