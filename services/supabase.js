import { createClient } from '@supabase/supabase-js'
const URL = "https://otgegesmjkdjmcppbsbl.supabase.co"
const SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90Z2VnZXNtamtkam1jcHBic2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzOTgwMzEsImV4cCI6MjAxMTk3NDAzMX0.asaAJFWtsH71fzXfIfqZpIaLSIy3VoIlQ5vmz_DZTFQ"
export const supabase = createClient(URL, SERVICE_KEY,{
    auth: {
        autoRefreshToken: true
    }})
export default supabase