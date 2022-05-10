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
  id: Scalars['ID'];
  image: Scalars['String'];
  isDraft: Scalars['Boolean'];
  name: Scalars['String'];
  tagIds: Array<Scalars['String']>;
};

export type AddProductInput = {
  artist: Scalars['ID'];
  description: Scalars['String'];
  images: Array<Scalars['String']>;
  isMature: Scalars['Boolean'];
  name: Scalars['String'];
  numLikes: Scalars['Int'];
  subcategoryId: Scalars['ID'];
  tags: Array<Scalars['ID']>;
  titleImage: Scalars['String'];
  vrm: Scalars['String'];
};

export type AddProductVariant = {
  file: Scalars['String'];
  fileTypes: Array<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['ID'];
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
  items: Array<ProductVariant>;
  numItems: Scalars['Int'];
  seller: User;
  totalAmount: Scalars['Float'];
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
  sort?: InputMaybe<ProductSort>;
};

export type DeleteProductVariant = {
  id: Scalars['ID'];
  productId: Scalars['ID'];
};

export type EditMailInput = {
  id: Scalars['ID'];
  isRead?: InputMaybe<Scalars['Boolean']>;
};

export type EditOrderInput = {
  artistId?: InputMaybe<Scalars['ID']>;
  bounty?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<Scalars['String']>>;
};

export type EditProductInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  numLikes?: InputMaybe<Scalars['Int']>;
  subcategoryId?: InputMaybe<Scalars['ID']>;
  tags?: InputMaybe<Array<Scalars['ID']>>;
  titleImage?: InputMaybe<Scalars['String']>;
  vrm?: InputMaybe<Scalars['String']>;
};

export type EditProductVariant = {
  file?: InputMaybe<Scalars['String']>;
  fileTypes?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  productId: Scalars['ID'];
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
  isRead: Scalars['Boolean'];
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
  /** Delete a product variant */
  addProductVariant: Product;
  /** Add a service */
  addService: User;
  /** Add item to Cart */
  addToCart: Array<Cart>;
  /** Apply to an Order */
  applyOrder: Order;
  /** Checkout item to Cart */
  checkout: Array<Cart>;
  /** Edit an Order */
  deleteOrder: Order;
  /** Delete a product */
  deleteProduct: Product;
  /** Delete a product variant */
  deleteProductVariant: Product;
  /** Delete a service */
  deleteService: User;
  /** Edit a mail */
  editMail: Array<Mail>;
  /** Edit an Order */
  editOrder: Order;
  /** Edit a product */
  editProduct: Product;
  /** Edit a product variant */
  editProductVariant: Product;
  /** Edit self */
  editSelf: User;
  /** Edit a service */
  editService: User;
  /** Empty items from Cart */
  emptyCart: Array<Cart>;
  /** Follow a user */
  follow: Scalars['Boolean'];
  /** Like a product */
  likeProduct: Product;
  /** Check if the user exist if not create the user */
  login: User;
  /** Remove item from Cart */
  removeFromCart: Array<Cart>;
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
export type MutationAddProductVariantArgs = {
  input: AddProductVariant;
};


/** Mutation object */
export type MutationAddServiceArgs = {
  input: AddServiceInput;
};


/** Mutation object */
export type MutationAddToCartArgs = {
  productId: Scalars['ID'];
  variantId: Scalars['ID'];
};


/** Mutation object */
export type MutationApplyOrderArgs = {
  id: Scalars['ID'];
};


/** Mutation object */
export type MutationCheckoutArgs = {
  sellerId?: InputMaybe<Scalars['ID']>;
};


/** Mutation object */
export type MutationDeleteOrderArgs = {
  id: Scalars['ID'];
};


/** Mutation object */
export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


/** Mutation object */
export type MutationDeleteProductVariantArgs = {
  input: DeleteProductVariant;
};


/** Mutation object */
export type MutationDeleteServiceArgs = {
  id: Scalars['ID'];
};


/** Mutation object */
export type MutationEditMailArgs = {
  input: EditMailInput;
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
export type MutationEditProductVariantArgs = {
  input: EditProductVariant;
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
export type MutationEmptyCartArgs = {
  sellerId?: InputMaybe<Scalars['ID']>;
};


/** Mutation object */
export type MutationFollowArgs = {
  follow: Scalars['Boolean'];
  id: Scalars['ID'];
};


/** Mutation object */
export type MutationLikeProductArgs = {
  id: Scalars['ID'];
  like: Scalars['Boolean'];
};


/** Mutation object */
export type MutationRemoveFromCartArgs = {
  productId: Scalars['ID'];
  variantId: Scalars['ID'];
};


/** Mutation object */
export type MutationSendMailArgs = {
  input: SendMailInput;
};

export type MyCommission = {
  __typename?: 'MyCommission';
  lost: Array<Order>;
  pending: Array<Order>;
  won: Array<Order>;
};

export type MyOrder = {
  __typename?: 'MyOrder';
  active: Array<Order>;
  past: Array<Order>;
};

/** Order */
export type Order = {
  __typename?: 'Order';
  applications: Array<User>;
  artist?: Maybe<User>;
  bounty: Scalars['Float'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  isDraft: Scalars['Boolean'];
  name: Scalars['String'];
  owner: User;
  tags: Array<Tag>;
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  cursor: Scalars['String'];
  node: Order;
};

export type OrderFilter = {
  maxBounty?: InputMaybe<Scalars['Float']>;
  minBounty?: InputMaybe<Scalars['Float']>;
  search?: InputMaybe<Scalars['String']>;
};

export type OrderPagination = {
  __typename?: 'OrderPagination';
  edges: Array<OrderEdge>;
  pageInfo: PageInfo;
};

export type OrderSort = {
  bounty?: InputMaybe<SortEnum>;
  createdDate?: InputMaybe<SortEnum>;
  name?: InputMaybe<SortEnum>;
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
  artist: User;
  description: Scalars['String'];
  id: Scalars['ID'];
  images: Array<Scalars['String']>;
  isLiked: Scalars['Boolean'];
  minPrice: Scalars['Float'];
  name: Scalars['String'];
  numLikes: Scalars['Int'];
  subcategory: Subcategory;
  tags: Array<Tag>;
  titleImage: Scalars['String'];
  variants: Array<ProductVariant>;
  vrm: Scalars['String'];
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  cursor: Scalars['String'];
  node: Product;
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
  edges: Array<ProductEdge>;
  pageInfo: PageInfo;
};

export type ProductSort = {
  createdDate?: InputMaybe<SortEnum>;
  name?: InputMaybe<SortEnum>;
  price?: InputMaybe<SortEnum>;
};

/** Product Variant */
export type ProductVariant = {
  __typename?: 'ProductVariant';
  file: Scalars['String'];
  fileTypes: Array<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  product: Product;
};

/** Purchase */
export type Purchase = {
  __typename?: 'Purchase';
  id: Scalars['ID'];
  items: Array<ProductVariant>;
  numItems: Scalars['Int'];
  placed: Scalars['DateTime'];
  seller: User;
  sellerId: Scalars['ID'];
  totalAmount: Scalars['Float'];
  variants: Array<Scalars['ID']>;
};

/** Query object */
export type Query = {
  __typename?: 'Query';
  /** Get current Carts */
  carts: Array<Cart>;
  /** Get Categories */
  categories: Array<Category>;
  /** Get Category */
  category: Category;
  /** Get mail */
  mail: Mail;
  /** Get an Order by Id */
  myCommissions: MyCommission;
  /** Get myOrders by user */
  myOrders: MyOrder;
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
  /** Get a single user by name */
  userByName: User;
  /** Get all users */
  users: UserPagination;
};


/** Query object */
export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


/** Query object */
export type QueryMailArgs = {
  id: Scalars['ID'];
};


/** Query object */
export type QueryOrderArgs = {
  id: Scalars['ID'];
};


/** Query object */
export type QueryOrdersArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<OrderFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<OrderSort>;
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
export type QueryUserByNameArgs = {
  name: Scalars['String'];
};


/** Query object */
export type QueryUsersArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<UserSort>;
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

/** SortEnum */
export enum SortEnum {
  /** asc */
  Asc = 'ASC',
  /** desc */
  Desc = 'DESC'
}

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
  sort?: InputMaybe<ProductSort>;
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
  followers: Array<User>;
  following: Array<User>;
  id: Scalars['ID'];
  inbox: Array<Mail>;
  isFollowing: Scalars['Boolean'];
  likedProduct: Array<Product>;
  numCompletedCommissions: Scalars['Int'];
  numLikes: Scalars['Int'];
  products: Array<Product>;
  profileImageURI: Scalars['String'];
  sent: Array<Mail>;
  services: Array<Service>;
  status: Scalars['String'];
  tags: Array<Tag>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserFilter = {
  search?: InputMaybe<Scalars['String']>;
};

export type UserPagination = {
  __typename?: 'UserPagination';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserSort = {
  name?: InputMaybe<SortEnum>;
  numCompletedCommissions?: InputMaybe<SortEnum>;
  numLikes?: InputMaybe<SortEnum>;
};

export type CartFragmentFragment = { __typename?: 'Cart', numItems: number, totalAmount: number, seller: { __typename?: 'User', id: string, displayName: string, profileImageURI: string }, items: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number, file: string, fileTypes: Array<string>, product: { __typename?: 'Product', id: string, name: string, titleImage: string } }> };

export type MailInboxFragmentFragment = { __typename?: 'Mail', body: string, date: any, id: string, isRead: boolean, title: string, sender: { __typename?: 'User', id: string, displayName: string } };

export type MailOutboxFragmentFragment = { __typename?: 'Mail', body: string, date: any, id: string, title: string, receiver: { __typename?: 'User', id: string, displayName: string } };

export type ProductDetailFragmentFragment = { __typename?: 'Product', id: string, name: string, numLikes: number, description: string, titleImage: string, images: Array<string>, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, artist: { __typename?: 'User', id: string, displayName: string, profileImageURI: string, isFollowing: boolean }, variants: Array<{ __typename?: 'ProductVariant', id: string, fileTypes: Array<string>, file: string, name: string, price: number }> };

export type UserFragmentFragment = { __typename?: 'User', id: string, bio: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean };

export type UserProfileFragmentFragment = { __typename?: 'User', id: string, bio: string, numCompletedCommissions: number, displayName: string, numLikes: number, profileImageURI: string, isFollowing: boolean, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, services: Array<{ __typename?: 'Service', description: string, id: string, name: string, price: number, priceType: PriceEnum }>, products: Array<{ __typename?: 'Product', id: string, name: string, images: Array<string>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number }> }> };

export type ArtistFragmentFragment = { __typename?: 'User', id: string, displayName: string, numCompletedCommissions: number, numLikes: number, profileImageURI: string, isFollowing: boolean, tags: Array<{ __typename?: 'Tag', id: string, name: string }> };

export type UserBlurbFragmentFragment = { __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string };

export type EditSelfMutationVariables = Exact<{
  input: EditSelfInput;
}>;


export type EditSelfMutation = { __typename?: 'Mutation', editSelf: { __typename?: 'User', id: string, bio: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } };

export type LoginMutationVariables = Exact<{ [key: string]: never; }>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, bio: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } };

export type InboxQueryVariables = Exact<{ [key: string]: never; }>;


export type InboxQuery = { __typename?: 'Query', self: { __typename?: 'User', inbox: Array<{ __typename?: 'Mail', body: string, date: any, id: string, isRead: boolean, title: string, sender: { __typename?: 'User', id: string, displayName: string } }> } };

export type OutboxQueryVariables = Exact<{ [key: string]: never; }>;


export type OutboxQuery = { __typename?: 'Query', self: { __typename?: 'User', sent: Array<{ __typename?: 'Mail', body: string, date: any, id: string, title: string, receiver: { __typename?: 'User', id: string, displayName: string } }> } };

export type SelfQueryVariables = Exact<{ [key: string]: never; }>;


export type SelfQuery = { __typename?: 'Query', self: { __typename?: 'User', id: string, bio: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } };

export const CartFragmentFragmentDoc = gql`
    fragment CartFragment on Cart {
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
    product {
      id
      name
      titleImage
    }
    file
    fileTypes
  }
}
    `;
export const MailInboxFragmentFragmentDoc = gql`
    fragment MailInboxFragment on Mail {
  body
  date
  id
  isRead
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
export const ProductDetailFragmentFragmentDoc = gql`
    fragment ProductDetailFragment on Product {
  id
  name
  numLikes
  description
  titleImage
  images
  subcategory {
    id
    name
    category {
      id
      name
    }
  }
  artist {
    id
    displayName
    profileImageURI
    isFollowing
  }
  variants {
    id
    fileTypes
    file
    name
    price
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
    variants {
      id
      name
      price
    }
    images
  }
}
    `;
export const ArtistFragmentFragmentDoc = gql`
    fragment ArtistFragment on User {
  id
  displayName
  numCompletedCommissions
  numLikes
  profileImageURI
  isFollowing
  tags {
    id
    name
  }
}
    `;
export const UserBlurbFragmentFragmentDoc = gql`
    fragment UserBlurbFragment on User {
  id
  displayName
  status
  profileImageURI
}
    `;
export const EditSelfDocument = gql`
    mutation EditSelf($input: EditSelfInput!) {
  editSelf(input: $input) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EditSelfGQL extends Apollo.Mutation<EditSelfMutation, EditSelfMutationVariables> {
    override document = EditSelfDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
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