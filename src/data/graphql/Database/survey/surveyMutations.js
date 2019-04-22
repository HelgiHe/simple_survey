import { Question, Answer, Option } from 'data/models';

export const schema = [
  `
  input OptionInput {
    name: String!
    key: String
  }
`,
];

export const mutation = [
  `
  databaseCreateQuestion(
    question: String!
    question_type: String!
    options: [OptionInput]
    ): DatabaseQuestion

  databaseCreateAnswer(
    answer_value: String!
    ): DatabaseAnswer
  
    databaseCreateOption(
    options: [OptionInput]
    ): [DatabaseQuestionOption]
`,
];

export const resolvers = {
  Mutation: {
    async databaseCreateQuestion(parent, args) {
      const question = await Question.create(
        {
          question: args.question,
          question_type: args.question_type,
          options: [...args.options],
        },
        {
          include: [{ model: Option, as: 'options' }],
        },
      );
      return question;
    },
    async databaseCreateOption(parent, args) {
      const newOptions = args.options.forEach(async option => {
        Question.findByPk(option.key).then(async question => {
          await Option.create({
            name: option.name,
            key: option.key,
          }).then(opt => {
            question.addOptions(opt.id);
          });
        });
      });

      return newOptions;
    },
    async databaseCreateAnswer(parent, args) {
      const answer = await Answer.create({
        answer_value: args.answer_value,
      });

      return answer;
    },
  },
};
