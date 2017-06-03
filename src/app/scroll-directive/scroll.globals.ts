'use strict';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

export var windowOnScroll = Observable.fromEvent(window, 'scroll').debounceTime(5);