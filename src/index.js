import _ from 'lodash';
import printMe from './print.js'

function component() {
    //创建根节点
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello','webpack'],' ');

    var btn = document.createElement('button');
    btn.innerHTML = '点了你就是傻逼';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}
document.body.appendChild(component());