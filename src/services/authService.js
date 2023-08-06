const pool = require('../db/dbConfig');

class AuthService {
    async validarLogin(usuario, senha) {
        try {
            const query = 'SELECT * FROM validar_login($1, $2)';
            const values = [usuario, senha];
            const { rows } = await pool.query(query, values);
            if(rows[0].v_auth_token === 'Invalid credentials'){
               return null;
            }
            return rows.length > 0 ? rows[0] : null;
        } catch (error) {
            throw error;
        }
    }

    async salvarLogin(usuario, senha, isAdmin) {
        try {
            const query = 'SELECT * FROM salvar_login($1, $2, $3)';
            const values = [usuario, senha, isAdmin];
            const { rows } = await pool.query(query, values);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new AuthService();