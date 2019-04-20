import {
  User,
  UserClaim,
  UserLogin,
  UserProfile,
  Question,
  Option,
} from 'data/models';

export const schema = [
  `
  # A user stored in the local database
  type DatabaseUser {
    id: String
    email: String
    emailConfirmed: Boolean
    logins: [DatabaseUserLogin]
    claims: [DatabaseUserClaim]
    profile: DatabaseUserProfile
    updatedAt: String
    createdAt: String
  }

  type DatabaseUserLogin {
    name: String
    key: String
    createdAt: String
    updatedAt: String
    userId: String
  }

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
    question_id: String
    answer_value: String
  }

  type DatabaseUserClaim {
    id: Int
    type: String
    value: String
    createdAt: String
    updatedAt: String
    userId: String
  }

  type DatabaseUserProfile {
    userId: String
    displayName: String
    picture: String
    gender: String
    location: String
    website: String
    createdAt: String
    updatedAt: String
  }
`,
];

export const queries = [
  `
  # Retrieves all users stored in the local database
  databaseGetAllUsers: [DatabaseUser]

  databaseGetAllQuestions: [DatabaseQuestion]

  # Retrieves a single user from the local database
  databaseGetUser(
    # The user's email address
    email: String!
  ): DatabaseUser
`,
];

export const resolvers = {
  RootQuery: {
    async databaseGetAllUsers() {
      const users = await User.findAll({
        include: [
          { model: UserLogin, as: 'logins' },
          { model: UserClaim, as: 'claims' },
          { model: UserProfile, as: 'profile' },
        ],
      });
      return users;
    },
    async databaseGetAllQuestions() {
      const question = await Question.findAll({
        include: [{ model: Option, as: 'options' }],
      });

      return question;
    },
    async databaseGetUser(parent, { email }) {
      const user = await User.findOne({
        where: { email },
        include: [
          { model: UserLogin, as: 'logins' },
          { model: UserClaim, as: 'claims' },
          { model: UserProfile, as: 'profile' },
        ],
      });
      return user;
    },
  },
};
