const authService = require('../services/authService');

class AuthController {
    async login(req, res) {
        const { usuario, senha } = req.body;

        try {
            const user = await authService.validarLogin(usuario, senha);
            if (user) {
                const authToken = user.v_auth_token;
                res.set('Authorization', `${authToken}`);

                res.status(200).json({ message: 'Login successful!', user });
            }
        } catch (error) {
            if (error.message === 'Invalid credentials') {
                res.status(401).json({ message: 'Invalid credentials' });
            } else {
                res.status(500).json({ message: 'Error while logging in' });
            }
        }
    }

    async register(req, res) {
        const { usuario, senha, isAdmin } = req.body;

        try {
            await authService.salvarLogin(usuario, senha, isAdmin);
            res.status(201).json({ message: 'Registration successful!', user });
        } catch (error) {
            if (error.message === 'User already exists') {
                res.status(401).json({ message: 'User already exists' });
            } else {
                res.status(500).json({ message: 'Error while registering' });
            }
        }
    }

    async getUsers(req, res) {
        try {
            var { usuario } = req.body;
            if (!usuario || usuario === '') {
                usuario = null;
            }
            const users = await authService.getUsers(usuario);
            if (users === null) {
                res.status(401).json({ message: 'User not found' });
            } else {
                res.status(200).json({ message: 'Users fetched', users });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error while fetching users' });
        }
    }
}

module.exports = new AuthController();
