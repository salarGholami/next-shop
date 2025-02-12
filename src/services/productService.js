import http from "./httpService";

export function getProducts(queryString, cookies) {
  return http
    .get(`/product/list?${queryString}`, {
      headers: { Cookie: cookies },
    })
    .then(({ data }) => data.data);
}

export function getOneProdcutBySlug(slug) {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}

export function likeProduct(id) {
  return http.post(`/product/like/${id}`).then(({ data }) => data.data);
}
