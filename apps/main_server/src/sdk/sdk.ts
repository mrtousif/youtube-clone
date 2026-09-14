import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  category_types: { input: any; output: any; }
  citext: { input: string; output: string; }
  float8: { input: any; output: any; }
  reaction_types: { input: any; output: any; }
  time: { input: any; output: any; }
  timestamptz: { input: string; output: string; }
  ulid: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Boolean expression to compare columns of type "category_types". All fields are combined with logical 'AND'. */
export type Category_Types_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['category_types']['input']>;
  _gt?: InputMaybe<Scalars['category_types']['input']>;
  _gte?: InputMaybe<Scalars['category_types']['input']>;
  _in?: InputMaybe<Array<Scalars['category_types']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['category_types']['input']>;
  _lte?: InputMaybe<Scalars['category_types']['input']>;
  _neq?: InputMaybe<Scalars['category_types']['input']>;
  _nin?: InputMaybe<Array<Scalars['category_types']['input']>>;
};

/** columns and relationships of "channel_subscriptions" */
export type Channel_Subscriptions = {
  __typename?: 'channel_subscriptions';
  /** An object relationship */
  channel: Users;
  channel_id: Scalars['ulid']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  subscriber: Users;
  subscriber_id: Scalars['ulid']['output'];
};

/** aggregated selection of "channel_subscriptions" */
export type Channel_Subscriptions_Aggregate = {
  __typename?: 'channel_subscriptions_aggregate';
  aggregate: Maybe<Channel_Subscriptions_Aggregate_Fields>;
  nodes: Array<Channel_Subscriptions>;
};

export type Channel_Subscriptions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Channel_Subscriptions_Aggregate_Bool_Exp_Count>;
};

export type Channel_Subscriptions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Channel_Subscriptions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "channel_subscriptions" */
export type Channel_Subscriptions_Aggregate_Fields = {
  __typename?: 'channel_subscriptions_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<Channel_Subscriptions_Max_Fields>;
  min: Maybe<Channel_Subscriptions_Min_Fields>;
};


/** aggregate fields of "channel_subscriptions" */
export type Channel_Subscriptions_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "channel_subscriptions" */
export type Channel_Subscriptions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Channel_Subscriptions_Max_Order_By>;
  min?: InputMaybe<Channel_Subscriptions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "channel_subscriptions" */
export type Channel_Subscriptions_Arr_Rel_Insert_Input = {
  data: Array<Channel_Subscriptions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Channel_Subscriptions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "channel_subscriptions". All fields are combined with a logical 'AND'. */
export type Channel_Subscriptions_Bool_Exp = {
  _and?: InputMaybe<Array<Channel_Subscriptions_Bool_Exp>>;
  _not?: InputMaybe<Channel_Subscriptions_Bool_Exp>;
  _or?: InputMaybe<Array<Channel_Subscriptions_Bool_Exp>>;
  channel?: InputMaybe<Users_Bool_Exp>;
  channel_id?: InputMaybe<Ulid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  subscriber?: InputMaybe<Users_Bool_Exp>;
  subscriber_id?: InputMaybe<Ulid_Comparison_Exp>;
};

/** unique or primary key constraints on table "channel_subscriptions" */
export enum Channel_Subscriptions_Constraint {
  /** unique or primary key constraint on columns "subscriber_id", "channel_id" */
  ChannelSubscriptionsCompositePk = 'channel_subscriptions_composite_pk'
}

/** input type for inserting data into table "channel_subscriptions" */
export type Channel_Subscriptions_Insert_Input = {
  channel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  channel_id?: InputMaybe<Scalars['ulid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  subscriber?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  subscriber_id?: InputMaybe<Scalars['ulid']['input']>;
};

/** aggregate max on columns */
export type Channel_Subscriptions_Max_Fields = {
  __typename?: 'channel_subscriptions_max_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "channel_subscriptions" */
export type Channel_Subscriptions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Channel_Subscriptions_Min_Fields = {
  __typename?: 'channel_subscriptions_min_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "channel_subscriptions" */
export type Channel_Subscriptions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "channel_subscriptions" */
export type Channel_Subscriptions_Mutation_Response = {
  __typename?: 'channel_subscriptions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Channel_Subscriptions>;
};

/** on_conflict condition type for table "channel_subscriptions" */
export type Channel_Subscriptions_On_Conflict = {
  constraint: Channel_Subscriptions_Constraint;
  update_columns?: Array<Channel_Subscriptions_Update_Column>;
  where?: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};

/** Ordering options when selecting data from "channel_subscriptions". */
export type Channel_Subscriptions_Order_By = {
  channel?: InputMaybe<Users_Order_By>;
  channel_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  subscriber?: InputMaybe<Users_Order_By>;
  subscriber_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: channel_subscriptions */
export type Channel_Subscriptions_Pk_Columns_Input = {
  channel_id: Scalars['ulid']['input'];
  subscriber_id: Scalars['ulid']['input'];
};

/** select columns of table "channel_subscriptions" */
export enum Channel_Subscriptions_Select_Column {
  /** column name */
  ChannelId = 'channel_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  SubscriberId = 'subscriber_id'
}

/** input type for updating data in table "channel_subscriptions" */
export type Channel_Subscriptions_Set_Input = {
  channel_id?: InputMaybe<Scalars['ulid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  subscriber_id?: InputMaybe<Scalars['ulid']['input']>;
};

/** Streaming cursor of the table "channel_subscriptions" */
export type Channel_Subscriptions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Channel_Subscriptions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Channel_Subscriptions_Stream_Cursor_Value_Input = {
  channel_id?: InputMaybe<Scalars['ulid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  subscriber_id?: InputMaybe<Scalars['ulid']['input']>;
};

/** update columns of table "channel_subscriptions" */
export enum Channel_Subscriptions_Update_Column {
  /** column name */
  ChannelId = 'channel_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  SubscriberId = 'subscriber_id'
}

export type Channel_Subscriptions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Channel_Subscriptions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Channel_Subscriptions_Bool_Exp;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']['input']>;
  _gt?: InputMaybe<Scalars['citext']['input']>;
  _gte?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']['input']>;
  _in?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']['input']>;
  _lt?: InputMaybe<Scalars['citext']['input']>;
  _lte?: InputMaybe<Scalars['citext']['input']>;
  _neq?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']['input']>;
  _nin?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "feelings" */
export type Feelings = {
  __typename?: 'feelings';
  created_at: Scalars['timestamptz']['output'];
  pgmemento_audit_id: Scalars['bigint']['output'];
  reaction: Scalars['reaction_types']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['ulid']['output'];
  /** An object relationship */
  video: Videos;
  video_id: Scalars['ulid']['output'];
};

/** aggregated selection of "feelings" */
export type Feelings_Aggregate = {
  __typename?: 'feelings_aggregate';
  aggregate: Maybe<Feelings_Aggregate_Fields>;
  nodes: Array<Feelings>;
};

export type Feelings_Aggregate_Bool_Exp = {
  count?: InputMaybe<Feelings_Aggregate_Bool_Exp_Count>;
};

export type Feelings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Feelings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Feelings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "feelings" */
export type Feelings_Aggregate_Fields = {
  __typename?: 'feelings_aggregate_fields';
  avg: Maybe<Feelings_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Feelings_Max_Fields>;
  min: Maybe<Feelings_Min_Fields>;
  stddev: Maybe<Feelings_Stddev_Fields>;
  stddev_pop: Maybe<Feelings_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Feelings_Stddev_Samp_Fields>;
  sum: Maybe<Feelings_Sum_Fields>;
  var_pop: Maybe<Feelings_Var_Pop_Fields>;
  var_samp: Maybe<Feelings_Var_Samp_Fields>;
  variance: Maybe<Feelings_Variance_Fields>;
};


/** aggregate fields of "feelings" */
export type Feelings_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Feelings_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "feelings" */
export type Feelings_Aggregate_Order_By = {
  avg?: InputMaybe<Feelings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Feelings_Max_Order_By>;
  min?: InputMaybe<Feelings_Min_Order_By>;
  stddev?: InputMaybe<Feelings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Feelings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Feelings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Feelings_Sum_Order_By>;
  var_pop?: InputMaybe<Feelings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Feelings_Var_Samp_Order_By>;
  variance?: InputMaybe<Feelings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "feelings" */
export type Feelings_Arr_Rel_Insert_Input = {
  data: Array<Feelings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Feelings_On_Conflict>;
};

/** aggregate avg on columns */
export type Feelings_Avg_Fields = {
  __typename?: 'feelings_avg_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "feelings" */
export type Feelings_Avg_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "feelings". All fields are combined with a logical 'AND'. */
export type Feelings_Bool_Exp = {
  _and?: InputMaybe<Array<Feelings_Bool_Exp>>;
  _not?: InputMaybe<Feelings_Bool_Exp>;
  _or?: InputMaybe<Array<Feelings_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  pgmemento_audit_id?: InputMaybe<Bigint_Comparison_Exp>;
  reaction?: InputMaybe<Reaction_Types_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Ulid_Comparison_Exp>;
  video?: InputMaybe<Videos_Bool_Exp>;
  video_id?: InputMaybe<Ulid_Comparison_Exp>;
};

/** unique or primary key constraints on table "feelings" */
export enum Feelings_Constraint {
  /** unique or primary key constraint on columns "user_id", "video_id" */
  FeelingsCompositePk = 'feelings_composite_pk',
  /** unique or primary key constraint on columns "pgmemento_audit_id" */
  FeelingsPgmementoAuditIdKey = 'feelings_pgmemento_audit_id_key'
}

/** input type for incrementing numeric columns in table "feelings" */
export type Feelings_Inc_Input = {
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "feelings" */
export type Feelings_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  reaction?: InputMaybe<Scalars['reaction_types']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['ulid']['input']>;
  video?: InputMaybe<Videos_Obj_Rel_Insert_Input>;
  video_id?: InputMaybe<Scalars['ulid']['input']>;
};

/** aggregate max on columns */
export type Feelings_Max_Fields = {
  __typename?: 'feelings_max_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  reaction: Maybe<Scalars['reaction_types']['output']>;
};

/** order by max() on columns of table "feelings" */
export type Feelings_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  reaction?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Feelings_Min_Fields = {
  __typename?: 'feelings_min_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  reaction: Maybe<Scalars['reaction_types']['output']>;
};

/** order by min() on columns of table "feelings" */
export type Feelings_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  reaction?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "feelings" */
export type Feelings_Mutation_Response = {
  __typename?: 'feelings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Feelings>;
};

/** on_conflict condition type for table "feelings" */
export type Feelings_On_Conflict = {
  constraint: Feelings_Constraint;
  update_columns?: Array<Feelings_Update_Column>;
  where?: InputMaybe<Feelings_Bool_Exp>;
};

/** Ordering options when selecting data from "feelings". */
export type Feelings_Order_By = {
  created_at?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  reaction?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  video?: InputMaybe<Videos_Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feelings */
export type Feelings_Pk_Columns_Input = {
  user_id: Scalars['ulid']['input'];
  video_id: Scalars['ulid']['input'];
};

/** select columns of table "feelings" */
export enum Feelings_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PgmementoAuditId = 'pgmemento_audit_id',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoId = 'video_id'
}

/** input type for updating data in table "feelings" */
export type Feelings_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  reaction?: InputMaybe<Scalars['reaction_types']['input']>;
  user_id?: InputMaybe<Scalars['ulid']['input']>;
  video_id?: InputMaybe<Scalars['ulid']['input']>;
};

/** aggregate stddev on columns */
export type Feelings_Stddev_Fields = {
  __typename?: 'feelings_stddev_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "feelings" */
export type Feelings_Stddev_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Feelings_Stddev_Pop_Fields = {
  __typename?: 'feelings_stddev_pop_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "feelings" */
export type Feelings_Stddev_Pop_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Feelings_Stddev_Samp_Fields = {
  __typename?: 'feelings_stddev_samp_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "feelings" */
export type Feelings_Stddev_Samp_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "feelings" */
export type Feelings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Feelings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Feelings_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  reaction?: InputMaybe<Scalars['reaction_types']['input']>;
  user_id?: InputMaybe<Scalars['ulid']['input']>;
  video_id?: InputMaybe<Scalars['ulid']['input']>;
};

/** aggregate sum on columns */
export type Feelings_Sum_Fields = {
  __typename?: 'feelings_sum_fields';
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "feelings" */
export type Feelings_Sum_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** update columns of table "feelings" */
export enum Feelings_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PgmementoAuditId = 'pgmemento_audit_id',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoId = 'video_id'
}

export type Feelings_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Feelings_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Feelings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Feelings_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Feelings_Var_Pop_Fields = {
  __typename?: 'feelings_var_pop_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "feelings" */
export type Feelings_Var_Pop_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Feelings_Var_Samp_Fields = {
  __typename?: 'feelings_var_samp_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "feelings" */
export type Feelings_Var_Samp_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Feelings_Variance_Fields = {
  __typename?: 'feelings_variance_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "feelings" */
export type Feelings_Variance_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "channel_subscriptions" */
  delete_channel_subscriptions: Maybe<Channel_Subscriptions_Mutation_Response>;
  /** delete single row from the table: "channel_subscriptions" */
  delete_channel_subscriptions_by_pk: Maybe<Channel_Subscriptions>;
  /** delete data from the table: "feelings" */
  delete_feelings: Maybe<Feelings_Mutation_Response>;
  /** delete single row from the table: "feelings" */
  delete_feelings_by_pk: Maybe<Feelings>;
  /** delete data from the table: "play_list_names" */
  delete_play_list_names: Maybe<Play_List_Names_Mutation_Response>;
  /** delete single row from the table: "play_list_names" */
  delete_play_list_names_by_pk: Maybe<Play_List_Names>;
  /** delete data from the table: "play_lists" */
  delete_play_lists: Maybe<Play_Lists_Mutation_Response>;
  /** delete single row from the table: "play_lists" */
  delete_play_lists_by_pk: Maybe<Play_Lists>;
  /** delete data from the table: "users" */
  delete_users: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk: Maybe<Users>;
  /** delete data from the table: "videos" */
  delete_videos: Maybe<Videos_Mutation_Response>;
  /** delete single row from the table: "videos" */
  delete_videos_by_pk: Maybe<Videos>;
  /** delete data from the table: "watch_history" */
  delete_watch_history: Maybe<Watch_History_Mutation_Response>;
  /** delete single row from the table: "watch_history" */
  delete_watch_history_by_pk: Maybe<Watch_History>;
  /** insert data into the table: "channel_subscriptions" */
  insert_channel_subscriptions: Maybe<Channel_Subscriptions_Mutation_Response>;
  /** insert a single row into the table: "channel_subscriptions" */
  insert_channel_subscriptions_one: Maybe<Channel_Subscriptions>;
  /** insert data into the table: "feelings" */
  insert_feelings: Maybe<Feelings_Mutation_Response>;
  /** insert a single row into the table: "feelings" */
  insert_feelings_one: Maybe<Feelings>;
  /** insert data into the table: "play_list_names" */
  insert_play_list_names: Maybe<Play_List_Names_Mutation_Response>;
  /** insert a single row into the table: "play_list_names" */
  insert_play_list_names_one: Maybe<Play_List_Names>;
  /** insert data into the table: "play_lists" */
  insert_play_lists: Maybe<Play_Lists_Mutation_Response>;
  /** insert a single row into the table: "play_lists" */
  insert_play_lists_one: Maybe<Play_Lists>;
  /** insert data into the table: "users" */
  insert_users: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one: Maybe<Users>;
  /** insert data into the table: "videos" */
  insert_videos: Maybe<Videos_Mutation_Response>;
  /** insert a single row into the table: "videos" */
  insert_videos_one: Maybe<Videos>;
  /** insert data into the table: "watch_history" */
  insert_watch_history: Maybe<Watch_History_Mutation_Response>;
  /** insert a single row into the table: "watch_history" */
  insert_watch_history_one: Maybe<Watch_History>;
  /** update data of the table: "channel_subscriptions" */
  update_channel_subscriptions: Maybe<Channel_Subscriptions_Mutation_Response>;
  /** update single row of the table: "channel_subscriptions" */
  update_channel_subscriptions_by_pk: Maybe<Channel_Subscriptions>;
  /** update multiples rows of table: "channel_subscriptions" */
  update_channel_subscriptions_many: Maybe<Array<Maybe<Channel_Subscriptions_Mutation_Response>>>;
  /** update data of the table: "feelings" */
  update_feelings: Maybe<Feelings_Mutation_Response>;
  /** update single row of the table: "feelings" */
  update_feelings_by_pk: Maybe<Feelings>;
  /** update multiples rows of table: "feelings" */
  update_feelings_many: Maybe<Array<Maybe<Feelings_Mutation_Response>>>;
  /** update data of the table: "play_list_names" */
  update_play_list_names: Maybe<Play_List_Names_Mutation_Response>;
  /** update single row of the table: "play_list_names" */
  update_play_list_names_by_pk: Maybe<Play_List_Names>;
  /** update multiples rows of table: "play_list_names" */
  update_play_list_names_many: Maybe<Array<Maybe<Play_List_Names_Mutation_Response>>>;
  /** update data of the table: "play_lists" */
  update_play_lists: Maybe<Play_Lists_Mutation_Response>;
  /** update single row of the table: "play_lists" */
  update_play_lists_by_pk: Maybe<Play_Lists>;
  /** update multiples rows of table: "play_lists" */
  update_play_lists_many: Maybe<Array<Maybe<Play_Lists_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "videos" */
  update_videos: Maybe<Videos_Mutation_Response>;
  /** update single row of the table: "videos" */
  update_videos_by_pk: Maybe<Videos>;
  /** update multiples rows of table: "videos" */
  update_videos_many: Maybe<Array<Maybe<Videos_Mutation_Response>>>;
  /** update data of the table: "watch_history" */
  update_watch_history: Maybe<Watch_History_Mutation_Response>;
  /** update single row of the table: "watch_history" */
  update_watch_history_by_pk: Maybe<Watch_History>;
  /** update multiples rows of table: "watch_history" */
  update_watch_history_many: Maybe<Array<Maybe<Watch_History_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Channel_SubscriptionsArgs = {
  where: Channel_Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_Subscriptions_By_PkArgs = {
  channel_id: Scalars['ulid']['input'];
  subscriber_id: Scalars['ulid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_FeelingsArgs = {
  where: Feelings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feelings_By_PkArgs = {
  user_id: Scalars['ulid']['input'];
  video_id: Scalars['ulid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Play_List_NamesArgs = {
  where: Play_List_Names_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Play_List_Names_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Play_ListsArgs = {
  where: Play_Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Play_Lists_By_PkArgs = {
  id: Scalars['ulid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['ulid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_VideosArgs = {
  where: Videos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Videos_By_PkArgs = {
  id: Scalars['ulid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Watch_HistoryArgs = {
  where: Watch_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Watch_History_By_PkArgs = {
  user_id: Scalars['ulid']['input'];
  video_id: Scalars['ulid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Channel_SubscriptionsArgs = {
  objects: Array<Channel_Subscriptions_Insert_Input>;
  on_conflict: InputMaybe<Channel_Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_Subscriptions_OneArgs = {
  object: Channel_Subscriptions_Insert_Input;
  on_conflict: InputMaybe<Channel_Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FeelingsArgs = {
  objects: Array<Feelings_Insert_Input>;
  on_conflict: InputMaybe<Feelings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feelings_OneArgs = {
  object: Feelings_Insert_Input;
  on_conflict: InputMaybe<Feelings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Play_List_NamesArgs = {
  objects: Array<Play_List_Names_Insert_Input>;
  on_conflict: InputMaybe<Play_List_Names_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Play_List_Names_OneArgs = {
  object: Play_List_Names_Insert_Input;
  on_conflict: InputMaybe<Play_List_Names_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Play_ListsArgs = {
  objects: Array<Play_Lists_Insert_Input>;
  on_conflict: InputMaybe<Play_Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Play_Lists_OneArgs = {
  object: Play_Lists_Insert_Input;
  on_conflict: InputMaybe<Play_Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VideosArgs = {
  objects: Array<Videos_Insert_Input>;
  on_conflict: InputMaybe<Videos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Videos_OneArgs = {
  object: Videos_Insert_Input;
  on_conflict: InputMaybe<Videos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Watch_HistoryArgs = {
  objects: Array<Watch_History_Insert_Input>;
  on_conflict: InputMaybe<Watch_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Watch_History_OneArgs = {
  object: Watch_History_Insert_Input;
  on_conflict: InputMaybe<Watch_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_SubscriptionsArgs = {
  _set: InputMaybe<Channel_Subscriptions_Set_Input>;
  where: Channel_Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_Subscriptions_By_PkArgs = {
  _set: InputMaybe<Channel_Subscriptions_Set_Input>;
  pk_columns: Channel_Subscriptions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_Subscriptions_ManyArgs = {
  updates: Array<Channel_Subscriptions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FeelingsArgs = {
  _inc: InputMaybe<Feelings_Inc_Input>;
  _set: InputMaybe<Feelings_Set_Input>;
  where: Feelings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feelings_By_PkArgs = {
  _inc: InputMaybe<Feelings_Inc_Input>;
  _set: InputMaybe<Feelings_Set_Input>;
  pk_columns: Feelings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Feelings_ManyArgs = {
  updates: Array<Feelings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Play_List_NamesArgs = {
  _inc: InputMaybe<Play_List_Names_Inc_Input>;
  _set: InputMaybe<Play_List_Names_Set_Input>;
  where: Play_List_Names_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Play_List_Names_By_PkArgs = {
  _inc: InputMaybe<Play_List_Names_Inc_Input>;
  _set: InputMaybe<Play_List_Names_Set_Input>;
  pk_columns: Play_List_Names_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Play_List_Names_ManyArgs = {
  updates: Array<Play_List_Names_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Play_ListsArgs = {
  _inc: InputMaybe<Play_Lists_Inc_Input>;
  _set: InputMaybe<Play_Lists_Set_Input>;
  where: Play_Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Play_Lists_By_PkArgs = {
  _inc: InputMaybe<Play_Lists_Inc_Input>;
  _set: InputMaybe<Play_Lists_Set_Input>;
  pk_columns: Play_Lists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Play_Lists_ManyArgs = {
  updates: Array<Play_Lists_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc: InputMaybe<Users_Inc_Input>;
  _set: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc: InputMaybe<Users_Inc_Input>;
  _set: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VideosArgs = {
  _inc: InputMaybe<Videos_Inc_Input>;
  _set: InputMaybe<Videos_Set_Input>;
  where: Videos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Videos_By_PkArgs = {
  _inc: InputMaybe<Videos_Inc_Input>;
  _set: InputMaybe<Videos_Set_Input>;
  pk_columns: Videos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Videos_ManyArgs = {
  updates: Array<Videos_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Watch_HistoryArgs = {
  _inc: InputMaybe<Watch_History_Inc_Input>;
  _set: InputMaybe<Watch_History_Set_Input>;
  where: Watch_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Watch_History_By_PkArgs = {
  _inc: InputMaybe<Watch_History_Inc_Input>;
  _set: InputMaybe<Watch_History_Set_Input>;
  pk_columns: Watch_History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Watch_History_ManyArgs = {
  updates: Array<Watch_History_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "play_list_names" */
export type Play_List_Names = {
  __typename?: 'play_list_names';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  pgmemento_audit_id: Scalars['bigint']['output'];
  /** An array relationship */
  play_lists: Array<Play_Lists>;
  /** An aggregate relationship */
  play_lists_aggregate: Play_Lists_Aggregate;
  /** An object relationship */
  user: Users;
  user_id: Scalars['ulid']['output'];
  video_count: Maybe<Scalars['bigint']['output']>;
};


/** columns and relationships of "play_list_names" */
export type Play_List_NamesPlay_ListsArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


/** columns and relationships of "play_list_names" */
export type Play_List_NamesPlay_Lists_AggregateArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};

/** aggregated selection of "play_list_names" */
export type Play_List_Names_Aggregate = {
  __typename?: 'play_list_names_aggregate';
  aggregate: Maybe<Play_List_Names_Aggregate_Fields>;
  nodes: Array<Play_List_Names>;
};

export type Play_List_Names_Aggregate_Bool_Exp = {
  count?: InputMaybe<Play_List_Names_Aggregate_Bool_Exp_Count>;
};

export type Play_List_Names_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Play_List_Names_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Play_List_Names_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "play_list_names" */
export type Play_List_Names_Aggregate_Fields = {
  __typename?: 'play_list_names_aggregate_fields';
  avg: Maybe<Play_List_Names_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Play_List_Names_Max_Fields>;
  min: Maybe<Play_List_Names_Min_Fields>;
  stddev: Maybe<Play_List_Names_Stddev_Fields>;
  stddev_pop: Maybe<Play_List_Names_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Play_List_Names_Stddev_Samp_Fields>;
  sum: Maybe<Play_List_Names_Sum_Fields>;
  var_pop: Maybe<Play_List_Names_Var_Pop_Fields>;
  var_samp: Maybe<Play_List_Names_Var_Samp_Fields>;
  variance: Maybe<Play_List_Names_Variance_Fields>;
};


/** aggregate fields of "play_list_names" */
export type Play_List_Names_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Play_List_Names_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "play_list_names" */
export type Play_List_Names_Aggregate_Order_By = {
  avg?: InputMaybe<Play_List_Names_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Play_List_Names_Max_Order_By>;
  min?: InputMaybe<Play_List_Names_Min_Order_By>;
  stddev?: InputMaybe<Play_List_Names_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Play_List_Names_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Play_List_Names_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Play_List_Names_Sum_Order_By>;
  var_pop?: InputMaybe<Play_List_Names_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Play_List_Names_Var_Samp_Order_By>;
  variance?: InputMaybe<Play_List_Names_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "play_list_names" */
export type Play_List_Names_Arr_Rel_Insert_Input = {
  data: Array<Play_List_Names_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Play_List_Names_On_Conflict>;
};

/** aggregate avg on columns */
export type Play_List_Names_Avg_Fields = {
  __typename?: 'play_list_names_avg_fields';
  id: Maybe<Scalars['Float']['output']>;
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  video_count: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "play_list_names" */
export type Play_List_Names_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "play_list_names". All fields are combined with a logical 'AND'. */
export type Play_List_Names_Bool_Exp = {
  _and?: InputMaybe<Array<Play_List_Names_Bool_Exp>>;
  _not?: InputMaybe<Play_List_Names_Bool_Exp>;
  _or?: InputMaybe<Array<Play_List_Names_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pgmemento_audit_id?: InputMaybe<Bigint_Comparison_Exp>;
  play_lists?: InputMaybe<Play_Lists_Bool_Exp>;
  play_lists_aggregate?: InputMaybe<Play_Lists_Aggregate_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Ulid_Comparison_Exp>;
  video_count?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "play_list_names" */
export enum Play_List_Names_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlayListNamesIdPk = 'play_list_names_id_pk',
  /** unique or primary key constraint on columns "pgmemento_audit_id" */
  PlayListNamesPgmementoAuditIdKey = 'play_list_names_pgmemento_audit_id_key'
}

/** input type for incrementing numeric columns in table "play_list_names" */
export type Play_List_Names_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  video_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "play_list_names" */
export type Play_List_Names_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  play_lists?: InputMaybe<Play_Lists_Arr_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['ulid']['input']>;
  video_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Play_List_Names_Max_Fields = {
  __typename?: 'play_list_names_max_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  name: Maybe<Scalars['String']['output']>;
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  video_count: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "play_list_names" */
export type Play_List_Names_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Play_List_Names_Min_Fields = {
  __typename?: 'play_list_names_min_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  name: Maybe<Scalars['String']['output']>;
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  video_count: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "play_list_names" */
export type Play_List_Names_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "play_list_names" */
export type Play_List_Names_Mutation_Response = {
  __typename?: 'play_list_names_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Play_List_Names>;
};

/** input type for inserting object relation for remote table "play_list_names" */
export type Play_List_Names_Obj_Rel_Insert_Input = {
  data: Play_List_Names_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Play_List_Names_On_Conflict>;
};

/** on_conflict condition type for table "play_list_names" */
export type Play_List_Names_On_Conflict = {
  constraint: Play_List_Names_Constraint;
  update_columns?: Array<Play_List_Names_Update_Column>;
  where?: InputMaybe<Play_List_Names_Bool_Exp>;
};

/** Ordering options when selecting data from "play_list_names". */
export type Play_List_Names_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  play_lists_aggregate?: InputMaybe<Play_Lists_Aggregate_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** primary key columns input for table: play_list_names */
export type Play_List_Names_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "play_list_names" */
export enum Play_List_Names_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PgmementoAuditId = 'pgmemento_audit_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoCount = 'video_count'
}

/** input type for updating data in table "play_list_names" */
export type Play_List_Names_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['ulid']['input']>;
  video_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Play_List_Names_Stddev_Fields = {
  __typename?: 'play_list_names_stddev_fields';
  id: Maybe<Scalars['Float']['output']>;
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  video_count: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "play_list_names" */
export type Play_List_Names_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Play_List_Names_Stddev_Pop_Fields = {
  __typename?: 'play_list_names_stddev_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  video_count: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "play_list_names" */
export type Play_List_Names_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Play_List_Names_Stddev_Samp_Fields = {
  __typename?: 'play_list_names_stddev_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  video_count: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "play_list_names" */
export type Play_List_Names_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "play_list_names" */
export type Play_List_Names_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Play_List_Names_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Play_List_Names_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['ulid']['input']>;
  video_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Play_List_Names_Sum_Fields = {
  __typename?: 'play_list_names_sum_fields';
  id: Maybe<Scalars['bigint']['output']>;
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  video_count: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "play_list_names" */
export type Play_List_Names_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** update columns of table "play_list_names" */
export enum Play_List_Names_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PgmementoAuditId = 'pgmemento_audit_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoCount = 'video_count'
}

export type Play_List_Names_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Play_List_Names_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Play_List_Names_Set_Input>;
  /** filter the rows which have to be updated */
  where: Play_List_Names_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Play_List_Names_Var_Pop_Fields = {
  __typename?: 'play_list_names_var_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  video_count: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "play_list_names" */
export type Play_List_Names_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Play_List_Names_Var_Samp_Fields = {
  __typename?: 'play_list_names_var_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  video_count: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "play_list_names" */
export type Play_List_Names_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Play_List_Names_Variance_Fields = {
  __typename?: 'play_list_names_variance_fields';
  id: Maybe<Scalars['Float']['output']>;
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  video_count: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "play_list_names" */
export type Play_List_Names_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** columns and relationships of "play_lists" */
export type Play_Lists = {
  __typename?: 'play_lists';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['ulid']['output'];
  pgmemento_audit_id: Scalars['bigint']['output'];
  /** An object relationship */
  play_list_name: Play_List_Names;
  play_list_names_id: Scalars['bigint']['output'];
  /** An object relationship */
  video: Videos;
  video_id: Scalars['ulid']['output'];
};

/** aggregated selection of "play_lists" */
export type Play_Lists_Aggregate = {
  __typename?: 'play_lists_aggregate';
  aggregate: Maybe<Play_Lists_Aggregate_Fields>;
  nodes: Array<Play_Lists>;
};

export type Play_Lists_Aggregate_Bool_Exp = {
  count?: InputMaybe<Play_Lists_Aggregate_Bool_Exp_Count>;
};

export type Play_Lists_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Play_Lists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Play_Lists_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "play_lists" */
export type Play_Lists_Aggregate_Fields = {
  __typename?: 'play_lists_aggregate_fields';
  avg: Maybe<Play_Lists_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Play_Lists_Max_Fields>;
  min: Maybe<Play_Lists_Min_Fields>;
  stddev: Maybe<Play_Lists_Stddev_Fields>;
  stddev_pop: Maybe<Play_Lists_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Play_Lists_Stddev_Samp_Fields>;
  sum: Maybe<Play_Lists_Sum_Fields>;
  var_pop: Maybe<Play_Lists_Var_Pop_Fields>;
  var_samp: Maybe<Play_Lists_Var_Samp_Fields>;
  variance: Maybe<Play_Lists_Variance_Fields>;
};


/** aggregate fields of "play_lists" */
export type Play_Lists_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Play_Lists_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "play_lists" */
export type Play_Lists_Aggregate_Order_By = {
  avg?: InputMaybe<Play_Lists_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Play_Lists_Max_Order_By>;
  min?: InputMaybe<Play_Lists_Min_Order_By>;
  stddev?: InputMaybe<Play_Lists_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Play_Lists_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Play_Lists_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Play_Lists_Sum_Order_By>;
  var_pop?: InputMaybe<Play_Lists_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Play_Lists_Var_Samp_Order_By>;
  variance?: InputMaybe<Play_Lists_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "play_lists" */
export type Play_Lists_Arr_Rel_Insert_Input = {
  data: Array<Play_Lists_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Play_Lists_On_Conflict>;
};

/** aggregate avg on columns */
export type Play_Lists_Avg_Fields = {
  __typename?: 'play_lists_avg_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  play_list_names_id: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "play_lists" */
export type Play_Lists_Avg_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
  play_list_names_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "play_lists". All fields are combined with a logical 'AND'. */
export type Play_Lists_Bool_Exp = {
  _and?: InputMaybe<Array<Play_Lists_Bool_Exp>>;
  _not?: InputMaybe<Play_Lists_Bool_Exp>;
  _or?: InputMaybe<Array<Play_Lists_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Ulid_Comparison_Exp>;
  pgmemento_audit_id?: InputMaybe<Bigint_Comparison_Exp>;
  play_list_name?: InputMaybe<Play_List_Names_Bool_Exp>;
  play_list_names_id?: InputMaybe<Bigint_Comparison_Exp>;
  video?: InputMaybe<Videos_Bool_Exp>;
  video_id?: InputMaybe<Ulid_Comparison_Exp>;
};

/** unique or primary key constraints on table "play_lists" */
export enum Play_Lists_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlayListsIdPk = 'play_lists_id_pk',
  /** unique or primary key constraint on columns "pgmemento_audit_id" */
  PlayListsPgmementoAuditIdKey = 'play_lists_pgmemento_audit_id_key'
}

/** input type for incrementing numeric columns in table "play_lists" */
export type Play_Lists_Inc_Input = {
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  play_list_names_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "play_lists" */
export type Play_Lists_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['ulid']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  play_list_name?: InputMaybe<Play_List_Names_Obj_Rel_Insert_Input>;
  play_list_names_id?: InputMaybe<Scalars['bigint']['input']>;
  video?: InputMaybe<Videos_Obj_Rel_Insert_Input>;
  video_id?: InputMaybe<Scalars['ulid']['input']>;
};

/** aggregate max on columns */
export type Play_Lists_Max_Fields = {
  __typename?: 'play_lists_max_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  play_list_names_id: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "play_lists" */
export type Play_Lists_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  play_list_names_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Play_Lists_Min_Fields = {
  __typename?: 'play_lists_min_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  play_list_names_id: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "play_lists" */
export type Play_Lists_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  play_list_names_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "play_lists" */
export type Play_Lists_Mutation_Response = {
  __typename?: 'play_lists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Play_Lists>;
};

/** on_conflict condition type for table "play_lists" */
export type Play_Lists_On_Conflict = {
  constraint: Play_Lists_Constraint;
  update_columns?: Array<Play_Lists_Update_Column>;
  where?: InputMaybe<Play_Lists_Bool_Exp>;
};

/** Ordering options when selecting data from "play_lists". */
export type Play_Lists_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  play_list_name?: InputMaybe<Play_List_Names_Order_By>;
  play_list_names_id?: InputMaybe<Order_By>;
  video?: InputMaybe<Videos_Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: play_lists */
export type Play_Lists_Pk_Columns_Input = {
  id: Scalars['ulid']['input'];
};

/** select columns of table "play_lists" */
export enum Play_Lists_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PgmementoAuditId = 'pgmemento_audit_id',
  /** column name */
  PlayListNamesId = 'play_list_names_id',
  /** column name */
  VideoId = 'video_id'
}

/** input type for updating data in table "play_lists" */
export type Play_Lists_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['ulid']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  play_list_names_id?: InputMaybe<Scalars['bigint']['input']>;
  video_id?: InputMaybe<Scalars['ulid']['input']>;
};

/** aggregate stddev on columns */
export type Play_Lists_Stddev_Fields = {
  __typename?: 'play_lists_stddev_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  play_list_names_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "play_lists" */
export type Play_Lists_Stddev_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
  play_list_names_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Play_Lists_Stddev_Pop_Fields = {
  __typename?: 'play_lists_stddev_pop_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  play_list_names_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "play_lists" */
export type Play_Lists_Stddev_Pop_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
  play_list_names_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Play_Lists_Stddev_Samp_Fields = {
  __typename?: 'play_lists_stddev_samp_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  play_list_names_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "play_lists" */
export type Play_Lists_Stddev_Samp_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
  play_list_names_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "play_lists" */
export type Play_Lists_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Play_Lists_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Play_Lists_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['ulid']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  play_list_names_id?: InputMaybe<Scalars['bigint']['input']>;
  video_id?: InputMaybe<Scalars['ulid']['input']>;
};

/** aggregate sum on columns */
export type Play_Lists_Sum_Fields = {
  __typename?: 'play_lists_sum_fields';
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  play_list_names_id: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "play_lists" */
export type Play_Lists_Sum_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
  play_list_names_id?: InputMaybe<Order_By>;
};

/** update columns of table "play_lists" */
export enum Play_Lists_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PgmementoAuditId = 'pgmemento_audit_id',
  /** column name */
  PlayListNamesId = 'play_list_names_id',
  /** column name */
  VideoId = 'video_id'
}

export type Play_Lists_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Play_Lists_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Play_Lists_Set_Input>;
  /** filter the rows which have to be updated */
  where: Play_Lists_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Play_Lists_Var_Pop_Fields = {
  __typename?: 'play_lists_var_pop_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  play_list_names_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "play_lists" */
export type Play_Lists_Var_Pop_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
  play_list_names_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Play_Lists_Var_Samp_Fields = {
  __typename?: 'play_lists_var_samp_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  play_list_names_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "play_lists" */
export type Play_Lists_Var_Samp_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
  play_list_names_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Play_Lists_Variance_Fields = {
  __typename?: 'play_lists_variance_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  play_list_names_id: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "play_lists" */
export type Play_Lists_Variance_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
  play_list_names_id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "channel_subscriptions" */
  channel_subscriptions: Array<Channel_Subscriptions>;
  /** fetch aggregated fields from the table: "channel_subscriptions" */
  channel_subscriptions_aggregate: Channel_Subscriptions_Aggregate;
  /** fetch data from the table: "channel_subscriptions" using primary key columns */
  channel_subscriptions_by_pk: Maybe<Channel_Subscriptions>;
  /** An array relationship */
  feelings: Array<Feelings>;
  /** An aggregate relationship */
  feelings_aggregate: Feelings_Aggregate;
  /** fetch data from the table: "feelings" using primary key columns */
  feelings_by_pk: Maybe<Feelings>;
  /** An array relationship */
  play_list_names: Array<Play_List_Names>;
  /** An aggregate relationship */
  play_list_names_aggregate: Play_List_Names_Aggregate;
  /** fetch data from the table: "play_list_names" using primary key columns */
  play_list_names_by_pk: Maybe<Play_List_Names>;
  /** An array relationship */
  play_lists: Array<Play_Lists>;
  /** An aggregate relationship */
  play_lists_aggregate: Play_Lists_Aggregate;
  /** fetch data from the table: "play_lists" using primary key columns */
  play_lists_by_pk: Maybe<Play_Lists>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** An array relationship */
  videos: Array<Videos>;
  /** An aggregate relationship */
  videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk: Maybe<Videos>;
  /** fetch data from the table: "watch_history" */
  watch_history: Array<Watch_History>;
  /** fetch aggregated fields from the table: "watch_history" */
  watch_history_aggregate: Watch_History_Aggregate;
  /** fetch data from the table: "watch_history" using primary key columns */
  watch_history_by_pk: Maybe<Watch_History>;
};


export type Query_RootChannel_SubscriptionsArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


export type Query_RootChannel_Subscriptions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


export type Query_RootChannel_Subscriptions_By_PkArgs = {
  channel_id: Scalars['ulid']['input'];
  subscriber_id: Scalars['ulid']['input'];
};


export type Query_RootFeelingsArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


export type Query_RootFeelings_AggregateArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


export type Query_RootFeelings_By_PkArgs = {
  user_id: Scalars['ulid']['input'];
  video_id: Scalars['ulid']['input'];
};


export type Query_RootPlay_List_NamesArgs = {
  distinct_on: InputMaybe<Array<Play_List_Names_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Play_List_Names_Order_By>>;
  where: InputMaybe<Play_List_Names_Bool_Exp>;
};


export type Query_RootPlay_List_Names_AggregateArgs = {
  distinct_on: InputMaybe<Array<Play_List_Names_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Play_List_Names_Order_By>>;
  where: InputMaybe<Play_List_Names_Bool_Exp>;
};


export type Query_RootPlay_List_Names_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootPlay_ListsArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


export type Query_RootPlay_Lists_AggregateArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


export type Query_RootPlay_Lists_By_PkArgs = {
  id: Scalars['ulid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['ulid']['input'];
};


export type Query_RootVideosArgs = {
  distinct_on: InputMaybe<Array<Videos_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Videos_Order_By>>;
  where: InputMaybe<Videos_Bool_Exp>;
};


export type Query_RootVideos_AggregateArgs = {
  distinct_on: InputMaybe<Array<Videos_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Videos_Order_By>>;
  where: InputMaybe<Videos_Bool_Exp>;
};


export type Query_RootVideos_By_PkArgs = {
  id: Scalars['ulid']['input'];
};


export type Query_RootWatch_HistoryArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};


export type Query_RootWatch_History_AggregateArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};


export type Query_RootWatch_History_By_PkArgs = {
  user_id: Scalars['ulid']['input'];
  video_id: Scalars['ulid']['input'];
};

/** Boolean expression to compare columns of type "reaction_types". All fields are combined with logical 'AND'. */
export type Reaction_Types_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['reaction_types']['input']>;
  _gt?: InputMaybe<Scalars['reaction_types']['input']>;
  _gte?: InputMaybe<Scalars['reaction_types']['input']>;
  _in?: InputMaybe<Array<Scalars['reaction_types']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['reaction_types']['input']>;
  _lte?: InputMaybe<Scalars['reaction_types']['input']>;
  _neq?: InputMaybe<Scalars['reaction_types']['input']>;
  _nin?: InputMaybe<Array<Scalars['reaction_types']['input']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "channel_subscriptions" */
  channel_subscriptions: Array<Channel_Subscriptions>;
  /** fetch aggregated fields from the table: "channel_subscriptions" */
  channel_subscriptions_aggregate: Channel_Subscriptions_Aggregate;
  /** fetch data from the table: "channel_subscriptions" using primary key columns */
  channel_subscriptions_by_pk: Maybe<Channel_Subscriptions>;
  /** fetch data from the table in a streaming manner: "channel_subscriptions" */
  channel_subscriptions_stream: Array<Channel_Subscriptions>;
  /** An array relationship */
  feelings: Array<Feelings>;
  /** An aggregate relationship */
  feelings_aggregate: Feelings_Aggregate;
  /** fetch data from the table: "feelings" using primary key columns */
  feelings_by_pk: Maybe<Feelings>;
  /** fetch data from the table in a streaming manner: "feelings" */
  feelings_stream: Array<Feelings>;
  /** An array relationship */
  play_list_names: Array<Play_List_Names>;
  /** An aggregate relationship */
  play_list_names_aggregate: Play_List_Names_Aggregate;
  /** fetch data from the table: "play_list_names" using primary key columns */
  play_list_names_by_pk: Maybe<Play_List_Names>;
  /** fetch data from the table in a streaming manner: "play_list_names" */
  play_list_names_stream: Array<Play_List_Names>;
  /** An array relationship */
  play_lists: Array<Play_Lists>;
  /** An aggregate relationship */
  play_lists_aggregate: Play_Lists_Aggregate;
  /** fetch data from the table: "play_lists" using primary key columns */
  play_lists_by_pk: Maybe<Play_Lists>;
  /** fetch data from the table in a streaming manner: "play_lists" */
  play_lists_stream: Array<Play_Lists>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** An array relationship */
  videos: Array<Videos>;
  /** An aggregate relationship */
  videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk: Maybe<Videos>;
  /** fetch data from the table in a streaming manner: "videos" */
  videos_stream: Array<Videos>;
  /** fetch data from the table: "watch_history" */
  watch_history: Array<Watch_History>;
  /** fetch aggregated fields from the table: "watch_history" */
  watch_history_aggregate: Watch_History_Aggregate;
  /** fetch data from the table: "watch_history" using primary key columns */
  watch_history_by_pk: Maybe<Watch_History>;
  /** fetch data from the table in a streaming manner: "watch_history" */
  watch_history_stream: Array<Watch_History>;
};


export type Subscription_RootChannel_SubscriptionsArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


export type Subscription_RootChannel_Subscriptions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


export type Subscription_RootChannel_Subscriptions_By_PkArgs = {
  channel_id: Scalars['ulid']['input'];
  subscriber_id: Scalars['ulid']['input'];
};


export type Subscription_RootChannel_Subscriptions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Channel_Subscriptions_Stream_Cursor_Input>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


export type Subscription_RootFeelingsArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


export type Subscription_RootFeelings_AggregateArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


export type Subscription_RootFeelings_By_PkArgs = {
  user_id: Scalars['ulid']['input'];
  video_id: Scalars['ulid']['input'];
};


export type Subscription_RootFeelings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Feelings_Stream_Cursor_Input>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


export type Subscription_RootPlay_List_NamesArgs = {
  distinct_on: InputMaybe<Array<Play_List_Names_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Play_List_Names_Order_By>>;
  where: InputMaybe<Play_List_Names_Bool_Exp>;
};


export type Subscription_RootPlay_List_Names_AggregateArgs = {
  distinct_on: InputMaybe<Array<Play_List_Names_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Play_List_Names_Order_By>>;
  where: InputMaybe<Play_List_Names_Bool_Exp>;
};


export type Subscription_RootPlay_List_Names_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootPlay_List_Names_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Play_List_Names_Stream_Cursor_Input>>;
  where: InputMaybe<Play_List_Names_Bool_Exp>;
};


export type Subscription_RootPlay_ListsArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


export type Subscription_RootPlay_Lists_AggregateArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


export type Subscription_RootPlay_Lists_By_PkArgs = {
  id: Scalars['ulid']['input'];
};


export type Subscription_RootPlay_Lists_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Play_Lists_Stream_Cursor_Input>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['ulid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVideosArgs = {
  distinct_on: InputMaybe<Array<Videos_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Videos_Order_By>>;
  where: InputMaybe<Videos_Bool_Exp>;
};


export type Subscription_RootVideos_AggregateArgs = {
  distinct_on: InputMaybe<Array<Videos_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Videos_Order_By>>;
  where: InputMaybe<Videos_Bool_Exp>;
};


export type Subscription_RootVideos_By_PkArgs = {
  id: Scalars['ulid']['input'];
};


export type Subscription_RootVideos_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Videos_Stream_Cursor_Input>>;
  where: InputMaybe<Videos_Bool_Exp>;
};


export type Subscription_RootWatch_HistoryArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};


export type Subscription_RootWatch_History_AggregateArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};


export type Subscription_RootWatch_History_By_PkArgs = {
  user_id: Scalars['ulid']['input'];
  video_id: Scalars['ulid']['input'];
};


export type Subscription_RootWatch_History_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Watch_History_Stream_Cursor_Input>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};

/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['time']['input']>;
  _gt?: InputMaybe<Scalars['time']['input']>;
  _gte?: InputMaybe<Scalars['time']['input']>;
  _in?: InputMaybe<Array<Scalars['time']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['time']['input']>;
  _lte?: InputMaybe<Scalars['time']['input']>;
  _neq?: InputMaybe<Scalars['time']['input']>;
  _nin?: InputMaybe<Array<Scalars['time']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "ulid". All fields are combined with logical 'AND'. */
export type Ulid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['ulid']['input']>;
  _gt?: InputMaybe<Scalars['ulid']['input']>;
  _gte?: InputMaybe<Scalars['ulid']['input']>;
  _in?: InputMaybe<Array<Scalars['ulid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['ulid']['input']>;
  _lte?: InputMaybe<Scalars['ulid']['input']>;
  _neq?: InputMaybe<Scalars['ulid']['input']>;
  _nin?: InputMaybe<Array<Scalars['ulid']['input']>>;
};

/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type Users = {
  __typename?: 'users';
  auth_id: Scalars['uuid']['output'];
  channel_name: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  description: Maybe<Scalars['String']['output']>;
  email: Scalars['citext']['output'];
  /** An array relationship */
  feelings: Array<Feelings>;
  /** An aggregate relationship */
  feelings_aggregate: Feelings_Aggregate;
  id: Scalars['ulid']['output'];
  name: Scalars['String']['output'];
  pgmemento_audit_id: Scalars['bigint']['output'];
  phone: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  play_list_names: Array<Play_List_Names>;
  /** An aggregate relationship */
  play_list_names_aggregate: Play_List_Names_Aggregate;
  /** An array relationship */
  subscribed_channels: Array<Channel_Subscriptions>;
  /** An aggregate relationship */
  subscribed_channels_aggregate: Channel_Subscriptions_Aggregate;
  subscriber_count: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  subscribers: Array<Channel_Subscriptions>;
  /** An aggregate relationship */
  subscribers_aggregate: Channel_Subscriptions_Aggregate;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  videos: Array<Videos>;
  /** An aggregate relationship */
  videos_aggregate: Videos_Aggregate;
  /** An array relationship */
  watch_histories: Array<Watch_History>;
  /** An aggregate relationship */
  watch_histories_aggregate: Watch_History_Aggregate;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersFeelingsArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersFeelings_AggregateArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersPlay_List_NamesArgs = {
  distinct_on: InputMaybe<Array<Play_List_Names_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Play_List_Names_Order_By>>;
  where: InputMaybe<Play_List_Names_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersPlay_List_Names_AggregateArgs = {
  distinct_on: InputMaybe<Array<Play_List_Names_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Play_List_Names_Order_By>>;
  where: InputMaybe<Play_List_Names_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersSubscribed_ChannelsArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersSubscribed_Channels_AggregateArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersSubscribersArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersSubscribers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersVideosArgs = {
  distinct_on: InputMaybe<Array<Videos_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Videos_Order_By>>;
  where: InputMaybe<Videos_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersVideos_AggregateArgs = {
  distinct_on: InputMaybe<Array<Videos_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Videos_Order_By>>;
  where: InputMaybe<Videos_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersWatch_HistoriesArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersWatch_Histories_AggregateArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Users_Max_Fields>;
  min: Maybe<Users_Min_Fields>;
  stddev: Maybe<Users_Stddev_Fields>;
  stddev_pop: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Users_Stddev_Samp_Fields>;
  sum: Maybe<Users_Sum_Fields>;
  var_pop: Maybe<Users_Var_Pop_Fields>;
  var_samp: Maybe<Users_Var_Samp_Fields>;
  variance: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Users_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  subscriber_count: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  auth_id?: InputMaybe<Uuid_Comparison_Exp>;
  channel_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  feelings?: InputMaybe<Feelings_Bool_Exp>;
  feelings_aggregate?: InputMaybe<Feelings_Aggregate_Bool_Exp>;
  id?: InputMaybe<Ulid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pgmemento_audit_id?: InputMaybe<Bigint_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  play_list_names?: InputMaybe<Play_List_Names_Bool_Exp>;
  play_list_names_aggregate?: InputMaybe<Play_List_Names_Aggregate_Bool_Exp>;
  subscribed_channels?: InputMaybe<Channel_Subscriptions_Bool_Exp>;
  subscribed_channels_aggregate?: InputMaybe<Channel_Subscriptions_Aggregate_Bool_Exp>;
  subscriber_count?: InputMaybe<Int_Comparison_Exp>;
  subscribers?: InputMaybe<Channel_Subscriptions_Bool_Exp>;
  subscribers_aggregate?: InputMaybe<Channel_Subscriptions_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  videos?: InputMaybe<Videos_Bool_Exp>;
  videos_aggregate?: InputMaybe<Videos_Aggregate_Bool_Exp>;
  watch_histories?: InputMaybe<Watch_History_Bool_Exp>;
  watch_histories_aggregate?: InputMaybe<Watch_History_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "channel_name" */
  UsersChannelNameKey = 'users_channel_name_key',
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersIdPk = 'users_id_pk',
  /** unique or primary key constraint on columns "pgmemento_audit_id" */
  UsersPgmementoAuditIdKey = 'users_pgmemento_audit_id_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  subscriber_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  auth_id?: InputMaybe<Scalars['uuid']['input']>;
  channel_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  feelings?: InputMaybe<Feelings_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['ulid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  play_list_names?: InputMaybe<Play_List_Names_Arr_Rel_Insert_Input>;
  subscribed_channels?: InputMaybe<Channel_Subscriptions_Arr_Rel_Insert_Input>;
  subscriber_count?: InputMaybe<Scalars['Int']['input']>;
  subscribers?: InputMaybe<Channel_Subscriptions_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  videos?: InputMaybe<Videos_Arr_Rel_Insert_Input>;
  watch_histories?: InputMaybe<Watch_History_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  auth_id: Maybe<Scalars['uuid']['output']>;
  channel_name: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  description: Maybe<Scalars['String']['output']>;
  email: Maybe<Scalars['citext']['output']>;
  name: Maybe<Scalars['String']['output']>;
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  subscriber_count: Maybe<Scalars['Int']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  auth_id: Maybe<Scalars['uuid']['output']>;
  channel_name: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  description: Maybe<Scalars['String']['output']>;
  email: Maybe<Scalars['citext']['output']>;
  name: Maybe<Scalars['String']['output']>;
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  subscriber_count: Maybe<Scalars['Int']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  auth_id?: InputMaybe<Order_By>;
  channel_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  feelings_aggregate?: InputMaybe<Feelings_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  play_list_names_aggregate?: InputMaybe<Play_List_Names_Aggregate_Order_By>;
  subscribed_channels_aggregate?: InputMaybe<Channel_Subscriptions_Aggregate_Order_By>;
  subscriber_count?: InputMaybe<Order_By>;
  subscribers_aggregate?: InputMaybe<Channel_Subscriptions_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  videos_aggregate?: InputMaybe<Videos_Aggregate_Order_By>;
  watch_histories_aggregate?: InputMaybe<Watch_History_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['ulid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AuthId = 'auth_id',
  /** column name */
  ChannelName = 'channel_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PgmementoAuditId = 'pgmemento_audit_id',
  /** column name */
  Phone = 'phone',
  /** column name */
  SubscriberCount = 'subscriber_count',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  auth_id?: InputMaybe<Scalars['uuid']['input']>;
  channel_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  id?: InputMaybe<Scalars['ulid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  subscriber_count?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  subscriber_count: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  subscriber_count: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  subscriber_count: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  auth_id?: InputMaybe<Scalars['uuid']['input']>;
  channel_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  id?: InputMaybe<Scalars['ulid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  subscriber_count?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  subscriber_count: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AuthId = 'auth_id',
  /** column name */
  ChannelName = 'channel_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PgmementoAuditId = 'pgmemento_audit_id',
  /** column name */
  Phone = 'phone',
  /** column name */
  SubscriberCount = 'subscriber_count',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  subscriber_count: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  subscriber_count: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  subscriber_count: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "videos" */
export type Videos = {
  __typename?: 'videos';
  category: Maybe<Scalars['category_types']['output']>;
  channel_id: Scalars['ulid']['output'];
  created_at: Scalars['timestamptz']['output'];
  description: Maybe<Scalars['String']['output']>;
  dislikes_count: Maybe<Scalars['Int']['output']>;
  duration: Maybe<Scalars['float8']['output']>;
  /** An array relationship */
  feelings: Array<Feelings>;
  /** An aggregate relationship */
  feelings_aggregate: Feelings_Aggregate;
  id: Scalars['ulid']['output'];
  is_private: Maybe<Scalars['Boolean']['output']>;
  likes_count: Maybe<Scalars['Int']['output']>;
  pgmemento_audit_id: Scalars['bigint']['output'];
  /** An array relationship */
  play_lists: Array<Play_Lists>;
  /** An aggregate relationship */
  play_lists_aggregate: Play_Lists_Aggregate;
  stream_url: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
  views_count: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  watch_histories: Array<Watch_History>;
  /** An aggregate relationship */
  watch_histories_aggregate: Watch_History_Aggregate;
};


/** columns and relationships of "videos" */
export type VideosFeelingsArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


/** columns and relationships of "videos" */
export type VideosFeelings_AggregateArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


/** columns and relationships of "videos" */
export type VideosPlay_ListsArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


/** columns and relationships of "videos" */
export type VideosPlay_Lists_AggregateArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


/** columns and relationships of "videos" */
export type VideosWatch_HistoriesArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};


/** columns and relationships of "videos" */
export type VideosWatch_Histories_AggregateArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};

/** aggregated selection of "videos" */
export type Videos_Aggregate = {
  __typename?: 'videos_aggregate';
  aggregate: Maybe<Videos_Aggregate_Fields>;
  nodes: Array<Videos>;
};

export type Videos_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Videos_Aggregate_Bool_Exp_Avg>;
  bool_and?: InputMaybe<Videos_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Videos_Aggregate_Bool_Exp_Bool_Or>;
  corr?: InputMaybe<Videos_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Videos_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Videos_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Videos_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Videos_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Videos_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Videos_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Videos_Aggregate_Bool_Exp_Var_Samp>;
};

export type Videos_Aggregate_Bool_Exp_Avg = {
  arguments: Videos_Select_Column_Videos_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Videos_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Videos_Aggregate_Bool_Exp_Bool_And = {
  arguments: Videos_Select_Column_Videos_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Videos_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Videos_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Videos_Select_Column_Videos_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Videos_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Videos_Aggregate_Bool_Exp_Corr = {
  arguments: Videos_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Videos_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Videos_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Videos_Select_Column_Videos_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Videos_Select_Column_Videos_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Videos_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Videos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Videos_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Videos_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Videos_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Videos_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Videos_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Videos_Select_Column_Videos_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Videos_Select_Column_Videos_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Videos_Aggregate_Bool_Exp_Max = {
  arguments: Videos_Select_Column_Videos_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Videos_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Videos_Aggregate_Bool_Exp_Min = {
  arguments: Videos_Select_Column_Videos_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Videos_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Videos_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Videos_Select_Column_Videos_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Videos_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Videos_Aggregate_Bool_Exp_Sum = {
  arguments: Videos_Select_Column_Videos_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Videos_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Videos_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Videos_Select_Column_Videos_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Videos_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "videos" */
export type Videos_Aggregate_Fields = {
  __typename?: 'videos_aggregate_fields';
  avg: Maybe<Videos_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Videos_Max_Fields>;
  min: Maybe<Videos_Min_Fields>;
  stddev: Maybe<Videos_Stddev_Fields>;
  stddev_pop: Maybe<Videos_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Videos_Stddev_Samp_Fields>;
  sum: Maybe<Videos_Sum_Fields>;
  var_pop: Maybe<Videos_Var_Pop_Fields>;
  var_samp: Maybe<Videos_Var_Samp_Fields>;
  variance: Maybe<Videos_Variance_Fields>;
};


/** aggregate fields of "videos" */
export type Videos_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Videos_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "videos" */
export type Videos_Aggregate_Order_By = {
  avg?: InputMaybe<Videos_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Videos_Max_Order_By>;
  min?: InputMaybe<Videos_Min_Order_By>;
  stddev?: InputMaybe<Videos_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Videos_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Videos_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Videos_Sum_Order_By>;
  var_pop?: InputMaybe<Videos_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Videos_Var_Samp_Order_By>;
  variance?: InputMaybe<Videos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "videos" */
export type Videos_Arr_Rel_Insert_Input = {
  data: Array<Videos_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Videos_On_Conflict>;
};

/** aggregate avg on columns */
export type Videos_Avg_Fields = {
  __typename?: 'videos_avg_fields';
  dislikes_count: Maybe<Scalars['Float']['output']>;
  duration: Maybe<Scalars['Float']['output']>;
  likes_count: Maybe<Scalars['Float']['output']>;
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  views_count: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "videos" */
export type Videos_Avg_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "videos". All fields are combined with a logical 'AND'. */
export type Videos_Bool_Exp = {
  _and?: InputMaybe<Array<Videos_Bool_Exp>>;
  _not?: InputMaybe<Videos_Bool_Exp>;
  _or?: InputMaybe<Array<Videos_Bool_Exp>>;
  category?: InputMaybe<Category_Types_Comparison_Exp>;
  channel_id?: InputMaybe<Ulid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  dislikes_count?: InputMaybe<Int_Comparison_Exp>;
  duration?: InputMaybe<Float8_Comparison_Exp>;
  feelings?: InputMaybe<Feelings_Bool_Exp>;
  feelings_aggregate?: InputMaybe<Feelings_Aggregate_Bool_Exp>;
  id?: InputMaybe<Ulid_Comparison_Exp>;
  is_private?: InputMaybe<Boolean_Comparison_Exp>;
  likes_count?: InputMaybe<Int_Comparison_Exp>;
  pgmemento_audit_id?: InputMaybe<Bigint_Comparison_Exp>;
  play_lists?: InputMaybe<Play_Lists_Bool_Exp>;
  play_lists_aggregate?: InputMaybe<Play_Lists_Aggregate_Bool_Exp>;
  stream_url?: InputMaybe<String_Comparison_Exp>;
  thumbnail?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  views_count?: InputMaybe<Int_Comparison_Exp>;
  watch_histories?: InputMaybe<Watch_History_Bool_Exp>;
  watch_histories_aggregate?: InputMaybe<Watch_History_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "videos" */
export enum Videos_Constraint {
  /** unique or primary key constraint on columns "id" */
  VideosIdPk = 'videos_id_pk',
  /** unique or primary key constraint on columns "pgmemento_audit_id" */
  VideosPgmementoAuditIdKey = 'videos_pgmemento_audit_id_key',
  /** unique or primary key constraint on columns "stream_url" */
  VideosStreamUrlKey = 'videos_stream_url_key',
  /** unique or primary key constraint on columns "thumbnail" */
  VideosThumbnailKey = 'videos_thumbnail_key'
}

/** input type for incrementing numeric columns in table "videos" */
export type Videos_Inc_Input = {
  dislikes_count?: InputMaybe<Scalars['Int']['input']>;
  duration?: InputMaybe<Scalars['float8']['input']>;
  likes_count?: InputMaybe<Scalars['Int']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  views_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "videos" */
export type Videos_Insert_Input = {
  category?: InputMaybe<Scalars['category_types']['input']>;
  channel_id?: InputMaybe<Scalars['ulid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dislikes_count?: InputMaybe<Scalars['Int']['input']>;
  duration?: InputMaybe<Scalars['float8']['input']>;
  feelings?: InputMaybe<Feelings_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['ulid']['input']>;
  is_private?: InputMaybe<Scalars['Boolean']['input']>;
  likes_count?: InputMaybe<Scalars['Int']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  play_lists?: InputMaybe<Play_Lists_Arr_Rel_Insert_Input>;
  stream_url?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  views_count?: InputMaybe<Scalars['Int']['input']>;
  watch_histories?: InputMaybe<Watch_History_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Videos_Max_Fields = {
  __typename?: 'videos_max_fields';
  category: Maybe<Scalars['category_types']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  description: Maybe<Scalars['String']['output']>;
  dislikes_count: Maybe<Scalars['Int']['output']>;
  duration: Maybe<Scalars['float8']['output']>;
  likes_count: Maybe<Scalars['Int']['output']>;
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  stream_url: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  views_count: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "videos" */
export type Videos_Max_Order_By = {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  stream_url?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Videos_Min_Fields = {
  __typename?: 'videos_min_fields';
  category: Maybe<Scalars['category_types']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  description: Maybe<Scalars['String']['output']>;
  dislikes_count: Maybe<Scalars['Int']['output']>;
  duration: Maybe<Scalars['float8']['output']>;
  likes_count: Maybe<Scalars['Int']['output']>;
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  stream_url: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  views_count: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "videos" */
export type Videos_Min_Order_By = {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  stream_url?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "videos" */
export type Videos_Mutation_Response = {
  __typename?: 'videos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Videos>;
};

/** input type for inserting object relation for remote table "videos" */
export type Videos_Obj_Rel_Insert_Input = {
  data: Videos_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Videos_On_Conflict>;
};

/** on_conflict condition type for table "videos" */
export type Videos_On_Conflict = {
  constraint: Videos_Constraint;
  update_columns?: Array<Videos_Update_Column>;
  where?: InputMaybe<Videos_Bool_Exp>;
};

/** Ordering options when selecting data from "videos". */
export type Videos_Order_By = {
  category?: InputMaybe<Order_By>;
  channel_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  feelings_aggregate?: InputMaybe<Feelings_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  is_private?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  play_lists_aggregate?: InputMaybe<Play_Lists_Aggregate_Order_By>;
  stream_url?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  views_count?: InputMaybe<Order_By>;
  watch_histories_aggregate?: InputMaybe<Watch_History_Aggregate_Order_By>;
};

/** primary key columns input for table: videos */
export type Videos_Pk_Columns_Input = {
  id: Scalars['ulid']['input'];
};

/** select columns of table "videos" */
export enum Videos_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  ChannelId = 'channel_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DislikesCount = 'dislikes_count',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  IsPrivate = 'is_private',
  /** column name */
  LikesCount = 'likes_count',
  /** column name */
  PgmementoAuditId = 'pgmemento_audit_id',
  /** column name */
  StreamUrl = 'stream_url',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ViewsCount = 'views_count'
}

/** select "videos_aggregate_bool_exp_avg_arguments_columns" columns of table "videos" */
export enum Videos_Select_Column_Videos_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Duration = 'duration'
}

/** select "videos_aggregate_bool_exp_bool_and_arguments_columns" columns of table "videos" */
export enum Videos_Select_Column_Videos_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsPrivate = 'is_private'
}

/** select "videos_aggregate_bool_exp_bool_or_arguments_columns" columns of table "videos" */
export enum Videos_Select_Column_Videos_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsPrivate = 'is_private'
}

/** select "videos_aggregate_bool_exp_corr_arguments_columns" columns of table "videos" */
export enum Videos_Select_Column_Videos_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Duration = 'duration'
}

/** select "videos_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "videos" */
export enum Videos_Select_Column_Videos_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Duration = 'duration'
}

/** select "videos_aggregate_bool_exp_max_arguments_columns" columns of table "videos" */
export enum Videos_Select_Column_Videos_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Duration = 'duration'
}

/** select "videos_aggregate_bool_exp_min_arguments_columns" columns of table "videos" */
export enum Videos_Select_Column_Videos_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Duration = 'duration'
}

/** select "videos_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "videos" */
export enum Videos_Select_Column_Videos_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Duration = 'duration'
}

/** select "videos_aggregate_bool_exp_sum_arguments_columns" columns of table "videos" */
export enum Videos_Select_Column_Videos_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Duration = 'duration'
}

/** select "videos_aggregate_bool_exp_var_samp_arguments_columns" columns of table "videos" */
export enum Videos_Select_Column_Videos_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Duration = 'duration'
}

/** input type for updating data in table "videos" */
export type Videos_Set_Input = {
  category?: InputMaybe<Scalars['category_types']['input']>;
  channel_id?: InputMaybe<Scalars['ulid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dislikes_count?: InputMaybe<Scalars['Int']['input']>;
  duration?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['ulid']['input']>;
  is_private?: InputMaybe<Scalars['Boolean']['input']>;
  likes_count?: InputMaybe<Scalars['Int']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  stream_url?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  views_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Videos_Stddev_Fields = {
  __typename?: 'videos_stddev_fields';
  dislikes_count: Maybe<Scalars['Float']['output']>;
  duration: Maybe<Scalars['Float']['output']>;
  likes_count: Maybe<Scalars['Float']['output']>;
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  views_count: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "videos" */
export type Videos_Stddev_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Videos_Stddev_Pop_Fields = {
  __typename?: 'videos_stddev_pop_fields';
  dislikes_count: Maybe<Scalars['Float']['output']>;
  duration: Maybe<Scalars['Float']['output']>;
  likes_count: Maybe<Scalars['Float']['output']>;
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  views_count: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "videos" */
export type Videos_Stddev_Pop_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Videos_Stddev_Samp_Fields = {
  __typename?: 'videos_stddev_samp_fields';
  dislikes_count: Maybe<Scalars['Float']['output']>;
  duration: Maybe<Scalars['Float']['output']>;
  likes_count: Maybe<Scalars['Float']['output']>;
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  views_count: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "videos" */
export type Videos_Stddev_Samp_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "videos" */
export type Videos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Videos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Videos_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Scalars['category_types']['input']>;
  channel_id?: InputMaybe<Scalars['ulid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dislikes_count?: InputMaybe<Scalars['Int']['input']>;
  duration?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['ulid']['input']>;
  is_private?: InputMaybe<Scalars['Boolean']['input']>;
  likes_count?: InputMaybe<Scalars['Int']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  stream_url?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  views_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Videos_Sum_Fields = {
  __typename?: 'videos_sum_fields';
  dislikes_count: Maybe<Scalars['Int']['output']>;
  duration: Maybe<Scalars['float8']['output']>;
  likes_count: Maybe<Scalars['Int']['output']>;
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  views_count: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "videos" */
export type Videos_Sum_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** update columns of table "videos" */
export enum Videos_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  ChannelId = 'channel_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DislikesCount = 'dislikes_count',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  IsPrivate = 'is_private',
  /** column name */
  LikesCount = 'likes_count',
  /** column name */
  PgmementoAuditId = 'pgmemento_audit_id',
  /** column name */
  StreamUrl = 'stream_url',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ViewsCount = 'views_count'
}

export type Videos_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Videos_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Videos_Set_Input>;
  /** filter the rows which have to be updated */
  where: Videos_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Videos_Var_Pop_Fields = {
  __typename?: 'videos_var_pop_fields';
  dislikes_count: Maybe<Scalars['Float']['output']>;
  duration: Maybe<Scalars['Float']['output']>;
  likes_count: Maybe<Scalars['Float']['output']>;
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  views_count: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "videos" */
export type Videos_Var_Pop_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Videos_Var_Samp_Fields = {
  __typename?: 'videos_var_samp_fields';
  dislikes_count: Maybe<Scalars['Float']['output']>;
  duration: Maybe<Scalars['Float']['output']>;
  likes_count: Maybe<Scalars['Float']['output']>;
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  views_count: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "videos" */
export type Videos_Var_Samp_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Videos_Variance_Fields = {
  __typename?: 'videos_variance_fields';
  dislikes_count: Maybe<Scalars['Float']['output']>;
  duration: Maybe<Scalars['Float']['output']>;
  likes_count: Maybe<Scalars['Float']['output']>;
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
  views_count: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "videos" */
export type Videos_Variance_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** columns and relationships of "watch_history" */
export type Watch_History = {
  __typename?: 'watch_history';
  created_at: Scalars['timestamptz']['output'];
  last_watched_at: Maybe<Scalars['time']['output']>;
  pgmemento_audit_id: Scalars['bigint']['output'];
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['ulid']['output'];
  /** An object relationship */
  video: Videos;
  video_id: Scalars['ulid']['output'];
};

/** aggregated selection of "watch_history" */
export type Watch_History_Aggregate = {
  __typename?: 'watch_history_aggregate';
  aggregate: Maybe<Watch_History_Aggregate_Fields>;
  nodes: Array<Watch_History>;
};

export type Watch_History_Aggregate_Bool_Exp = {
  count?: InputMaybe<Watch_History_Aggregate_Bool_Exp_Count>;
};

export type Watch_History_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Watch_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Watch_History_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "watch_history" */
export type Watch_History_Aggregate_Fields = {
  __typename?: 'watch_history_aggregate_fields';
  avg: Maybe<Watch_History_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Watch_History_Max_Fields>;
  min: Maybe<Watch_History_Min_Fields>;
  stddev: Maybe<Watch_History_Stddev_Fields>;
  stddev_pop: Maybe<Watch_History_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Watch_History_Stddev_Samp_Fields>;
  sum: Maybe<Watch_History_Sum_Fields>;
  var_pop: Maybe<Watch_History_Var_Pop_Fields>;
  var_samp: Maybe<Watch_History_Var_Samp_Fields>;
  variance: Maybe<Watch_History_Variance_Fields>;
};


/** aggregate fields of "watch_history" */
export type Watch_History_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Watch_History_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "watch_history" */
export type Watch_History_Aggregate_Order_By = {
  avg?: InputMaybe<Watch_History_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Watch_History_Max_Order_By>;
  min?: InputMaybe<Watch_History_Min_Order_By>;
  stddev?: InputMaybe<Watch_History_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Watch_History_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Watch_History_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Watch_History_Sum_Order_By>;
  var_pop?: InputMaybe<Watch_History_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Watch_History_Var_Samp_Order_By>;
  variance?: InputMaybe<Watch_History_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "watch_history" */
export type Watch_History_Arr_Rel_Insert_Input = {
  data: Array<Watch_History_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Watch_History_On_Conflict>;
};

/** aggregate avg on columns */
export type Watch_History_Avg_Fields = {
  __typename?: 'watch_history_avg_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "watch_history" */
export type Watch_History_Avg_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "watch_history". All fields are combined with a logical 'AND'. */
export type Watch_History_Bool_Exp = {
  _and?: InputMaybe<Array<Watch_History_Bool_Exp>>;
  _not?: InputMaybe<Watch_History_Bool_Exp>;
  _or?: InputMaybe<Array<Watch_History_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_watched_at?: InputMaybe<Time_Comparison_Exp>;
  pgmemento_audit_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Ulid_Comparison_Exp>;
  video?: InputMaybe<Videos_Bool_Exp>;
  video_id?: InputMaybe<Ulid_Comparison_Exp>;
};

/** unique or primary key constraints on table "watch_history" */
export enum Watch_History_Constraint {
  /** unique or primary key constraint on columns "user_id", "video_id" */
  WatchHistoryCsPk = 'watch_history_cs_pk',
  /** unique or primary key constraint on columns "pgmemento_audit_id" */
  WatchHistoryPgmementoAuditIdKey = 'watch_history_pgmemento_audit_id_key'
}

/** input type for incrementing numeric columns in table "watch_history" */
export type Watch_History_Inc_Input = {
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "watch_history" */
export type Watch_History_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  last_watched_at?: InputMaybe<Scalars['time']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['ulid']['input']>;
  video?: InputMaybe<Videos_Obj_Rel_Insert_Input>;
  video_id?: InputMaybe<Scalars['ulid']['input']>;
};

/** aggregate max on columns */
export type Watch_History_Max_Fields = {
  __typename?: 'watch_history_max_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "watch_history" */
export type Watch_History_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Watch_History_Min_Fields = {
  __typename?: 'watch_history_min_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "watch_history" */
export type Watch_History_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "watch_history" */
export type Watch_History_Mutation_Response = {
  __typename?: 'watch_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Watch_History>;
};

/** on_conflict condition type for table "watch_history" */
export type Watch_History_On_Conflict = {
  constraint: Watch_History_Constraint;
  update_columns?: Array<Watch_History_Update_Column>;
  where?: InputMaybe<Watch_History_Bool_Exp>;
};

/** Ordering options when selecting data from "watch_history". */
export type Watch_History_Order_By = {
  created_at?: InputMaybe<Order_By>;
  last_watched_at?: InputMaybe<Order_By>;
  pgmemento_audit_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  video?: InputMaybe<Videos_Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: watch_history */
export type Watch_History_Pk_Columns_Input = {
  user_id: Scalars['ulid']['input'];
  video_id: Scalars['ulid']['input'];
};

/** select columns of table "watch_history" */
export enum Watch_History_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  LastWatchedAt = 'last_watched_at',
  /** column name */
  PgmementoAuditId = 'pgmemento_audit_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoId = 'video_id'
}

/** input type for updating data in table "watch_history" */
export type Watch_History_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  last_watched_at?: InputMaybe<Scalars['time']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['ulid']['input']>;
  video_id?: InputMaybe<Scalars['ulid']['input']>;
};

/** aggregate stddev on columns */
export type Watch_History_Stddev_Fields = {
  __typename?: 'watch_history_stddev_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "watch_history" */
export type Watch_History_Stddev_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Watch_History_Stddev_Pop_Fields = {
  __typename?: 'watch_history_stddev_pop_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "watch_history" */
export type Watch_History_Stddev_Pop_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Watch_History_Stddev_Samp_Fields = {
  __typename?: 'watch_history_stddev_samp_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "watch_history" */
export type Watch_History_Stddev_Samp_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "watch_history" */
export type Watch_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Watch_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Watch_History_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  last_watched_at?: InputMaybe<Scalars['time']['input']>;
  pgmemento_audit_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['ulid']['input']>;
  video_id?: InputMaybe<Scalars['ulid']['input']>;
};

/** aggregate sum on columns */
export type Watch_History_Sum_Fields = {
  __typename?: 'watch_history_sum_fields';
  pgmemento_audit_id: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "watch_history" */
export type Watch_History_Sum_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** update columns of table "watch_history" */
export enum Watch_History_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  LastWatchedAt = 'last_watched_at',
  /** column name */
  PgmementoAuditId = 'pgmemento_audit_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoId = 'video_id'
}

export type Watch_History_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Watch_History_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Watch_History_Set_Input>;
  /** filter the rows which have to be updated */
  where: Watch_History_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Watch_History_Var_Pop_Fields = {
  __typename?: 'watch_history_var_pop_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "watch_history" */
export type Watch_History_Var_Pop_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Watch_History_Var_Samp_Fields = {
  __typename?: 'watch_history_var_samp_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "watch_history" */
export type Watch_History_Var_Samp_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Watch_History_Variance_Fields = {
  __typename?: 'watch_history_variance_fields';
  pgmemento_audit_id: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "watch_history" */
export type Watch_History_Variance_Order_By = {
  pgmemento_audit_id?: InputMaybe<Order_By>;
};

export type CreateUserMutationVariables = Exact<{
  input: Users_Insert_Input;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one: { __typename?: 'users', email: string, name: string, phone: string | null, created_at: string } | null };

export type UpdateUserByIdMutationVariables = Exact<{
  id: Scalars['ulid']['input'];
  input: Users_Set_Input;
}>;


export type UpdateUserByIdMutation = { __typename?: 'mutation_root', update_users_by_pk: { __typename?: 'users', email: string, name: string, phone: string | null } | null };

export type FindUserByEmailQueryVariables = Exact<{
  email: Scalars['citext']['input'];
}>;


export type FindUserByEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, name: string, phone: string | null, created_at: string }> };

export type FindUserByIdQueryVariables = Exact<{
  id: Scalars['ulid']['input'];
}>;


export type FindUserByIdQuery = { __typename?: 'query_root', users_by_pk: { __typename?: 'users', id: string, name: string, email: string, phone: string | null, created_at: string } | null };


export const CreateUserDocument = gql`
    mutation createUser($input: users_insert_input!) {
  insert_users_one(object: $input) {
    email
    name
    phone
    created_at
  }
}
    `;
export const UpdateUserByIdDocument = gql`
    mutation updateUserById($id: ulid!, $input: users_set_input!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: $input) {
    email
    name
    phone
  }
}
    `;
export const FindUserByEmailDocument = gql`
    query findUserByEmail($email: citext!) {
  users(where: {email: {_eq: $email}}) {
    id
    name
    phone
    created_at
  }
}
    `;
export const FindUserByIdDocument = gql`
    query findUserById($id: ulid!) {
  users_by_pk(id: $id) {
    id
    name
    email
    phone
    created_at
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createUser(variables: CreateUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser', 'mutation');
    },
    updateUserById(variables: UpdateUserByIdMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateUserByIdMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserByIdMutation>(UpdateUserByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserById', 'mutation');
    },
    findUserByEmail(variables: FindUserByEmailQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FindUserByEmailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindUserByEmailQuery>(FindUserByEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findUserByEmail', 'query');
    },
    findUserById(variables: FindUserByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FindUserByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindUserByIdQuery>(FindUserByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findUserById', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;