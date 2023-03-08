/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
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
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getGig = /* GraphQL */ `
  query GetGig($id: ID!) {
    getGig(id: $id) {
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
export const listGigs = /* GraphQL */ `
  query ListGigs(
    $filter: ModelGigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      publickey
      name
      bio
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        publickey
        name
        bio
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTimelinePost = /* GraphQL */ `
  query GetTimelinePost($id: ID!) {
    getTimelinePost(id: $id) {
      id
      posterpubkey
      content
      createdAt
      updatedAt
    }
  }
`;
export const listTimelinePosts = /* GraphQL */ `
  query ListTimelinePosts(
    $filter: ModelTimelinePostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimelinePosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        posterpubkey
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivMessage = /* GraphQL */ `
  query GetPrivMessage($id: ID!) {
    getPrivMessage(id: $id) {
      id
      senderpubkey
      receiverpubkey
      content
      createdAt
      updatedAt
    }
  }
`;
export const listPrivMessages = /* GraphQL */ `
  query ListPrivMessages(
    $filter: ModelPrivMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        senderpubkey
        receiverpubkey
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
