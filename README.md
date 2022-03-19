# myinput
input repo

## Application 환경 & 실행
Node Version
- v16.10.0

Application Build 

`npm run build`

Application Run 

`npm run start`

Application Test 

`npm run e2e 
or
npm run e2e:open`


## 추가 구현 사항

### 마우스를 사용한 아이템 선택 기능
- 방향키 뿐만 아닌, 마우스를 이용해서도 현재 선택된 아이템이 무엇인지 나타내는 기능이 있어야 사용자 입장에서 명확하게 현재 선택된 아이템이 무엇인지 파악하기 쉽다고 판단
- 개발 초기 단계에서 단순 css hover 효과를 주어 표현하였으나, 키보드 이벤트와 css hover 효과가 함께 동작하여 선택된 아이템이 복수로 표시되는 문제에 직면함.
- css hover 효과를 삭제하고 MouseMove, MouseLeave 이벤트를 사용, 특정 상태 값을 이용하여 MouseMove = li 태그 MouseLeave = ul 태그로 각각 이벤트를 등록하여 문제를 해결함.
- section 태그 내의 아이템은 키보드와 마우스 2가지를 사용하여 현재 어느 아이템을 선택하고 있는지 사용자에게 명확하게 전달할 수 있게 됨.
