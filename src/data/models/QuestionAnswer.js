import DataType from 'sequelize';
import Model from '../sequelize';

const QuestionAnswer = Model.define('QuestionAnswer', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  answer: {
    type: DataType.TEXT,
  },

  key: {
    type: DataType.STRING(100),
  },
});

export default QuestionAnswer;
