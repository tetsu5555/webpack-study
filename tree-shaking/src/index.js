// import map from 'lodash/map';
// import differenceWith from 'lodash/differenceWith';
// import divide from 'lodash/divide';
// import drop from 'lodash/drop';
// import dropRight from 'lodash/dropRight';
// import dropRightWhile from 'lodash/dropRightWhile';

// babel-plugin-transform-imports利用するとimportを簡潔にかける
// ↑のようにファイルを個別で指定してimportしなくても良い
import {
  map,
  differenceWith,
  divide,
  drop,
  dropRight,
  dropRightWhile,
} from 'lodash';
import { moduleB } from './modules';

map();
differenceWith();
divide();
drop();
dropRight();
dropRightWhile();
moduleB();