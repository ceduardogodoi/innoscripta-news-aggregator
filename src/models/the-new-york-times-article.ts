import { z } from "zod";

export type TheNewYorkTimesArticle = {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: Array<{
    rank: number;
    subtype: string;
    caption: string | null;
    credit: string | null;
    type: string;
    url: string;
    height: number;
    width: number;
    legacy: {
      xlarge?: string;
      xlargewidth?: number;
      xlargeheight?: number;
      thumbnail?: string;
      thumbnailwidth?: number;
      thumbnailheight?: number;
      widewidth?: number;
      wideheight?: number;
      wide?: string;
    };
    subType: string;
    crop_name: string;
  }>;
  headline: {
    main: string;
    kicker: string | null;
    content_kicker: string | null;
    print_headline?: string;
    name: string | null;
    seo: string | null;
    sub: string | null;
  };
  keywords: Array<{
    name: string;
    value: string;
    rank: number;
    major: string;
  }>;
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: {
    original: string;
    person: Array<{
      firstname: string;
      middlename?: string;
      lastname: string;
      qualifier: string | null;
      title: string | null;
      role: string;
      organization: string;
      rank: number;
    }>;
    organization: string;
  };
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
  print_section?: string;
  print_page?: string;
  subsection_name?: string;
};

export type TheNewYorkTimesArticleResponse = {
  status: string;
  copyright: string;
  response: {
    docs: Array<TheNewYorkTimesArticle>;
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
};

export const theNewYorkTimesSchema = z.custom<TheNewYorkTimesArticleResponse>();
