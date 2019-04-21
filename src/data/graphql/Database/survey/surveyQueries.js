import { Question, Option, Answer } from 'data/models';

export const schema = [
  `
  type DatabaseQuestionOption {
    name: String
    key: String
    createdAt: String
    updatedAt: String
    questionId: String
  }

  type DatabaseQuestion {
    id: String
    question: String
    question_type: String
    options: [DatabaseQuestionOption]
  }

  type DatabaseAnswer {
    id: String
    answer_value: String
  }

`,
];

export const queries = [
  `
  databaseGetAllQuestions: [DatabaseQuestion]
  databaseGetAllAnswers: [DatabaseAnswer]

`,
];

export const resolvers = {
  RootQuery: {
    async databaseGetAllQuestions() {
      const question = await Question.findAll({
        include: [{ model: Option, as: 'options' }],
      });

      return question;
    },
    async databaseGetAllAnswers() {
      const answers = await Answer.findAll({});

      return answers;
    },
  },
};
