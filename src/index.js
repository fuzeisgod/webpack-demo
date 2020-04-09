import _ from 'lodash'
import './style.css'
import icon from './logo.png'

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    var myIcon = new Image()
    myIcon.src = icon

    element.appendChild(myIcon)

    return element;
}

document.body.appendChild(component())