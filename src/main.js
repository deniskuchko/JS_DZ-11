import {speechButtonHandler, yesNoButtonHandler,cardFactory, renderResult, updateCard} from './speech/speech';
/* Speech API */
speechButtonHandler();
yesNoButtonHandler();
cardFactory();
renderResult();
updateCard();
updateCard(-1);

/* zapros Golosom */
import{zaprosGolosom} from './zapros/zapros';
zaprosGolosom();
/* Time */
import{showTime} from './data/data';
showTime();
/* Language */

import{fetchLang, showLang} from './translate/translate';
showLang();
fetchLang();


