import HelloPage from '../pages/HelloPage';

export const Router = () => {
  return <HelloPage />;
};
// 내가 <- 앞으로 짜야할 코드는, apis, components, utils, pages 코드임. 여기서 추가로 라우터 api마다 추가해주고.
//이 코드들의 각각의 역할을 한 번 보자고... 일단. 
// apis : 도메인 적어주고 어떤 형식으로 api 요청 보낼지를 정하는거라 그렇게 어렵지 않음
// components : 말 그대로 미리 만들어 놓고 여러군데에서 사용하는 코드, 헤더나 유저 같은게 있는듯
// utils : 그냥 별거 아닌 로직들 ex) 날짜 계산 함수 이런거 모아놓은 곳
// pages : 우리가 제대로 짜야할 코드
 
//필수만 본다면..

// apis : 도메인 적어주고 어떤 형식으로 api 요청 보낼지를 정하는거라 그렇게 어렵지 않음
// components : 말 그대로 미리 만들어 놓고 여러군데에서 사용하는 코드, 헤더나 유저 같은게 있는듯
// pages : 우리가 제대로 짜야할 코드
 