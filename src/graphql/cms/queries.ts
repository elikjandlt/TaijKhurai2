import { gql } from "@apollo/client";

export const CP_PAGES = gql`
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

export const CP_PAGE_DETAIL = gql`
  query CpPageDetail($slug: String!, $language: String) {
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

export const CP_POSTS = gql`
  query CpPosts($language: String, $limit: Int) {
    cpPosts(language: $language, status: published, limit: $limit) {
      _id
      title
      slug
      excerpt
      content
      publishedDate
      featuredImage {
        url
      }
    }
  }
`;

export const CP_POST = gql`
  query CpPost($slug: String!, $language: String) {
    cpPost(slug: $slug, language: $language) {
      _id
      title
      slug
      excerpt
      content
      publishedDate
      featuredImage {
        url
      }
    }
  }
`;

export const CP_MENUS = gql`
  query CpMenus($language: String, $kind: String) {
    cpMenus(language: $language, kind: $kind) {
      _id
      label
      url
      order
    }
  }
`;
