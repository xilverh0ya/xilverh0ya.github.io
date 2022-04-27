---
title: "[Markdown Basic Sytax]"
categories:
  - Markdown
tags:
  - markdown
  - syntax
#   - blog
#   - favicon
#   - disqus
#   - google analytics
toc: true
toc_sticky: true
toc_label: "Markdown Basic Syntax"
toc_icon: "bookmark"
---

<br>

GitHub에서 README 파일을 작성할 때나, 블로그에 포스팅을 하거나, 간단한 문서를 만들 때 가볍게 사용하는 문서작성 용도로 자주 사용된다. 그래서 오늘은 이 마크다운 언어에 대해서 알아보려고 한다.

## 0. 마크다운이란? 

![mdLogo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/300px-Markdown-mark.svg.png)

<br>

- 일반 텍스트 기반의 경량 마크업 언어
- 일반 텍스트로 서식이 있는 문서를 작성하는데 사용
- 일반 마크업 언어에 비해 문법이 쉽고 간단
- HTML, 리치텍스트(RTF)등 서식 문서로 변환이 용이
  - 응용 소프트웨어와 함께 배포되는 README 파일이나 온라인 게시물 등에 쓰임

### 0-1. 마크다운 에디터

- 마크다운 에디터는 메모장이나 아무 에디터를 사용해도 무방
- 단, 미리보기 기능에 따라 사용성에서 큰 차이
- 따라서 미리보기 기능을 제공하는 에디터 사용 추천(대부분의 IDE에서 (기본 or 확장기능으로) 제공하고 있기는 함.)
  - ex) VS Code
  - 미리보기 웹사이트[(Make a README)](https://www.makeareadme.com/)

## 1. 문법(Syntax)

- 제목 : title
  - #을 1~6개 사용하여 크기 조절(<H1> ~ <H6> 지원)
  - HR(Horizontal Rule, 수평선 구분자)와 결합해서 사용 가능

  ```
  # 제목1 - H1
  ## 제목2 - H2
  ### 제목3 - H3
  #### 제목4 - H4
  ##### 제목5 = H5
  ###### 제목6 - H6

  // HR(Horizontal Rule, 수평선) 구분자와 결합해서 사용
  제목 텍스트 1
  ___
  ```

  # 제목1 - H1
  ## 제목2 - H2
  ### 제목3 - H3
  #### 제목4 - H4
  ##### 제목5 = H5
  ###### 제목6 - H6
  <br>
  # 제목 텍스트 1  
  ___

- 줄바꿈 : Line Breaks
  - 마크다운 문법에서 엔터를 써도 개행이 되지 않음
    - 엔터키 2번 : 단락 구분
  - '  ' : 공백 2번 입력 -> 줄바꿈(개행
  - <br> || <br/> : Tag로도 가능

  ```
  // 공백 2개 입력 X
  안녕하세요.
  이은호, 개발자입니다.

  // 공백 2개 입력
  안녕하세요.  
  이은호, 개발자입니다.

  // <br>태그
  안녕하세요.<br>
  이은호, 개발자입니다.
  ```

  안녕하세요.
  이은호, 개발자입니다.

  안녕하세요.  
  이은호, 개발자입니다.

  안녕하세요.<br>
  이은호, 개발자입니다.


- 인용문 : BlockQuote
  - 블럭인용문자('>') 사용

  ```
  > 첫번째 블록
  >> 두번째 블록
  >>> 세번째 블록
  ```

  > 첫번째 블록
  >> 두번째 블록
  >>> 세번쨰 블록
  <br>

  - 블록 안에 다른 마크다운 요소를 넣을 수 있음

  ```
  > 첫번째 블록
  > 1. 두번쨰 블록
  > + 세번째 블록
  ```

  > 첫번째 블록
  > 1. 두번쨰 블록
  > + 세번째 블록
  <br>

- 목록 : List
  - 순서있는 목록 : 숫자와 마침표 사용

  ```
  // 1. 2. 3. 이런식으로 해도 되지만, 순서대로 번호를 매겨서 표시됨.
  1. 첫번째 아이템
    1. 하위 아이템
    4. 하위 아이템
  1. 두번째 아이템
  2. 세번쨰 아이템
  ```

  1. 첫번째 아이템
    1. 하위 아이템
    4. 하위 아이템
  1. 두번째 아이템
  2. 세번쨰 아이템

  - 순서없는 목록 : (*, - , +) 사용, 혼합가능

  ```
  + 첫번째 아이템
    - 1-1 아이템
    - 1-2 아이템
    - 1-3 아이템
  + 두번쨰 아이템
    * 2-1 아이템
    * 2-2 아이템
  + 세번쨰 아이템
    + 3-1 아이템
      + 3-1-1 아이템
    + 3-2 아이템
  ```

  + 첫번째 아이템
    - 1-1 아이템
    - 1-2 아이템
    - 1-3 아이템
  + 두번쨰 아이템
    * 2-1 아이템
    * 2-2 아이템
  + 세번쨰 아이템
    + 3-1 아이템
      + 3-1-1 아이템
    + 3-2 아이템

  <br>

- 강조(글씨 꾸미기) : Emphasis
  - 볼드, 이텔릭, 밑줄, 취소선 등 이용가능

  ```
  *single asterisks 이텔릭체*
  _single underscores 이텔릭체_
  **double asterisks 볼드체**
  __double underscores 볼드체__
  ***tripple underscores 볼드+이텔릭체***
  ___tripple underscores 볼드+이텔릭체___
  ~~cancelline 취소선~~
  **~~bold cancelline 볼드+취소선~~**
  <u>underline - 밑줄</u>
  ```

  *single asterisks 이텔릭체*  
  _single underscores 이텔릭체_  
  **double asterisks 볼드체**  
  __double underscores 볼드체__  
  ***tripple underscores 볼드+이텔릭체***  
  ___tripple underscores 볼드+이텔릭체___  
  ~~cancelline 취소선~~  
  **~~bold cancelline 볼드+취소선~~**  
  <u>underline - 밑줄</u>  

  <br>

- 구분선 : Contour
  - 수평선(Horizontal Rule) 사용법

  ```
  구분선1
  - - -
  // --- : 제목 문법과 중복되므로 주의!

  구분선1-1
  ---

  구분선1-2
  ------------------------------

  구분선2
  ***

  구분선2-1
  * * *

  구분선2-2
  ************************************

  구분선3
  ___
  ```

  구분선1
  - - -

  구분선1-1
  ---  

  구분선1-2
  ---------------------------------------

  <br>

  구분선2
  ***  

  구분선2-1
  * * *

  구분선2-2  
  *****  

  <br>

  구분선3  
  ___

  <br>

- 코드 : Code
  - 인라인(inline) 코드
  `<img>` 태그를 사용하면 본문에 이미지를 삽입할 수 있습니다.
  - 블록(block) 코드

```markdown

    ```bash
    $ git push origin master
    ```

    ```python
    print("hello world!")
    ```

    ```java
    public static void main(String[] args){
      System.out.println("Hello, world");
    }
    ```

```

  ```bash
  $ git push origin master
  ```

  ```python
  print("hello world!")
  ```

  ```java
  public static void main(String[] args){
    System.out.println("Hello, world");
  }
  ```

  <br>

- 표 : Table
  - 본문에 테이블 삽입

  ```
  |Column1(Left[Default])|Column2(Center)|Column3(Right)|
  |---|:---:|---:| // 표를 정렬하는 방법
  |이은호|개발자|ML/DL|
  |xilver|Data Scientist|CV, NLP|
  |제|목표 도메인은|컴퓨터 비젼과 자연어 처리입니다.|
  |My|target Domain is|CV & NLP|
  ```

  |Column1(Left**Default**)|Column2(Center)|Column3(Right)|
  |---|:---:|---:|
  |이은호|개발자|ML/DL|
  |xilver|Data Scientist|CV, NLP|
  |제|목표 도메인은|컴퓨터 비젼과 자연어 처리입니다.|
  |My|target Domain is|CV & NLP|

  <br>

- 링크 : Link
  - 문서 작성 시, 특정 사이트를 링크할 때 사용

  ```
  // [Title](link) : 일반적으로 사용되는 형식
  [My GitHub](https://github.com/xilverh0ya)

  // <link Address> : 자동 링크 사용
  <https://github.com/xilverh0ya>

  // [link keyword][id] : 참조 링크 사용
  // [id] : URL "Optional Title here
  Link : [Github][My Github Link]
  [My Github Link]: https://github.com/xilverh0ya "Go to xilve's Github"
  ```

  [My GitHub](https://github.com/xilverh0ya, "Go to my Github")

  <https://github.com/xilverh0ya>

  Link : [Github][githubLink]
  [githubLink]: https://github.com/xilverh0ya "Go to xilver's Github"
  (이거 왜 안되징...)

- 이미지 삽입 : Image
  - 본문에 이미지를 삽입
  - 사이즈 조정 및 정렬은 HTML <img> Tag 사용

  ```
  ![TEXT](https://imageurl)
  ![TEXT](./로컬이미지경로.확장자 "이미지설명")
  ![TEXT](data:image/svg+xml;base64,이미지데이터)

  // 참조링크를 이용한 이미지 삽입
  ![TEXT][ClassE]
  [ClassE](https://imageurl "E클래스 이미지")

  // 이미지에 링크 걸기
  ![TEXT](https://imageurl, "이미지설명")(LinkURL)

  // HTML <img> Tag 사용, 크기 및 정렬 가능
  <img src="https://cdn.eyesmag.com/content/uploads/sliderImages/2021/02/24/the-new-mercedes-benz-c-class-2021-01-fcc19468-f66c-467a-870f-dc1c7aa29e84.jpg" width="200px">

  <p align="center"><img src="https://www.motorgraph.com/news/photo/202102/27134_86118_4323.jpg" width="400px"></p>
  ```

  <img src="https://cdn.eyesmag.com/content/uploads/sliderImages/2021/02/24/the-new-mercedes-benz-c-class-2021-01-fcc19468-f66c-467a-870f-dc1c7aa29e84.jpg" width="400px">

  <p align="center"><img src="https://www.motorgraph.com/news/photo/202102/27134_86118_4323.jpg" width="400px"></p>


## 02. 장단점
- 장점
  - 문법이 쉽고 직관적
  - 지원 가능한 플랫폼과 프로그램이 다양
  - 다양한 형태로 변환 가능
  - Text 형식으로 형상관리를 통한 변경이력관리가 용이
  - 별도 도구 없이 편집가능
  - Text File이라서 용량이 적음  

- 단점
  - 아직까지 표준이 존재 X
  - Tool/Viewer에 따라 경과물이 다르게 출력

# [참고 사이트](https://www.psjco.com/72)