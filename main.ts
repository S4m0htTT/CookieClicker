class Cookie {
    protected nbCookies: number
    protected multiplicator: number

    constructor(nbCookies: number, multiplicator: number) {
        this.nbCookies = nbCookies
        this.multiplicator = multiplicator
    }
    getCookie(): string {
        return this.nbCookies.toFixed(1)
    }
    addCookie(): void {
        this.nbCookies += (this.multiplicator * 0.2)
    }
    click(): void {
        this.nbCookies += 0.5
    }
    supprCookie(suppr: number): void {
        this.nbCookies -= suppr
    }
}

class Grandma extends Cookie {
    protected nbGrandma: number

    constructor(nbCookies: number, multiplicator: number, nbGrandma: number) {
        super(nbCookies, multiplicator)
        this.nbGrandma = nbGrandma
    }
    howGrandma(): string {
        return this.nbGrandma.toFixed(1)
    }
    getGrandma():void {
        if (this.nbCookies >= 100){
            super.supprCookie(100)
            this.nbGrandma += 1
        }else{
            console.error("Not enough cookies")
        }
    }
    addCookie(): void {
        this.nbCookies += (this.multiplicator * (0.2 + this.nbGrandma))
    }
    click(): void {
        this.nbCookies += 0.5 + this.nbGrandma
    }
}

class Farm extends Grandma{
    protected nbFarm: number

    constructor(nbCookies: number, multiplicator: number, nbGrandma: number, nbFarm: number){
        super(nbCookies, multiplicator, nbGrandma)
        this.nbFarm = nbFarm
    }

    howFarm(): string {
        return this.nbFarm.toFixed(1)
    }
    getFarm():void {
        if (this.nbCookies >= 1000){
            super.supprCookie(1000)
            this.nbFarm += 1
        }else{
            console.error("Not enough cookies")
        }
    }
    addCookie(): void {
        this.nbCookies += (this.multiplicator * (0.2 + this.nbGrandma + this.nbFarm*10))
    }
    click(): void {
        this.nbCookies += 0.2 + this.nbGrandma + this.nbFarm*10
    }
}

const cookie = new Farm(0, 2, 0, 0)

var nbCookie = cookie.getCookie()
var nbGrandma = cookie.howGrandma()

const compteur = document.getElementById("compteur")
const grandmatxt = document.getElementById("grandmatxt")
const farmtxt = document.getElementById("farmtxt")

compteur.innerHTML = nbCookie.toString()
grandmatxt.innerHTML = cookie.howGrandma()
farmtxt.innerHTML = cookie.howFarm()

setInterval(function () {
    cookie.addCookie()
    nbCookie = cookie.getCookie()
    compteur.innerHTML = nbCookie.toString()
}, 1000)

function cookieClick() {
    cookie.click()
    nbCookie = cookie.getCookie()
    compteur.innerHTML = nbCookie.toString()
}

function getMa(){
    cookie.getGrandma()
    nbCookie = cookie.getCookie()
    compteur.innerHTML = nbCookie.toString()
    grandmatxt.innerHTML = cookie.howGrandma()
}

function getFar(){
    cookie.getFarm()
    nbCookie = cookie.getCookie()
    compteur.innerHTML = nbCookie.toString()
    farmtxt.innerHTML = cookie.howFarm()
}