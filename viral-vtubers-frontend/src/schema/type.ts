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
  image: Scalars['String'];
  isComment: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
  name: Scalars['String'];
  subcategoryId: Scalars['ID'];
  tagIds: Array<Scalars['String']>;
};

export type AddProductInput = {
  artist: Scalars['ID'];
  description: Scalars['String'];
  images: Array<Scalars['String']>;
  isComment: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
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
  fileName: Scalars['String'];
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
  isComment?: InputMaybe<Scalars['Boolean']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  subcategoryId?: InputMaybe<Scalars['ID']>;
  tagIds?: InputMaybe<Array<Scalars['String']>>;
};

export type EditProductInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: InputMaybe<Array<Scalars['String']>>;
  isComment?: InputMaybe<Scalars['Boolean']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  isMature?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  numLikes?: InputMaybe<Scalars['Int']>;
  subcategoryId?: InputMaybe<Scalars['ID']>;
  tags?: InputMaybe<Array<Scalars['ID']>>;
  titleImage?: InputMaybe<Scalars['String']>;
  vrm?: InputMaybe<Scalars['String']>;
};

export type EditProductVariant = {
  file?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
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
  follow: User;
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

export type Notification = {
  __typename?: 'Notification';
  numCart: Scalars['Int'];
  numMail: Scalars['Int'];
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
  isComment: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
  name: Scalars['String'];
  owner: User;
  subcategory: Subcategory;
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
  isComment: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
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
  numLikes?: InputMaybe<SortEnum>;
  price?: InputMaybe<SortEnum>;
};

/** Product Variant */
export type ProductVariant = {
  __typename?: 'ProductVariant';
  file: Scalars['String'];
  fileName: Scalars['String'];
  fileTypes: Array<Scalars['String']>;
  id: Scalars['ID'];
  isCart: Scalars['Boolean'];
  isPurchased: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Float'];
  product: Product;
};

/** Purchase */
export type Purchase = {
  __typename?: 'Purchase';
  buyer: User;
  id: Scalars['ID'];
  items: Array<ProductVariant>;
  numItems: Scalars['Int'];
  placed: Scalars['DateTime'];
  seller: User;
  totalAmount: Scalars['Float'];
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
  /** Get notification */
  notification: Notification;
  /** Get an Order by Id */
  order: Order;
  /** Get all Orders */
  orders: OrderPagination;
  /** Get a product */
  product: Product;
  /** Get all products */
  products: ProductPagination;
  /** Get past Purchases */
  purchases: Array<Purchase>;
  /** Get sale history */
  sales: Array<Purchase>;
  /** Get self */
  self: User;
  /** Get Subcategory */
  subcategory: Subcategory;
  /** Get Tags */
  tags: Array<Tag>;
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
export type QueryProductArgs = {
  id: Scalars['ID'];
};


/** Query object */
export type QueryProductsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductSort>;
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

export type ItemFragmentFragment = { __typename?: 'ProductVariant', id: string, name: string, price: number, file: string, fileName: string, fileTypes: Array<string>, product: { __typename?: 'Product', id: string, name: string, titleImage: string } };

export type CartFragmentFragment = { __typename?: 'Cart', numItems: number, totalAmount: number, items: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number, file: string, fileName: string, fileTypes: Array<string>, product: { __typename?: 'Product', id: string, name: string, titleImage: string } }>, seller: { __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string } };

export type CategoryFragmentFragment = { __typename?: 'Category', id: string, name: string, subcategories: Array<{ __typename?: 'Subcategory', id: string, name: string }> };

export type SubcategoryFragmentFragment = { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } };

export type MailInboxFragmentFragment = { __typename?: 'Mail', body: string, date: any, id: string, isRead: boolean, title: string, sender: { __typename?: 'User', id: string, displayName: string } };

export type MailOutboxFragmentFragment = { __typename?: 'Mail', body: string, date: any, id: string, title: string, receiver: { __typename?: 'User', id: string, displayName: string } };

export type NotificationFragmentFragment = { __typename?: 'Notification', numMail: number, numCart: number };

export type OrderFragmentFragment = { __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> };

export type MyOrdersFragmentFragment = { __typename?: 'MyOrder', active: Array<{ __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> }>, past: Array<{ __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> }> };

export type MyCommissionsFragmentFragment = { __typename?: 'MyCommission', lost: Array<{ __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> }>, pending: Array<{ __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> }>, won: Array<{ __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> }> };

export type OrderPaginationFragmentFragment = { __typename?: 'OrderPagination', edges: Array<{ __typename?: 'OrderEdge', cursor: string, node: { __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string, hasNextPage: boolean, startCursor: string } };

export type ProductDetailVariantFragmentFragment = { __typename?: 'ProductVariant', id: string, fileTypes: Array<string>, fileName: string, file: string, name: string, price: number };

export type ProductDetailFragmentFragment = { __typename?: 'Product', id: string, name: string, isComment: boolean, isDraft: boolean, isLiked: boolean, numLikes: number, description: string, titleImage: string, vrm: string, images: Array<string>, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, artist: { __typename?: 'User', id: string, displayName: string, profileImageURI: string, isFollowing: boolean }, variants: Array<{ __typename?: 'ProductVariant', isPurchased: boolean, isCart: boolean, id: string, fileTypes: Array<string>, fileName: string, file: string, name: string, price: number }> };

export type ProductBlurbFragmentFragment = { __typename?: 'Product', id: string, name: string, isLiked: boolean, isDraft: boolean, numLikes: number, titleImage: string, minPrice: number };

export type ProductPaginationFragmentFragment = { __typename?: 'ProductPagination', edges: Array<{ __typename?: 'ProductEdge', cursor: string, node: { __typename?: 'Product', id: string, name: string, isLiked: boolean, isDraft: boolean, numLikes: number, titleImage: string, minPrice: number } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string, hasNextPage: boolean, startCursor: string } };

export type PurchaseFragmentFragment = { __typename?: 'Purchase', id: string, placed: any, seller: { __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string }, items: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number, file: string, fileName: string, fileTypes: Array<string>, product: { __typename?: 'Product', id: string, name: string, titleImage: string } }> };

export type ItemDescriptionFragmentFragment = { __typename?: 'ProductVariant', id: string, name: string, price: number, file: string, fileName: string, fileTypes: Array<string>, product: { __typename?: 'Product', id: string, name: string, titleImage: string, description: string } };

export type SaleFragmentFragment = { __typename?: 'Purchase', id: string, placed: any, buyer: { __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string }, items: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number, file: string, fileName: string, fileTypes: Array<string>, product: { __typename?: 'Product', id: string, name: string, titleImage: string, description: string } }> };

export type TagFragmentFragment = { __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string };

export type UserFragmentFragment = { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean };

export type UserProfileFragmentFragment = { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, numLikes: number, profileImageURI: string, isFollowing: boolean, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, services: Array<{ __typename?: 'Service', description: string, id: string, name: string, price: number, priceType: PriceEnum }>, products: Array<{ __typename?: 'Product', id: string, name: string, minPrice: number, titleImage: string, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number }> }> };

export type ArtistFragmentFragment = { __typename?: 'User', id: string, displayName: string, numCompletedCommissions: number, numLikes: number, profileImageURI: string, isFollowing: boolean, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }> };

export type ArtistPaginationFragmentFragment = { __typename?: 'UserPagination', edges: Array<{ __typename?: 'UserEdge', cursor: string, node: { __typename?: 'User', id: string, displayName: string, numCompletedCommissions: number, numLikes: number, profileImageURI: string, isFollowing: boolean, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string, hasNextPage: boolean, startCursor: string } };

export type UserBlurbFragmentFragment = { __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string };

export type UserAccountFragmentFragment = { __typename?: 'User', id: string, displayName: string, email: string, following: Array<{ __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string }>, followers: Array<{ __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string }> };

export type AddToCartMutationVariables = Exact<{
  productId: Scalars['ID'];
  variantId: Scalars['ID'];
}>;


export type AddToCartMutation = { __typename?: 'Mutation', addToCart: Array<{ __typename?: 'Cart', numItems: number, totalAmount: number, items: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number, file: string, fileName: string, fileTypes: Array<string>, product: { __typename?: 'Product', id: string, name: string, titleImage: string } }>, seller: { __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string } }> };

export type RemoveFromCartMutationVariables = Exact<{
  productId: Scalars['ID'];
  variantId: Scalars['ID'];
}>;


export type RemoveFromCartMutation = { __typename?: 'Mutation', removeFromCart: Array<{ __typename?: 'Cart', numItems: number, totalAmount: number, items: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number, file: string, fileName: string, fileTypes: Array<string>, product: { __typename?: 'Product', id: string, name: string, titleImage: string } }>, seller: { __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string } }> };

export type EmptyCartMutationVariables = Exact<{
  sellerId?: InputMaybe<Scalars['ID']>;
}>;


export type EmptyCartMutation = { __typename?: 'Mutation', emptyCart: Array<{ __typename?: 'Cart', numItems: number, totalAmount: number, items: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number, file: string, fileName: string, fileTypes: Array<string>, product: { __typename?: 'Product', id: string, name: string, titleImage: string } }>, seller: { __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string } }> };

export type CheckoutMutationVariables = Exact<{
  sellerId?: InputMaybe<Scalars['ID']>;
}>;


export type CheckoutMutation = { __typename?: 'Mutation', checkout: Array<{ __typename?: 'Cart', numItems: number, totalAmount: number, items: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number, file: string, fileName: string, fileTypes: Array<string>, product: { __typename?: 'Product', id: string, name: string, titleImage: string } }>, seller: { __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string } }> };

export type LoginMutationVariables = Exact<{ [key: string]: never; }>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } };

export type SendMailMutationVariables = Exact<{
  input: SendMailInput;
}>;


export type SendMailMutation = { __typename?: 'Mutation', sendMail: { __typename?: 'Mail', body: string, date: any, id: string, title: string, receiver: { __typename?: 'User', id: string, displayName: string } } };

export type EditMailMutationVariables = Exact<{
  input: EditMailInput;
}>;


export type EditMailMutation = { __typename?: 'Mutation', editMail: Array<{ __typename?: 'Mail', body: string, date: any, id: string, isRead: boolean, title: string, sender: { __typename?: 'User', id: string, displayName: string } }> };

export type AddOrderMutationVariables = Exact<{
  input: AddOrderInput;
}>;


export type AddOrderMutation = { __typename?: 'Mutation', addOrder: { __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> } };

export type EditOrderMutationVariables = Exact<{
  input: EditOrderInput;
}>;


export type EditOrderMutation = { __typename?: 'Mutation', editOrder: { __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> } };

export type DeleteOrderMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteOrderMutation = { __typename?: 'Mutation', deleteOrder: { __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> } };

export type ApplyOrderMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ApplyOrderMutation = { __typename?: 'Mutation', applyOrder: { __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> } };

export type LikeProductMutationVariables = Exact<{
  id: Scalars['ID'];
  like: Scalars['Boolean'];
}>;


export type LikeProductMutation = { __typename?: 'Mutation', likeProduct: { __typename?: 'Product', id: string, name: string, isLiked: boolean, isDraft: boolean, numLikes: number, titleImage: string, minPrice: number } };

export type AddProductMutationVariables = Exact<{
  input: AddProductInput;
}>;


export type AddProductMutation = { __typename?: 'Mutation', addProduct: { __typename?: 'Product', id: string, name: string, isComment: boolean, isDraft: boolean, isLiked: boolean, numLikes: number, description: string, titleImage: string, vrm: string, images: Array<string>, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, artist: { __typename?: 'User', id: string, displayName: string, profileImageURI: string, isFollowing: boolean }, variants: Array<{ __typename?: 'ProductVariant', isPurchased: boolean, isCart: boolean, id: string, fileTypes: Array<string>, fileName: string, file: string, name: string, price: number }> } };

export type EditProductMutationVariables = Exact<{
  input: EditProductInput;
}>;


export type EditProductMutation = { __typename?: 'Mutation', editProduct: { __typename?: 'Product', id: string, name: string, isComment: boolean, isDraft: boolean, isLiked: boolean, numLikes: number, description: string, titleImage: string, vrm: string, images: Array<string>, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, artist: { __typename?: 'User', id: string, displayName: string, profileImageURI: string, isFollowing: boolean }, variants: Array<{ __typename?: 'ProductVariant', isPurchased: boolean, isCart: boolean, id: string, fileTypes: Array<string>, fileName: string, file: string, name: string, price: number }> } };

export type AddProductVariantMutationVariables = Exact<{
  input: AddProductVariant;
}>;


export type AddProductVariantMutation = { __typename?: 'Mutation', addProductVariant: { __typename?: 'Product', id: string, name: string, isComment: boolean, isDraft: boolean, isLiked: boolean, numLikes: number, description: string, titleImage: string, vrm: string, images: Array<string>, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, artist: { __typename?: 'User', id: string, displayName: string, profileImageURI: string, isFollowing: boolean }, variants: Array<{ __typename?: 'ProductVariant', isPurchased: boolean, isCart: boolean, id: string, fileTypes: Array<string>, fileName: string, file: string, name: string, price: number }> } };

export type EditProductVariantMutationVariables = Exact<{
  input: EditProductVariant;
}>;


export type EditProductVariantMutation = { __typename?: 'Mutation', editProductVariant: { __typename?: 'Product', id: string, name: string, isComment: boolean, isDraft: boolean, isLiked: boolean, numLikes: number, description: string, titleImage: string, vrm: string, images: Array<string>, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, artist: { __typename?: 'User', id: string, displayName: string, profileImageURI: string, isFollowing: boolean }, variants: Array<{ __typename?: 'ProductVariant', isPurchased: boolean, isCart: boolean, id: string, fileTypes: Array<string>, fileName: string, file: string, name: string, price: number }> } };

export type EditSelfMutationVariables = Exact<{
  input: EditSelfInput;
}>;


export type EditSelfMutation = { __typename?: 'Mutation', editSelf: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, numLikes: number, profileImageURI: string, isFollowing: boolean, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, services: Array<{ __typename?: 'Service', description: string, id: string, name: string, price: number, priceType: PriceEnum }>, products: Array<{ __typename?: 'Product', id: string, name: string, minPrice: number, titleImage: string, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number }> }> } };

export type AddServiceMutationVariables = Exact<{
  input: AddServiceInput;
}>;


export type AddServiceMutation = { __typename?: 'Mutation', addService: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean, services: Array<{ __typename?: 'Service', description: string, id: string, name: string, price: number, priceType: PriceEnum }> } };

export type EditServiceMutationVariables = Exact<{
  input: EditServiceInput;
}>;


export type EditServiceMutation = { __typename?: 'Mutation', editService: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean, services: Array<{ __typename?: 'Service', description: string, id: string, name: string, price: number, priceType: PriceEnum }> } };

export type DeleteServiceMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteServiceMutation = { __typename?: 'Mutation', deleteService: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } };

export type FollowMutationVariables = Exact<{
  id: Scalars['ID'];
  follow: Scalars['Boolean'];
}>;


export type FollowMutation = { __typename?: 'Mutation', follow: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } };

export type CartQueryVariables = Exact<{ [key: string]: never; }>;


export type CartQuery = { __typename?: 'Query', carts: Array<{ __typename?: 'Cart', numItems: number, totalAmount: number, items: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number, file: string, fileName: string, fileTypes: Array<string>, product: { __typename?: 'Product', id: string, name: string, titleImage: string } }>, seller: { __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string } }> };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, subcategories: Array<{ __typename?: 'Subcategory', id: string, name: string }> }> };

export type InboxQueryVariables = Exact<{ [key: string]: never; }>;


export type InboxQuery = { __typename?: 'Query', self: { __typename?: 'User', inbox: Array<{ __typename?: 'Mail', body: string, date: any, id: string, isRead: boolean, title: string, sender: { __typename?: 'User', id: string, displayName: string } }> } };

export type OutboxQueryVariables = Exact<{ [key: string]: never; }>;


export type OutboxQuery = { __typename?: 'Query', self: { __typename?: 'User', sent: Array<{ __typename?: 'Mail', body: string, date: any, id: string, title: string, receiver: { __typename?: 'User', id: string, displayName: string } }> } };

export type OrderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrderQuery = { __typename?: 'Query', order: { __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> } };

export type OrdersQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type OrdersQuery = { __typename?: 'Query', orders: { __typename?: 'OrderPagination', edges: Array<{ __typename?: 'OrderEdge', cursor: string, node: { __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string, hasNextPage: boolean, startCursor: string } } };

export type MyOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type MyOrdersQuery = { __typename?: 'Query', myOrders: { __typename?: 'MyOrder', active: Array<{ __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> }>, past: Array<{ __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> }> } };

export type MyCommissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyCommissionsQuery = { __typename?: 'Query', myCommissions: { __typename?: 'MyCommission', lost: Array<{ __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> }>, pending: Array<{ __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> }>, won: Array<{ __typename?: 'Order', bounty: number, description: string, id: string, image: string, isDraft: boolean, isComment: boolean, name: string, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, owner: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }, artist?: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, applications: Array<{ __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean }> }> } };

export type MyProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyProductsQuery = { __typename?: 'Query', self: { __typename?: 'User', products: Array<{ __typename?: 'Product', id: string, name: string, isLiked: boolean, isDraft: boolean, numLikes: number, titleImage: string, minPrice: number }> } };

export type CategoryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', id: string, name: string, subcategories: Array<{ __typename?: 'Subcategory', id: string, name: string }> } };

export type SubcategoryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SubcategoryQuery = { __typename?: 'Query', subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } } };

export type ProductsQueryVariables = Exact<{
  filter?: InputMaybe<ProductFilter>;
  sort?: InputMaybe<ProductSort>;
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductPagination', edges: Array<{ __typename?: 'ProductEdge', cursor: string, node: { __typename?: 'Product', id: string, name: string, isLiked: boolean, isDraft: boolean, numLikes: number, titleImage: string, minPrice: number } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string, hasNextPage: boolean, startCursor: string } } };

export type ProductsCategoryQueryVariables = Exact<{
  categoryId: Scalars['ID'];
  filter?: InputMaybe<ProductFilter>;
  sort?: InputMaybe<ProductSort>;
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ProductsCategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', products: { __typename?: 'ProductPagination', edges: Array<{ __typename?: 'ProductEdge', cursor: string, node: { __typename?: 'Product', id: string, name: string, isLiked: boolean, isDraft: boolean, numLikes: number, titleImage: string, minPrice: number } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string, hasNextPage: boolean, startCursor: string } } } };

export type ProductsSubategoryQueryQueryVariables = Exact<{
  subcategoryId: Scalars['ID'];
  filter?: InputMaybe<ProductFilter>;
  sort?: InputMaybe<ProductSort>;
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ProductsSubategoryQueryQuery = { __typename?: 'Query', subcategory: { __typename?: 'Subcategory', products: { __typename?: 'ProductPagination', edges: Array<{ __typename?: 'ProductEdge', cursor: string, node: { __typename?: 'Product', id: string, name: string, isLiked: boolean, isDraft: boolean, numLikes: number, titleImage: string, minPrice: number } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string, hasNextPage: boolean, startCursor: string } } } };

export type ProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductQuery = { __typename?: 'Query', product: { __typename?: 'Product', id: string, name: string, isComment: boolean, isDraft: boolean, isLiked: boolean, numLikes: number, description: string, titleImage: string, vrm: string, images: Array<string>, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, subcategory: { __typename?: 'Subcategory', id: string, name: string, category: { __typename?: 'Category', id: string, name: string } }, artist: { __typename?: 'User', id: string, displayName: string, profileImageURI: string, isFollowing: boolean }, variants: Array<{ __typename?: 'ProductVariant', isPurchased: boolean, isCart: boolean, id: string, fileTypes: Array<string>, fileName: string, file: string, name: string, price: number }> } };

export type PurchasesQueryVariables = Exact<{ [key: string]: never; }>;


export type PurchasesQuery = { __typename?: 'Query', purchases: Array<{ __typename?: 'Purchase', id: string, placed: any, seller: { __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string }, items: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number, file: string, fileName: string, fileTypes: Array<string>, product: { __typename?: 'Product', id: string, name: string, titleImage: string } }> }> };

export type SalesQueryVariables = Exact<{ [key: string]: never; }>;


export type SalesQuery = { __typename?: 'Query', sales: Array<{ __typename?: 'Purchase', id: string, placed: any, buyer: { __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string }, items: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number, file: string, fileName: string, fileTypes: Array<string>, product: { __typename?: 'Product', id: string, name: string, titleImage: string, description: string } }> }> };

export type SelfQueryVariables = Exact<{ [key: string]: never; }>;


export type SelfQuery = { __typename?: 'Query', self: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } };

export type AccountQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountQuery = { __typename?: 'Query', self: { __typename?: 'User', id: string, displayName: string, email: string, following: Array<{ __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string }>, followers: Array<{ __typename?: 'User', id: string, displayName: string, status: string, profileImageURI: string }> } };

export type NotificationQueryVariables = Exact<{ [key: string]: never; }>;


export type NotificationQuery = { __typename?: 'Query', notification: { __typename?: 'Notification', numMail: number, numCart: number } };

export type MyUploadedProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyUploadedProductsQuery = { __typename?: 'Query', self: { __typename?: 'User', products: Array<{ __typename?: 'Product', id: string, name: string, isLiked: boolean, isDraft: boolean, numLikes: number, titleImage: string, minPrice: number }> } };

export type TagsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }> };

export type ArtistsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ArtistsQuery = { __typename?: 'Query', users: { __typename?: 'UserPagination', edges: Array<{ __typename?: 'UserEdge', cursor: string, node: { __typename?: 'User', id: string, displayName: string, numCompletedCommissions: number, numLikes: number, profileImageURI: string, isFollowing: boolean, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string, hasNextPage: boolean, startCursor: string } } };

export type UserProfileQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserProfileQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, numLikes: number, profileImageURI: string, isFollowing: boolean, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, services: Array<{ __typename?: 'Service', description: string, id: string, name: string, price: number, priceType: PriceEnum }>, products: Array<{ __typename?: 'Product', id: string, name: string, minPrice: number, titleImage: string, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number }> }> } };

export type UserLikedProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserLikedProductQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, numLikes: number, profileImageURI: string, isFollowing: boolean, likedProduct: Array<{ __typename?: 'Product', id: string, name: string, isLiked: boolean, isDraft: boolean, numLikes: number, titleImage: string, minPrice: number }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, color: string, backgroundColor: string }>, services: Array<{ __typename?: 'Service', description: string, id: string, name: string, price: number, priceType: PriceEnum }>, products: Array<{ __typename?: 'Product', id: string, name: string, minPrice: number, titleImage: string, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, price: number }> }> } };

export type UserByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type UserByNameQuery = { __typename?: 'Query', userByName: { __typename?: 'User', id: string, bio: string, status: string, numCompletedCommissions: number, displayName: string, email: string, numLikes: number, profileImageURI: string, isFollowing: boolean } };

export const ItemFragmentFragmentDoc = gql`
    fragment ItemFragment on ProductVariant {
  id
  name
  price
  product {
    id
    name
    titleImage
  }
  file
  fileName
  fileTypes
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
export const CartFragmentFragmentDoc = gql`
    fragment CartFragment on Cart {
  numItems
  totalAmount
  items {
    ...ItemFragment
  }
  seller {
    ...UserBlurbFragment
  }
}
    ${ItemFragmentFragmentDoc}
${UserBlurbFragmentFragmentDoc}`;
export const CategoryFragmentFragmentDoc = gql`
    fragment CategoryFragment on Category {
  id
  name
  subcategories {
    id
    name
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
export const NotificationFragmentFragmentDoc = gql`
    fragment NotificationFragment on Notification {
  numMail
  numCart
}
    `;
export const SubcategoryFragmentFragmentDoc = gql`
    fragment SubcategoryFragment on Subcategory {
  id
  name
  category {
    id
    name
  }
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  bio
  status
  numCompletedCommissions
  displayName
  email
  numLikes
  profileImageURI
  isFollowing
}
    `;
export const TagFragmentFragmentDoc = gql`
    fragment TagFragment on Tag {
  id
  name
  color
  backgroundColor
}
    `;
export const OrderFragmentFragmentDoc = gql`
    fragment OrderFragment on Order {
  bounty
  description
  id
  subcategory {
    ...SubcategoryFragment
  }
  image
  isDraft
  isComment
  name
  owner {
    ...UserFragment
  }
  artist {
    ...UserFragment
  }
  tags {
    ...TagFragment
  }
  applications {
    ...UserFragment
  }
}
    ${SubcategoryFragmentFragmentDoc}
${UserFragmentFragmentDoc}
${TagFragmentFragmentDoc}`;
export const MyOrdersFragmentFragmentDoc = gql`
    fragment MyOrdersFragment on MyOrder {
  active {
    ...OrderFragment
  }
  past {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}`;
export const MyCommissionsFragmentFragmentDoc = gql`
    fragment MyCommissionsFragment on MyCommission {
  lost {
    ...OrderFragment
  }
  pending {
    ...OrderFragment
  }
  won {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}`;
export const OrderPaginationFragmentFragmentDoc = gql`
    fragment OrderPaginationFragment on OrderPagination {
  edges {
    cursor
    node {
      ...OrderFragment
    }
  }
  pageInfo {
    endCursor
    hasNextPage
    startCursor
  }
}
    ${OrderFragmentFragmentDoc}`;
export const ProductDetailVariantFragmentFragmentDoc = gql`
    fragment ProductDetailVariantFragment on ProductVariant {
  id
  fileTypes
  fileName
  file
  name
  price
}
    `;
export const ProductDetailFragmentFragmentDoc = gql`
    fragment ProductDetailFragment on Product {
  id
  name
  isComment
  isDraft
  isLiked
  numLikes
  description
  titleImage
  vrm
  images
  tags {
    ...TagFragment
  }
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
    ...ProductDetailVariantFragment
    isPurchased
    isCart
  }
}
    ${TagFragmentFragmentDoc}
${ProductDetailVariantFragmentFragmentDoc}`;
export const ProductBlurbFragmentFragmentDoc = gql`
    fragment ProductBlurbFragment on Product {
  id
  name
  isLiked
  isDraft
  numLikes
  titleImage
  minPrice
}
    `;
export const ProductPaginationFragmentFragmentDoc = gql`
    fragment ProductPaginationFragment on ProductPagination {
  edges {
    cursor
    node {
      ...ProductBlurbFragment
    }
  }
  pageInfo {
    endCursor
    hasNextPage
    startCursor
  }
}
    ${ProductBlurbFragmentFragmentDoc}`;
export const PurchaseFragmentFragmentDoc = gql`
    fragment PurchaseFragment on Purchase {
  id
  placed
  seller {
    ...UserBlurbFragment
  }
  items {
    ...ItemFragment
  }
}
    ${UserBlurbFragmentFragmentDoc}
${ItemFragmentFragmentDoc}`;
export const ItemDescriptionFragmentFragmentDoc = gql`
    fragment ItemDescriptionFragment on ProductVariant {
  id
  name
  price
  product {
    id
    name
    titleImage
    description
  }
  file
  fileName
  fileTypes
}
    `;
export const SaleFragmentFragmentDoc = gql`
    fragment SaleFragment on Purchase {
  id
  placed
  buyer {
    ...UserBlurbFragment
  }
  items {
    ...ItemDescriptionFragment
  }
}
    ${UserBlurbFragmentFragmentDoc}
${ItemDescriptionFragmentFragmentDoc}`;
export const UserProfileFragmentFragmentDoc = gql`
    fragment UserProfileFragment on User {
  id
  bio
  status
  numCompletedCommissions
  displayName
  numLikes
  profileImageURI
  isFollowing
  tags {
    ...TagFragment
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
    minPrice
    variants {
      id
      name
      price
    }
    titleImage
  }
}
    ${TagFragmentFragmentDoc}`;
export const ArtistFragmentFragmentDoc = gql`
    fragment ArtistFragment on User {
  id
  displayName
  numCompletedCommissions
  numLikes
  profileImageURI
  isFollowing
  tags {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;
export const ArtistPaginationFragmentFragmentDoc = gql`
    fragment ArtistPaginationFragment on UserPagination {
  edges {
    cursor
    node {
      ...ArtistFragment
    }
  }
  pageInfo {
    endCursor
    hasNextPage
    startCursor
  }
}
    ${ArtistFragmentFragmentDoc}`;
export const UserAccountFragmentFragmentDoc = gql`
    fragment UserAccountFragment on User {
  id
  displayName
  email
  following {
    ...UserBlurbFragment
  }
  followers {
    ...UserBlurbFragment
  }
}
    ${UserBlurbFragmentFragmentDoc}`;
export const AddToCartDocument = gql`
    mutation AddToCart($productId: ID!, $variantId: ID!) {
  addToCart(productId: $productId, variantId: $variantId) {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddToCartGQL extends Apollo.Mutation<AddToCartMutation, AddToCartMutationVariables> {
    override document = AddToCartDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveFromCartDocument = gql`
    mutation RemoveFromCart($productId: ID!, $variantId: ID!) {
  removeFromCart(productId: $productId, variantId: $variantId) {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveFromCartGQL extends Apollo.Mutation<RemoveFromCartMutation, RemoveFromCartMutationVariables> {
    override document = RemoveFromCartDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EmptyCartDocument = gql`
    mutation EmptyCart($sellerId: ID) {
  emptyCart(sellerId: $sellerId) {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EmptyCartGQL extends Apollo.Mutation<EmptyCartMutation, EmptyCartMutationVariables> {
    override document = EmptyCartDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CheckoutDocument = gql`
    mutation Checkout($sellerId: ID) {
  checkout(sellerId: $sellerId) {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CheckoutGQL extends Apollo.Mutation<CheckoutMutation, CheckoutMutationVariables> {
    override document = CheckoutDocument;
    
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
export const SendMailDocument = gql`
    mutation SendMail($input: SendMailInput!) {
  sendMail(input: $input) {
    ...MailOutboxFragment
  }
}
    ${MailOutboxFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SendMailGQL extends Apollo.Mutation<SendMailMutation, SendMailMutationVariables> {
    override document = SendMailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EditMailDocument = gql`
    mutation EditMail($input: EditMailInput!) {
  editMail(input: $input) {
    ...MailInboxFragment
  }
}
    ${MailInboxFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EditMailGQL extends Apollo.Mutation<EditMailMutation, EditMailMutationVariables> {
    override document = EditMailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddOrderDocument = gql`
    mutation AddOrder($input: AddOrderInput!) {
  addOrder(input: $input) {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddOrderGQL extends Apollo.Mutation<AddOrderMutation, AddOrderMutationVariables> {
    override document = AddOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EditOrderDocument = gql`
    mutation EditOrder($input: EditOrderInput!) {
  editOrder(input: $input) {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EditOrderGQL extends Apollo.Mutation<EditOrderMutation, EditOrderMutationVariables> {
    override document = EditOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteOrderDocument = gql`
    mutation DeleteOrder($id: ID!) {
  deleteOrder(id: $id) {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOrderGQL extends Apollo.Mutation<DeleteOrderMutation, DeleteOrderMutationVariables> {
    override document = DeleteOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ApplyOrderDocument = gql`
    mutation ApplyOrder($id: ID!) {
  applyOrder(id: $id) {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ApplyOrderGQL extends Apollo.Mutation<ApplyOrderMutation, ApplyOrderMutationVariables> {
    override document = ApplyOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LikeProductDocument = gql`
    mutation LikeProduct($id: ID!, $like: Boolean!) {
  likeProduct(id: $id, like: $like) {
    ...ProductBlurbFragment
  }
}
    ${ProductBlurbFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LikeProductGQL extends Apollo.Mutation<LikeProductMutation, LikeProductMutationVariables> {
    override document = LikeProductDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddProductDocument = gql`
    mutation AddProduct($input: AddProductInput!) {
  addProduct(input: $input) {
    ...ProductDetailFragment
  }
}
    ${ProductDetailFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddProductGQL extends Apollo.Mutation<AddProductMutation, AddProductMutationVariables> {
    override document = AddProductDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EditProductDocument = gql`
    mutation EditProduct($input: EditProductInput!) {
  editProduct(input: $input) {
    ...ProductDetailFragment
  }
}
    ${ProductDetailFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EditProductGQL extends Apollo.Mutation<EditProductMutation, EditProductMutationVariables> {
    override document = EditProductDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddProductVariantDocument = gql`
    mutation AddProductVariant($input: AddProductVariant!) {
  addProductVariant(input: $input) {
    ...ProductDetailFragment
  }
}
    ${ProductDetailFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddProductVariantGQL extends Apollo.Mutation<AddProductVariantMutation, AddProductVariantMutationVariables> {
    override document = AddProductVariantDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EditProductVariantDocument = gql`
    mutation EditProductVariant($input: EditProductVariant!) {
  editProductVariant(input: $input) {
    ...ProductDetailFragment
  }
}
    ${ProductDetailFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EditProductVariantGQL extends Apollo.Mutation<EditProductVariantMutation, EditProductVariantMutationVariables> {
    override document = EditProductVariantDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EditSelfDocument = gql`
    mutation EditSelf($input: EditSelfInput!) {
  editSelf(input: $input) {
    ...UserProfileFragment
  }
}
    ${UserProfileFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EditSelfGQL extends Apollo.Mutation<EditSelfMutation, EditSelfMutationVariables> {
    override document = EditSelfDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddServiceDocument = gql`
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
    ${UserFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddServiceGQL extends Apollo.Mutation<AddServiceMutation, AddServiceMutationVariables> {
    override document = AddServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EditServiceDocument = gql`
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
    ${UserFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EditServiceGQL extends Apollo.Mutation<EditServiceMutation, EditServiceMutationVariables> {
    override document = EditServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteServiceDocument = gql`
    mutation DeleteService($id: ID!) {
  deleteService(id: $id) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteServiceGQL extends Apollo.Mutation<DeleteServiceMutation, DeleteServiceMutationVariables> {
    override document = DeleteServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FollowDocument = gql`
    mutation Follow($id: ID!, $follow: Boolean!) {
  follow(id: $id, follow: $follow) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FollowGQL extends Apollo.Mutation<FollowMutation, FollowMutationVariables> {
    override document = FollowDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CartDocument = gql`
    query Cart {
  carts {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CartGQL extends Apollo.Query<CartQuery, CartQueryVariables> {
    override document = CartDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CategoriesDocument = gql`
    query Categories {
  categories {
    ...CategoryFragment
  }
}
    ${CategoryFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CategoriesGQL extends Apollo.Query<CategoriesQuery, CategoriesQueryVariables> {
    override document = CategoriesDocument;
    
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
export const OrderDocument = gql`
    query Order($id: ID!) {
  order(id: $id) {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class OrderGQL extends Apollo.Query<OrderQuery, OrderQueryVariables> {
    override document = OrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OrdersDocument = gql`
    query Orders($cursor: String, $limit: Int) {
  orders(cursor: $cursor, limit: $limit) {
    ...OrderPaginationFragment
  }
}
    ${OrderPaginationFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class OrdersGQL extends Apollo.Query<OrdersQuery, OrdersQueryVariables> {
    override document = OrdersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MyOrdersDocument = gql`
    query MyOrders {
  myOrders {
    ...MyOrdersFragment
  }
}
    ${MyOrdersFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MyOrdersGQL extends Apollo.Query<MyOrdersQuery, MyOrdersQueryVariables> {
    override document = MyOrdersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MyCommissionsDocument = gql`
    query MyCommissions {
  myCommissions {
    ...MyCommissionsFragment
  }
}
    ${MyCommissionsFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MyCommissionsGQL extends Apollo.Query<MyCommissionsQuery, MyCommissionsQueryVariables> {
    override document = MyCommissionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MyProductsDocument = gql`
    query MyProducts {
  self {
    products {
      ...ProductBlurbFragment
    }
  }
}
    ${ProductBlurbFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MyProductsGQL extends Apollo.Query<MyProductsQuery, MyProductsQueryVariables> {
    override document = MyProductsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CategoryDocument = gql`
    query Category($id: ID!) {
  category(id: $id) {
    ...CategoryFragment
  }
}
    ${CategoryFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CategoryGQL extends Apollo.Query<CategoryQuery, CategoryQueryVariables> {
    override document = CategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SubcategoryDocument = gql`
    query Subcategory($id: ID!) {
  subcategory(id: $id) {
    ...SubcategoryFragment
  }
}
    ${SubcategoryFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SubcategoryGQL extends Apollo.Query<SubcategoryQuery, SubcategoryQueryVariables> {
    override document = SubcategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProductsDocument = gql`
    query Products($filter: ProductFilter, $sort: ProductSort, $cursor: String, $limit: Int) {
  products(filter: $filter, sort: $sort, cursor: $cursor, limit: $limit) {
    ...ProductPaginationFragment
  }
}
    ${ProductPaginationFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ProductsGQL extends Apollo.Query<ProductsQuery, ProductsQueryVariables> {
    override document = ProductsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProductsCategoryDocument = gql`
    query ProductsCategory($categoryId: ID!, $filter: ProductFilter, $sort: ProductSort, $cursor: String, $limit: Int) {
  category(id: $categoryId) {
    products(filter: $filter, sort: $sort, cursor: $cursor, limit: $limit) {
      ...ProductPaginationFragment
    }
  }
}
    ${ProductPaginationFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ProductsCategoryGQL extends Apollo.Query<ProductsCategoryQuery, ProductsCategoryQueryVariables> {
    override document = ProductsCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProductsSubategoryQueryDocument = gql`
    query ProductsSubategoryQuery($subcategoryId: ID!, $filter: ProductFilter, $sort: ProductSort, $cursor: String, $limit: Int) {
  subcategory(id: $subcategoryId) {
    products(filter: $filter, sort: $sort, cursor: $cursor, limit: $limit) {
      ...ProductPaginationFragment
    }
  }
}
    ${ProductPaginationFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ProductsSubategoryQueryGQL extends Apollo.Query<ProductsSubategoryQueryQuery, ProductsSubategoryQueryQueryVariables> {
    override document = ProductsSubategoryQueryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProductDocument = gql`
    query Product($id: ID!) {
  product(id: $id) {
    ...ProductDetailFragment
  }
}
    ${ProductDetailFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ProductGQL extends Apollo.Query<ProductQuery, ProductQueryVariables> {
    override document = ProductDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PurchasesDocument = gql`
    query Purchases {
  purchases {
    ...PurchaseFragment
  }
}
    ${PurchaseFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PurchasesGQL extends Apollo.Query<PurchasesQuery, PurchasesQueryVariables> {
    override document = PurchasesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SalesDocument = gql`
    query Sales {
  sales {
    ...SaleFragment
  }
}
    ${SaleFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SalesGQL extends Apollo.Query<SalesQuery, SalesQueryVariables> {
    override document = SalesDocument;
    
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
export const AccountDocument = gql`
    query Account {
  self {
    ...UserAccountFragment
  }
}
    ${UserAccountFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AccountGQL extends Apollo.Query<AccountQuery, AccountQueryVariables> {
    override document = AccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NotificationDocument = gql`
    query Notification {
  notification {
    ...NotificationFragment
  }
}
    ${NotificationFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class NotificationGQL extends Apollo.Query<NotificationQuery, NotificationQueryVariables> {
    override document = NotificationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MyUploadedProductsDocument = gql`
    query MyUploadedProducts {
  self {
    products {
      ...ProductBlurbFragment
    }
  }
}
    ${ProductBlurbFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MyUploadedProductsGQL extends Apollo.Query<MyUploadedProductsQuery, MyUploadedProductsQueryVariables> {
    override document = MyUploadedProductsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TagsDocument = gql`
    query Tags {
  tags {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TagsGQL extends Apollo.Query<TagsQuery, TagsQueryVariables> {
    override document = TagsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ArtistsDocument = gql`
    query Artists($cursor: String, $limit: Int) {
  users(cursor: $cursor, limit: $limit) {
    ...ArtistPaginationFragment
  }
}
    ${ArtistPaginationFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ArtistsGQL extends Apollo.Query<ArtistsQuery, ArtistsQueryVariables> {
    override document = ArtistsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserProfileDocument = gql`
    query UserProfile($id: ID!) {
  user(id: $id) {
    ...UserProfileFragment
  }
}
    ${UserProfileFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserProfileGQL extends Apollo.Query<UserProfileQuery, UserProfileQueryVariables> {
    override document = UserProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserLikedProductDocument = gql`
    query UserLikedProduct($id: ID!) {
  user(id: $id) {
    ...UserProfileFragment
    likedProduct {
      ...ProductBlurbFragment
    }
  }
}
    ${UserProfileFragmentFragmentDoc}
${ProductBlurbFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserLikedProductGQL extends Apollo.Query<UserLikedProductQuery, UserLikedProductQueryVariables> {
    override document = UserLikedProductDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserByNameDocument = gql`
    query UserByName($name: String!) {
  userByName(name: $name) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserByNameGQL extends Apollo.Query<UserByNameQuery, UserByNameQueryVariables> {
    override document = UserByNameDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }