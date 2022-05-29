# FLIP : 나만의 문제집 프로젝트

## Description

<b>✔️ FLIP : 나만의 문제집 프로젝트 Frontend Repository</b><br>
✔️ 나만의 문제집을 생성하고 단어장을 추가해 퀴즈를 푸는 학습 프로젝트<br>
✔️ 개발 크루에서 프로젝트를 완성한 후, 디벨롭 중입니다.<br>
<br>
<b>기존 프로젝트 링크 :</b> https://github.com/MARS-crew/flip_fe_react

##  Tech Stack
<div>
  <img src="https://img.shields.io/badge/Javascript-ffca26?style=flat-square&logo=javascript&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/React-08D5FF?style=flat-square&logo=React&logoColor=white"/></a>&nbsp
   <img src="https://img.shields.io/badge/PostCSS-f55354?style=flat-square&logo=postCSS&logoColor=white"/></a>&nbsp
</div>

##  담당한 기능(Web Front)
- React Hook을 사용한 UI 및 개발
- PostCSS로 컴포넌트별 퍼블리싱
- 문제집, 카드 CRUD API 연동
- Figma를 이용한 전체 페이지 프로토타입 디자인

## 성취 역량
- Github, Figma, Notion 등 협업툴을 적극적으로 활용함(진행상황 관리 및 코드 공유)
- React Hook을 사용해 코드의 재사용 성과 가독성을 높이고, state 관리 및 라이프사이클 API 활용
- PostCSS로 컴포넌트별 퍼블리싱을 담당해 모듈화로 편의성을 높임
- navigate로 페이지 전환시 state를 함께 전달해 자식 컴포넌트로 두지 않아도 props 전달이 용이해짐
- 함수형 API를 사용해 인스턴스를 호출, props 전달의 번거로움을 줄임
- axios와 async & await를 통한 문제집, 카드 CRUD API 비동기 통신

## Directory Structure

``` js
root
└─src // app, index, cookie
  ├─ api // auth, workbooks
  ├─ common // colors
  └─ components // file -> jsx, module.css(PostCSS)
```

## Prerequisites
```bash
npm -> 6.14.13
node -> 14.17.0
yarn -> 1.22.5
```

## Install
```bash
# npm install
$ yarn install
```

## Running the app
```bash
# npm start
$ yarn start
```
