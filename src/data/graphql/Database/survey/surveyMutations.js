import { Question, Answer } from 'data/models';

export const mutation = [
  `
  databaseCreateQuestion(
    question: String!
    question_type: String!
    ): DatabaseQuestion

  databaseCreateAnswer(
    answer_value: String!
    ): DatabaseAnswer
`,
];

export const resolvers = {
  Mutation: {
    async databaseCreateQuestion(parent, args) {
      // Create new user with profile in database
      const question = await Question.create({
        question: args.question,
        question_type: args.question_type,
      });

      return question;
    },
    async databaseCreateAnswer(parent, args) {
      const answer = await Answer.create({
        answer_value: args.answer_value,
      });

      return answer;
    },
  },
};
