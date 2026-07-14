const { query } = require('../_shared/db');

module.exports = async (req) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const id = url.searchParams.get('id') || url.pathname.split('/').pop();


    if (!id) return { statusCode: 400, body: { error: 'Missing id' } };

    const { rows } = await query('SELECT * FROM products WHERE id = $1 LIMIT 1', [id]);
    const p = rows[0];
    if (!p) return { statusCode: 404, body: { error: 'Not found' } };

    return { statusCode: 200, body: { product: p } };
  } catch (e) {
    return { statusCode: 500, body: { error: e.message || 'Internal error' } };
  }
};

