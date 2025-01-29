import http from "./httpService";

export function getProducts(queryString) {
  return http.get(`/product/list?${queryString}`).then(({ data }) => data.data);
}

export function getOneProdcutBySlug(slug) {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}
