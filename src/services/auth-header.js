export default function authHeader() {
    const admin = localStorage.getItem("admin")
    if (admin && admin.token) {
        return { token: admin.token }
    }
    return {}
}