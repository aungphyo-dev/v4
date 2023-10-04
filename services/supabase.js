import { createClient } from '@supabase/supabase-js'
const URL = "https://otgegesmjkdjmcppbsbl.supabase.co"
const SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90Z2VnZXNtamtkam1jcHBic2JsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjM5ODAzMSwiZXhwIjoyMDExOTc0MDMxfQ.uNWYEHFajctQsNZeJggIiGMYbXrgf3ihVK79Lve2ZCs"
const options = {
    auth: {
        autoRefreshToken: true,
    }
}
const supabase = createClient(URL, SERVICE_KEY, options)
export default supabase