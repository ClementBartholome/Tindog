class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    setMatchStatus() {
        this.hasBeenSwiped = true
    }
    
     getBadgeHtml(){
        if(this.hasBeenSwiped){
            if(this.hasBeenLiked){
                return `<img class="badge" src="images/badge-like.png">`
            }else{
                return `<img class="badge" src="images/badge-nope.png">`
            }
        }else {
            return ""
        }
    }

    
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="feature-suggestion">
                <div class="dog-info">
                    <h3> ${name}, ${age} </h3>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="dog-img" src="${avatar}">
            </div>
            <div class="badge">
                ${this.getBadgeHtml()}
            </div> 
            `    
    }
}

export default Dog