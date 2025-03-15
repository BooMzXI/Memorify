export const handleRegister = async (regUser , regPass) => {
    try {
        const res = await fetch('api/register' , {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ user: regUser , password: regPass })
        })
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Failed to register");
        }
        const data = await res.json()
        if (!data.success) {
            return console.log('Error to register ' + data.error)
        }
        console.log("Congratulations success register")
        window.location.href = "/"
    } catch (err) {
        return console.log(err)
    }
}

export const handleLogin = async (username , password) => {
    try {
        const res = await fetch('api/login' , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ username , password })
            })
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to login");
            }
        const data = await res.json()
        console.log(data)
        if(!data.success){
            return alert("Incorrect username or password")
        }
        console.log("Success login")
        window.location.href = "/home"
    } catch (err) {
        return console.log(err)
    }
    
}