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
  let options = {
    headers: headers,
    url: api,
    method: method,
    // credentials: 'include',
  };
  //조회는 요청 data가 없음, 입력과 수정시에는 보내는 data있음
  if (request) {
    // GET method
    options.body = JSON.stringify(request);
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
      console.log(error.status);
      if (error.status === undefined || error.status === 403) {
       // window.location.href = "/login"; // redirect
      }
      return Promise.reject(error);
    });
}
export function signin(userDTO) {
  
  console.log(userDTO);
  return call("http://122.128.54.136:20000/api/v1/auth/login/normal", "POST", userDTO).then(
    (response) => {
      console.log(response);
      if (response.accessToken) {
        // 로컬 스토리지에 토큰 저장
        localStorage.setItem("loginUser", response.userType);
        localStorage.setItem("userNo", response.userNo);
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        // token이 존재하는 경우 Todo 화면으로 리디렉트
        if(response.userType === "PROTECTOR"){
          window.location.href = "/nokmain";
        }else{
          window.location.href = "/main";
        }
        
      }
    }
  );
}
export function signout() {
  localStorage.setItem(ACCESS_TOKEN, null);
  window.location.href = "/loginId";
}