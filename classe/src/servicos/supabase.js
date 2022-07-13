const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SPACES_URL, process.env.SPACES_KEY);

module.exports = supabase;