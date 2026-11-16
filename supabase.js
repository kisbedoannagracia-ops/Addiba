
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://anvbmvrsvulcikkewzrz.supabase.co';

const SUPABASE_ANON_KEY = 'sb_publishable_jMVDUGXVl_9m5F0wHTyTmw_oQxNRq9-';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
