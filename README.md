# Taskify

❗️ 이전 팀 프로젝트를 개선한 개인 프로젝트 입니다. 최대한 클린 코드의 원칙을 따라 만들었으며, FDD 방법을 사용해 명확한 폴더 구조를 만들었습니다.

- [🚀 혼자 만든 사이트](https://taskify-swart-xi.vercel.app/)
- [👨‍👨‍👦‍👦 협업으로 만든 사이트](https://taskify-six-eta.vercel.app/)

## 기술 스택
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SWR](https://img.shields.io/badge/swr-black?style=for-the-badge&logo=swr&logoColor=%23fff&labelColor=%23000)

## 프로젝트 소개
사용자들이 태스크를 생성, 수정, 삭제하며 팀 내에서 진행 상황을 공유할 수 있는 서비스.

## 개선 사항.

- 라이브러리 최소화 및 재사용 가능한 컴포넌트로 페이지 전반적인 리소스를 19% 줄였고, 초기 로딩 속도를 50% 개선
- Form 상태 관리가 힘들기 때문에 React Hook Form의 라이브러리를 분석하여 유사한 DX를 가질 수 있도록 직접 구현
- 공통 컴포넌트들을 Radix UI와 유사하게 만들었고 Compound Pattern으로 Props를 분산시켜 복잡도를 줄였으며 일관성 있는 코드로 개선
- Suspense와 Hydration의 문제로 Suspensive라는 props.children을 사용해 비슷하게 구현 및 로딩 UX 개선
- 에러바운더리로 UI와 다시 시도 버튼으로 UX 개선

## 에러바운더리로 UX 개선

<img width="1625" alt="스크린샷 2024-10-08 오전 12 41 20" src="https://github.com/user-attachments/assets/e0c30b66-ca25-484b-acf8-48a9bd6b2eb6">
<img width="1626" alt="스크린샷 2024-10-08 오전 12 42 08" src="https://github.com/user-attachments/assets/8a66c644-716d-4808-823c-70f778d5ea99">
<img width="1627" alt="스크린샷 2024-10-08 오전 12 40 42" src="https://github.com/user-attachments/assets/aa403317-b9db-4c28-af4e-0866e3237b00">


## 아키텍쳐 비교.

팀 프로젝트에서는 일반적인 폴더 구조로 작업 했었습니다. 프로젝트 자체가 규모가 크지않아 괜찮아 보입니다.
그럼에도 이 폴더 구조는 좋지 않다라고 판단을 하게되었는데 그 이유는 다음과 같습니다.

- 공부하는 사람으로써 큰 규모의 어플리케이션을 만들기 힘들지만 확장성 있는 프로젝트를 생각해 FDD 아키텍쳐를 사용
- Components는 재사용 가능한 폴더지만 막상 재사용 가능한 파일들이 없다. 즉 재사용하는 파일이든, 특정 페이지에 있는 파일이든 Components에서 확인 해야하는 불편함이 리소스 찾는데 비용을 들임
- 계층이 단순화 되어있어, 같은 유형의 파일들이 몰려있다. 파일의 개수가 늘어날수록 찾기가 힘들어지는 문제가 발생

위에 3가지가 가장 큰 문제이지만 가장 중요한 핵심은 **파일의 위치를 찾기 힘들다**라는 단점이 있습니다. 이러한 문제점을 해결하기 위해 FDD(Feature Driven Development)를 사용해 리소스 찾는데 들이는 비용을 줄일 수 있었습니다.

**FDD의 장점.**

- 기능별로 정의되어있어 명확한 폴더 구조를 가진다.
- 기능에 필요한 파일들이 가까이 배치되어있어 쉽게 파일을 찾을 수 있다.
- 프로젝트가 확장 되더라도 기존 기능에 큰 영향을 주지않아 유연하게 대처할 수 있다.

FDD를 사용한다고해서 무조건 장점만 있는건 아닙니다. 간단한 프로젝트에서는 FDD를 사용하면 오히려 폴더가 많아져 더 찾기 힘들어지는 문제가 발생할 수 있습니다.

### 팀 프로젝트 아키텍쳐. as-is

```
├── apis
├── auth
├── components
├── constant
├── hooks
├── lib
├── pages
├── public
├── store
├── styles
├── types
└── util
```

### 개선한 아키텍쳐. to-be

```
config
├── features
│   ├── auth
│   │   ├── components
│   │   ├── hooks
│   │   ├── logic
│   │   └── types
│   └── dashboard
│       ├── components
│       ├── hooks
│       ├── logic
│       └── types
│
├── pages
│   ├── dashboard
│   ├── signin
│   └── signup
│
├── public
│
├── shared
│   ├── @common
│   │   ├── components
│   │   ├── constants
│   │   ├── hooks
│   │   ├── services
│   │   ├── types
│   │   └── utils
│   └── dashboard
│   	├── components
│   	├── hooks
│   	├── services
│   	└── types
└── styles
```

