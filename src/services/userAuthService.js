function userAuth(){
    let userIsAuth = false;
    let userId = "";
    let userData = "";
    const mainUrl = 'http://localhost:3000'

    this.getAuth = function () {
        return userIsAuth;
    };

    this.getUserData = function () {
        return userId;
    };

    this.setAuth = async function (data) {
        try{
            const url = `${mainUrl}/users`;
            const response = await fetch(url, {
                method: "POST",
                cache:"no-cache",
                credentials: "same-origin",
                headers: { "Content-Type":"application/json" },
                body: JSON.stringify(data)
            });

            let authData = await response.json();

            if(response.status === 400) return authData.authRes
        } catch{}
    } 
}