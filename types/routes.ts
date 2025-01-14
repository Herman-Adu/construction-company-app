export enum Route {
  HOME = "/",
  ABOUT = "/about",
  SERVICES = "/services",
  GENERAL_CONTRACTING = "/services/general-contracting",
  RENOVATION_AND_RESTORATION = "/services/renovation-and-restoration",
  MONOLITHIC_CONSTRUCTION = "/services/monolithic-construction",
  PROJECTS = "/projects",
  PROJECT = "/project/:slug",
  LATEST_NEWS = "/news",
  ARTICLE = "/news/:slug",
  CONTACT = "/contact",
}

export enum SearchParams {
  YEAR = "year",
  LOCATION = "location",
  PAGE = "page",
  PER_PAGE = "per_page",
  CATEGORY = "category",
}
