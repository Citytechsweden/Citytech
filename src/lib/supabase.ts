import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xuvtrvzkkgnajyijkcsa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1dnRydnpra2duYWp5aWprY3NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwOTEwMDMsImV4cCI6MjA4NDY2NzAwM30.52nAOUqagjL7Y2DCyNtEcmrV2KFLCby1qk5_B6bPQR0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
