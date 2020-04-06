import 'reset-css'
import '../assets/sass/main.sass'

let template = require('../components/card.pug')
let locals = {
    users: ['user1', 'user2', 'user3', 'user4', 'user5']
}
document.querySelector('.container').innerHTML = template()
