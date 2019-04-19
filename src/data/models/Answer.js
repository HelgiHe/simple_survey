import DataType from 'sequelize';
import Model from '../sequelize';

const Answer = Model.define('Answer', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  question_id: {
    type: DataType.STRING(255),
  },

  answer_value: {
    type: DataType.TEXT,
  },
});

export default Answer;
