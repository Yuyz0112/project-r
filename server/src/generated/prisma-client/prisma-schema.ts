export const typeDefs = /* GraphQL */ `type AggregateApp {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type AggregateSession {
  count: Int!
}

type App {
  id: ID!
  name: String!
  sessions(where: SessionWhereInput, orderBy: SessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Session!]
  createdAt: DateTime!
}

type AppConnection {
  pageInfo: PageInfo!
  edges: [AppEdge]!
  aggregate: AggregateApp!
}

input AppCreateInput {
  name: String!
  sessions: SessionCreateManyWithoutAppInput
}

input AppCreateOneWithoutSessionsInput {
  create: AppCreateWithoutSessionsInput
  connect: AppWhereUniqueInput
}

input AppCreateWithoutSessionsInput {
  name: String!
}

type AppEdge {
  node: App!
  cursor: String!
}

enum AppOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
}

type AppPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
}

type AppSubscriptionPayload {
  mutation: MutationType!
  node: App
  updatedFields: [String!]
  previousValues: AppPreviousValues
}

input AppSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AppWhereInput
  AND: [AppSubscriptionWhereInput!]
  OR: [AppSubscriptionWhereInput!]
  NOT: [AppSubscriptionWhereInput!]
}

input AppUpdateInput {
  name: String
  sessions: SessionUpdateManyWithoutAppInput
}

input AppUpdateManyMutationInput {
  name: String
}

input AppUpdateOneWithoutSessionsInput {
  create: AppCreateWithoutSessionsInput
  update: AppUpdateWithoutSessionsDataInput
  upsert: AppUpsertWithoutSessionsInput
  delete: Boolean
  disconnect: Boolean
  connect: AppWhereUniqueInput
}

input AppUpdateWithoutSessionsDataInput {
  name: String
}

input AppUpsertWithoutSessionsInput {
  update: AppUpdateWithoutSessionsDataInput!
  create: AppCreateWithoutSessionsInput!
}

input AppWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [AppWhereInput!]
  OR: [AppWhereInput!]
  NOT: [AppWhereInput!]
}

input AppWhereUniqueInput {
  id: ID
  name: String
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Event {
  id: ID!
  type: Int!
  data: Json!
  timestamp: DateTime!
  sessionId: String!
  createdAt: DateTime!
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  type: Int!
  data: Json!
  timestamp: DateTime!
  sessionId: String!
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  data_ASC
  data_DESC
  timestamp_ASC
  timestamp_DESC
  sessionId_ASC
  sessionId_DESC
  createdAt_ASC
  createdAt_DESC
}

type EventPreviousValues {
  id: ID!
  type: Int!
  data: Json!
  timestamp: DateTime!
  sessionId: String!
  createdAt: DateTime!
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

input EventUpdateInput {
  type: Int
  data: Json
  timestamp: DateTime
  sessionId: String
}

input EventUpdateManyMutationInput {
  type: Int
  data: Json
  timestamp: DateTime
  sessionId: String
}

input EventWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: Int
  type_not: Int
  type_in: [Int!]
  type_not_in: [Int!]
  type_lt: Int
  type_lte: Int
  type_gt: Int
  type_gte: Int
  timestamp: DateTime
  timestamp_not: DateTime
  timestamp_in: [DateTime!]
  timestamp_not_in: [DateTime!]
  timestamp_lt: DateTime
  timestamp_lte: DateTime
  timestamp_gt: DateTime
  timestamp_gte: DateTime
  sessionId: String
  sessionId_not: String
  sessionId_in: [String!]
  sessionId_not_in: [String!]
  sessionId_lt: String
  sessionId_lte: String
  sessionId_gt: String
  sessionId_gte: String
  sessionId_contains: String
  sessionId_not_contains: String
  sessionId_starts_with: String
  sessionId_not_starts_with: String
  sessionId_ends_with: String
  sessionId_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
}

scalar Json

scalar Long

type Mutation {
  createApp(data: AppCreateInput!): App!
  updateApp(data: AppUpdateInput!, where: AppWhereUniqueInput!): App
  updateManyApps(data: AppUpdateManyMutationInput!, where: AppWhereInput): BatchPayload!
  upsertApp(where: AppWhereUniqueInput!, create: AppCreateInput!, update: AppUpdateInput!): App!
  deleteApp(where: AppWhereUniqueInput!): App
  deleteManyApps(where: AppWhereInput): BatchPayload!
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  createSession(data: SessionCreateInput!): Session!
  updateSession(data: SessionUpdateInput!, where: SessionWhereUniqueInput!): Session
  updateManySessions(data: SessionUpdateManyMutationInput!, where: SessionWhereInput): BatchPayload!
  upsertSession(where: SessionWhereUniqueInput!, create: SessionCreateInput!, update: SessionUpdateInput!): Session!
  deleteSession(where: SessionWhereUniqueInput!): Session
  deleteManySessions(where: SessionWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  app(where: AppWhereUniqueInput!): App
  apps(where: AppWhereInput, orderBy: AppOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [App]!
  appsConnection(where: AppWhereInput, orderBy: AppOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AppConnection!
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  session(where: SessionWhereUniqueInput!): Session
  sessions(where: SessionWhereInput, orderBy: SessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Session]!
  sessionsConnection(where: SessionWhereInput, orderBy: SessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SessionConnection!
  node(id: ID!): Node
}

type Session {
  id: ID!
  lastEventTime: DateTime
  createdAt: DateTime!
  app: App
}

type SessionConnection {
  pageInfo: PageInfo!
  edges: [SessionEdge]!
  aggregate: AggregateSession!
}

input SessionCreateInput {
  lastEventTime: DateTime
  app: AppCreateOneWithoutSessionsInput
}

input SessionCreateManyWithoutAppInput {
  create: [SessionCreateWithoutAppInput!]
  connect: [SessionWhereUniqueInput!]
}

input SessionCreateWithoutAppInput {
  lastEventTime: DateTime
}

type SessionEdge {
  node: Session!
  cursor: String!
}

enum SessionOrderByInput {
  id_ASC
  id_DESC
  lastEventTime_ASC
  lastEventTime_DESC
  createdAt_ASC
  createdAt_DESC
}

type SessionPreviousValues {
  id: ID!
  lastEventTime: DateTime
  createdAt: DateTime!
}

input SessionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  lastEventTime: DateTime
  lastEventTime_not: DateTime
  lastEventTime_in: [DateTime!]
  lastEventTime_not_in: [DateTime!]
  lastEventTime_lt: DateTime
  lastEventTime_lte: DateTime
  lastEventTime_gt: DateTime
  lastEventTime_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [SessionScalarWhereInput!]
  OR: [SessionScalarWhereInput!]
  NOT: [SessionScalarWhereInput!]
}

type SessionSubscriptionPayload {
  mutation: MutationType!
  node: Session
  updatedFields: [String!]
  previousValues: SessionPreviousValues
}

input SessionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SessionWhereInput
  AND: [SessionSubscriptionWhereInput!]
  OR: [SessionSubscriptionWhereInput!]
  NOT: [SessionSubscriptionWhereInput!]
}

input SessionUpdateInput {
  lastEventTime: DateTime
  app: AppUpdateOneWithoutSessionsInput
}

input SessionUpdateManyDataInput {
  lastEventTime: DateTime
}

input SessionUpdateManyMutationInput {
  lastEventTime: DateTime
}

input SessionUpdateManyWithoutAppInput {
  create: [SessionCreateWithoutAppInput!]
  delete: [SessionWhereUniqueInput!]
  connect: [SessionWhereUniqueInput!]
  disconnect: [SessionWhereUniqueInput!]
  update: [SessionUpdateWithWhereUniqueWithoutAppInput!]
  upsert: [SessionUpsertWithWhereUniqueWithoutAppInput!]
  deleteMany: [SessionScalarWhereInput!]
  updateMany: [SessionUpdateManyWithWhereNestedInput!]
}

input SessionUpdateManyWithWhereNestedInput {
  where: SessionScalarWhereInput!
  data: SessionUpdateManyDataInput!
}

input SessionUpdateWithoutAppDataInput {
  lastEventTime: DateTime
}

input SessionUpdateWithWhereUniqueWithoutAppInput {
  where: SessionWhereUniqueInput!
  data: SessionUpdateWithoutAppDataInput!
}

input SessionUpsertWithWhereUniqueWithoutAppInput {
  where: SessionWhereUniqueInput!
  update: SessionUpdateWithoutAppDataInput!
  create: SessionCreateWithoutAppInput!
}

input SessionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  lastEventTime: DateTime
  lastEventTime_not: DateTime
  lastEventTime_in: [DateTime!]
  lastEventTime_not_in: [DateTime!]
  lastEventTime_lt: DateTime
  lastEventTime_lte: DateTime
  lastEventTime_gt: DateTime
  lastEventTime_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [SessionWhereInput!]
  OR: [SessionWhereInput!]
  NOT: [SessionWhereInput!]
}

input SessionWhereUniqueInput {
  id: ID
}

type Subscription {
  app(where: AppSubscriptionWhereInput): AppSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  session(where: SessionSubscriptionWhereInput): SessionSubscriptionPayload
}
`