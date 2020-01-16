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

            if(response.status === 400) return authData.authRes;
            userIsAuth = true;
            userId = authData;
            return userIsAuth;
        } catch  (err){
            console.error(err)
        }
    };

    this.register = async function(user) {
        try {
            let response = await fetch(`${mainUrl}/users`,
            {   name : 'test',
                last_name: 'test',
                email:'test@test.com',
                password : '$2b$10$JIUVLWfP3u.kLk/Hx/oIUuElj3pshILO3FVBblFjmbNczcogSeCGK',
                method : "POST",
                body : JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }

            }
            );
            let data = await response.json();
            if(response.status === 400) return { error: true, message: data.error}
            return{ error: false, id: data}
            
        } catch (error) {
            console.error(error);
        }
    
    }
    this.setHardAuth = () => {
        userIsAuth = true
    }
    this.setId = function(id) {
        userId = id;
    }
    this.getId = function () {
        return userId;
    }
    this.logout = function () {
        userIsAuth = false;
    }
}


export default new userAuth();