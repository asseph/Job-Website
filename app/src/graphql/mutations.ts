/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
      id
      posterpubkey
      title
      content
      pay
      timeline
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
      id
      posterpubkey
      title
      content
      pay
      timeline
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
      id
      posterpubkey
      title
      content
      pay
      timeline
      status
      createdAt
      updatedAt
    }
  }
`;
export const createGig = /* GraphQL */ `
  mutation CreateGig(
    $input: CreateGigInput!
    $condition: ModelGigConditionInput
  ) {
    createGig(input: $input, condition: $condition) {
      id
      posterpubkey
      title
      content
      pay
      timeline
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateGig = /* GraphQL */ `
  mutation UpdateGig(
    $input: UpdateGigInput!
    $condition: ModelGigConditionInput
  ) {
    updateGig(input: $input, condition: $condition) {
      id
      posterpubkey
      title
      content
      pay
      timeline
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteGig = /* GraphQL */ `
  mutation DeleteGig(
    $input: DeleteGigInput!
    $condition: ModelGigConditionInput
  ) {
    deleteGig(input: $input, condition: $condition) {
      id
      posterpubkey
      title
      content
      pay
      timeline
      status
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      publickey
      name
      bio
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      publickey
      name
      bio
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      publickey
      name
      bio
      createdAt
      updatedAt
    }
  }
`;
export const createTimelinePost = /* GraphQL */ `
  mutation CreateTimelinePost(
    $input: CreateTimelinePostInput!
    $condition: ModelTimelinePostConditionInput
  ) {
    createTimelinePost(input: $input, condition: $condition) {
      id
      posterpubkey
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateTimelinePost = /* GraphQL */ `
  mutation UpdateTimelinePost(
    $input: UpdateTimelinePostInput!
    $condition: ModelTimelinePostConditionInput
  ) {
    updateTimelinePost(input: $input, condition: $condition) {
      id
      posterpubkey
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteTimelinePost = /* GraphQL */ `
  mutation DeleteTimelinePost(
    $input: DeleteTimelinePostInput!
    $condition: ModelTimelinePostConditionInput
  ) {
    deleteTimelinePost(input: $input, condition: $condition) {
      id
      posterpubkey
      content
      createdAt
      updatedAt
    }
  }
`;
export const createPrivMessage = /* GraphQL */ `
  mutation CreatePrivMessage(
    $input: CreatePrivMessageInput!
    $condition: ModelPrivMessageConditionInput
  ) {
    createPrivMessage(input: $input, condition: $condition) {
      id
      senderpubkey
      receiverpubkey
      content
      createdAt
      updatedAt
    }
  }
`;
export const updatePrivMessage = /* GraphQL */ `
  mutation UpdatePrivMessage(
    $input: UpdatePrivMessageInput!
    $condition: ModelPrivMessageConditionInput
  ) {
    updatePrivMessage(input: $input, condition: $condition) {
      id
      senderpubkey
      receiverpubkey
      content
      createdAt
      updatedAt
    }
  }
`;
export const deletePrivMessage = /* GraphQL */ `
  mutation DeletePrivMessage(
    $input: DeletePrivMessageInput!
    $condition: ModelPrivMessageConditionInput
  ) {
    deletePrivMessage(input: $input, condition: $condition) {
      id
      senderpubkey
      receiverpubkey
      content
      createdAt
      updatedAt
    }
  }
`;
