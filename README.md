## Application 환경 

<img alt="TypeScript" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/> &emsp;
<img alt="Cypress" src ="https://img.shields.io/badge/Cypress-17202C.svg?&style=for-the-badge&logo=Cypress&logoColor=white"/> &emsp;

Node Version
- v16.10.0

TypeScript Compiler
- tsc

HTML Serving
- http-serve

E2E Test
- Cypress


## Application 실행
Application Build 

`npm run build`

Application Run 

`npm run start`

Application Test 

`npm run e2e 
or
npm run e2e:open`

`npm run build -> npm run start -> npm run e2e or npm run e2e:open`

![image](https://user-images.githubusercontent.com/65607601/159151522-3d619b37-6570-44f3-b6b0-ccd61fe56ae0.png)

## 추가 구현 사항

### 마우스를 사용한 아이템 선택 기능
- 사용자는 키보드의 위, 아래 방향키뿐만 아닌 마우스를 사용해서도 어떤 아이템을 선택하고 있는지 
- 방향키 뿐만 아닌, 마우스를 이용해서도 현재 선택된 아이템이 무엇인지 나타내는 기능이 있어야 사용자 입장에서 명확하게 현재 선택된 아이템이 무엇인지 파악하기 쉽다고 판단
- 개발 초기 단계에서 단순 css hover 효과를 주어 표현하였으나, 키보드 이벤트와 css hover 효과가 함께 동작하여 선택된 아이템이 복수로 표시되는 문제에 직면함.
- css hover 효과를 삭제하고 MouseMove, MouseLeave 이벤트를 사용, 특정 상태 값을 이용하여 MouseMove = li 태그 MouseLeave = ul 태그로 각각 이벤트를 등록하여 문제를 해결함.
- section 태그 내의 아이템은 키보드와 마우스 2가지를 사용하여 현재 어느 아이템을 선택하고 있는지 사용자에게 명확하게 전달할 수 있게 됨.

![화면-기록-2022-03-20-오후-3 41 14](https://user-images.githubusercontent.com/65607601/159151349-d7de04da-5cf3-49e0-b3ca-89f0cf61391d.gif)
