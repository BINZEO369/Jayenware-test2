// api-config.js - Central API Configuration
// Last Updated: 21 May 2026

const SUPABASE_URL = "https://tvqnanpfwzzvjmhdxkfz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2cW5hbnBmd3p6dmptaGR4a2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzMDY1OTcsImV4cCI6MjA5NDg4MjU5N30.jZ-SbnVDpek-Ep83rzsmth3ERyN6NatSIjd2NszEf8E";
const ADMIN_EMAIL = "binzeo369@gmail.com";
const LOGO_URL = "https://ozuwazkqyrxiwwfjceth.supabase.co/storage/v1/object/public/images/Beige%20Black%20Minimal%20Simple%20Modern%20Handwritten%20Graffiti%20Typographic%20Arts%20and_20251212_154142_0000.png";
const HOME_URL = "/home";
const LOGIN_URL = "/login";

// Initialize Supabase Client
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
