# NCDinos
NC 다이노스 웹 홈페이지


## 기획의도

- NC 다이노스가 2025년 많은 야구 전문가들이 하위권으로 예상을 하였고, 실제 시즌 초반에는 어려움(NC 구장 사고, 2달간 원정, 주축 선수 부상 등)을 겪으며 하위권에 있었으나, 후에 막판 3.5%의 가을야구 진출확률을 뚫고 가을야구를 하게 되었습니다. 마침 NC 공식 홈페이지를 통해 많은 소식들을 알 수 있게 되어서 이 기회에 웹으로 구현해보고자 했습니다. 구현은 실제 NC 다이노스 공식 홈페이지를 참고하였습니다.

## 웹 페이지 동작
### 메인 페이지 화면<br>
  <img width="886" height="846" alt="image" src="https://github.com/user-attachments/assets/cbe5514c-eff7-4569-9c08-98c6bff55cbe" />

### 메뉴 UI 활용<br>
  <img width="852" height="80" alt="image" src="https://github.com/user-attachments/assets/c5a18242-38eb-46cc-bdd7-5a6ed6797e6a" />
  
### 구단소개<br>
  <img width="620" height="610" alt="image" src="https://github.com/user-attachments/assets/cc97cf34-e3d8-4a87-b8c5-c417fe21c6de" />
  
### 기록실<br>
  <img width="622" height="517" alt="image" src="https://github.com/user-attachments/assets/a6c7b969-d5a6-487d-8db2-c77db3e1fd35" />
  
### 선수단<br>
  <img width="602" height="652" alt="image" src="https://github.com/user-attachments/assets/7ba743a9-5f92-47cb-936c-e79798967bc7" />
  
### 구장/시설안내<br>
  <img width="592" height="661" alt="image" src="https://github.com/user-attachments/assets/8015009c-e2df-4afc-9d69-b9a06b2ff4e6" />
  <img width="525" height="585" alt="image" src="https://github.com/user-attachments/assets/b8aa3689-3cb4-4e58-bf81-fc992b57e1c6" />

- API 활용
  <img width="937" height="577" alt="image" src="https://github.com/user-attachments/assets/91d2cd37-da66-46b6-a007-72e6fed128ee" />
  
- 반응형 웹 기술
  <img width="501" height="687" alt="image" src="https://github.com/user-attachments/assets/b87cd639-9666-452e-9b68-65ce5720c5c0" />
  <img width="502" height="728" alt="image" src="https://github.com/user-attachments/assets/ae870efd-5e27-4b7f-af6a-af738c4f4183" />
  
- 폼 입력 구현
- form + form validation
  <img width="1007" height="302" alt="image" src="https://github.com/user-attachments/assets/8c0111a2-97e4-4276-8ede-eacbb821597c" />
  
## 적용한 기술들

## 개발자 도구

## 겪었던 기술적인 문제들, 해결한 에피소드

- API 활용 관련
  - 기록관련
    - 기록들을 정리하기 위해서 nc 다이노스나 kbo 기록 관련 api를 가져오려고 했으나, 접근 제한이 걸려서 가져올 수가 없었다. 그래서 이부분은 직접 수작업으로 수집하고 입력했다.
  - 뉴스 관련
    - 포스트 시즌 관련해서 뉴스 api 키를 가져오려고 했는데, 관련 api는 접근 제한이 있거나, 관련 정보를 필터링하는 기능이 없거나, 여러가지 제약들로 인해서 뉴스 api키를 가져올 수 없었다. 그래서 해당 페이지는 nc 다이노스 공식 홈페이지 포토로 연결하도록 했다.

- 이미지 관련
nc 다이노스 공식 홈페이지를 참고하다 보니 이미지나 외적인 요소들이 nc 다이노스 공식 홈페이지로 링크를 걸어서 가져올려고 했으나, 이미지 역시도 접근제한을 걸어서 가져올 수가 없었다. 그래서 이미지는 가져올 수 있는 부분은 가져왔지만, 안되는 부분은 캡쳐를 해서 가져왔다.
