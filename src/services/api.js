export const searchLogin = async (email, senha) => {
    try {
        let url = "http://localhost:8080/api/usuario"`${email, senha}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("erro", error)
    }
}

