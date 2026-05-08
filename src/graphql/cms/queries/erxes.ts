import { gql } from "@apollo/client";

export const GET_PAGES = gql`
  query CpPages($language: String) {
    cpPages(language: $language) {
      _id
      name
      slug
      status
      description
      content
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query CpPageBySlug($slug: String!, $language: String) {
    cpPageDetail(slug: $slug, language: $language) {
      _id
      name
      slug
      status
      description
      content
    }
  }
`;

export const GET_POSTS = gql`
  query CpPosts($language: String, $limit: Int) {
    cpPosts(language: $language, status: published, limit: $limit) {
      _id
      title
      slug
      excerpt
      content
      publishedDate
      thumbnail {
        url
        name
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query CpPostBySlug($slug: String!, $language: String) {
    cpPostDetail(slug: $slug, language: $language) {
      _id
      title
      slug
      excerpt
      content
      publishedDate
      thumbnail {
        url
        name
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query CpCategories($language: String) {
    cpCategories(language: $language) {
      list {
        _id
        name
        slug
        description
      }
    }
  }
`;

export const GET_TAGS = gql`
  query CpTags($language: String) {
    cpCmsTags(language: $language) {
      tags {
        _id
        name
        slug
        colorCode
      }
    }
  }
`;

export const GET_HEADER_MENU = gql`
  query CpHeaderMenu($language: String) {
    cpMenus(language: $language, kind: "header") {
      _id
      label
      url
      order
      target
    }
  }
`;

export const GET_FOOTER_MENU = gql`
  query CpFooterMenu($language: String) {
    cpMenus(language: $language, kind: "footer") {
      _id
      label
      url
      order
      target
    }
  }
`;
