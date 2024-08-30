const ACCESS_TOKEN = "ACCESS_TOKEN";
export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  // 로컬 스토리지에서 ACCESS TOKEN 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  // 쿼리 문자열을 생성하는 함수
  const buildQueryString = (params) => {
    return Object.keys(params)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
      .join('&');
  };

  let options = {
    headers: headers,
    url: process.env.REACT_APP_URL+api,
    method: method,
    // credentials: 'include',
    body: method !== 'GET' ? JSON.stringify(request) : null,
  };

  // GET 요청인 경우 쿼리 문자열을 URL에 추가
  if (method === 'GET' && request) {
    options.url += '?' + buildQueryString(request);
  }

  //비동기통신: axios, ajax, fetch, promise...
  return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => {
        console.log(json);
        if (!response.ok) {
          // response.ok가 true이면 정상적인 리스폰스를 받은것, 아니면 에러 리스폰스를 받은것.
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((error) => {
      // 추가된 부분
      console.log(error);
      if (error.status === undefined || error.status === 403) {
       // window.location.href = "/login"; // redirect
      }
      return Promise.reject(error);
    });
}



export function signout() {
  localStorage.setItem(ACCESS_TOKEN, null);
  window.location.href = "/loginId";

}


