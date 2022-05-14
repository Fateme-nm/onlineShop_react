export default function authHeader() {
    const admin = JSON.parse(localStorage.getItem("admin"))
    if (admin && admin.token) {
        return { token: admin.token }
    }
    return {}
}