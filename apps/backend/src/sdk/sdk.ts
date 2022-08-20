import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
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
  bigint: any;
  category_types: any;
  citext: string;
  float8: any;
  reaction_types: any;
  time: any;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** Boolean expression to compare columns of type "category_types". All fields are combined with logical 'AND'. */
export type Category_Types_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['category_types']>;
  _gt?: InputMaybe<Scalars['category_types']>;
  _gte?: InputMaybe<Scalars['category_types']>;
  _in?: InputMaybe<Array<Scalars['category_types']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['category_types']>;
  _lte?: InputMaybe<Scalars['category_types']>;
  _neq?: InputMaybe<Scalars['category_types']>;
  _nin?: InputMaybe<Array<Scalars['category_types']>>;
};

/** columns and relationships of "channel_subscriptions" */
export type Channel_Subscriptions = {
  __typename?: 'channel_subscriptions';
  /** An object relationship */
  channel: Users;
  channel_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  subscriber: Users;
  subscriber_id: Scalars['uuid'];
};

/** aggregated selection of "channel_subscriptions" */
export type Channel_Subscriptions_Aggregate = {
  __typename?: 'channel_subscriptions_aggregate';
  aggregate: Maybe<Channel_Subscriptions_Aggregate_Fields>;
  nodes: Array<Channel_Subscriptions>;
};

/** aggregate fields of "channel_subscriptions" */
export type Channel_Subscriptions_Aggregate_Fields = {
  __typename?: 'channel_subscriptions_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Channel_Subscriptions_Max_Fields>;
  min: Maybe<Channel_Subscriptions_Min_Fields>;
};


/** aggregate fields of "channel_subscriptions" */
export type Channel_Subscriptions_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
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
  channel_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  subscriber?: InputMaybe<Users_Bool_Exp>;
  subscriber_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "channel_subscriptions" */
export enum Channel_Subscriptions_Constraint {
  /** unique or primary key constraint on columns "subscriber_id", "channel_id" */
  ChannelSubscriptionsCompositePk = 'channel_subscriptions_composite_pk'
}

/** input type for inserting data into table "channel_subscriptions" */
export type Channel_Subscriptions_Insert_Input = {
  channel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  channel_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  subscriber?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  subscriber_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Channel_Subscriptions_Max_Fields = {
  __typename?: 'channel_subscriptions_max_fields';
  channel_id: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  subscriber_id: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "channel_subscriptions" */
export type Channel_Subscriptions_Max_Order_By = {
  channel_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  subscriber_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Channel_Subscriptions_Min_Fields = {
  __typename?: 'channel_subscriptions_min_fields';
  channel_id: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  subscriber_id: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "channel_subscriptions" */
export type Channel_Subscriptions_Min_Order_By = {
  channel_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  subscriber_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "channel_subscriptions" */
export type Channel_Subscriptions_Mutation_Response = {
  __typename?: 'channel_subscriptions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
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
  channel_id: Scalars['uuid'];
  subscriber_id: Scalars['uuid'];
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
  channel_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  subscriber_id?: InputMaybe<Scalars['uuid']>;
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
  where: Channel_Subscriptions_Bool_Exp;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** columns and relationships of "feelings" */
export type Feelings = {
  __typename?: 'feelings';
  created_at: Scalars['timestamptz'];
  reaction: Scalars['reaction_types'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
  /** An object relationship */
  video: Videos;
  video_id: Scalars['uuid'];
};

/** aggregated selection of "feelings" */
export type Feelings_Aggregate = {
  __typename?: 'feelings_aggregate';
  aggregate: Maybe<Feelings_Aggregate_Fields>;
  nodes: Array<Feelings>;
};

/** aggregate fields of "feelings" */
export type Feelings_Aggregate_Fields = {
  __typename?: 'feelings_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Feelings_Max_Fields>;
  min: Maybe<Feelings_Min_Fields>;
};


/** aggregate fields of "feelings" */
export type Feelings_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Feelings_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "feelings" */
export type Feelings_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Feelings_Max_Order_By>;
  min?: InputMaybe<Feelings_Min_Order_By>;
};

/** input type for inserting array relation for remote table "feelings" */
export type Feelings_Arr_Rel_Insert_Input = {
  data: Array<Feelings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Feelings_On_Conflict>;
};

/** Boolean expression to filter rows from the table "feelings". All fields are combined with a logical 'AND'. */
export type Feelings_Bool_Exp = {
  _and?: InputMaybe<Array<Feelings_Bool_Exp>>;
  _not?: InputMaybe<Feelings_Bool_Exp>;
  _or?: InputMaybe<Array<Feelings_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  reaction?: InputMaybe<Reaction_Types_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  video?: InputMaybe<Videos_Bool_Exp>;
  video_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "feelings" */
export enum Feelings_Constraint {
  /** unique or primary key constraint on columns "video_id", "user_id" */
  FeelingsCompositePk = 'feelings_composite_pk'
}

/** input type for inserting data into table "feelings" */
export type Feelings_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  reaction?: InputMaybe<Scalars['reaction_types']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
  video?: InputMaybe<Videos_Obj_Rel_Insert_Input>;
  video_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Feelings_Max_Fields = {
  __typename?: 'feelings_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  reaction: Maybe<Scalars['reaction_types']>;
  user_id: Maybe<Scalars['uuid']>;
  video_id: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "feelings" */
export type Feelings_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  reaction?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Feelings_Min_Fields = {
  __typename?: 'feelings_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  reaction: Maybe<Scalars['reaction_types']>;
  user_id: Maybe<Scalars['uuid']>;
  video_id: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "feelings" */
export type Feelings_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  reaction?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "feelings" */
export type Feelings_Mutation_Response = {
  __typename?: 'feelings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
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
  reaction?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  video?: InputMaybe<Videos_Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feelings */
export type Feelings_Pk_Columns_Input = {
  user_id: Scalars['uuid'];
  video_id: Scalars['uuid'];
};

/** select columns of table "feelings" */
export enum Feelings_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoId = 'video_id'
}

/** input type for updating data in table "feelings" */
export type Feelings_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  reaction?: InputMaybe<Scalars['reaction_types']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  video_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "feelings" */
export enum Feelings_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoId = 'video_id'
}

export type Feelings_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Feelings_Set_Input>;
  where: Feelings_Bool_Exp;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
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
  channel_id: Scalars['uuid'];
  subscriber_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_FeelingsArgs = {
  where: Feelings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feelings_By_PkArgs = {
  user_id: Scalars['uuid'];
  video_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Play_List_NamesArgs = {
  where: Play_List_Names_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Play_List_Names_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Play_ListsArgs = {
  where: Play_Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Play_Lists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_VideosArgs = {
  where: Videos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Videos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Watch_HistoryArgs = {
  where: Watch_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Watch_History_By_PkArgs = {
  user_id: Scalars['uuid'];
  video_id: Scalars['uuid'];
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
  _set: InputMaybe<Feelings_Set_Input>;
  where: Feelings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feelings_By_PkArgs = {
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
  _set: InputMaybe<Watch_History_Set_Input>;
  where: Watch_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Watch_History_By_PkArgs = {
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
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  /** An array relationship */
  play_lists: Array<Play_Lists>;
  /** An aggregate relationship */
  play_lists_aggregate: Play_Lists_Aggregate;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
  video_count: Maybe<Scalars['bigint']>;
};


/** columns and relationships of "play_list_names" */
export type Play_List_NamesPlay_ListsArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


/** columns and relationships of "play_list_names" */
export type Play_List_NamesPlay_Lists_AggregateArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};

/** aggregated selection of "play_list_names" */
export type Play_List_Names_Aggregate = {
  __typename?: 'play_list_names_aggregate';
  aggregate: Maybe<Play_List_Names_Aggregate_Fields>;
  nodes: Array<Play_List_Names>;
};

/** aggregate fields of "play_list_names" */
export type Play_List_Names_Aggregate_Fields = {
  __typename?: 'play_list_names_aggregate_fields';
  avg: Maybe<Play_List_Names_Avg_Fields>;
  count: Scalars['Int'];
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
  distinct: InputMaybe<Scalars['Boolean']>;
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
  id: Maybe<Scalars['Float']>;
  video_count: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "play_list_names" */
export type Play_List_Names_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
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
  play_lists?: InputMaybe<Play_Lists_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  video_count?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "play_list_names" */
export enum Play_List_Names_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlayListNamesIdPk = 'play_list_names_id_pk'
}

/** input type for incrementing numeric columns in table "play_list_names" */
export type Play_List_Names_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  video_count?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "play_list_names" */
export type Play_List_Names_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  play_lists?: InputMaybe<Play_Lists_Arr_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
  video_count?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Play_List_Names_Max_Fields = {
  __typename?: 'play_list_names_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  name: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['uuid']>;
  video_count: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "play_list_names" */
export type Play_List_Names_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Play_List_Names_Min_Fields = {
  __typename?: 'play_list_names_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  name: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['uuid']>;
  video_count: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "play_list_names" */
export type Play_List_Names_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "play_list_names" */
export type Play_List_Names_Mutation_Response = {
  __typename?: 'play_list_names_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
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
  play_lists_aggregate?: InputMaybe<Play_Lists_Aggregate_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** primary key columns input for table: play_list_names */
export type Play_List_Names_Pk_Columns_Input = {
  id: Scalars['bigint'];
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
  UserId = 'user_id',
  /** column name */
  VideoCount = 'video_count'
}

/** input type for updating data in table "play_list_names" */
export type Play_List_Names_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  video_count?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Play_List_Names_Stddev_Fields = {
  __typename?: 'play_list_names_stddev_fields';
  id: Maybe<Scalars['Float']>;
  video_count: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "play_list_names" */
export type Play_List_Names_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Play_List_Names_Stddev_Pop_Fields = {
  __typename?: 'play_list_names_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
  video_count: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "play_list_names" */
export type Play_List_Names_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Play_List_Names_Stddev_Samp_Fields = {
  __typename?: 'play_list_names_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
  video_count: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "play_list_names" */
export type Play_List_Names_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Play_List_Names_Sum_Fields = {
  __typename?: 'play_list_names_sum_fields';
  id: Maybe<Scalars['bigint']>;
  video_count: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "play_list_names" */
export type Play_List_Names_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
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
  UserId = 'user_id',
  /** column name */
  VideoCount = 'video_count'
}

export type Play_List_Names_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Play_List_Names_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Play_List_Names_Set_Input>;
  where: Play_List_Names_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Play_List_Names_Var_Pop_Fields = {
  __typename?: 'play_list_names_var_pop_fields';
  id: Maybe<Scalars['Float']>;
  video_count: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "play_list_names" */
export type Play_List_Names_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Play_List_Names_Var_Samp_Fields = {
  __typename?: 'play_list_names_var_samp_fields';
  id: Maybe<Scalars['Float']>;
  video_count: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "play_list_names" */
export type Play_List_Names_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Play_List_Names_Variance_Fields = {
  __typename?: 'play_list_names_variance_fields';
  id: Maybe<Scalars['Float']>;
  video_count: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "play_list_names" */
export type Play_List_Names_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  video_count?: InputMaybe<Order_By>;
};

/** columns and relationships of "play_lists" */
export type Play_Lists = {
  __typename?: 'play_lists';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  play_list_name: Play_List_Names;
  play_list_names_id: Scalars['bigint'];
  /** An object relationship */
  video: Videos;
  video_id: Scalars['uuid'];
};

/** aggregated selection of "play_lists" */
export type Play_Lists_Aggregate = {
  __typename?: 'play_lists_aggregate';
  aggregate: Maybe<Play_Lists_Aggregate_Fields>;
  nodes: Array<Play_Lists>;
};

/** aggregate fields of "play_lists" */
export type Play_Lists_Aggregate_Fields = {
  __typename?: 'play_lists_aggregate_fields';
  avg: Maybe<Play_Lists_Avg_Fields>;
  count: Scalars['Int'];
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
  distinct: InputMaybe<Scalars['Boolean']>;
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
  play_list_names_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "play_lists" */
export type Play_Lists_Avg_Order_By = {
  play_list_names_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "play_lists". All fields are combined with a logical 'AND'. */
export type Play_Lists_Bool_Exp = {
  _and?: InputMaybe<Array<Play_Lists_Bool_Exp>>;
  _not?: InputMaybe<Play_Lists_Bool_Exp>;
  _or?: InputMaybe<Array<Play_Lists_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  play_list_name?: InputMaybe<Play_List_Names_Bool_Exp>;
  play_list_names_id?: InputMaybe<Bigint_Comparison_Exp>;
  video?: InputMaybe<Videos_Bool_Exp>;
  video_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "play_lists" */
export enum Play_Lists_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlayListsIdPk = 'play_lists_id_pk'
}

/** input type for incrementing numeric columns in table "play_lists" */
export type Play_Lists_Inc_Input = {
  play_list_names_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "play_lists" */
export type Play_Lists_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  play_list_name?: InputMaybe<Play_List_Names_Obj_Rel_Insert_Input>;
  play_list_names_id?: InputMaybe<Scalars['bigint']>;
  video?: InputMaybe<Videos_Obj_Rel_Insert_Input>;
  video_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Play_Lists_Max_Fields = {
  __typename?: 'play_lists_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  play_list_names_id: Maybe<Scalars['bigint']>;
  video_id: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "play_lists" */
export type Play_Lists_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  play_list_names_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Play_Lists_Min_Fields = {
  __typename?: 'play_lists_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  play_list_names_id: Maybe<Scalars['bigint']>;
  video_id: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "play_lists" */
export type Play_Lists_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  play_list_names_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "play_lists" */
export type Play_Lists_Mutation_Response = {
  __typename?: 'play_lists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
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
  play_list_name?: InputMaybe<Play_List_Names_Order_By>;
  play_list_names_id?: InputMaybe<Order_By>;
  video?: InputMaybe<Videos_Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: play_lists */
export type Play_Lists_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "play_lists" */
export enum Play_Lists_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PlayListNamesId = 'play_list_names_id',
  /** column name */
  VideoId = 'video_id'
}

/** input type for updating data in table "play_lists" */
export type Play_Lists_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  play_list_names_id?: InputMaybe<Scalars['bigint']>;
  video_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Play_Lists_Stddev_Fields = {
  __typename?: 'play_lists_stddev_fields';
  play_list_names_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "play_lists" */
export type Play_Lists_Stddev_Order_By = {
  play_list_names_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Play_Lists_Stddev_Pop_Fields = {
  __typename?: 'play_lists_stddev_pop_fields';
  play_list_names_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "play_lists" */
export type Play_Lists_Stddev_Pop_Order_By = {
  play_list_names_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Play_Lists_Stddev_Samp_Fields = {
  __typename?: 'play_lists_stddev_samp_fields';
  play_list_names_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "play_lists" */
export type Play_Lists_Stddev_Samp_Order_By = {
  play_list_names_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Play_Lists_Sum_Fields = {
  __typename?: 'play_lists_sum_fields';
  play_list_names_id: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "play_lists" */
export type Play_Lists_Sum_Order_By = {
  play_list_names_id?: InputMaybe<Order_By>;
};

/** update columns of table "play_lists" */
export enum Play_Lists_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
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
  where: Play_Lists_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Play_Lists_Var_Pop_Fields = {
  __typename?: 'play_lists_var_pop_fields';
  play_list_names_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "play_lists" */
export type Play_Lists_Var_Pop_Order_By = {
  play_list_names_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Play_Lists_Var_Samp_Fields = {
  __typename?: 'play_lists_var_samp_fields';
  play_list_names_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "play_lists" */
export type Play_Lists_Var_Samp_Order_By = {
  play_list_names_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Play_Lists_Variance_Fields = {
  __typename?: 'play_lists_variance_fields';
  play_list_names_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "play_lists" */
export type Play_Lists_Variance_Order_By = {
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
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


export type Query_RootChannel_Subscriptions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


export type Query_RootChannel_Subscriptions_By_PkArgs = {
  channel_id: Scalars['uuid'];
  subscriber_id: Scalars['uuid'];
};


export type Query_RootFeelingsArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


export type Query_RootFeelings_AggregateArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


export type Query_RootFeelings_By_PkArgs = {
  user_id: Scalars['uuid'];
  video_id: Scalars['uuid'];
};


export type Query_RootPlay_List_NamesArgs = {
  distinct_on: InputMaybe<Array<Play_List_Names_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Play_List_Names_Order_By>>;
  where: InputMaybe<Play_List_Names_Bool_Exp>;
};


export type Query_RootPlay_List_Names_AggregateArgs = {
  distinct_on: InputMaybe<Array<Play_List_Names_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Play_List_Names_Order_By>>;
  where: InputMaybe<Play_List_Names_Bool_Exp>;
};


export type Query_RootPlay_List_Names_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootPlay_ListsArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


export type Query_RootPlay_Lists_AggregateArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


export type Query_RootPlay_Lists_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVideosArgs = {
  distinct_on: InputMaybe<Array<Videos_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Videos_Order_By>>;
  where: InputMaybe<Videos_Bool_Exp>;
};


export type Query_RootVideos_AggregateArgs = {
  distinct_on: InputMaybe<Array<Videos_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Videos_Order_By>>;
  where: InputMaybe<Videos_Bool_Exp>;
};


export type Query_RootVideos_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWatch_HistoryArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};


export type Query_RootWatch_History_AggregateArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};


export type Query_RootWatch_History_By_PkArgs = {
  user_id: Scalars['uuid'];
  video_id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "reaction_types". All fields are combined with logical 'AND'. */
export type Reaction_Types_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['reaction_types']>;
  _gt?: InputMaybe<Scalars['reaction_types']>;
  _gte?: InputMaybe<Scalars['reaction_types']>;
  _in?: InputMaybe<Array<Scalars['reaction_types']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['reaction_types']>;
  _lte?: InputMaybe<Scalars['reaction_types']>;
  _neq?: InputMaybe<Scalars['reaction_types']>;
  _nin?: InputMaybe<Array<Scalars['reaction_types']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
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


export type Subscription_RootChannel_SubscriptionsArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


export type Subscription_RootChannel_Subscriptions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


export type Subscription_RootChannel_Subscriptions_By_PkArgs = {
  channel_id: Scalars['uuid'];
  subscriber_id: Scalars['uuid'];
};


export type Subscription_RootFeelingsArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


export type Subscription_RootFeelings_AggregateArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


export type Subscription_RootFeelings_By_PkArgs = {
  user_id: Scalars['uuid'];
  video_id: Scalars['uuid'];
};


export type Subscription_RootPlay_List_NamesArgs = {
  distinct_on: InputMaybe<Array<Play_List_Names_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Play_List_Names_Order_By>>;
  where: InputMaybe<Play_List_Names_Bool_Exp>;
};


export type Subscription_RootPlay_List_Names_AggregateArgs = {
  distinct_on: InputMaybe<Array<Play_List_Names_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Play_List_Names_Order_By>>;
  where: InputMaybe<Play_List_Names_Bool_Exp>;
};


export type Subscription_RootPlay_List_Names_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootPlay_ListsArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


export type Subscription_RootPlay_Lists_AggregateArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


export type Subscription_RootPlay_Lists_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVideosArgs = {
  distinct_on: InputMaybe<Array<Videos_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Videos_Order_By>>;
  where: InputMaybe<Videos_Bool_Exp>;
};


export type Subscription_RootVideos_AggregateArgs = {
  distinct_on: InputMaybe<Array<Videos_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Videos_Order_By>>;
  where: InputMaybe<Videos_Bool_Exp>;
};


export type Subscription_RootVideos_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWatch_HistoryArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};


export type Subscription_RootWatch_History_AggregateArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};


export type Subscription_RootWatch_History_By_PkArgs = {
  user_id: Scalars['uuid'];
  video_id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['time']>;
  _gt?: InputMaybe<Scalars['time']>;
  _gte?: InputMaybe<Scalars['time']>;
  _in?: InputMaybe<Array<Scalars['time']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['time']>;
  _lte?: InputMaybe<Scalars['time']>;
  _neq?: InputMaybe<Scalars['time']>;
  _nin?: InputMaybe<Array<Scalars['time']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type Users = {
  __typename?: 'users';
  channel_name: Scalars['String'];
  created_at: Scalars['timestamptz'];
  description: Maybe<Scalars['String']>;
  email: Scalars['citext'];
  /** An array relationship */
  feelings: Array<Feelings>;
  /** An aggregate relationship */
  feelings_aggregate: Feelings_Aggregate;
  id: Scalars['uuid'];
  name: Scalars['String'];
  phone: Maybe<Scalars['String']>;
  /** An array relationship */
  play_list_names: Array<Play_List_Names>;
  /** An aggregate relationship */
  play_list_names_aggregate: Play_List_Names_Aggregate;
  /** An array relationship */
  subscribed_channels: Array<Channel_Subscriptions>;
  /** An aggregate relationship */
  subscribed_channels_aggregate: Channel_Subscriptions_Aggregate;
  subscriber_count: Maybe<Scalars['Int']>;
  /** An array relationship */
  subscribers: Array<Channel_Subscriptions>;
  /** An aggregate relationship */
  subscribers_aggregate: Channel_Subscriptions_Aggregate;
  updated_at: Maybe<Scalars['timestamptz']>;
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
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersFeelings_AggregateArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersPlay_List_NamesArgs = {
  distinct_on: InputMaybe<Array<Play_List_Names_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Play_List_Names_Order_By>>;
  where: InputMaybe<Play_List_Names_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersPlay_List_Names_AggregateArgs = {
  distinct_on: InputMaybe<Array<Play_List_Names_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Play_List_Names_Order_By>>;
  where: InputMaybe<Play_List_Names_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersSubscribed_ChannelsArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersSubscribed_Channels_AggregateArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersSubscribersArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersSubscribers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Channel_Subscriptions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Channel_Subscriptions_Order_By>>;
  where: InputMaybe<Channel_Subscriptions_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersVideosArgs = {
  distinct_on: InputMaybe<Array<Videos_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Videos_Order_By>>;
  where: InputMaybe<Videos_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersVideos_AggregateArgs = {
  distinct_on: InputMaybe<Array<Videos_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Videos_Order_By>>;
  where: InputMaybe<Videos_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersWatch_HistoriesArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};


/** Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels */
export type UsersWatch_Histories_AggregateArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
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
  count: Scalars['Int'];
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
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  subscriber_count: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  channel_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  feelings?: InputMaybe<Feelings_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  play_list_names?: InputMaybe<Play_List_Names_Bool_Exp>;
  subscribed_channels?: InputMaybe<Channel_Subscriptions_Bool_Exp>;
  subscriber_count?: InputMaybe<Int_Comparison_Exp>;
  subscribers?: InputMaybe<Channel_Subscriptions_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  videos?: InputMaybe<Videos_Bool_Exp>;
  watch_histories?: InputMaybe<Watch_History_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "channel_name" */
  UsersChannelNameKey = 'users_channel_name_key',
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersIdPk = 'users_id_pk'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  subscriber_count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  channel_name?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  feelings?: InputMaybe<Feelings_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  play_list_names?: InputMaybe<Play_List_Names_Arr_Rel_Insert_Input>;
  subscribed_channels?: InputMaybe<Channel_Subscriptions_Arr_Rel_Insert_Input>;
  subscriber_count?: InputMaybe<Scalars['Int']>;
  subscribers?: InputMaybe<Channel_Subscriptions_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  videos?: InputMaybe<Videos_Arr_Rel_Insert_Input>;
  watch_histories?: InputMaybe<Watch_History_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  channel_name: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  email: Maybe<Scalars['citext']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  subscriber_count: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  channel_name: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  email: Maybe<Scalars['citext']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  subscriber_count: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
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
  channel_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  feelings_aggregate?: InputMaybe<Feelings_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
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
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
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
  Phone = 'phone',
  /** column name */
  SubscriberCount = 'subscriber_count',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  channel_name?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  subscriber_count?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  subscriber_count: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  subscriber_count: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  subscriber_count: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  subscriber_count: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
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
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  subscriber_count: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  subscriber_count: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  subscriber_count: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "videos" */
export type Videos = {
  __typename?: 'videos';
  category: Maybe<Scalars['category_types']>;
  channel_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  description: Maybe<Scalars['String']>;
  dislikes_count: Maybe<Scalars['Int']>;
  duration: Maybe<Scalars['float8']>;
  /** An array relationship */
  feelings: Array<Feelings>;
  /** An aggregate relationship */
  feelings_aggregate: Feelings_Aggregate;
  id: Scalars['uuid'];
  is_private: Maybe<Scalars['Boolean']>;
  likes_count: Maybe<Scalars['Int']>;
  /** An array relationship */
  play_lists: Array<Play_Lists>;
  /** An aggregate relationship */
  play_lists_aggregate: Play_Lists_Aggregate;
  stream_url: Scalars['String'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  updated_at: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  views_count: Maybe<Scalars['Int']>;
  /** An array relationship */
  watch_histories: Array<Watch_History>;
  /** An aggregate relationship */
  watch_histories_aggregate: Watch_History_Aggregate;
};


/** columns and relationships of "videos" */
export type VideosFeelingsArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


/** columns and relationships of "videos" */
export type VideosFeelings_AggregateArgs = {
  distinct_on: InputMaybe<Array<Feelings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Feelings_Order_By>>;
  where: InputMaybe<Feelings_Bool_Exp>;
};


/** columns and relationships of "videos" */
export type VideosPlay_ListsArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


/** columns and relationships of "videos" */
export type VideosPlay_Lists_AggregateArgs = {
  distinct_on: InputMaybe<Array<Play_Lists_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Play_Lists_Order_By>>;
  where: InputMaybe<Play_Lists_Bool_Exp>;
};


/** columns and relationships of "videos" */
export type VideosWatch_HistoriesArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};


/** columns and relationships of "videos" */
export type VideosWatch_Histories_AggregateArgs = {
  distinct_on: InputMaybe<Array<Watch_History_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Watch_History_Order_By>>;
  where: InputMaybe<Watch_History_Bool_Exp>;
};

/** aggregated selection of "videos" */
export type Videos_Aggregate = {
  __typename?: 'videos_aggregate';
  aggregate: Maybe<Videos_Aggregate_Fields>;
  nodes: Array<Videos>;
};

/** aggregate fields of "videos" */
export type Videos_Aggregate_Fields = {
  __typename?: 'videos_aggregate_fields';
  avg: Maybe<Videos_Avg_Fields>;
  count: Scalars['Int'];
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
  distinct: InputMaybe<Scalars['Boolean']>;
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
  dislikes_count: Maybe<Scalars['Float']>;
  duration: Maybe<Scalars['Float']>;
  likes_count: Maybe<Scalars['Float']>;
  views_count: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "videos" */
export type Videos_Avg_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "videos". All fields are combined with a logical 'AND'. */
export type Videos_Bool_Exp = {
  _and?: InputMaybe<Array<Videos_Bool_Exp>>;
  _not?: InputMaybe<Videos_Bool_Exp>;
  _or?: InputMaybe<Array<Videos_Bool_Exp>>;
  category?: InputMaybe<Category_Types_Comparison_Exp>;
  channel_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  dislikes_count?: InputMaybe<Int_Comparison_Exp>;
  duration?: InputMaybe<Float8_Comparison_Exp>;
  feelings?: InputMaybe<Feelings_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_private?: InputMaybe<Boolean_Comparison_Exp>;
  likes_count?: InputMaybe<Int_Comparison_Exp>;
  play_lists?: InputMaybe<Play_Lists_Bool_Exp>;
  stream_url?: InputMaybe<String_Comparison_Exp>;
  thumbnail?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  views_count?: InputMaybe<Int_Comparison_Exp>;
  watch_histories?: InputMaybe<Watch_History_Bool_Exp>;
};

/** unique or primary key constraints on table "videos" */
export enum Videos_Constraint {
  /** unique or primary key constraint on columns "id" */
  VideosIdPk = 'videos_id_pk',
  /** unique or primary key constraint on columns "stream_url" */
  VideosStreamUrlKey = 'videos_stream_url_key',
  /** unique or primary key constraint on columns "thumbnail" */
  VideosThumbnailKey = 'videos_thumbnail_key'
}

/** input type for incrementing numeric columns in table "videos" */
export type Videos_Inc_Input = {
  dislikes_count?: InputMaybe<Scalars['Int']>;
  duration?: InputMaybe<Scalars['float8']>;
  likes_count?: InputMaybe<Scalars['Int']>;
  views_count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "videos" */
export type Videos_Insert_Input = {
  category?: InputMaybe<Scalars['category_types']>;
  channel_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  dislikes_count?: InputMaybe<Scalars['Int']>;
  duration?: InputMaybe<Scalars['float8']>;
  feelings?: InputMaybe<Feelings_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  is_private?: InputMaybe<Scalars['Boolean']>;
  likes_count?: InputMaybe<Scalars['Int']>;
  play_lists?: InputMaybe<Play_Lists_Arr_Rel_Insert_Input>;
  stream_url?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  views_count?: InputMaybe<Scalars['Int']>;
  watch_histories?: InputMaybe<Watch_History_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Videos_Max_Fields = {
  __typename?: 'videos_max_fields';
  category: Maybe<Scalars['category_types']>;
  channel_id: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  dislikes_count: Maybe<Scalars['Int']>;
  duration: Maybe<Scalars['float8']>;
  id: Maybe<Scalars['uuid']>;
  likes_count: Maybe<Scalars['Int']>;
  stream_url: Maybe<Scalars['String']>;
  thumbnail: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  views_count: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "videos" */
export type Videos_Max_Order_By = {
  category?: InputMaybe<Order_By>;
  channel_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  stream_url?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Videos_Min_Fields = {
  __typename?: 'videos_min_fields';
  category: Maybe<Scalars['category_types']>;
  channel_id: Maybe<Scalars['uuid']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  dislikes_count: Maybe<Scalars['Int']>;
  duration: Maybe<Scalars['float8']>;
  id: Maybe<Scalars['uuid']>;
  likes_count: Maybe<Scalars['Int']>;
  stream_url: Maybe<Scalars['String']>;
  thumbnail: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  views_count: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "videos" */
export type Videos_Min_Order_By = {
  category?: InputMaybe<Order_By>;
  channel_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
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
  affected_rows: Scalars['Int'];
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
  id: Scalars['uuid'];
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

/** input type for updating data in table "videos" */
export type Videos_Set_Input = {
  category?: InputMaybe<Scalars['category_types']>;
  channel_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  dislikes_count?: InputMaybe<Scalars['Int']>;
  duration?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_private?: InputMaybe<Scalars['Boolean']>;
  likes_count?: InputMaybe<Scalars['Int']>;
  stream_url?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  views_count?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Videos_Stddev_Fields = {
  __typename?: 'videos_stddev_fields';
  dislikes_count: Maybe<Scalars['Float']>;
  duration: Maybe<Scalars['Float']>;
  likes_count: Maybe<Scalars['Float']>;
  views_count: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "videos" */
export type Videos_Stddev_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Videos_Stddev_Pop_Fields = {
  __typename?: 'videos_stddev_pop_fields';
  dislikes_count: Maybe<Scalars['Float']>;
  duration: Maybe<Scalars['Float']>;
  likes_count: Maybe<Scalars['Float']>;
  views_count: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "videos" */
export type Videos_Stddev_Pop_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Videos_Stddev_Samp_Fields = {
  __typename?: 'videos_stddev_samp_fields';
  dislikes_count: Maybe<Scalars['Float']>;
  duration: Maybe<Scalars['Float']>;
  likes_count: Maybe<Scalars['Float']>;
  views_count: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "videos" */
export type Videos_Stddev_Samp_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Videos_Sum_Fields = {
  __typename?: 'videos_sum_fields';
  dislikes_count: Maybe<Scalars['Int']>;
  duration: Maybe<Scalars['float8']>;
  likes_count: Maybe<Scalars['Int']>;
  views_count: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "videos" */
export type Videos_Sum_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
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
  where: Videos_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Videos_Var_Pop_Fields = {
  __typename?: 'videos_var_pop_fields';
  dislikes_count: Maybe<Scalars['Float']>;
  duration: Maybe<Scalars['Float']>;
  likes_count: Maybe<Scalars['Float']>;
  views_count: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "videos" */
export type Videos_Var_Pop_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Videos_Var_Samp_Fields = {
  __typename?: 'videos_var_samp_fields';
  dislikes_count: Maybe<Scalars['Float']>;
  duration: Maybe<Scalars['Float']>;
  likes_count: Maybe<Scalars['Float']>;
  views_count: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "videos" */
export type Videos_Var_Samp_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Videos_Variance_Fields = {
  __typename?: 'videos_variance_fields';
  dislikes_count: Maybe<Scalars['Float']>;
  duration: Maybe<Scalars['Float']>;
  likes_count: Maybe<Scalars['Float']>;
  views_count: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "videos" */
export type Videos_Variance_Order_By = {
  dislikes_count?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  views_count?: InputMaybe<Order_By>;
};

/** columns and relationships of "watch_history" */
export type Watch_History = {
  __typename?: 'watch_history';
  created_at: Scalars['timestamptz'];
  last_watchted_at: Maybe<Scalars['time']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
  /** An object relationship */
  video: Videos;
  video_id: Scalars['uuid'];
};

/** aggregated selection of "watch_history" */
export type Watch_History_Aggregate = {
  __typename?: 'watch_history_aggregate';
  aggregate: Maybe<Watch_History_Aggregate_Fields>;
  nodes: Array<Watch_History>;
};

/** aggregate fields of "watch_history" */
export type Watch_History_Aggregate_Fields = {
  __typename?: 'watch_history_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Watch_History_Max_Fields>;
  min: Maybe<Watch_History_Min_Fields>;
};


/** aggregate fields of "watch_history" */
export type Watch_History_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Watch_History_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "watch_history" */
export type Watch_History_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Watch_History_Max_Order_By>;
  min?: InputMaybe<Watch_History_Min_Order_By>;
};

/** input type for inserting array relation for remote table "watch_history" */
export type Watch_History_Arr_Rel_Insert_Input = {
  data: Array<Watch_History_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Watch_History_On_Conflict>;
};

/** Boolean expression to filter rows from the table "watch_history". All fields are combined with a logical 'AND'. */
export type Watch_History_Bool_Exp = {
  _and?: InputMaybe<Array<Watch_History_Bool_Exp>>;
  _not?: InputMaybe<Watch_History_Bool_Exp>;
  _or?: InputMaybe<Array<Watch_History_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_watchted_at?: InputMaybe<Time_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  video?: InputMaybe<Videos_Bool_Exp>;
  video_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "watch_history" */
export enum Watch_History_Constraint {
  /** unique or primary key constraint on columns "video_id", "user_id" */
  WatchHistoryCsPk = 'watch_history_cs_pk'
}

/** input type for inserting data into table "watch_history" */
export type Watch_History_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  last_watchted_at?: InputMaybe<Scalars['time']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
  video?: InputMaybe<Videos_Obj_Rel_Insert_Input>;
  video_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Watch_History_Max_Fields = {
  __typename?: 'watch_history_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['uuid']>;
  video_id: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "watch_history" */
export type Watch_History_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Watch_History_Min_Fields = {
  __typename?: 'watch_history_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['uuid']>;
  video_id: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "watch_history" */
export type Watch_History_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "watch_history" */
export type Watch_History_Mutation_Response = {
  __typename?: 'watch_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
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
  last_watchted_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  video?: InputMaybe<Videos_Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: watch_history */
export type Watch_History_Pk_Columns_Input = {
  user_id: Scalars['uuid'];
  video_id: Scalars['uuid'];
};

/** select columns of table "watch_history" */
export enum Watch_History_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  LastWatchtedAt = 'last_watchted_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoId = 'video_id'
}

/** input type for updating data in table "watch_history" */
export type Watch_History_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  last_watchted_at?: InputMaybe<Scalars['time']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  video_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "watch_history" */
export enum Watch_History_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  LastWatchtedAt = 'last_watchted_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoId = 'video_id'
}

export type Watch_History_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Watch_History_Set_Input>;
  where: Watch_History_Bool_Exp;
};

export type CreateUserMutationVariables = Exact<{
  input: Users_Insert_Input;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one: { __typename?: 'users', id: string } | null };

export type FindUserByEmailQueryVariables = Exact<{
  email: Scalars['citext'];
}>;


export type FindUserByEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string }> };


export const CreateUserDocument = gql`
    mutation createUser($input: users_insert_input!) {
  insert_users_one(object: $input) {
    id
  }
}
    `;
export const FindUserByEmailDocument = gql`
    query findUserByEmail($email: citext!) {
  users(where: {email: {_eq: $email}}) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser', 'mutation');
    },
    findUserByEmail(variables: FindUserByEmailQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindUserByEmailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindUserByEmailQuery>(FindUserByEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findUserByEmail', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;