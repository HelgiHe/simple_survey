import DataType from 'sequelize';
import Model from '../sequelize';

const Answer = Model.define('Answer', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  question_id: {
    type: DataType.UUID,
  },

  answer_value: {
    type: DataType.TEXT,
  },
});

export default Answer;
