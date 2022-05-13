export default function authHeader() {
    const token = localStorage.getItem("token")
    return token ? { token } : {}
}