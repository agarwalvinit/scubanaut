import './home.scss';
import Rotator from '../../js/Rotator';
import Data from '../../constants/data';
import source from './home.handlebars';

const rotator = new Rotator();
rotator.rotate(document.getElementsByClassName('logo')[0], 500);
const template = Handlebars.compile(source);
template(Data);
