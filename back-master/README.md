# DearJ
본 프로젝트는 엘리스 AI 트랙 6기 3차 프로젝트 1팀의 AI 프로젝트 소개입니다.

## 프로젝트 기간
2023년 4월 14일(월) - 2023년 5월 19일(금)

## 프로젝트 소개
### DearJ AI 기반 자기소개서 분석 및 전문가 첨삭 서비스
 - 자연어 AI 모델을 통해 합격/불합격 자기소개서를 학습시켜서 지원자의 자기소개서와 합격자의 자기소개서와 유사도를 분석합니다.
 - 합격 유사도를 확인한 후 전문가에게 피드백 신청을 해서 자기소개서를 첨삭 받을 수 있는 서비스 입니다.
 - AI 분석은 비회원도 분석 가능하지만, 피드백 신청은 회원에게 제공되는 서비스 입니다.

# 서비스 기능
### `User(사용자 관련 기능)`
**:one: 회원가입**

 - 사용자 정보 형식 확인
 - 사용자 정보 DB 저장

<br/>

**:two: 로그인**
 - DB 존재 여부 확인
 - 비밀번호 일치 확인
 - 쿠키로 토큰 값 전달

### `Resume(AI 분석 기능)`
 - 자기소개서 입력 데이터 Flask 서버로 전달
 - AI 분석되는 동안 로딩 페이지로 노출
 - Flask에서 합격 유사도 분석 결과 전달


### `Expert(자기소개서 첨삭 기능)`
 - 자기소개서 데이터 DB 저장
 - 자기소개서 수정, 조회, 삭제
 - comment 여부에 따라 status 변경

### `Comment(전문가 첨삭 기능)`
 - 유저의 자기소개서에 대한 첨삭 댓글 입력
 - 댓글 수정, 삭제

<br/>

# 서비스 관련
## 테스트 계정
### User
 - ID : user@1team.com
 - PW : 1234

### Admin
 - ID : admin@1team.com
 - PW : 1234

## PART
### Front
 - API 명세: https://www.notion.so/elice/FE-271f54b2037846a987fd11c0cfe7300b?pvs=4
 - 와이어 프레임(Figma): https://www.figma.com/file/WxuxZohi9KtnE91hhJeZBv?embed_host=notion&kind=&node-id=0-1&t=kIMl39RKLt3G4orr-0&type=design&viewer=1

### Back
 - 백엔드 API 명세: https://www.notion.so/elice/BE-AI-API-c0617af96d5d477ba483e9d8914d24b1?pvs=4

### AI
 - 상세 내용은 <a href="https://kdt-gitlab.elice.io/ai_track/class_06/ai_project/team01/ai/-/blob/master/README.md">AI Repository</a> 참고

## 기술 스택
  - :heavy_check_mark: **Front-End** : <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=flat-square&logo=figma&logoColor=white">  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white%#5A29E4"> <img src="https://img.shields.io/badge/-emotion-D26AC2?style=flat-square&logo=emotion&logoColor=white"> <img src="https://img.shields.io/badge/Recoil-0078D4?style=flat-square&logo=Recoil&logoColor=white">
  - :heavy_check_mark: **Back-End** : <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=NestJs&logoColor=white"> <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=Swagger&logoColor=white">
  - :heavy_check_mark: **AI** : <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white"> <img src="https://img.shields.io/badge/Flask-000000?style=flat-square&logo=Flask&logoColor=white"> <img src="https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=NumPy&logoColor=white"> <img src="https://img.shields.io/badge/pandas-150458?style=flat-square&logo=pandas&logoColor=white"> <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=PyTorch&logoColor=white"> <img src="https://img.shields.io/badge/scikit-learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white">

## 프로젝트 팀원 및 역할 분담 
| 이름 | 담당 업무 |
  | ------ | ------ |
  | 박준현 | 팀장/백엔드 개발/ AI |
  | 김정우 | 백엔드 파트리더/ 백엔드 개발/ AI |
  | 정성은 | AI 파트리더/ 백엔드 개발/ AI |
  | 김정훈 | 프론트엔드 파트리더/ 프론트엔드 개발/ AI |
  | 최종현 | 프론트엔드 개발/ AI |
  | 주혜은 | 프론트엔드 개발/AI |
