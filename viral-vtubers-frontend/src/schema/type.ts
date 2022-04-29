import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The Long scalar type represents a signed 64-bit numeric non-fractional value */
  Long: any;
  /** The Short scalar type represents a signed 16-bit numeric non-fractional value */
  Short: any;
};

export type AddOrderInput = {
  bounty: Scalars['Float'];
  description: Scalars['String'];
  draft: Scalars['Boolean'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  tagIds: Array<Scalars['String']>;
};

export type AddProductInput = {
  files: Array<Scalars['String']>;
  id: Scalars['ID'];
  images: Array<Scalars['String']>;
  name: Scalars['String'];
  numLikes: Scalars['Int'];
  price: Scalars['Float'];
  shortDescription: Scalars['String'];
  subcategoryId: Scalars['ID'];
  titleImage: Scalars['String'];
  vrm: Scalars['String'];
};

export type AddServiceInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  priceType: PriceEnum;
};

/** AgeRestrictionEnum */
export enum AgeRestrictionEnum {
  /** all */
  All = 'ALL',
  /** NSFW only */
  NsfwOnly = 'NSFW_ONLY',
  /** SFW only */
  SfwOnly = 'SFW_ONLY'
}

/** Cart */
export type Cart = {
  __typename?: 'Cart';
  items: Array<Product>;
  numItems: Scalars['Int'];
  seller: User;
  totalAmount: Scalars['Float'];
};

export type Carts = {
  __typename?: 'Carts';
  carts: Array<Cart>;
  numItems: Scalars['Int'];
};

/** Category */
export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  products: ProductPagination;
  subcategories: Array<Subcategory>;
};


/** Category */
export type CategoryProductsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductFilter>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type EditOrderInput = {
  bounty?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<Scalars['String']>>;
};

export type EditProductInput = {
  files?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  images?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  numLikes?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  subcategoryId?: InputMaybe<Scalars['ID']>;
  titleImage?: InputMaybe<Scalars['String']>;
  vrm?: InputMaybe<Scalars['String']>;
};

export type EditSelfInput = {
  bio?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  profileImageURI?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<Scalars['String']>>;
};

export type EditServiceInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  priceType?: InputMaybe<PriceEnum>;
};

/** Mail */
export type Mail = {
  __typename?: 'Mail';
  body: Scalars['String'];
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  read: Scalars['Boolean'];
  receiver: User;
  sender: User;
  title: Scalars['String'];
};

/** Mutation object */
export type Mutation = {
  __typename?: 'Mutation';
  /** Add an Order */
  addOrder: Order;
  /** Add a product */
  addProduct: Product;
  /** Add a service */
  addService: Service;
  /** Add item to Cart */
  addToCart: Carts;
  /** Apply to an Order */
  applyOrder: Order;
  /** Checkout item to Cart */
  checkout: Purchase;
  /** Delete a product */
  deleteProduct: Product;
  /** Edit an Order */
  editOrder: Order;
  /** Edit a product */
  editProduct: Product;
  /** Edit self */
  editSelf: User;
  /** Edit a service */
  editService: Service;
  /** Empty items from Cart */
  emptyCart: Carts;
  /** Check if the user exist if not create the user */
  login: User;
  /** Remove item from Cart */
  removeFromCart: Carts;
  /** Send a mail */
  sendMail: Mail;
};


/** Mutation object */
export type MutationAddOrderArgs = {
  input: AddOrderInput;
};


/** Mutation object */
export type MutationAddProductArgs = {
  input: AddProductInput;
};


/** Mutation object */
export type MutationAddServiceArgs = {
  input: AddServiceInput;
};


/** Mutation object */
export type MutationAddToCartArgs = {
  id: Scalars['ID'];
};


/** Mutation object */
export type MutationApplyOrderArgs = {
  id: Scalars['ID'];
};


/** Mutation object */
export type MutationDeleteProductArgs = {
  input: EditProductInput;
};


/** Mutation object */
export type MutationEditOrderArgs = {
  input: EditOrderInput;
};


/** Mutation object */
export type MutationEditProductArgs = {
  input: EditProductInput;
};


/** Mutation object */
export type MutationEditSelfArgs = {
  input: EditSelfInput;
};


/** Mutation object */
export type MutationEditServiceArgs = {
  input: EditServiceInput;
};


/** Mutation object */
export type MutationRemoveFromCartArgs = {
  id: Scalars['ID'];
};


/** Mutation object */
export type MutationSendMailArgs = {
  input: SendMailInput;
};

/** Order */
export type Order = {
  __typename?: 'Order';
  applications: Array<User>;
  bounty: Scalars['Float'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  isDraft: Scalars['Boolean'];
  name: Scalars['String'];
  tags: Array<Tag>;
};

export type OrderEdges = {
  __typename?: 'OrderEdges';
  cursor: Scalars['String'];
  node: Array<Order>;
};

export type OrderPagination = {
  __typename?: 'OrderPagination';
  edges: OrderEdges;
  pageInfo: PageInfo;
};

/** OtherFiltersEnum */
export enum OtherFiltersEnum {
  /** anime */
  Anime = 'ANIME'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

/** PriceType */
export enum PriceEnum {
  /** price for each */
  Each = 'EACH',
  /** price per hour */
  Hour = 'HOUR',
  Poa = 'POA'
}

/** Product */
export type Product = {
  __typename?: 'Product';
  files: Array<Scalars['String']>;
  id: Scalars['ID'];
  images: Array<Scalars['String']>;
  name: Scalars['String'];
  numLikes: Scalars['Int'];
  price: Scalars['Float'];
  shortDescription: Scalars['String'];
  subcategory: Subcategory;
  titleImage: Scalars['String'];
  vrm: Scalars['String'];
};

export type ProductEdges = {
  __typename?: 'ProductEdges';
  cursor: Scalars['String'];
  node: Array<Product>;
};

export type ProductFilter = {
  ageRestriction?: InputMaybe<AgeRestrictionEnum>;
  maxPrice?: InputMaybe<Scalars['Float']>;
  minPrice?: InputMaybe<Scalars['Float']>;
  other?: InputMaybe<OtherFiltersEnum>;
  search?: InputMaybe<Scalars['String']>;
};

export type ProductPagination = {
  __typename?: 'ProductPagination';
  edges: ProductEdges;
  pageInfo: PageInfo;
};

/** Purchase */
export type Purchase = {
  __typename?: 'Purchase';
  items: Array<Product>;
  numItems: Scalars['Int'];
  placed: Scalars['DateTime'];
  seller: User;
  totalAmount: Scalars['Float'];
};

/** Query object */
export type Query = {
  __typename?: 'Query';
  /** Get current Carts */
  carts: Carts;
  /** Get Categories */
  categories: Array<Category>;
  /** Get Category */
  category: Category;
  /** Get an Order by Id */
  order: Order;
  /** Get all Orders */
  orders: OrderPagination;
  /** Get past Purchases */
  purchases: Array<Purchase>;
  /** Get self */
  self: User;
  /** Get Subcategory */
  subcategory: Subcategory;
  /** Get a single user */
  user: User;
  /** Get all users */
  users: UserPagination;
};


/** Query object */
export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


/** Query object */
export type QueryOrderArgs = {
  id: Scalars['ID'];
};


/** Query object */
export type QueryOrdersArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductFilter>;
  limit?: InputMaybe<Scalars['Int']>;
};


/** Query object */
export type QuerySubcategoryArgs = {
  id: Scalars['ID'];
};


/** Query object */
export type QueryUserArgs = {
  id: Scalars['ID'];
};


/** Query object */
export type QueryUsersArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type SendMailInput = {
  body: Scalars['String'];
  receiverUserId: Scalars['String'];
  title: Scalars['String'];
};

export type Service = {
  __typename?: 'Service';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  priceType: PriceEnum;
};

/** Category */
export type Subcategory = {
  __typename?: 'Subcategory';
  category: Category;
  id: Scalars['ID'];
  name: Scalars['String'];
  products: ProductPagination;
};


/** Category */
export type SubcategoryProductsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductFilter>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type Tag = {
  __typename?: 'Tag';
  backgroundColor: Scalars['String'];
  color: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** User */
export type User = {
  __typename?: 'User';
  bio: Scalars['String'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  inbox: Array<Mail>;
  isFollowing: Scalars['Boolean'];
  numCompletedCommissions: Scalars['Int'];
  numLikes: Scalars['Int'];
  products: Array<Product>;
  profileImageURI: Scalars['String'];
  sent: Array<Mail>;
  services: Array<Service>;
  status: Scalars['String'];
  tags: Array<Tag>;
};

export type UserEdges = {
  __typename?: 'UserEdges';
  cursor: Scalars['String'];
  node: Array<User>;
};

export type UserPagination = {
  __typename?: 'UserPagination';
  edges: UserEdges;
  pageInfo: PageInfo;
};

export type CartsFragmentFragment = { __typename?: 'Carts', carts: Array<{ __typename?: 'Cart', numItems: number, totalAmount: number, seller: { __typename?: 'User', id: string, displayName: string, profileImageURI: string }, items: Array<{ __typename?: 'Product', id: string, name: string, price: number, images: Array<string> }> }> };

export type MailInboxFragmentFragment = { __typename?: 'Mail', body: string, date: any, id: string, read: boolean, title: string, sender: { __typename?: 'User', id: string, displayName: string } };

export type MailOutboxFragmentFragment = { __typename?: 'Mail', body: string, date: any, id: string, title: string, receiver: { __typename?: 'User', id: string, displayName: string } };

export type UserFragmentFragment = { __typename?: 'User', id: string, bio: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean };

export type UserProfileFragmentFragment = { __typename?: 'User', id: string, bio: string, numCompletedCommissions: number, displayName: string, numLikes: number, profileImageURI: string, isFollowing: boolean, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, services: Array<{ __typename?: 'Service', description: string, id: string, name: string, price: number, priceType: PriceEnum }>, products: Array<{ __typename?: 'Product', id: string, name: string, price: number, images: Array<string> }> };

export type LoginMutationVariables = Exact<{ [key: string]: never; }>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, bio: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } };

export type InboxQueryVariables = Exact<{ [key: string]: never; }>;


export type InboxQuery = { __typename?: 'Query', self: { __typename?: 'User', inbox: Array<{ __typename?: 'Mail', body: string, date: any, id: string, read: boolean, title: string, sender: { __typename?: 'User', id: string, displayName: string } }> } };

export type OutboxQueryVariables = Exact<{ [key: string]: never; }>;


export type OutboxQuery = { __typename?: 'Query', self: { __typename?: 'User', sent: Array<{ __typename?: 'Mail', body: string, date: any, id: string, title: string, receiver: { __typename?: 'User', id: string, displayName: string } }> } };

export type SelfQueryVariables = Exact<{ [key: string]: never; }>;


export type SelfQuery = { __typename?: 'Query', self: { __typename?: 'User', id: string, bio: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } };

export const CartsFragmentFragmentDoc = gql`
    fragment CartsFragment on Carts {
  carts {
    numItems
    totalAmount
    seller {
      id
      displayName
      profileImageURI
    }
    items {
      id
      name
      price
      images
    }
  }
}
    `;
export const MailInboxFragmentFragmentDoc = gql`
    fragment MailInboxFragment on Mail {
  body
  date
  id
  read
  title
  sender {
    id
    displayName
  }
}
    `;
export const MailOutboxFragmentFragmentDoc = gql`
    fragment MailOutboxFragment on Mail {
  body
  date
  id
  title
  receiver {
    id
    displayName
  }
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  bio
  numCompletedCommissions
  displayName
  email
  numLikes
  profileImageURI
  isFollowing
}
    `;
export const UserProfileFragmentFragmentDoc = gql`
    fragment UserProfileFragment on User {
  id
  bio
  numCompletedCommissions
  displayName
  numLikes
  profileImageURI
  isFollowing
  tags {
    id
    name
  }
  services {
    description
    id
    name
    price
    priceType
  }
  products {
    id
    name
    price
    images
  }
}
    `;
export const LoginDocument = gql`
    mutation Login {
  login {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    override document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InboxDocument = gql`
    query Inbox {
  self {
    inbox {
      ...MailInboxFragment
    }
  }
}
    ${MailInboxFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class InboxGQL extends Apollo.Query<InboxQuery, InboxQueryVariables> {
    override document = InboxDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OutboxDocument = gql`
    query Outbox {
  self {
    sent {
      ...MailOutboxFragment
    }
  }
}
    ${MailOutboxFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class OutboxGQL extends Apollo.Query<OutboxQuery, OutboxQueryVariables> {
    override document = OutboxDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SelfDocument = gql`
    query Self {
  self {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SelfGQL extends Apollo.Query<SelfQuery, SelfQueryVariables> {
    override document = SelfDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }