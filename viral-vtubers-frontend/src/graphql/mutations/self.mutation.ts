import { gql } from 'apollo-angular';

import { UserFragment } from '../fragments/user.fragment';

export const editSelfMutation = gql`
  mutation EditSelf($input: EditSelfInput!) {
    editSelf(input: $input) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const loginMutation = gql`
  mutation Login {
    login {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const addService = gql`
  mutation AddService($input: AddServiceInput!) {
    addService(input: $input) {
      ...UserFragment
      services {
        description
        id
        name
        price
        priceType
      }
    }
  }
  ${UserFragment}
`;

export const editService = gql`
  mutation EditService($input: EditServiceInput!) {
    editService(input: $input) {
      ...UserFragment
      services {
        description
        id
        name
        price
        priceType
      }
    }
  }
  ${UserFragment}
`;

export const deleteService = gql`
  mutation DeleteService($id: ID!) {
    deleteService(id: $id) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;
