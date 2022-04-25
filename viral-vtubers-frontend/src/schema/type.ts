import { gql } from 'apollo-angular';
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
  name: Scalars['String'];
  tagIds: Array<Scalars['String']>;
};

export type AddServiceInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  priceType: PriceEnum;
};

/** AgeRestriction */
export enum AgeRestriction {
  /** all age */
  AllAge = 'ALL_AGE',
  /** for adult */
  ForAdult = 'FOR_ADULT',
  /** for adult included */
  ForAdultIncluded = 'FOR_ADULT_INCLUDED'
}

/** Cart */
export type Cart = {
  __typename?: 'Cart';
  items: Array<Product>;
  seller: User;
  totalAmount: Scalars['Float'];
  totalItemCount: Scalars['Int'];
};

export type Carts = {
  __typename?: 'Carts';
  carts: Array<Cart>;
  totalItemCount: Scalars['Int'];
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
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<Scalars['String']>>;
};

export type EditSelfInput = {
  bio?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  profileImageURI?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<Scalars['String']>>;
};

export type EditServiceInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  priceType?: InputMaybe<PriceEnum>;
};

export type Mail = {
  __typename?: 'Mail';
  body: Scalars['String'];
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  read: Scalars['Boolean'];
  title: Scalars['String'];
};

/** Mutation object */
export type Mutation = {
  __typename?: 'Mutation';
  /** Add an Order */
  addOrder: Order;
  /** Add a service */
  addService: Service;
  /** Add item to Cart */
  addToCart: Carts;
  /** Apply to an Order */
  applyOrder: Order;
  /** Checkout item to Cart */
  checkout: Purchase;
  /** Edit an Order */
  editOrder: Order;
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
export type MutationEditOrderArgs = {
  input: EditOrderInput;
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
  draft: Scalars['Boolean'];
  id: Scalars['ID'];
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

/** Other */
export enum Other {
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
  Hour = 'HOUR'
}

/** Product */
export type Product = {
  __typename?: 'Product';
  files: Array<Scalars['String']>;
  id: Scalars['ID'];
  images: Array<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  shortDescription: Scalars['String'];
  subcategory: Subcategory;
  vrm: Scalars['String'];
};

export type ProductEdges = {
  __typename?: 'ProductEdges';
  cursor: Scalars['String'];
  node: Array<Product>;
};

export type ProductFilter = {
  ageRestriction?: InputMaybe<AgeRestriction>;
  maxPrice?: InputMaybe<Scalars['Float']>;
  minPrice?: InputMaybe<Scalars['Float']>;
  other?: InputMaybe<Other>;
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
  placed: Scalars['DateTime'];
  seller: User;
  totalAmount: Scalars['Float'];
  totalItemCount: Scalars['Int'];
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
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** User */
export type User = {
  __typename?: 'User';
  bio: Scalars['String'];
  completedCommissions: Scalars['Int'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  following: Scalars['Boolean'];
  id: Scalars['ID'];
  inbox: Array<Mail>;
  likes: Scalars['Int'];
  products: Array<Product>;
  profileImageURI: Scalars['String'];
  sent: Array<Mail>;
  services: Array<Service>;
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
