# Redoocks
## useReducer

- useReducer : Reducer function을 다이렉트로 사용할 수 있게 하는 기능
  - Component가 엄청난 수의 state를 가지고 있을 때
  - componet를 좀 더 나아보이게 만들 필요가 있을 때
    - State 변경시 이 state가 굉장히 방대해서 정확하게 뭘 하고 있는지 파악하기 위해 정리정돈 작업을 하는 것
  - useReducer( state, action )
  - action : type을 가져 옴
    - switch 문법
    - action,type => object를 return
    - object는 state를 "대체" 변경(X)

- useReducer : state, dispatch
- useState : state, setState

- dispatch : reducer에 action을 보내 줌(사실 action을 가지고 reducer function을 다시 실행)
  - reducer 실행 : with 현재 state와 action
    - if 일치하는 case : 해당 state Return
    - return된 state는 현재 state "대체"

