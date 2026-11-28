import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://qbbmjdaagsaffvowpbek.supabase.co';

const SUPABASE_ANON_KEY = 'sb_publishable_3zqwqNWa7CO18Aqzq1s-Dw_eUXHBgz4';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
