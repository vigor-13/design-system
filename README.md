# 디자인 시스템

Brad Frost의 디자인 시스템을 구현해보는 프로젝트다.

- 결과물 스토리북: [링크](https://6593e7d1cb37f48bdc252696-bvopxmyiof.chromatic.com/?path=/docs/introduction--docs)
- 시스템 이론 정리: [링크](https://www.vigorously.xyz/posts/design-system-ecosystem/)
- 디자인 시스템 레러펀스: [링크](https://bradfrost.com/blog/)

## 기술 스택

- PNPM
- Turborepo
- Typescript
- React
- Vite
- Storybook
- Style Dictionary
- StyleX

## 패키지 구조

![](https://vigor-13-temp.s3.ap-northeast-2.amazonaws.com/design-system-excalidraw.png)

- 컴포넌트 빌드하기

```bash
pnpm build:ui
```

- vite 예제 프로젝트 실행 - http://localhost:5173

```bash
pnpm dev:ui-example
```

- 디자인 시스템 스토리북 실행 - http://localhost:6006

```bash
pnpm dev:ui-docs
```
