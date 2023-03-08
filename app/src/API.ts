/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJobInput = {
  id?: string | null,
  posterpubkey: string,
  title: string,
  content: string,
  pay: string,
  timeline: string,
  status: PostStatus,
  createdAt?: string | null,
};

export enum PostStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}


export type ModelJobConditionInput = {
  posterpubkey?: ModelStringInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  pay?: ModelStringInput | null,
  timeline?: ModelStringInput | null,
  status?: ModelPostStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelJobConditionInput | null > | null,
  or?: Array< ModelJobConditionInput | null > | null,
  not?: ModelJobConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelPostStatusInput = {
  eq?: PostStatus | null,
  ne?: PostStatus | null,
};

export type Job = {
  __typename: "Job",
  id: string,
  posterpubkey: string,
  title: string,
  content: string,
  pay: string,
  timeline: string,
  status: PostStatus,
  createdAt: string,
  updatedAt: string,
};

export type UpdateJobInput = {
  id: string,
  posterpubkey?: string | null,
  title?: string | null,
  content?: string | null,
  pay?: string | null,
  timeline?: string | null,
  status?: PostStatus | null,
  createdAt?: string | null,
};

export type DeleteJobInput = {
  id: string,
};

export type CreateGigInput = {
  id?: string | null,
  posterpubkey: string,
  title: string,
  content: string,
  pay: string,
  timeline: string,
  status: PostStatus,
  createdAt?: string | null,
};

export type ModelGigConditionInput = {
  posterpubkey?: ModelStringInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  pay?: ModelStringInput | null,
  timeline?: ModelStringInput | null,
  status?: ModelPostStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGigConditionInput | null > | null,
  or?: Array< ModelGigConditionInput | null > | null,
  not?: ModelGigConditionInput | null,
};

export type Gig = {
  __typename: "Gig",
  id: string,
  posterpubkey: string,
  title: string,
  content: string,
  pay: string,
  timeline: string,
  status: PostStatus,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGigInput = {
  id: string,
  posterpubkey?: string | null,
  title?: string | null,
  content?: string | null,
  pay?: string | null,
  timeline?: string | null,
  status?: PostStatus | null,
  createdAt?: string | null,
};

export type DeleteGigInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  publickey: string,
  name: string,
  bio: string,
  createdAt?: string | null,
};

export type ModelUserConditionInput = {
  publickey?: ModelStringInput | null,
  name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  publickey: string,
  name: string,
  bio: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  publickey?: string | null,
  name?: string | null,
  bio?: string | null,
  createdAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateTimelinePostInput = {
  id?: string | null,
  posterpubkey: string,
  content: string,
  createdAt?: string | null,
};

export type ModelTimelinePostConditionInput = {
  posterpubkey?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelTimelinePostConditionInput | null > | null,
  or?: Array< ModelTimelinePostConditionInput | null > | null,
  not?: ModelTimelinePostConditionInput | null,
};

export type TimelinePost = {
  __typename: "TimelinePost",
  id: string,
  posterpubkey: string,
  content: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTimelinePostInput = {
  id: string,
  posterpubkey?: string | null,
  content?: string | null,
  createdAt?: string | null,
};

export type DeleteTimelinePostInput = {
  id: string,
};

export type CreatePrivMessageInput = {
  id?: string | null,
  senderpubkey: string,
  receiverpubkey: string,
  content: string,
  createdAt?: string | null,
};

export type ModelPrivMessageConditionInput = {
  senderpubkey?: ModelStringInput | null,
  receiverpubkey?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPrivMessageConditionInput | null > | null,
  or?: Array< ModelPrivMessageConditionInput | null > | null,
  not?: ModelPrivMessageConditionInput | null,
};

export type privMessage = {
  __typename: "privMessage",
  id: string,
  senderpubkey: string,
  receiverpubkey: string,
  content: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePrivMessageInput = {
  id: string,
  senderpubkey?: string | null,
  receiverpubkey?: string | null,
  content?: string | null,
  createdAt?: string | null,
};

export type DeletePrivMessageInput = {
  id: string,
};

export type ModelJobFilterInput = {
  id?: ModelIDInput | null,
  posterpubkey?: ModelStringInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  pay?: ModelStringInput | null,
  timeline?: ModelStringInput | null,
  status?: ModelPostStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelJobFilterInput | null > | null,
  or?: Array< ModelJobFilterInput | null > | null,
  not?: ModelJobFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelJobConnection = {
  __typename: "ModelJobConnection",
  items:  Array<Job | null >,
  nextToken?: string | null,
};

export type ModelGigFilterInput = {
  id?: ModelIDInput | null,
  posterpubkey?: ModelStringInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  pay?: ModelStringInput | null,
  timeline?: ModelStringInput | null,
  status?: ModelPostStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGigFilterInput | null > | null,
  or?: Array< ModelGigFilterInput | null > | null,
  not?: ModelGigFilterInput | null,
};

export type ModelGigConnection = {
  __typename: "ModelGigConnection",
  items:  Array<Gig | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  publickey?: ModelStringInput | null,
  name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelTimelinePostFilterInput = {
  id?: ModelIDInput | null,
  posterpubkey?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelTimelinePostFilterInput | null > | null,
  or?: Array< ModelTimelinePostFilterInput | null > | null,
  not?: ModelTimelinePostFilterInput | null,
};

export type ModelTimelinePostConnection = {
  __typename: "ModelTimelinePostConnection",
  items:  Array<TimelinePost | null >,
  nextToken?: string | null,
};

export type ModelPrivMessageFilterInput = {
  id?: ModelIDInput | null,
  senderpubkey?: ModelStringInput | null,
  receiverpubkey?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPrivMessageFilterInput | null > | null,
  or?: Array< ModelPrivMessageFilterInput | null > | null,
  not?: ModelPrivMessageFilterInput | null,
};

export type ModelPrivMessageConnection = {
  __typename: "ModelPrivMessageConnection",
  items:  Array<privMessage | null >,
  nextToken?: string | null,
};

export type CreateJobMutationVariables = {
  input: CreateJobInput,
  condition?: ModelJobConditionInput | null,
};

export type CreateJobMutation = {
  createJob?:  {
    __typename: "Job",
    id: string,
    posterpubkey: string,
    title: string,
    content: string,
    pay: string,
    timeline: string,
    status: PostStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJobMutationVariables = {
  input: UpdateJobInput,
  condition?: ModelJobConditionInput | null,
};

export type UpdateJobMutation = {
  updateJob?:  {
    __typename: "Job",
    id: string,
    posterpubkey: string,
    title: string,
    content: string,
    pay: string,
    timeline: string,
    status: PostStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJobMutationVariables = {
  input: DeleteJobInput,
  condition?: ModelJobConditionInput | null,
};

export type DeleteJobMutation = {
  deleteJob?:  {
    __typename: "Job",
    id: string,
    posterpubkey: string,
    title: string,
    content: string,
    pay: string,
    timeline: string,
    status: PostStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGigMutationVariables = {
  input: CreateGigInput,
  condition?: ModelGigConditionInput | null,
};

export type CreateGigMutation = {
  createGig?:  {
    __typename: "Gig",
    id: string,
    posterpubkey: string,
    title: string,
    content: string,
    pay: string,
    timeline: string,
    status: PostStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGigMutationVariables = {
  input: UpdateGigInput,
  condition?: ModelGigConditionInput | null,
};

export type UpdateGigMutation = {
  updateGig?:  {
    __typename: "Gig",
    id: string,
    posterpubkey: string,
    title: string,
    content: string,
    pay: string,
    timeline: string,
    status: PostStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGigMutationVariables = {
  input: DeleteGigInput,
  condition?: ModelGigConditionInput | null,
};

export type DeleteGigMutation = {
  deleteGig?:  {
    __typename: "Gig",
    id: string,
    posterpubkey: string,
    title: string,
    content: string,
    pay: string,
    timeline: string,
    status: PostStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    publickey: string,
    name: string,
    bio: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    publickey: string,
    name: string,
    bio: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    publickey: string,
    name: string,
    bio: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTimelinePostMutationVariables = {
  input: CreateTimelinePostInput,
  condition?: ModelTimelinePostConditionInput | null,
};

export type CreateTimelinePostMutation = {
  createTimelinePost?:  {
    __typename: "TimelinePost",
    id: string,
    posterpubkey: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTimelinePostMutationVariables = {
  input: UpdateTimelinePostInput,
  condition?: ModelTimelinePostConditionInput | null,
};

export type UpdateTimelinePostMutation = {
  updateTimelinePost?:  {
    __typename: "TimelinePost",
    id: string,
    posterpubkey: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTimelinePostMutationVariables = {
  input: DeleteTimelinePostInput,
  condition?: ModelTimelinePostConditionInput | null,
};

export type DeleteTimelinePostMutation = {
  deleteTimelinePost?:  {
    __typename: "TimelinePost",
    id: string,
    posterpubkey: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePrivMessageMutationVariables = {
  input: CreatePrivMessageInput,
  condition?: ModelPrivMessageConditionInput | null,
};

export type CreatePrivMessageMutation = {
  createPrivMessage?:  {
    __typename: "privMessage",
    id: string,
    senderpubkey: string,
    receiverpubkey: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePrivMessageMutationVariables = {
  input: UpdatePrivMessageInput,
  condition?: ModelPrivMessageConditionInput | null,
};

export type UpdatePrivMessageMutation = {
  updatePrivMessage?:  {
    __typename: "privMessage",
    id: string,
    senderpubkey: string,
    receiverpubkey: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePrivMessageMutationVariables = {
  input: DeletePrivMessageInput,
  condition?: ModelPrivMessageConditionInput | null,
};

export type DeletePrivMessageMutation = {
  deletePrivMessage?:  {
    __typename: "privMessage",
    id: string,
    senderpubkey: string,
    receiverpubkey: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetJobQueryVariables = {
  id: string,
};

export type GetJobQuery = {
  getJob?:  {
    __typename: "Job",
    id: string,
    posterpubkey: string,
    title: string,
    content: string,
    pay: string,
    timeline: string,
    status: PostStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJobsQueryVariables = {
  filter?: ModelJobFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJobsQuery = {
  listJobs?:  {
    __typename: "ModelJobConnection",
    items:  Array< {
      __typename: "Job",
      id: string,
      posterpubkey: string,
      title: string,
      content: string,
      pay: string,
      timeline: string,
      status: PostStatus,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGigQueryVariables = {
  id: string,
};

export type GetGigQuery = {
  getGig?:  {
    __typename: "Gig",
    id: string,
    posterpubkey: string,
    title: string,
    content: string,
    pay: string,
    timeline: string,
    status: PostStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGigsQueryVariables = {
  filter?: ModelGigFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGigsQuery = {
  listGigs?:  {
    __typename: "ModelGigConnection",
    items:  Array< {
      __typename: "Gig",
      id: string,
      posterpubkey: string,
      title: string,
      content: string,
      pay: string,
      timeline: string,
      status: PostStatus,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    publickey: string,
    name: string,
    bio: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      publickey: string,
      name: string,
      bio: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTimelinePostQueryVariables = {
  id: string,
};

export type GetTimelinePostQuery = {
  getTimelinePost?:  {
    __typename: "TimelinePost",
    id: string,
    posterpubkey: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTimelinePostsQueryVariables = {
  filter?: ModelTimelinePostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTimelinePostsQuery = {
  listTimelinePosts?:  {
    __typename: "ModelTimelinePostConnection",
    items:  Array< {
      __typename: "TimelinePost",
      id: string,
      posterpubkey: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPrivMessageQueryVariables = {
  id: string,
};

export type GetPrivMessageQuery = {
  getPrivMessage?:  {
    __typename: "privMessage",
    id: string,
    senderpubkey: string,
    receiverpubkey: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPrivMessagesQueryVariables = {
  filter?: ModelPrivMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrivMessagesQuery = {
  listPrivMessages?:  {
    __typename: "ModelPrivMessageConnection",
    items:  Array< {
      __typename: "privMessage",
      id: string,
      senderpubkey: string,
      receiverpubkey: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateJobSubscription = {
  onCreateJob?:  {
    __typename: "Job",
    id: string,
    posterpubkey: string,
    title: string,
    content: string,
    pay: string,
    timeline: string,
    status: PostStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJobSubscription = {
  onUpdateJob?:  {
    __typename: "Job",
    id: string,
    posterpubkey: string,
    title: string,
    content: string,
    pay: string,
    timeline: string,
    status: PostStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJobSubscription = {
  onDeleteJob?:  {
    __typename: "Job",
    id: string,
    posterpubkey: string,
    title: string,
    content: string,
    pay: string,
    timeline: string,
    status: PostStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGigSubscription = {
  onCreateGig?:  {
    __typename: "Gig",
    id: string,
    posterpubkey: string,
    title: string,
    content: string,
    pay: string,
    timeline: string,
    status: PostStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGigSubscription = {
  onUpdateGig?:  {
    __typename: "Gig",
    id: string,
    posterpubkey: string,
    title: string,
    content: string,
    pay: string,
    timeline: string,
    status: PostStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGigSubscription = {
  onDeleteGig?:  {
    __typename: "Gig",
    id: string,
    posterpubkey: string,
    title: string,
    content: string,
    pay: string,
    timeline: string,
    status: PostStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    publickey: string,
    name: string,
    bio: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    publickey: string,
    name: string,
    bio: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    publickey: string,
    name: string,
    bio: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTimelinePostSubscription = {
  onCreateTimelinePost?:  {
    __typename: "TimelinePost",
    id: string,
    posterpubkey: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTimelinePostSubscription = {
  onUpdateTimelinePost?:  {
    __typename: "TimelinePost",
    id: string,
    posterpubkey: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTimelinePostSubscription = {
  onDeleteTimelinePost?:  {
    __typename: "TimelinePost",
    id: string,
    posterpubkey: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePrivMessageSubscription = {
  onCreatePrivMessage?:  {
    __typename: "privMessage",
    id: string,
    senderpubkey: string,
    receiverpubkey: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePrivMessageSubscription = {
  onUpdatePrivMessage?:  {
    __typename: "privMessage",
    id: string,
    senderpubkey: string,
    receiverpubkey: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePrivMessageSubscription = {
  onDeletePrivMessage?:  {
    __typename: "privMessage",
    id: string,
    senderpubkey: string,
    receiverpubkey: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
