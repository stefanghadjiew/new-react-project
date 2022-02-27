class DB {
    constructor(usersDB) {
        this.usersDb = usersDB
    }

    checkForUser = userInfo => {
        return this.usersDb.findIndex(user => user.email === userInfo.email && user.password === userInfo.password) != -1 
    }

    createNewUser = userInfo => {
        return this.checkForUser(userInfo) ? false : this.usersDb = [...this.usersDb,userInfo] 
    }

    findUser = userInfo => {
        return this.checkForUser(userInfo) ? this.usersDb.filter(user => user.email === userInfo.email && user.password === userInfo.password)[0] : false    
    }

    deleteUser = userInfo => {
        if(this.checkForUser(userInfo)) {
            const userIndex = this.usersDb.findIndex(user => user.email === userInfo.email && user.password === userInfo.password)
            return this.usersDb.splice(userIndex,1)
        }
        return false
    }
}

const db = new DB([])
export default db

