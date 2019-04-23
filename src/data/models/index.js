import sequelize from '../sequelize';

import Question from './Question';
import Option from './Option';
import QuestionAnswer from './QuestionAnswer';
import User from './User';
import UserLogin from './UserLogin';
import UserClaim from './UserClaim';
import UserProfile from './UserProfile';

Question.hasMany(Option, {
  foreignKey: 'questionId',
  as: 'options',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

Option.belongsTo(Question);

Question.hasMany(QuestionAnswer, {
  foreignKey: 'questionId',
  as: 'answers',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export {
  User,
  UserLogin,
  UserClaim,
  UserProfile,
  Question,
  Option,
  QuestionAnswer,
};
