# 프론트엔드 성능 최적화 가이드 학습

## 프론트엔드 성능 최적화 가이드 - 유동균 지음(인사이트)
위 제목의 책을 읽으며 학습한 내용을 정리한 문서이다.  
제공한 소스코드에서 책의 가이드에 따라 성능 최적화를 진행하며 학습하였다.

각 lecture 별로 원 소스코드의 리포지토리는 다음과 같다. 
- https://github.com/performance-lecture/lecture-1
- https://github.com/performance-lecture/lecture-2
- https://github.com/performance-lecture/lecture-3
- https://github.com/performance-lecture/lecture-4

## lecture-1
- 컴포넌트 로드 최적화
  - 각 레이지 컴포넌트 적용함으로써 디테일 컴포넌트는 진입했을 때 로드되게 수정.
- 특수문자 제거 함수 최적화
  - 정규표현식 이용.
- 이미지 최적화
  - 웹 이미지 로드할 때 크기 조정해서 가져오게 수정.

## lecture-2
- 애니메이션 최적화
  - transform을 통해 GPU 활용되게 변경.
- 모달(레이지 컴포넌트) 최적화.
  - mouse enter시에 떙겨오게(주석함).
  - mount 되었을 때 modal 가져오게 추가.

## lecture-3
- 폰트 최적화
  - subset font
  - data uri scheme
  - woff, woff2
- 비디오 최적화
  - webm
  - 사이즈 조절
- 이미지 최적화
  - webp
  - 사이즈 조절
- 캐시
  - js, css, webp 캐시
  - html은 no-cache
  - 그 외는 캐시 x(no-store)
- 불필요한 css 제거
  - purgecss로 제거.

## lecture-4
- 모달 이미지 최적화
  - 한 번 계산된 bg-color는 메모이제이션
  - bg-color 계산시에는 이미지 작은 걸로 계산.
- 리덕스 최적화
  - 리덕스가 객체를 바라봄으로써 현재 화면(컴포넌트)과 상관없는 값이 바뀌어 리렌더링이 자주 일어나는 현상 수정.
- 이미지 최적화
  - react-lazyload 라이브러리를 통한 레이지 로딩 적용.
