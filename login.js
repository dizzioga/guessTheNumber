const loginBtn = document.getElementById(`loginBtn`);

class User{
    constructor(username, password){
        this.username,
        this.password
    }

    static userCount = 0;

    clientInformation(username){
        this.username = username;
        User.userCount++
    }
}

    loginBtn.onclick = function(){
        return prompt(`Your user name:`)
    }