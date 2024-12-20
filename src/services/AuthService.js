import $api from "../http";

export default class AuthService {
    static async login(login, password)  {
        return $api.post('/login', {login, password})
    }

    static async logout() {
        return $api.post('/logout')
    }
}