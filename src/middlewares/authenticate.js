const jwt = require('jsonwebtoken');
const pool = require('../db/dbConfig');

async function authenticate(req, res, next) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Authentication required.' });
  }

  try {
    const isValidToken = await isValidAuthToken(token);
    if (isValidToken.get_user_token === false) {
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
}

async function isValidAuthToken(token) {
  const query = 'SELECT * FROM get_user_token($1)';
  const values = [token];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

module.exports = authenticate;
