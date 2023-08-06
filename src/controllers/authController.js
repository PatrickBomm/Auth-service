const authService = require('../services/authService');

class AuthController {
    async login(req, res) {
        const { usuario, senha, isAdmin } = req.body;

        try {
            const user = await authService.validarLogin(usuario, senha, isAdmin);
            if (user) {
                // Authentication successful
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
            const user = await authService.salvarLogin(usuario, senha,);
            if (user) {
                // Authentication successful
                res.status(200).json({ message: 'Registration successful!', user });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error while registering' });
        }
    }
}

module.exports = new AuthController();
