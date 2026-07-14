const { Pool } = require('@neondatabase/serverless');

// Neon Serverless Driver (recommandé sur Netlify)
// Env var: DATABASE_URL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

async function query(text, params) {
    const client = await pool.connect();
    try {
        return await client.query(text, params);
    } finally {
        client.release();
    }
}

module.exports = { query };

