const { query } = require('../_shared/db');

module.exports = async (req, context) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const cat = url.searchParams.get('cat');
    const q = url.searchParams.get('q');
    const sort = url.searchParams.get('sort') || 'featured';
    const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10));
    const limit = Math.min(24, Math.max(1, parseInt(url.searchParams.get('limit') || '12', 10)));


    const where = [];
    const params = [];

    if (cat && cat !== 'all') {
      params.push(cat);
      where.push(`category = $${params.length}`);
    }

    if (q && q.trim()) {
      params.push(`%${q.trim().toLowerCase()}%`);
      where.push(`(LOWER(name) LIKE $${params.length})`);
    }

    const whereSQL = where.length ? `WHERE ${where.join(' AND ')}` : '';

    const sortMap = {
      featured: 'featured_score DESC',
      'price-asc': 'price ASC',
      'price-desc': 'price DESC',
      new: 'created_at DESC',
    };
    const sortSQL = sortMap[sort] || sortMap.featured;

    const offset = (page - 1) * limit;

    const sql = `
      SELECT p.*
      FROM products p
      ${whereSQL}
      ORDER BY ${sortSQL}
      LIMIT $${params.length + 1} OFFSET $${params.length + 2}
    `;

    params.push(limit, offset);

    const { rows } = await query(sql, params);

    // NOTE: images & signed urls seront ajoutées dans une prochaine itération.
    // On renvoie pour l’instant les produits.
    return {
      statusCode: 200,
      body: { products: rows },
    };
  } catch (e) {
    return { statusCode: 500, body: { error: e.message || 'Internal error' } };
  }
};

