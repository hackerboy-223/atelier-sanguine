const jwt = require('jsonwebtoken');

function getBearerToken(req) {
  const h = req.headers?.authorization || '';
  const [type, token] = h.split(' ');
  if (type?.toLowerCase() !== 'bearer' || !token) return null;
  return token;
}

function verifyJWT(token) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET missing');
  return jwt.verify(token, secret);
}

function requireAuth(roles = []) {
  return async (req) => {
    const token = getBearerToken(req);
    if (!token) return { statusCode: 401, body: { error: 'Unauthorized' } };

    let payload;
    try {
      payload = verifyJWT(token);
    } catch {
      return { statusCode: 401, body: { error: 'Invalid token' } };
    }

    const userRole = payload.role;
    if (roles.length && !roles.includes(userRole)) {
      return { statusCode: 403, body: { error: 'Forbidden' } };
    }

    return { ok: true, payload };
  };
}

module.exports = { requireAuth };

