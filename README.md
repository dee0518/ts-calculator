# ts-calculator

<div align="middle">
<image src="./images/calculator.svg">
</div>

타입스크립트의 기본 개념을 익혀보기 위한 계산기 만들기.


## typescript 환경 설정 - local
```npm i typescript```

## tsconfig.json 파일 - local
```npx tsc --init```

## ts -> js 컴파일
tsconfig.json 파일에서 outDir에 설정한 경로에 js파일이 저장된다.
```npx tsc```

뒤에 -w 옵션을 추가하여 .ts파일을 수정하면 바로바로 js파일로 컴파일해준다.
```npx tsc -w```

## ts 파일을 자동으로 실행하고 싶을 경우
아래 pakage를 설치하면 터민러에서 결과를 바로 확인할 수 있다.
```npm i ts-node```
