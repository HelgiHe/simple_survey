import { Question, Option, Answer, QuestionAnswer } from 'data/models';

export const schema = [
  `
  type DatabaseQuestionOption {
    name: String
    key: String
    createdAt: String
    updatedAt: String
    questionId: String
  }

  type DatabaseQuestionAnswer {
    id: String
    answer: String
  }

  type DatabaseQuestion {
    id: String
    question: String
    question_type: String
    options: [DatabaseQuestionOption]
    answers: [DatabaseQuestionAnswer]
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
        include: [
          { model: Option, as: 'options' },
          { model: QuestionAnswer, as: 'answers' },
        ],
      });

      return question;
    },
    async databaseGetAllAnswers() {
      const answers = await Answer.findAll({});

      return answers;
    },
  },
};
