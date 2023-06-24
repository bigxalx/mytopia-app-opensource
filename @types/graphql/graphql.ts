/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** The Circle scalar type represents a circle, defined by the coordinates of its center and a radius. The Circle type is used to represent a searchable area together with the '_within_circle' filter. */
  Circle: any;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The Rectangle scalar type represents a rectangle, defined by the coordinates of its top left and bottom right corners. The Rectangle type is used to represent a searchable area together with the '_within_rectangle' filter. */
  Rectangle: any;
};

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/antwort) */
export type Antwort = Entry & {
  __typename?: 'Antwort';
  antwortText?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AntwortLinkingCollections>;
  scoreCollection?: Maybe<AntwortScoreCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/antwort) */
export type AntwortAntwortTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/antwort) */
export type AntwortLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/antwort) */
export type AntwortScoreCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AntwortScoreCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScoreFilter>;
};

export type AntwortCollection = {
  __typename?: 'AntwortCollection';
  items: Array<Maybe<Antwort>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AntwortFilter = {
  AND?: InputMaybe<Array<InputMaybe<AntwortFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AntwortFilter>>>;
  antwortText?: InputMaybe<Scalars['String']>;
  antwortText_contains?: InputMaybe<Scalars['String']>;
  antwortText_exists?: InputMaybe<Scalars['Boolean']>;
  antwortText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  antwortText_not?: InputMaybe<Scalars['String']>;
  antwortText_not_contains?: InputMaybe<Scalars['String']>;
  antwortText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  score?: InputMaybe<CfScoreNestedFilter>;
  scoreCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type AntwortLinkingCollections = {
  __typename?: 'AntwortLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  questionCollection?: Maybe<QuestionCollection>;
};


export type AntwortLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AntwortLinkingCollectionsQuestionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AntwortLinkingCollectionsQuestionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AntwortLinkingCollectionsQuestionCollectionOrder {
  FrageTitelAsc = 'frageTitel_ASC',
  FrageTitelDesc = 'frageTitel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AntwortOrder {
  AntwortTextAsc = 'antwortText_ASC',
  AntwortTextDesc = 'antwortText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AntwortScoreCollection = {
  __typename?: 'AntwortScoreCollection';
  items: Array<Maybe<Score>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum AntwortScoreCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WertungAsc = 'wertung_ASC',
  WertungDesc = 'wertung_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  aufgabeCollection?: Maybe<AufgabeCollection>;
  einbuergerungstestCollection?: Maybe<EinbuergerungstestCollection>;
  einbuergerungstestWerteCollection?: Maybe<EinbuergerungstestWerteCollection>;
  entryCollection?: Maybe<EntryCollection>;
  globalCollection?: Maybe<GlobalCollection>;
  newsCollection?: Maybe<NewsCollection>;
  videoEmbedCollection?: Maybe<VideoEmbedCollection>;
};


export type AssetLinkingCollectionsAufgabeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsAufgabeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEinbuergerungstestCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsEinbuergerungstestCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEinbuergerungstestWerteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsEinbuergerungstestWerteCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsGlobalCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsGlobalCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsNewsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsVideoEmbedCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsVideoEmbedCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetLinkingCollectionsAufgabeCollectionOrder {
  AblaufdatumAsc = 'ablaufdatum_ASC',
  AblaufdatumDesc = 'ablaufdatum_DESC',
  PunkteAsc = 'punkte_ASC',
  PunkteDesc = 'punkte_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum AssetLinkingCollectionsEinbuergerungstestCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum AssetLinkingCollectionsEinbuergerungstestWerteCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WertAsc = 'wert_ASC',
  WertDesc = 'wert_DESC'
}

export enum AssetLinkingCollectionsGlobalCollectionOrder {
  HyaenenSchwelleAsc = 'hyaenenSchwelle_ASC',
  HyaenenSchwelleDesc = 'hyaenenSchwelle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VertrauteSchwelleAsc = 'vertrauteSchwelle_ASC',
  VertrauteSchwelleDesc = 'vertrauteSchwelle_DESC',
  ZirkelSchwelleAsc = 'zirkelSchwelle_ASC',
  ZirkelSchwelleDesc = 'zirkelSchwelle_DESC'
}

export enum AssetLinkingCollectionsNewsCollectionOrder {
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum AssetLinkingCollectionsVideoEmbedCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VideoUrlAsc = 'videoUrl_ASC',
  VideoUrlDesc = 'videoUrl_DESC'
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/aufgabe) */
export type Aufgabe = Entry & {
  __typename?: 'Aufgabe';
  ablaufdatum?: Maybe<Scalars['DateTime']>;
  content?: Maybe<AufgabeContent>;
  contentfulMetadata: ContentfulMetadata;
  empfaenger?: Maybe<Array<Maybe<Scalars['String']>>>;
  fraktion?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<AufgabeLinkingCollections>;
  punkte?: Maybe<Scalars['Int']>;
  releaseDate?: Maybe<Scalars['DateTime']>;
  sys: Sys;
  task?: Maybe<AufgabeTask>;
  thumbnail?: Maybe<Asset>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/aufgabe) */
export type AufgabeAblaufdatumArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/aufgabe) */
export type AufgabeContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/aufgabe) */
export type AufgabeEmpfaengerArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/aufgabe) */
export type AufgabeFraktionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/aufgabe) */
export type AufgabeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/aufgabe) */
export type AufgabePunkteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/aufgabe) */
export type AufgabeReleaseDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/aufgabe) */
export type AufgabeTaskArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/aufgabe) */
export type AufgabeThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/aufgabe) */
export type AufgabeTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AufgabeCollection = {
  __typename?: 'AufgabeCollection';
  items: Array<Maybe<Aufgabe>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AufgabeContent = {
  __typename?: 'AufgabeContent';
  json: Scalars['JSON'];
  links: AufgabeContentLinks;
};

export type AufgabeContentAssets = {
  __typename?: 'AufgabeContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type AufgabeContentEntries = {
  __typename?: 'AufgabeContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type AufgabeContentLinks = {
  __typename?: 'AufgabeContentLinks';
  assets: AufgabeContentAssets;
  entries: AufgabeContentEntries;
};

export type AufgabeFilter = {
  AND?: InputMaybe<Array<InputMaybe<AufgabeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AufgabeFilter>>>;
  ablaufdatum?: InputMaybe<Scalars['DateTime']>;
  ablaufdatum_exists?: InputMaybe<Scalars['Boolean']>;
  ablaufdatum_gt?: InputMaybe<Scalars['DateTime']>;
  ablaufdatum_gte?: InputMaybe<Scalars['DateTime']>;
  ablaufdatum_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  ablaufdatum_lt?: InputMaybe<Scalars['DateTime']>;
  ablaufdatum_lte?: InputMaybe<Scalars['DateTime']>;
  ablaufdatum_not?: InputMaybe<Scalars['DateTime']>;
  ablaufdatum_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  empfaenger_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  empfaenger_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  empfaenger_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  empfaenger_exists?: InputMaybe<Scalars['Boolean']>;
  fraktion?: InputMaybe<Scalars['String']>;
  fraktion_contains?: InputMaybe<Scalars['String']>;
  fraktion_exists?: InputMaybe<Scalars['Boolean']>;
  fraktion_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fraktion_not?: InputMaybe<Scalars['String']>;
  fraktion_not_contains?: InputMaybe<Scalars['String']>;
  fraktion_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  punkte?: InputMaybe<Scalars['Int']>;
  punkte_exists?: InputMaybe<Scalars['Boolean']>;
  punkte_gt?: InputMaybe<Scalars['Int']>;
  punkte_gte?: InputMaybe<Scalars['Int']>;
  punkte_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  punkte_lt?: InputMaybe<Scalars['Int']>;
  punkte_lte?: InputMaybe<Scalars['Int']>;
  punkte_not?: InputMaybe<Scalars['Int']>;
  punkte_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  releaseDate?: InputMaybe<Scalars['DateTime']>;
  releaseDate_exists?: InputMaybe<Scalars['Boolean']>;
  releaseDate_gt?: InputMaybe<Scalars['DateTime']>;
  releaseDate_gte?: InputMaybe<Scalars['DateTime']>;
  releaseDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  releaseDate_lt?: InputMaybe<Scalars['DateTime']>;
  releaseDate_lte?: InputMaybe<Scalars['DateTime']>;
  releaseDate_not?: InputMaybe<Scalars['DateTime']>;
  releaseDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sys?: InputMaybe<SysFilter>;
  task_exists?: InputMaybe<Scalars['Boolean']>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AufgabeLinkingCollections = {
  __typename?: 'AufgabeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  gpsTaskCollection?: Maybe<GpsTaskCollection>;
  stepcounterTaskCollection?: Maybe<StepcounterTaskCollection>;
};


export type AufgabeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AufgabeLinkingCollectionsGpsTaskCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AufgabeLinkingCollectionsGpsTaskCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AufgabeLinkingCollectionsStepcounterTaskCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AufgabeLinkingCollectionsStepcounterTaskCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AufgabeLinkingCollectionsGpsTaskCollectionOrder {
  OrtsbezeichnungAsc = 'ortsbezeichnung_ASC',
  OrtsbezeichnungDesc = 'ortsbezeichnung_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AufgabeLinkingCollectionsStepcounterTaskCollectionOrder {
  SchritteAsc = 'schritte_ASC',
  SchritteDesc = 'schritte_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AufgabeOrder {
  AblaufdatumAsc = 'ablaufdatum_ASC',
  AblaufdatumDesc = 'ablaufdatum_DESC',
  PunkteAsc = 'punkte_ASC',
  PunkteDesc = 'punkte_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type AufgabeTask = GpsTask | QuizTask | StepcounterTask;

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstest) */
export type Einbuergerungstest = Entry & {
  __typename?: 'Einbuergerungstest';
  contentfulMetadata: ContentfulMetadata;
  ergebnisText?: Maybe<EinbuergerungstestErgebnisText>;
  fragenCollection?: Maybe<EinbuergerungstestFragenCollection>;
  heroImage?: Maybe<Asset>;
  linkedFrom?: Maybe<EinbuergerungstestLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstest) */
export type EinbuergerungstestErgebnisTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstest) */
export type EinbuergerungstestFragenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EinbuergerungstestFragenCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstest) */
export type EinbuergerungstestHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstest) */
export type EinbuergerungstestLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstest) */
export type EinbuergerungstestTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstest) */
export type EinbuergerungstestTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type EinbuergerungstestCollection = {
  __typename?: 'EinbuergerungstestCollection';
  items: Array<Maybe<Einbuergerungstest>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EinbuergerungstestErgebnisText = {
  __typename?: 'EinbuergerungstestErgebnisText';
  json: Scalars['JSON'];
  links: EinbuergerungstestErgebnisTextLinks;
};

export type EinbuergerungstestErgebnisTextAssets = {
  __typename?: 'EinbuergerungstestErgebnisTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type EinbuergerungstestErgebnisTextEntries = {
  __typename?: 'EinbuergerungstestErgebnisTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type EinbuergerungstestErgebnisTextLinks = {
  __typename?: 'EinbuergerungstestErgebnisTextLinks';
  assets: EinbuergerungstestErgebnisTextAssets;
  entries: EinbuergerungstestErgebnisTextEntries;
};

export type EinbuergerungstestFilter = {
  AND?: InputMaybe<Array<InputMaybe<EinbuergerungstestFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EinbuergerungstestFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ergebnisText_contains?: InputMaybe<Scalars['String']>;
  ergebnisText_exists?: InputMaybe<Scalars['Boolean']>;
  ergebnisText_not_contains?: InputMaybe<Scalars['String']>;
  fragen?: InputMaybe<CfQuestionNestedFilter>;
  fragenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EinbuergerungstestFragenCollection = {
  __typename?: 'EinbuergerungstestFragenCollection';
  items: Array<Maybe<Question>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum EinbuergerungstestFragenCollectionOrder {
  FrageTitelAsc = 'frageTitel_ASC',
  FrageTitelDesc = 'frageTitel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstestKriterium) */
export type EinbuergerungstestKriterium = Entry & {
  __typename?: 'EinbuergerungstestKriterium';
  contentfulMetadata: ContentfulMetadata;
  kriterium?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<EinbuergerungstestKriteriumLinkingCollections>;
  sys: Sys;
  werteCollection?: Maybe<EinbuergerungstestKriteriumWerteCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstestKriterium) */
export type EinbuergerungstestKriteriumKriteriumArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstestKriterium) */
export type EinbuergerungstestKriteriumLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstestKriterium) */
export type EinbuergerungstestKriteriumWerteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EinbuergerungstestKriteriumWerteCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EinbuergerungstestWerteFilter>;
};

export type EinbuergerungstestKriteriumCollection = {
  __typename?: 'EinbuergerungstestKriteriumCollection';
  items: Array<Maybe<EinbuergerungstestKriterium>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EinbuergerungstestKriteriumFilter = {
  AND?: InputMaybe<Array<InputMaybe<EinbuergerungstestKriteriumFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EinbuergerungstestKriteriumFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  kriterium?: InputMaybe<Scalars['String']>;
  kriterium_contains?: InputMaybe<Scalars['String']>;
  kriterium_exists?: InputMaybe<Scalars['Boolean']>;
  kriterium_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  kriterium_not?: InputMaybe<Scalars['String']>;
  kriterium_not_contains?: InputMaybe<Scalars['String']>;
  kriterium_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  werte?: InputMaybe<CfEinbuergerungstestWerteNestedFilter>;
  werteCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type EinbuergerungstestKriteriumLinkingCollections = {
  __typename?: 'EinbuergerungstestKriteriumLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type EinbuergerungstestKriteriumLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum EinbuergerungstestKriteriumOrder {
  KriteriumAsc = 'kriterium_ASC',
  KriteriumDesc = 'kriterium_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type EinbuergerungstestKriteriumWerteCollection = {
  __typename?: 'EinbuergerungstestKriteriumWerteCollection';
  items: Array<Maybe<EinbuergerungstestWerte>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum EinbuergerungstestKriteriumWerteCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WertAsc = 'wert_ASC',
  WertDesc = 'wert_DESC'
}

export type EinbuergerungstestLinkingCollections = {
  __typename?: 'EinbuergerungstestLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type EinbuergerungstestLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum EinbuergerungstestOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstestWerte) */
export type EinbuergerungstestWerte = Entry & {
  __typename?: 'EinbuergerungstestWerte';
  beschreibung?: Maybe<Scalars['String']>;
  bild?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<EinbuergerungstestWerteLinkingCollections>;
  sys: Sys;
  wert?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstestWerte) */
export type EinbuergerungstestWerteBeschreibungArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstestWerte) */
export type EinbuergerungstestWerteBildArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstestWerte) */
export type EinbuergerungstestWerteLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/einbuergerungstestWerte) */
export type EinbuergerungstestWerteWertArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type EinbuergerungstestWerteCollection = {
  __typename?: 'EinbuergerungstestWerteCollection';
  items: Array<Maybe<EinbuergerungstestWerte>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EinbuergerungstestWerteFilter = {
  AND?: InputMaybe<Array<InputMaybe<EinbuergerungstestWerteFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EinbuergerungstestWerteFilter>>>;
  beschreibung?: InputMaybe<Scalars['String']>;
  beschreibung_contains?: InputMaybe<Scalars['String']>;
  beschreibung_exists?: InputMaybe<Scalars['Boolean']>;
  beschreibung_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  beschreibung_not?: InputMaybe<Scalars['String']>;
  beschreibung_not_contains?: InputMaybe<Scalars['String']>;
  beschreibung_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bild_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  wert?: InputMaybe<Scalars['String']>;
  wert_contains?: InputMaybe<Scalars['String']>;
  wert_exists?: InputMaybe<Scalars['Boolean']>;
  wert_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  wert_not?: InputMaybe<Scalars['String']>;
  wert_not_contains?: InputMaybe<Scalars['String']>;
  wert_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EinbuergerungstestWerteLinkingCollections = {
  __typename?: 'EinbuergerungstestWerteLinkingCollections';
  einbuergerungstestKriteriumCollection?: Maybe<EinbuergerungstestKriteriumCollection>;
  entryCollection?: Maybe<EntryCollection>;
  scoreCollection?: Maybe<ScoreCollection>;
};


export type EinbuergerungstestWerteLinkingCollectionsEinbuergerungstestKriteriumCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EinbuergerungstestWerteLinkingCollectionsEinbuergerungstestKriteriumCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type EinbuergerungstestWerteLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type EinbuergerungstestWerteLinkingCollectionsScoreCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EinbuergerungstestWerteLinkingCollectionsScoreCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum EinbuergerungstestWerteLinkingCollectionsEinbuergerungstestKriteriumCollectionOrder {
  KriteriumAsc = 'kriterium_ASC',
  KriteriumDesc = 'kriterium_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EinbuergerungstestWerteLinkingCollectionsScoreCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WertungAsc = 'wertung_ASC',
  WertungDesc = 'wertung_DESC'
}

export enum EinbuergerungstestWerteOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WertAsc = 'wert_ASC',
  WertDesc = 'wert_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type Global = Entry & {
  __typename?: 'Global';
  contentfulMetadata: ContentfulMetadata;
  einbuergerungMytopiaImage?: Maybe<Asset>;
  einbuergerungMytopiaText?: Maybe<Scalars['String']>;
  hyaenenInfosCollection?: Maybe<GlobalHyaenenInfosCollection>;
  hyaenenLogo?: Maybe<Asset>;
  hyaenenSchwelle?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<GlobalLinkingCollections>;
  mytopiaInfosCollection?: Maybe<GlobalMytopiaInfosCollection>;
  mytopiaLogo?: Maybe<Asset>;
  sys: Sys;
  vertrauteInfosCollection?: Maybe<GlobalVertrauteInfosCollection>;
  vertrauteLogo?: Maybe<Asset>;
  vertrauteSchwelle?: Maybe<Scalars['Int']>;
  wechselZuHyaenenImage?: Maybe<Asset>;
  wechselZuHyaenenText?: Maybe<Scalars['String']>;
  wechselZuVertrauteImage?: Maybe<Asset>;
  wechselZuVertrauteText?: Maybe<Scalars['String']>;
  wechselZuZirkelImage?: Maybe<Asset>;
  wechselZuZirkelText?: Maybe<Scalars['String']>;
  zirkelInfosCollection?: Maybe<GlobalZirkelInfosCollection>;
  zirkelLogo?: Maybe<Asset>;
  zirkelSchwelle?: Maybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalEinbuergerungMytopiaImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalEinbuergerungMytopiaTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalHyaenenInfosCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GlobalHyaenenInfosCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InfoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalHyaenenLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalHyaenenSchwelleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalMytopiaInfosCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GlobalMytopiaInfosCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InfoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalMytopiaLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalVertrauteInfosCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GlobalVertrauteInfosCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InfoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalVertrauteLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalVertrauteSchwelleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalWechselZuHyaenenImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalWechselZuHyaenenTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalWechselZuVertrauteImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalWechselZuVertrauteTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalWechselZuZirkelImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalWechselZuZirkelTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalZirkelInfosCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GlobalZirkelInfosCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InfoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalZirkelLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/global) */
export type GlobalZirkelSchwelleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type GlobalCollection = {
  __typename?: 'GlobalCollection';
  items: Array<Maybe<Global>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GlobalFilter = {
  AND?: InputMaybe<Array<InputMaybe<GlobalFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GlobalFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  einbuergerungMytopiaImage_exists?: InputMaybe<Scalars['Boolean']>;
  einbuergerungMytopiaText?: InputMaybe<Scalars['String']>;
  einbuergerungMytopiaText_contains?: InputMaybe<Scalars['String']>;
  einbuergerungMytopiaText_exists?: InputMaybe<Scalars['Boolean']>;
  einbuergerungMytopiaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  einbuergerungMytopiaText_not?: InputMaybe<Scalars['String']>;
  einbuergerungMytopiaText_not_contains?: InputMaybe<Scalars['String']>;
  einbuergerungMytopiaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hyaenenInfos?: InputMaybe<CfInfoNestedFilter>;
  hyaenenInfosCollection_exists?: InputMaybe<Scalars['Boolean']>;
  hyaenenLogo_exists?: InputMaybe<Scalars['Boolean']>;
  hyaenenSchwelle?: InputMaybe<Scalars['Int']>;
  hyaenenSchwelle_exists?: InputMaybe<Scalars['Boolean']>;
  hyaenenSchwelle_gt?: InputMaybe<Scalars['Int']>;
  hyaenenSchwelle_gte?: InputMaybe<Scalars['Int']>;
  hyaenenSchwelle_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  hyaenenSchwelle_lt?: InputMaybe<Scalars['Int']>;
  hyaenenSchwelle_lte?: InputMaybe<Scalars['Int']>;
  hyaenenSchwelle_not?: InputMaybe<Scalars['Int']>;
  hyaenenSchwelle_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  mytopiaInfos?: InputMaybe<CfInfoNestedFilter>;
  mytopiaInfosCollection_exists?: InputMaybe<Scalars['Boolean']>;
  mytopiaLogo_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  vertrauteInfos?: InputMaybe<CfInfoNestedFilter>;
  vertrauteInfosCollection_exists?: InputMaybe<Scalars['Boolean']>;
  vertrauteLogo_exists?: InputMaybe<Scalars['Boolean']>;
  vertrauteSchwelle?: InputMaybe<Scalars['Int']>;
  vertrauteSchwelle_exists?: InputMaybe<Scalars['Boolean']>;
  vertrauteSchwelle_gt?: InputMaybe<Scalars['Int']>;
  vertrauteSchwelle_gte?: InputMaybe<Scalars['Int']>;
  vertrauteSchwelle_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  vertrauteSchwelle_lt?: InputMaybe<Scalars['Int']>;
  vertrauteSchwelle_lte?: InputMaybe<Scalars['Int']>;
  vertrauteSchwelle_not?: InputMaybe<Scalars['Int']>;
  vertrauteSchwelle_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  wechselZuHyaenenImage_exists?: InputMaybe<Scalars['Boolean']>;
  wechselZuHyaenenText?: InputMaybe<Scalars['String']>;
  wechselZuHyaenenText_contains?: InputMaybe<Scalars['String']>;
  wechselZuHyaenenText_exists?: InputMaybe<Scalars['Boolean']>;
  wechselZuHyaenenText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  wechselZuHyaenenText_not?: InputMaybe<Scalars['String']>;
  wechselZuHyaenenText_not_contains?: InputMaybe<Scalars['String']>;
  wechselZuHyaenenText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  wechselZuVertrauteImage_exists?: InputMaybe<Scalars['Boolean']>;
  wechselZuVertrauteText?: InputMaybe<Scalars['String']>;
  wechselZuVertrauteText_contains?: InputMaybe<Scalars['String']>;
  wechselZuVertrauteText_exists?: InputMaybe<Scalars['Boolean']>;
  wechselZuVertrauteText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  wechselZuVertrauteText_not?: InputMaybe<Scalars['String']>;
  wechselZuVertrauteText_not_contains?: InputMaybe<Scalars['String']>;
  wechselZuVertrauteText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  wechselZuZirkelImage_exists?: InputMaybe<Scalars['Boolean']>;
  wechselZuZirkelText?: InputMaybe<Scalars['String']>;
  wechselZuZirkelText_contains?: InputMaybe<Scalars['String']>;
  wechselZuZirkelText_exists?: InputMaybe<Scalars['Boolean']>;
  wechselZuZirkelText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  wechselZuZirkelText_not?: InputMaybe<Scalars['String']>;
  wechselZuZirkelText_not_contains?: InputMaybe<Scalars['String']>;
  wechselZuZirkelText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zirkelInfos?: InputMaybe<CfInfoNestedFilter>;
  zirkelInfosCollection_exists?: InputMaybe<Scalars['Boolean']>;
  zirkelLogo_exists?: InputMaybe<Scalars['Boolean']>;
  zirkelSchwelle?: InputMaybe<Scalars['Int']>;
  zirkelSchwelle_exists?: InputMaybe<Scalars['Boolean']>;
  zirkelSchwelle_gt?: InputMaybe<Scalars['Int']>;
  zirkelSchwelle_gte?: InputMaybe<Scalars['Int']>;
  zirkelSchwelle_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  zirkelSchwelle_lt?: InputMaybe<Scalars['Int']>;
  zirkelSchwelle_lte?: InputMaybe<Scalars['Int']>;
  zirkelSchwelle_not?: InputMaybe<Scalars['Int']>;
  zirkelSchwelle_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type GlobalHyaenenInfosCollection = {
  __typename?: 'GlobalHyaenenInfosCollection';
  items: Array<Maybe<Info>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum GlobalHyaenenInfosCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type GlobalLinkingCollections = {
  __typename?: 'GlobalLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type GlobalLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GlobalMytopiaInfosCollection = {
  __typename?: 'GlobalMytopiaInfosCollection';
  items: Array<Maybe<Info>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum GlobalMytopiaInfosCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum GlobalOrder {
  HyaenenSchwelleAsc = 'hyaenenSchwelle_ASC',
  HyaenenSchwelleDesc = 'hyaenenSchwelle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VertrauteSchwelleAsc = 'vertrauteSchwelle_ASC',
  VertrauteSchwelleDesc = 'vertrauteSchwelle_DESC',
  ZirkelSchwelleAsc = 'zirkelSchwelle_ASC',
  ZirkelSchwelleDesc = 'zirkelSchwelle_DESC'
}

export type GlobalVertrauteInfosCollection = {
  __typename?: 'GlobalVertrauteInfosCollection';
  items: Array<Maybe<Info>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum GlobalVertrauteInfosCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type GlobalZirkelInfosCollection = {
  __typename?: 'GlobalZirkelInfosCollection';
  items: Array<Maybe<Info>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum GlobalZirkelInfosCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/gpsTask) */
export type GpsTask = Entry & {
  __typename?: 'GpsTask';
  contentfulMetadata: ContentfulMetadata;
  ersatzAufgabe?: Maybe<Aufgabe>;
  linkedFrom?: Maybe<GpsTaskLinkingCollections>;
  location?: Maybe<Location>;
  ortsbezeichnung?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/gpsTask) */
export type GpsTaskErsatzAufgabeArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/gpsTask) */
export type GpsTaskLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/gpsTask) */
export type GpsTaskLocationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/gpsTask) */
export type GpsTaskOrtsbezeichnungArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type GpsTaskCollection = {
  __typename?: 'GpsTaskCollection';
  items: Array<Maybe<GpsTask>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GpsTaskFilter = {
  AND?: InputMaybe<Array<InputMaybe<GpsTaskFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GpsTaskFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ersatzAufgabe?: InputMaybe<CfAufgabeNestedFilter>;
  ersatzAufgabe_exists?: InputMaybe<Scalars['Boolean']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_within_circle?: InputMaybe<Scalars['Circle']>;
  location_within_rectangle?: InputMaybe<Scalars['Rectangle']>;
  ortsbezeichnung?: InputMaybe<Scalars['String']>;
  ortsbezeichnung_contains?: InputMaybe<Scalars['String']>;
  ortsbezeichnung_exists?: InputMaybe<Scalars['Boolean']>;
  ortsbezeichnung_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ortsbezeichnung_not?: InputMaybe<Scalars['String']>;
  ortsbezeichnung_not_contains?: InputMaybe<Scalars['String']>;
  ortsbezeichnung_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type GpsTaskLinkingCollections = {
  __typename?: 'GpsTaskLinkingCollections';
  aufgabeCollection?: Maybe<AufgabeCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type GpsTaskLinkingCollectionsAufgabeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GpsTaskLinkingCollectionsAufgabeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GpsTaskLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum GpsTaskLinkingCollectionsAufgabeCollectionOrder {
  AblaufdatumAsc = 'ablaufdatum_ASC',
  AblaufdatumDesc = 'ablaufdatum_DESC',
  PunkteAsc = 'punkte_ASC',
  PunkteDesc = 'punkte_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum GpsTaskOrder {
  OrtsbezeichnungAsc = 'ortsbezeichnung_ASC',
  OrtsbezeichnungDesc = 'ortsbezeichnung_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/info) */
export type Info = Entry & {
  __typename?: 'Info';
  content?: Maybe<InfoContent>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<InfoLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/info) */
export type InfoContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/info) */
export type InfoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/info) */
export type InfoTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type InfoCollection = {
  __typename?: 'InfoCollection';
  items: Array<Maybe<Info>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type InfoContent = {
  __typename?: 'InfoContent';
  json: Scalars['JSON'];
  links: InfoContentLinks;
};

export type InfoContentAssets = {
  __typename?: 'InfoContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type InfoContentEntries = {
  __typename?: 'InfoContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type InfoContentLinks = {
  __typename?: 'InfoContentLinks';
  assets: InfoContentAssets;
  entries: InfoContentEntries;
};

export type InfoFilter = {
  AND?: InputMaybe<Array<InputMaybe<InfoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InfoFilter>>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type InfoLinkingCollections = {
  __typename?: 'InfoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  globalCollection?: Maybe<GlobalCollection>;
};


export type InfoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type InfoLinkingCollectionsGlobalCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<InfoLinkingCollectionsGlobalCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum InfoLinkingCollectionsGlobalCollectionOrder {
  HyaenenSchwelleAsc = 'hyaenenSchwelle_ASC',
  HyaenenSchwelleDesc = 'hyaenenSchwelle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VertrauteSchwelleAsc = 'vertrauteSchwelle_ASC',
  VertrauteSchwelleDesc = 'vertrauteSchwelle_DESC',
  ZirkelSchwelleAsc = 'zirkelSchwelle_ASC',
  ZirkelSchwelleDesc = 'zirkelSchwelle_DESC'
}

export enum InfoOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Location = {
  __typename?: 'Location';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/news) */
export type News = Entry & {
  __typename?: 'News';
  content?: Maybe<NewsContent>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NewsLinkingCollections>;
  location?: Maybe<Location>;
  recipient?: Maybe<Array<Maybe<Scalars['String']>>>;
  releaseDate?: Maybe<Scalars['DateTime']>;
  sys: Sys;
  thumbnail?: Maybe<Asset>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/news) */
export type NewsContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/news) */
export type NewsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/news) */
export type NewsLocationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/news) */
export type NewsRecipientArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/news) */
export type NewsReleaseDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/news) */
export type NewsThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/news) */
export type NewsTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NewsCollection = {
  __typename?: 'NewsCollection';
  items: Array<Maybe<News>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NewsContent = {
  __typename?: 'NewsContent';
  json: Scalars['JSON'];
  links: NewsContentLinks;
};

export type NewsContentAssets = {
  __typename?: 'NewsContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type NewsContentEntries = {
  __typename?: 'NewsContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type NewsContentLinks = {
  __typename?: 'NewsContentLinks';
  assets: NewsContentAssets;
  entries: NewsContentEntries;
};

export type NewsFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsFilter>>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_within_circle?: InputMaybe<Scalars['Circle']>;
  location_within_rectangle?: InputMaybe<Scalars['Rectangle']>;
  recipient_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  recipient_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  recipient_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  recipient_exists?: InputMaybe<Scalars['Boolean']>;
  releaseDate?: InputMaybe<Scalars['DateTime']>;
  releaseDate_exists?: InputMaybe<Scalars['Boolean']>;
  releaseDate_gt?: InputMaybe<Scalars['DateTime']>;
  releaseDate_gte?: InputMaybe<Scalars['DateTime']>;
  releaseDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  releaseDate_lt?: InputMaybe<Scalars['DateTime']>;
  releaseDate_lte?: InputMaybe<Scalars['DateTime']>;
  releaseDate_not?: InputMaybe<Scalars['DateTime']>;
  releaseDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsLinkingCollections = {
  __typename?: 'NewsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NewsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NewsOrder {
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  antwort?: Maybe<Antwort>;
  antwortCollection?: Maybe<AntwortCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  aufgabe?: Maybe<Aufgabe>;
  aufgabeCollection?: Maybe<AufgabeCollection>;
  einbuergerungstest?: Maybe<Einbuergerungstest>;
  einbuergerungstestCollection?: Maybe<EinbuergerungstestCollection>;
  einbuergerungstestKriterium?: Maybe<EinbuergerungstestKriterium>;
  einbuergerungstestKriteriumCollection?: Maybe<EinbuergerungstestKriteriumCollection>;
  einbuergerungstestWerte?: Maybe<EinbuergerungstestWerte>;
  einbuergerungstestWerteCollection?: Maybe<EinbuergerungstestWerteCollection>;
  entryCollection?: Maybe<EntryCollection>;
  global?: Maybe<Global>;
  globalCollection?: Maybe<GlobalCollection>;
  gpsTask?: Maybe<GpsTask>;
  gpsTaskCollection?: Maybe<GpsTaskCollection>;
  info?: Maybe<Info>;
  infoCollection?: Maybe<InfoCollection>;
  news?: Maybe<News>;
  newsCollection?: Maybe<NewsCollection>;
  question?: Maybe<Question>;
  questionCollection?: Maybe<QuestionCollection>;
  quizTask?: Maybe<QuizTask>;
  quizTaskCollection?: Maybe<QuizTaskCollection>;
  score?: Maybe<Score>;
  scoreCollection?: Maybe<ScoreCollection>;
  stepcounterTask?: Maybe<StepcounterTask>;
  stepcounterTaskCollection?: Maybe<StepcounterTaskCollection>;
  taskAntwort?: Maybe<TaskAntwort>;
  taskAntwortCollection?: Maybe<TaskAntwortCollection>;
  taskFrage?: Maybe<TaskFrage>;
  taskFrageCollection?: Maybe<TaskFrageCollection>;
  videoEmbed?: Maybe<VideoEmbed>;
  videoEmbedCollection?: Maybe<VideoEmbedCollection>;
};


export type QueryAntwortArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAntwortCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AntwortOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AntwortFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryAufgabeArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAufgabeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AufgabeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AufgabeFilter>;
};


export type QueryEinbuergerungstestArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryEinbuergerungstestCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EinbuergerungstestOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EinbuergerungstestFilter>;
};


export type QueryEinbuergerungstestKriteriumArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryEinbuergerungstestKriteriumCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EinbuergerungstestKriteriumOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EinbuergerungstestKriteriumFilter>;
};


export type QueryEinbuergerungstestWerteArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryEinbuergerungstestWerteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EinbuergerungstestWerteOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EinbuergerungstestWerteFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryGlobalArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGlobalCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GlobalOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GlobalFilter>;
};


export type QueryGpsTaskArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGpsTaskCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GpsTaskOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GpsTaskFilter>;
};


export type QueryInfoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<InfoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InfoFilter>;
};


export type QueryNewsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NewsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsFilter>;
};


export type QueryQuestionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryQuestionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuestionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionFilter>;
};


export type QueryQuizTaskArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryQuizTaskCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuizTaskOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuizTaskFilter>;
};


export type QueryScoreArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryScoreCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ScoreOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScoreFilter>;
};


export type QueryStepcounterTaskArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryStepcounterTaskCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StepcounterTaskOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StepcounterTaskFilter>;
};


export type QueryTaskAntwortArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTaskAntwortCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TaskAntwortOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskAntwortFilter>;
};


export type QueryTaskFrageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTaskFrageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TaskFrageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskFrageFilter>;
};


export type QueryVideoEmbedArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryVideoEmbedCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<VideoEmbedOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoEmbedFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/question) */
export type Question = Entry & {
  __typename?: 'Question';
  antwortenCollection?: Maybe<QuestionAntwortenCollection>;
  contentfulMetadata: ContentfulMetadata;
  frageText?: Maybe<Scalars['String']>;
  frageTitel?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<QuestionLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/question) */
export type QuestionAntwortenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuestionAntwortenCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AntwortFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/question) */
export type QuestionFrageTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/question) */
export type QuestionFrageTitelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/question) */
export type QuestionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuestionAntwortenCollection = {
  __typename?: 'QuestionAntwortenCollection';
  items: Array<Maybe<Antwort>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum QuestionAntwortenCollectionOrder {
  AntwortTextAsc = 'antwortText_ASC',
  AntwortTextDesc = 'antwortText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type QuestionCollection = {
  __typename?: 'QuestionCollection';
  items: Array<Maybe<Question>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type QuestionFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuestionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuestionFilter>>>;
  antworten?: InputMaybe<CfAntwortNestedFilter>;
  antwortenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  frageText?: InputMaybe<Scalars['String']>;
  frageText_contains?: InputMaybe<Scalars['String']>;
  frageText_exists?: InputMaybe<Scalars['Boolean']>;
  frageText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  frageText_not?: InputMaybe<Scalars['String']>;
  frageText_not_contains?: InputMaybe<Scalars['String']>;
  frageText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  frageTitel?: InputMaybe<Scalars['String']>;
  frageTitel_contains?: InputMaybe<Scalars['String']>;
  frageTitel_exists?: InputMaybe<Scalars['Boolean']>;
  frageTitel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  frageTitel_not?: InputMaybe<Scalars['String']>;
  frageTitel_not_contains?: InputMaybe<Scalars['String']>;
  frageTitel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type QuestionLinkingCollections = {
  __typename?: 'QuestionLinkingCollections';
  einbuergerungstestCollection?: Maybe<EinbuergerungstestCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type QuestionLinkingCollectionsEinbuergerungstestCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuestionLinkingCollectionsEinbuergerungstestCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuestionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum QuestionLinkingCollectionsEinbuergerungstestCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum QuestionOrder {
  FrageTitelAsc = 'frageTitel_ASC',
  FrageTitelDesc = 'frageTitel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/quizTask) */
export type QuizTask = Entry & {
  __typename?: 'QuizTask';
  contentfulMetadata: ContentfulMetadata;
  fragenCollection?: Maybe<QuizTaskFragenCollection>;
  linkedFrom?: Maybe<QuizTaskLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/quizTask) */
export type QuizTaskFragenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuizTaskFragenCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskFrageFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/quizTask) */
export type QuizTaskLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuizTaskCollection = {
  __typename?: 'QuizTaskCollection';
  items: Array<Maybe<QuizTask>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type QuizTaskFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuizTaskFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuizTaskFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fragen?: InputMaybe<CfTaskFrageNestedFilter>;
  fragenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type QuizTaskFragenCollection = {
  __typename?: 'QuizTaskFragenCollection';
  items: Array<Maybe<TaskFrage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum QuizTaskFragenCollectionOrder {
  FrageTitleAsc = 'frageTitle_ASC',
  FrageTitleDesc = 'frageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type QuizTaskLinkingCollections = {
  __typename?: 'QuizTaskLinkingCollections';
  aufgabeCollection?: Maybe<AufgabeCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type QuizTaskLinkingCollectionsAufgabeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuizTaskLinkingCollectionsAufgabeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuizTaskLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum QuizTaskLinkingCollectionsAufgabeCollectionOrder {
  AblaufdatumAsc = 'ablaufdatum_ASC',
  AblaufdatumDesc = 'ablaufdatum_DESC',
  PunkteAsc = 'punkte_ASC',
  PunkteDesc = 'punkte_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum QuizTaskOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/score) */
export type Score = Entry & {
  __typename?: 'Score';
  contentfulMetadata: ContentfulMetadata;
  kriterium?: Maybe<EinbuergerungstestWerte>;
  linkedFrom?: Maybe<ScoreLinkingCollections>;
  sys: Sys;
  wertung?: Maybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/score) */
export type ScoreKriteriumArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/score) */
export type ScoreLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/score) */
export type ScoreWertungArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ScoreCollection = {
  __typename?: 'ScoreCollection';
  items: Array<Maybe<Score>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ScoreFilter = {
  AND?: InputMaybe<Array<InputMaybe<ScoreFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ScoreFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  kriterium?: InputMaybe<CfEinbuergerungstestWerteNestedFilter>;
  kriterium_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  wertung?: InputMaybe<Scalars['Int']>;
  wertung_exists?: InputMaybe<Scalars['Boolean']>;
  wertung_gt?: InputMaybe<Scalars['Int']>;
  wertung_gte?: InputMaybe<Scalars['Int']>;
  wertung_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  wertung_lt?: InputMaybe<Scalars['Int']>;
  wertung_lte?: InputMaybe<Scalars['Int']>;
  wertung_not?: InputMaybe<Scalars['Int']>;
  wertung_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ScoreLinkingCollections = {
  __typename?: 'ScoreLinkingCollections';
  antwortCollection?: Maybe<AntwortCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ScoreLinkingCollectionsAntwortCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ScoreLinkingCollectionsAntwortCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ScoreLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ScoreLinkingCollectionsAntwortCollectionOrder {
  AntwortTextAsc = 'antwortText_ASC',
  AntwortTextDesc = 'antwortText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ScoreOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WertungAsc = 'wertung_ASC',
  WertungDesc = 'wertung_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/stepcounterTask) */
export type StepcounterTask = Entry & {
  __typename?: 'StepcounterTask';
  contentfulMetadata: ContentfulMetadata;
  ersatzAufgabe?: Maybe<Aufgabe>;
  linkedFrom?: Maybe<StepcounterTaskLinkingCollections>;
  schritte?: Maybe<Scalars['Int']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/stepcounterTask) */
export type StepcounterTaskErsatzAufgabeArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/stepcounterTask) */
export type StepcounterTaskLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/stepcounterTask) */
export type StepcounterTaskSchritteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type StepcounterTaskCollection = {
  __typename?: 'StepcounterTaskCollection';
  items: Array<Maybe<StepcounterTask>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type StepcounterTaskFilter = {
  AND?: InputMaybe<Array<InputMaybe<StepcounterTaskFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StepcounterTaskFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ersatzAufgabe?: InputMaybe<CfAufgabeNestedFilter>;
  ersatzAufgabe_exists?: InputMaybe<Scalars['Boolean']>;
  schritte?: InputMaybe<Scalars['Int']>;
  schritte_exists?: InputMaybe<Scalars['Boolean']>;
  schritte_gt?: InputMaybe<Scalars['Int']>;
  schritte_gte?: InputMaybe<Scalars['Int']>;
  schritte_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  schritte_lt?: InputMaybe<Scalars['Int']>;
  schritte_lte?: InputMaybe<Scalars['Int']>;
  schritte_not?: InputMaybe<Scalars['Int']>;
  schritte_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type StepcounterTaskLinkingCollections = {
  __typename?: 'StepcounterTaskLinkingCollections';
  aufgabeCollection?: Maybe<AufgabeCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type StepcounterTaskLinkingCollectionsAufgabeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StepcounterTaskLinkingCollectionsAufgabeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type StepcounterTaskLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum StepcounterTaskLinkingCollectionsAufgabeCollectionOrder {
  AblaufdatumAsc = 'ablaufdatum_ASC',
  AblaufdatumDesc = 'ablaufdatum_DESC',
  PunkteAsc = 'punkte_ASC',
  PunkteDesc = 'punkte_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum StepcounterTaskOrder {
  SchritteAsc = 'schritte_ASC',
  SchritteDesc = 'schritte_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/taskAntwort) */
export type TaskAntwort = Entry & {
  __typename?: 'TaskAntwort';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TaskAntwortLinkingCollections>;
  richtigeAntwort?: Maybe<Scalars['Boolean']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/taskAntwort) */
export type TaskAntwortLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/taskAntwort) */
export type TaskAntwortRichtigeAntwortArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/taskAntwort) */
export type TaskAntwortTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TaskAntwortCollection = {
  __typename?: 'TaskAntwortCollection';
  items: Array<Maybe<TaskAntwort>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TaskAntwortFilter = {
  AND?: InputMaybe<Array<InputMaybe<TaskAntwortFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TaskAntwortFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  richtigeAntwort?: InputMaybe<Scalars['Boolean']>;
  richtigeAntwort_exists?: InputMaybe<Scalars['Boolean']>;
  richtigeAntwort_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskAntwortLinkingCollections = {
  __typename?: 'TaskAntwortLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  taskFrageCollection?: Maybe<TaskFrageCollection>;
};


export type TaskAntwortLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TaskAntwortLinkingCollectionsTaskFrageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TaskAntwortLinkingCollectionsTaskFrageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TaskAntwortLinkingCollectionsTaskFrageCollectionOrder {
  FrageTitleAsc = 'frageTitle_ASC',
  FrageTitleDesc = 'frageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TaskAntwortOrder {
  RichtigeAntwortAsc = 'richtigeAntwort_ASC',
  RichtigeAntwortDesc = 'richtigeAntwort_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/taskFrage) */
export type TaskFrage = Entry & {
  __typename?: 'TaskFrage';
  antwortenCollection?: Maybe<TaskFrageAntwortenCollection>;
  contentfulMetadata: ContentfulMetadata;
  frageText?: Maybe<Scalars['String']>;
  frageTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TaskFrageLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/taskFrage) */
export type TaskFrageAntwortenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TaskFrageAntwortenCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskAntwortFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/taskFrage) */
export type TaskFrageFrageTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/taskFrage) */
export type TaskFrageFrageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/taskFrage) */
export type TaskFrageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskFrageAntwortenCollection = {
  __typename?: 'TaskFrageAntwortenCollection';
  items: Array<Maybe<TaskAntwort>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum TaskFrageAntwortenCollectionOrder {
  RichtigeAntwortAsc = 'richtigeAntwort_ASC',
  RichtigeAntwortDesc = 'richtigeAntwort_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TaskFrageCollection = {
  __typename?: 'TaskFrageCollection';
  items: Array<Maybe<TaskFrage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TaskFrageFilter = {
  AND?: InputMaybe<Array<InputMaybe<TaskFrageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TaskFrageFilter>>>;
  antworten?: InputMaybe<CfTaskAntwortNestedFilter>;
  antwortenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  frageText?: InputMaybe<Scalars['String']>;
  frageText_contains?: InputMaybe<Scalars['String']>;
  frageText_exists?: InputMaybe<Scalars['Boolean']>;
  frageText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  frageText_not?: InputMaybe<Scalars['String']>;
  frageText_not_contains?: InputMaybe<Scalars['String']>;
  frageText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  frageTitle?: InputMaybe<Scalars['String']>;
  frageTitle_contains?: InputMaybe<Scalars['String']>;
  frageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  frageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  frageTitle_not?: InputMaybe<Scalars['String']>;
  frageTitle_not_contains?: InputMaybe<Scalars['String']>;
  frageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TaskFrageLinkingCollections = {
  __typename?: 'TaskFrageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  quizTaskCollection?: Maybe<QuizTaskCollection>;
};


export type TaskFrageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TaskFrageLinkingCollectionsQuizTaskCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TaskFrageLinkingCollectionsQuizTaskCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TaskFrageLinkingCollectionsQuizTaskCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TaskFrageOrder {
  FrageTitleAsc = 'frageTitle_ASC',
  FrageTitleDesc = 'frageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/videoEmbed) */
export type VideoEmbed = Entry & {
  __typename?: 'VideoEmbed';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<VideoEmbedLinkingCollections>;
  sys: Sys;
  thumbnail?: Maybe<Asset>;
  title?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/videoEmbed) */
export type VideoEmbedLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/videoEmbed) */
export type VideoEmbedThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/videoEmbed) */
export type VideoEmbedTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/[Your Contentful Space ID]/content_types/videoEmbed) */
export type VideoEmbedVideoUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type VideoEmbedCollection = {
  __typename?: 'VideoEmbedCollection';
  items: Array<Maybe<VideoEmbed>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type VideoEmbedFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoEmbedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoEmbedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoUrl?: InputMaybe<Scalars['String']>;
  videoUrl_contains?: InputMaybe<Scalars['String']>;
  videoUrl_exists?: InputMaybe<Scalars['Boolean']>;
  videoUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoUrl_not?: InputMaybe<Scalars['String']>;
  videoUrl_not_contains?: InputMaybe<Scalars['String']>;
  videoUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VideoEmbedLinkingCollections = {
  __typename?: 'VideoEmbedLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type VideoEmbedLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum VideoEmbedOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VideoUrlAsc = 'videoUrl_ASC',
  VideoUrlDesc = 'videoUrl_DESC'
}

export type CfAntwortNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAntwortNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAntwortNestedFilter>>>;
  antwortText?: InputMaybe<Scalars['String']>;
  antwortText_contains?: InputMaybe<Scalars['String']>;
  antwortText_exists?: InputMaybe<Scalars['Boolean']>;
  antwortText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  antwortText_not?: InputMaybe<Scalars['String']>;
  antwortText_not_contains?: InputMaybe<Scalars['String']>;
  antwortText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  scoreCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfAufgabeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAufgabeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAufgabeNestedFilter>>>;
  ablaufdatum?: InputMaybe<Scalars['DateTime']>;
  ablaufdatum_exists?: InputMaybe<Scalars['Boolean']>;
  ablaufdatum_gt?: InputMaybe<Scalars['DateTime']>;
  ablaufdatum_gte?: InputMaybe<Scalars['DateTime']>;
  ablaufdatum_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  ablaufdatum_lt?: InputMaybe<Scalars['DateTime']>;
  ablaufdatum_lte?: InputMaybe<Scalars['DateTime']>;
  ablaufdatum_not?: InputMaybe<Scalars['DateTime']>;
  ablaufdatum_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  empfaenger_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  empfaenger_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  empfaenger_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  empfaenger_exists?: InputMaybe<Scalars['Boolean']>;
  fraktion?: InputMaybe<Scalars['String']>;
  fraktion_contains?: InputMaybe<Scalars['String']>;
  fraktion_exists?: InputMaybe<Scalars['Boolean']>;
  fraktion_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fraktion_not?: InputMaybe<Scalars['String']>;
  fraktion_not_contains?: InputMaybe<Scalars['String']>;
  fraktion_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  punkte?: InputMaybe<Scalars['Int']>;
  punkte_exists?: InputMaybe<Scalars['Boolean']>;
  punkte_gt?: InputMaybe<Scalars['Int']>;
  punkte_gte?: InputMaybe<Scalars['Int']>;
  punkte_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  punkte_lt?: InputMaybe<Scalars['Int']>;
  punkte_lte?: InputMaybe<Scalars['Int']>;
  punkte_not?: InputMaybe<Scalars['Int']>;
  punkte_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  releaseDate?: InputMaybe<Scalars['DateTime']>;
  releaseDate_exists?: InputMaybe<Scalars['Boolean']>;
  releaseDate_gt?: InputMaybe<Scalars['DateTime']>;
  releaseDate_gte?: InputMaybe<Scalars['DateTime']>;
  releaseDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  releaseDate_lt?: InputMaybe<Scalars['DateTime']>;
  releaseDate_lte?: InputMaybe<Scalars['DateTime']>;
  releaseDate_not?: InputMaybe<Scalars['DateTime']>;
  releaseDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sys?: InputMaybe<SysFilter>;
  task_exists?: InputMaybe<Scalars['Boolean']>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfEinbuergerungstestWerteNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfEinbuergerungstestWerteNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfEinbuergerungstestWerteNestedFilter>>>;
  beschreibung?: InputMaybe<Scalars['String']>;
  beschreibung_contains?: InputMaybe<Scalars['String']>;
  beschreibung_exists?: InputMaybe<Scalars['Boolean']>;
  beschreibung_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  beschreibung_not?: InputMaybe<Scalars['String']>;
  beschreibung_not_contains?: InputMaybe<Scalars['String']>;
  beschreibung_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bild_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  wert?: InputMaybe<Scalars['String']>;
  wert_contains?: InputMaybe<Scalars['String']>;
  wert_exists?: InputMaybe<Scalars['Boolean']>;
  wert_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  wert_not?: InputMaybe<Scalars['String']>;
  wert_not_contains?: InputMaybe<Scalars['String']>;
  wert_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfInfoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfInfoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfInfoNestedFilter>>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfQuestionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfQuestionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfQuestionNestedFilter>>>;
  antwortenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  frageText?: InputMaybe<Scalars['String']>;
  frageText_contains?: InputMaybe<Scalars['String']>;
  frageText_exists?: InputMaybe<Scalars['Boolean']>;
  frageText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  frageText_not?: InputMaybe<Scalars['String']>;
  frageText_not_contains?: InputMaybe<Scalars['String']>;
  frageText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  frageTitel?: InputMaybe<Scalars['String']>;
  frageTitel_contains?: InputMaybe<Scalars['String']>;
  frageTitel_exists?: InputMaybe<Scalars['Boolean']>;
  frageTitel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  frageTitel_not?: InputMaybe<Scalars['String']>;
  frageTitel_not_contains?: InputMaybe<Scalars['String']>;
  frageTitel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfScoreNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfScoreNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfScoreNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  kriterium_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  wertung?: InputMaybe<Scalars['Int']>;
  wertung_exists?: InputMaybe<Scalars['Boolean']>;
  wertung_gt?: InputMaybe<Scalars['Int']>;
  wertung_gte?: InputMaybe<Scalars['Int']>;
  wertung_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  wertung_lt?: InputMaybe<Scalars['Int']>;
  wertung_lte?: InputMaybe<Scalars['Int']>;
  wertung_not?: InputMaybe<Scalars['Int']>;
  wertung_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type CfTaskAntwortNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTaskAntwortNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTaskAntwortNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  richtigeAntwort?: InputMaybe<Scalars['Boolean']>;
  richtigeAntwort_exists?: InputMaybe<Scalars['Boolean']>;
  richtigeAntwort_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfTaskFrageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTaskFrageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTaskFrageNestedFilter>>>;
  antwortenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  frageText?: InputMaybe<Scalars['String']>;
  frageText_contains?: InputMaybe<Scalars['String']>;
  frageText_exists?: InputMaybe<Scalars['Boolean']>;
  frageText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  frageText_not?: InputMaybe<Scalars['String']>;
  frageText_not_contains?: InputMaybe<Scalars['String']>;
  frageText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  frageTitle?: InputMaybe<Scalars['String']>;
  frageTitle_contains?: InputMaybe<Scalars['String']>;
  frageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  frageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  frageTitle_not?: InputMaybe<Scalars['String']>;
  frageTitle_not_contains?: InputMaybe<Scalars['String']>;
  frageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type EinbuergerungstestQueryVariables = Exact<{ [key: string]: never; }>;


export type EinbuergerungstestQuery = { __typename?: 'Query', einbuergerungstestCollection?: { __typename?: 'EinbuergerungstestCollection', items: Array<{ __typename?: 'Einbuergerungstest', title?: string | null, text?: string | null, sys: { __typename?: 'Sys', id: string }, heroImage?: { __typename?: 'Asset', url?: string | null } | null, ergebnisText?: { __typename?: 'EinbuergerungstestErgebnisText', json: any } | null, fragenCollection?: { __typename?: 'EinbuergerungstestFragenCollection', items: Array<{ __typename?: 'Question', frageTitel?: string | null, frageText?: string | null, sys: { __typename?: 'Sys', id: string }, antwortenCollection?: { __typename?: 'QuestionAntwortenCollection', items: Array<{ __typename?: 'Antwort', antwortText?: string | null, sys: { __typename?: 'Sys', id: string }, scoreCollection?: { __typename?: 'AntwortScoreCollection', items: Array<{ __typename?: 'Score', wertung?: number | null, kriterium?: { __typename?: 'EinbuergerungstestWerte', wert?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | null> } | null } | null> } | null } | null> } | null };

export type AuswertungskriterienQueryVariables = Exact<{ [key: string]: never; }>;


export type AuswertungskriterienQuery = { __typename?: 'Query', einbuergerungstestKriteriumCollection?: { __typename?: 'EinbuergerungstestKriteriumCollection', items: Array<{ __typename?: 'EinbuergerungstestKriterium', kriterium?: string | null, sys: { __typename?: 'Sys', id: string }, werteCollection?: { __typename?: 'EinbuergerungstestKriteriumWerteCollection', items: Array<{ __typename?: 'EinbuergerungstestWerte', wert?: string | null, beschreibung?: string | null, sys: { __typename?: 'Sys', id: string }, bild?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null } | null> } | null };

export type NewsQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsQuery = { __typename?: 'Query', newsCollection?: { __typename?: 'NewsCollection', items: Array<{ __typename?: 'News', title?: string | null, releaseDate?: any | null, recipient?: Array<string | null> | null, sys: { __typename?: 'Sys', id: string }, thumbnail?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, location?: { __typename?: 'Location', lat?: number | null, lon?: number | null } | null } | null> } | null };

export type NewsContentQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type NewsContentQuery = { __typename?: 'Query', newsCollection?: { __typename?: 'NewsCollection', items: Array<{ __typename?: 'News', sys: { __typename?: 'Sys', id: string }, content?: { __typename?: 'NewsContent', json: any, links: { __typename?: 'NewsContentLinks', entries: { __typename?: 'NewsContentEntries', block: Array<{ __typename: 'Antwort', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Aufgabe', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Einbuergerungstest', sys: { __typename?: 'Sys', id: string } } | { __typename: 'EinbuergerungstestKriterium', sys: { __typename?: 'Sys', id: string } } | { __typename: 'EinbuergerungstestWerte', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Global', sys: { __typename?: 'Sys', id: string } } | { __typename: 'GpsTask', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Info', sys: { __typename?: 'Sys', id: string } } | { __typename: 'News', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } } | { __typename: 'QuizTask', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Score', sys: { __typename?: 'Sys', id: string } } | { __typename: 'StepcounterTask', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TaskAntwort', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TaskFrage', sys: { __typename?: 'Sys', id: string } } | { __typename: 'VideoEmbed', title?: string | null, videoUrl?: string | null, thumbnail?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'NewsContentAssets', block: Array<{ __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };

export type AufgabenQueryVariables = Exact<{ [key: string]: never; }>;


export type AufgabenQuery = { __typename?: 'Query', aufgabeCollection?: { __typename?: 'AufgabeCollection', items: Array<{ __typename?: 'Aufgabe', fraktion?: string | null, title?: string | null, empfaenger?: Array<string | null> | null, releaseDate?: any | null, ablaufdatum?: any | null, punkte?: number | null, sys: { __typename?: 'Sys', id: string }, thumbnail?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, task?: { __typename: 'GpsTask', ortsbezeichnung?: string | null, location?: { __typename?: 'Location', lat?: number | null, lon?: number | null } | null, ersatzAufgabe?: { __typename?: 'Aufgabe', fraktion?: string | null, title?: string | null, empfaenger?: Array<string | null> | null, releaseDate?: any | null, ablaufdatum?: any | null, punkte?: number | null, sys: { __typename?: 'Sys', id: string }, thumbnail?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, task?: { __typename: 'GpsTask', ortsbezeichnung?: string | null, location?: { __typename?: 'Location', lat?: number | null, lon?: number | null } | null } | { __typename: 'QuizTask', fragenCollection?: { __typename?: 'QuizTaskFragenCollection', items: Array<{ __typename?: 'TaskFrage', frageTitle?: string | null, frageText?: string | null, sys: { __typename?: 'Sys', id: string }, antwortenCollection?: { __typename?: 'TaskFrageAntwortenCollection', items: Array<{ __typename?: 'TaskAntwort', title?: string | null, richtigeAntwort?: boolean | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null } | { __typename: 'StepcounterTask', schritte?: number | null, ersatzAufgabe?: { __typename: 'Aufgabe', sys: { __typename?: 'Sys', id: string } } | null } | null } | null } | { __typename: 'QuizTask', fragenCollection?: { __typename?: 'QuizTaskFragenCollection', items: Array<{ __typename?: 'TaskFrage', frageTitle?: string | null, frageText?: string | null, sys: { __typename?: 'Sys', id: string }, antwortenCollection?: { __typename?: 'TaskFrageAntwortenCollection', items: Array<{ __typename?: 'TaskAntwort', title?: string | null, richtigeAntwort?: boolean | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null } | { __typename: 'StepcounterTask', schritte?: number | null, ersatzAufgabe?: { __typename?: 'Aufgabe', fraktion?: string | null, title?: string | null, empfaenger?: Array<string | null> | null, releaseDate?: any | null, ablaufdatum?: any | null, punkte?: number | null, sys: { __typename?: 'Sys', id: string }, thumbnail?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, task?: { __typename: 'GpsTask', ortsbezeichnung?: string | null, location?: { __typename?: 'Location', lat?: number | null, lon?: number | null } | null } | { __typename: 'QuizTask', fragenCollection?: { __typename?: 'QuizTaskFragenCollection', items: Array<{ __typename?: 'TaskFrage', frageTitle?: string | null, frageText?: string | null, sys: { __typename?: 'Sys', id: string }, antwortenCollection?: { __typename?: 'TaskFrageAntwortenCollection', items: Array<{ __typename?: 'TaskAntwort', title?: string | null, richtigeAntwort?: boolean | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null } | { __typename: 'StepcounterTask', schritte?: number | null, ersatzAufgabe?: { __typename: 'Aufgabe', sys: { __typename?: 'Sys', id: string } } | null } | null } | null } | null } | null> } | null };

export type AufgabenContentQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type AufgabenContentQuery = { __typename?: 'Query', aufgabeCollection?: { __typename?: 'AufgabeCollection', items: Array<{ __typename?: 'Aufgabe', sys: { __typename?: 'Sys', id: string }, content?: { __typename?: 'AufgabeContent', json: any, links: { __typename?: 'AufgabeContentLinks', entries: { __typename?: 'AufgabeContentEntries', block: Array<{ __typename: 'Antwort', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Aufgabe', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Einbuergerungstest', sys: { __typename?: 'Sys', id: string } } | { __typename: 'EinbuergerungstestKriterium', sys: { __typename?: 'Sys', id: string } } | { __typename: 'EinbuergerungstestWerte', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Global', sys: { __typename?: 'Sys', id: string } } | { __typename: 'GpsTask', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Info', sys: { __typename?: 'Sys', id: string } } | { __typename: 'News', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } } | { __typename: 'QuizTask', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Score', sys: { __typename?: 'Sys', id: string } } | { __typename: 'StepcounterTask', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TaskAntwort', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TaskFrage', sys: { __typename?: 'Sys', id: string } } | { __typename: 'VideoEmbed', title?: string | null, videoUrl?: string | null, thumbnail?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'AufgabeContentAssets', block: Array<{ __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };

export type GlobalQueryVariables = Exact<{ [key: string]: never; }>;


export type GlobalQuery = { __typename?: 'Query', globalCollection?: { __typename?: 'GlobalCollection', items: Array<{ __typename?: 'Global', hyaenenSchwelle?: number | null, zirkelSchwelle?: number | null, vertrauteSchwelle?: number | null, einbuergerungMytopiaText?: string | null, wechselZuHyaenenText?: string | null, wechselZuZirkelText?: string | null, wechselZuVertrauteText?: string | null, mytopiaLogo?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, hyaenenLogo?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, zirkelLogo?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, vertrauteLogo?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, einbuergerungMytopiaImage?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, wechselZuHyaenenImage?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, wechselZuZirkelImage?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, wechselZuVertrauteImage?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, mytopiaInfosCollection?: { __typename?: 'GlobalMytopiaInfosCollection', items: Array<{ __typename?: 'Info', title?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, hyaenenInfosCollection?: { __typename?: 'GlobalHyaenenInfosCollection', items: Array<{ __typename?: 'Info', title?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, zirkelInfosCollection?: { __typename?: 'GlobalZirkelInfosCollection', items: Array<{ __typename?: 'Info', title?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, vertrauteInfosCollection?: { __typename?: 'GlobalVertrauteInfosCollection', items: Array<{ __typename?: 'Info', title?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };

export type GetInfoQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetInfoQuery = { __typename?: 'Query', info?: { __typename?: 'Info', title?: string | null, sys: { __typename?: 'Sys', id: string }, content?: { __typename?: 'InfoContent', json: any, links: { __typename?: 'InfoContentLinks', entries: { __typename?: 'InfoContentEntries', block: Array<{ __typename: 'Antwort', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Aufgabe', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Einbuergerungstest', sys: { __typename?: 'Sys', id: string } } | { __typename: 'EinbuergerungstestKriterium', sys: { __typename?: 'Sys', id: string } } | { __typename: 'EinbuergerungstestWerte', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Global', sys: { __typename?: 'Sys', id: string } } | { __typename: 'GpsTask', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Info', sys: { __typename?: 'Sys', id: string } } | { __typename: 'News', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } } | { __typename: 'QuizTask', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Score', sys: { __typename?: 'Sys', id: string } } | { __typename: 'StepcounterTask', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TaskAntwort', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TaskFrage', sys: { __typename?: 'Sys', id: string } } | { __typename: 'VideoEmbed', title?: string | null, videoUrl?: string | null, thumbnail?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'InfoContentAssets', block: Array<{ __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null };


export const EinbuergerungstestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Einbuergerungstest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"einbuergerungstestCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"ergebnisText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragenCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"frageTitel"}},{"kind":"Field","name":{"kind":"Name","value":"frageText"}},{"kind":"Field","name":{"kind":"Name","value":"antwortenCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"antwortText"}},{"kind":"Field","name":{"kind":"Name","value":"scoreCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"kriterium"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wert"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"wertung"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<EinbuergerungstestQuery, EinbuergerungstestQueryVariables>;
export const AuswertungskriterienDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Auswertungskriterien"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"einbuergerungstestKriteriumCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"kriterium"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"werteCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wert"}},{"kind":"Field","name":{"kind":"Name","value":"bild"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beschreibung"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AuswertungskriterienQuery, AuswertungskriterienQueryVariables>;
export const NewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"News"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}}]}}]}}]}}]}}]} as unknown as DocumentNode<NewsQuery, NewsQueryVariables>;
export const NewsContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewsContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sys"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"4"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoEmbed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<NewsContentQuery, NewsContentQueryVariables>;
export const AufgabenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Aufgaben"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aufgabeCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fraktion"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"empfaenger"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"ablaufdatum"}},{"kind":"Field","name":{"kind":"Name","value":"punkte"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"task"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuizTask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragenCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"frageTitle"}},{"kind":"Field","name":{"kind":"Name","value":"frageText"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"antwortenCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"richtigeAntwort"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GpsTask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ortsbezeichnung"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ersatzAufgabe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fraktion"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"empfaenger"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"ablaufdatum"}},{"kind":"Field","name":{"kind":"Name","value":"punkte"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"task"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuizTask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragenCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"frageTitle"}},{"kind":"Field","name":{"kind":"Name","value":"frageText"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"antwortenCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"richtigeAntwort"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GpsTask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ortsbezeichnung"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StepcounterTask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schritte"}},{"kind":"Field","name":{"kind":"Name","value":"ersatzAufgabe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StepcounterTask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schritte"}},{"kind":"Field","name":{"kind":"Name","value":"ersatzAufgabe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fraktion"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"empfaenger"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"ablaufdatum"}},{"kind":"Field","name":{"kind":"Name","value":"punkte"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"task"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuizTask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragenCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"frageTitle"}},{"kind":"Field","name":{"kind":"Name","value":"frageText"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"antwortenCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"richtigeAntwort"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GpsTask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ortsbezeichnung"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StepcounterTask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schritte"}},{"kind":"Field","name":{"kind":"Name","value":"ersatzAufgabe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AufgabenQuery, AufgabenQueryVariables>;
export const AufgabenContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AufgabenContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aufgabeCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sys"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"4"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoEmbed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AufgabenContentQuery, AufgabenContentQueryVariables>;
export const GlobalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Global"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"globalCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mytopiaLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hyaenenLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zirkelLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vertrauteLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hyaenenSchwelle"}},{"kind":"Field","name":{"kind":"Name","value":"zirkelSchwelle"}},{"kind":"Field","name":{"kind":"Name","value":"vertrauteSchwelle"}},{"kind":"Field","name":{"kind":"Name","value":"einbuergerungMytopiaText"}},{"kind":"Field","name":{"kind":"Name","value":"einbuergerungMytopiaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wechselZuHyaenenText"}},{"kind":"Field","name":{"kind":"Name","value":"wechselZuHyaenenImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wechselZuZirkelText"}},{"kind":"Field","name":{"kind":"Name","value":"wechselZuZirkelImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wechselZuVertrauteText"}},{"kind":"Field","name":{"kind":"Name","value":"wechselZuVertrauteImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mytopiaInfosCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hyaenenInfosCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"zirkelInfosCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"vertrauteInfosCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GlobalQuery, GlobalQueryVariables>;
export const GetInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoEmbed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetInfoQuery, GetInfoQueryVariables>;