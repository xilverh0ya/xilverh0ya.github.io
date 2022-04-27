---
title: "[2022) Jump to Python Study 00. Tutorial]"
categories:
  - Python
tags:
  - python
  - basic
  - Tutorial
  # - minimal mistakes
  # - jekyll
  # - blog
  # - favicon
  # - disqus
  # - google analytics
toc: true
toc_sticky: true
toc_label: "Python_tutorial"
toc_icon: "bookmark"
---

<br>

## 0. 교재소개  
<br>

![book](https://image.aladin.co.kr/product/19483/1/cover500/k582635822_1.jpg)  
<br>

지은이 : 박응용  
출판사 : 이지스퍼블리싱

이 책은 파이썬이란 언어를 처음 접해보는 독자들과 프로그래밍을 한 번도 해 본적이 없는 사람들을 대상으로 한다. 프로그래밍을 할 때 사용되는 전문적인 용어들을 알기 쉽게 풀어서 쓰려고 노력하였으며, 파이썬이란 언어의 개별적인 특성만을 강조하지 않고 프로그래밍 전반에 관한 사항을 파이썬이란 언어를 통해 알 수 있도록 알기 쉽게 설명하였다.

파이썬에 대한 기본적인 지식을 알고 있는 사람이라도 이 책은 파이썬 프로그래밍에 대한 흥미를 가질 수 있는 좋은 안내서가 될 것이다. 이 책의 목표는 독자가 파이썬을 통해 프로그래밍에 대한 전반적인 이해를 갖게하는 것이며, 또 파이썬이라는 도구를 이용하여 원하는 프로그램을 쉽고 재미있게 만들 수 있게 하는 것이다.

"점프 투 파이썬" 이나 파이썬에 대한 질문은 최근 오픈한 파이썬 게시판 서비스인 파이보를 활용해 보자.

* 파이보 - [https://pybo.kr](https://pybo.kr)
  
이 책은 [위키독스](https://wikidocs.net/book/1)에도 올라와 있다.
___ 

## 1. 파이썬 설치 방법 (윈도우 기준)
> - [파이썬 공식 홈페이지의 다운로드 페이지](www.python.org/downloads)에서 윈도우용 파이썬 언어 패키지 다운로드
>   - python 3.x로 시작하는 버전 중 가장 최근 버전 다운로드
>   - <img src="/assets/forPost/pythonBasic/jumpToPy/pyDownloadPage.png" height="550px" width="600px">
> - 다운로드 받은 패키지의 인스톨러를 실행 후, 'Install Now' 선택
>   - Add Python 3.x to PATH 반드시 체크
>   - <img src="/assets/forPost/pythonBasic/jumpToPy/pyDownInitial.png" height="550px" width="600px">  
> - 설치 완료 후 [close]를 클릭해서 종료
> - 파이썬이 정상적으로 설치됐는지 확인하는 법
>   - [시작 -> 명령 프롬프트]
>   - <img src="/assets/forPost/pythonBasic/jumpToPy/pyCheck1.png" height="550px" width="600px"> 
>   - 아래 명령어 입력
```bash
$ python
```
>   - <img src="/assets/forPost/pythonBasic/jumpToPy/pyCheck2.png" height="550px" width="600px"> 
>   - 버젼과 >>> 명령어 입력창이 나타나면 설치 성공

___

## 2.파이썬 둘러보기
> - 설치 확인 CMD 화면에서 기초 실습을 해보자.
>   - 사칙연산
```bash
>>>> 1 + 2
3
>>>> 5 - 1
4
>>>> 3 / 2.4
1.25
>>>> 3 * 9
27
```
>     - 곱하기와 나누기는 우리가 일반적으로 알고있는 단어와 다르니 주의하자!
>     - 결과 값이 바로바로 나오는데 이는 **인터프리터**언어의 특징이다.(인터프리터가 무엇인지는 후에 알아보도록 하자.)
>   - 변수에 숫자 대입하고 계산하기
```bash
>>>> a = 1
>>>> b = 2
>>>> a + b
3
```
>     - a에 1을, b에 2를 대입한 후, a + b를 실행하면 3이 결과값으로 출력된다.
>   - 변수에 문자 대입하고 출력하기
```bash
>>>> a = "Python"
>>>> print(a)
Python
>>>> a
Python
```
>     - 대화형 인터프리터 상태에서는 print함수를 따로 쓰지 않아도 변수 이름만 입력해서 a의 값을 출력할 수 있다.
>   - 대화형 인터프리터 종료하는 방법
>     - Ctrl + Z -> Enter
>     - Sys 모듈을 사용
```bash
>>>> import sys
>>>> sys.exit()
$
```  

___

## 3. 파이썬과 에디터
> - 파이썬에서는 기본 에디터인 IDLE를 제공한다.
>   - 실행 방법 : [시작 - Python3.x - IDLE]
>   - IDLE에서는 한줄 한줄 실행이 아닌 여러줄을 한꺼번에 (순차적으로) 실행할 수 있다.
> - 추천 에디터
>   - 비주얼 스튜디오 코드(VS Code) : 거의 모든 언어 지원
>   - 파이참(PyCharm) : 파이썬 전용 에디터
>   - 각 설치 방법 및 활용 방법은 구글링!  

___

## 4. 본격적인 시작에 앞서
> - 파이썬이란?
>   - 귀도 반 로섬(Guido Van Rossum)이 개발한 인터프리터 언어.
>   - 컴퓨터 프로그래밍 교육을 위해 많이 사용하지만, 기업의 실무를 위해서도 많이 사용하는 언어. Ex) 구글
>     - 구글에서 만든 소프트웨어의 50% 이상이 파이썬으로 작성됐다고 한다.
>   - 파이썬 프로그램은 공동 작업과 유지 보수가 매우 쉽고 편하다.
>     - 파이썬의 문법 자체가 사람에게 친화적이라 알아보기 쉽고, 가독성이 매우 좋다. (파이썬 식 프로그래밍을 하라는 말이 있을 정도)
> - 파이썬의 특징
>   - 파이썬은 **'인간다운 언어'**다.
>     - 사람이 생각하는 방식을 그대로 표현
>     - 후에 문법을 배울 수록 느끼게 된다.

```py
if 4 in [ 1, 2, 3, 4 ] : print("4 in Array")
```

```py
만약 4가 [ 1, 2, 3, 4 ] 안에 있다면, '4 in Array'를 출력한다.
```  

> -   
>       - 프로그램을 모르더라도 직관적으로 어떤 뜻인지 알 수 있을 정도로 **사람 친화적**이다.  
>       - 문법이 쉬워서 빠르게 배울 수 있다.
>       - 파이썬은 문법 자체가 아주 쉽고 간결하다.
>       - 문법이 사람의 사고 체계와 매우 닮아 있다.
>   - 무료지만 강력함
>       - 파이썬은 오픈 소스이기 때문에 당연히 무료
>       - 만들고자 하는 프로그램의 대부분을 파이썬으로 만들 수 있음
>       - 시스템 프로그래밍이나 하드웨어 제어같은 복잡하고 반복 연산이 많은 프로그램은 파이썬과 어울리지 않음.
>       - 하지만 파이썬은 이런 약점을 극복할 수 있게 다른 언어로 만든 프로그램을 파이썬 프로그램에 포함시킬 수 있음.
>       - 특히 C와 찰떡궁합
>       - 프로그램의 전반적 뼈대는 파이썬으로 제작, 빠른 실행 속도가 필요한 부분은 C로 제작할 수 있음
>   - 간결하다.
>       - 파이썬은 가장 좋은 방법 1가지만 사용하는 것을 선호.
>       - 다른 사람이 작업한 소스 코드도 한 눈에 들어와 이해하기 쉽기 때문에 공동 작업과 유지 보수에 용이
>       - 파이썬은 줄을 잘 맞추는게 강제된다.
>       - 다른 언어와 달리 단락을 괄호가 아닌 들여쓰기로 구분하기 때문
>       - 파이썬은 줄을 맞추지 않으면 실행되지 않는다.
>       - 따라서 개발자의 습관과 상관없이 가독성 좋은 코드가 나와 공동 작업과 유지 보수에 용이한 것이다.
>       - 누가 작성하던 쉽게 이해할 수 있다는 뜻

```py
#simple.py
languages = [ 'python', 'perl', 'c', 'java' ]

for lang in languages :
    if lang in [ 'python', 'perl' ] :
        print("%6s need interpreter" % lang)
    elif lang in [ 'c', 'java' ] :
        print lang in [ 'c', 'java' ]
    else :
        print("should not reach here")
```

> - 파이썬으로 할 수 있는 일
>   - 시스템 유틸리티 제작
>     - 시스템 유틸리티? : 컴퓨터 사용에 도움을 주는 여러 소프트웨어
>   - GUI 프로그래밍
>     - GUI 프로그래밍을 위한 도구들이 잘 갖춰져있어 GUI 프로그램 개발이 쉽다. Ex) Tkinter(티케이인터)
>   - C/C++와의 결합
>     - 파이썬은 다른 언어와 잘 어울려 결합해서 사용할 수 있기 때문에 접착(Glue)라고 불림
>     - 특히 C/C++과 잘 어울려서 C나 C++로 만든 프로그램을 파이썬에서 사용할 수 있으며, 파이썬 프로그램 역시 C나 C++에서 사용할 수 있다.
>   - 웹 프로그래밍
>   - 수치 연산 프로그래밍
>     - 사실 파이썬 자체가 수치 연산에 적합한 프로그램은 아니지만 C로 만들어진 NumPy라는 수치 연산 모듈을 제공하기 때문에 빠른 연산이 가능하다.
>   - 데이터베이스 프로그래밍
>     - 사이베이스(Sybase), 인포믹스(Infomix), 오라클(Oracle), 마이에스큐엘(MySQL), 포스트그레스큐엘(PostgreSQL) 등의 데이터베이스 접근 도구 제공
>     - 이 외에도 피클(pickle)이라는 파이썬 모듈 제공
>   - 데이터 분석, 사물 인터넷
>     - 판다스(Pandas) 모듈을 사용하여 데이터 분석에 용이하다.
>     - 파이썬을 기반으로하는 라즈베리파이 덕분에 사물 인터넷 분야에서도 활용도가 높다.
>  - 파이썬으로 할 수 없는 일
>     - 시스템과 밀접한 프로그래밍 영역
>       - 운영체제
>       - 엄청난 횟수의 반복과 연산이 필요한 프로그램
>       - 데이터 압축 알고리즘 개발 프로그램
>       - 즉 대단히 빠른 속도를 요구허나 하드웨어를 직접 건드려야 하는 프로그램은 어울리지 않음.
>     - 모바일 프로그래밍
>       - 구글이 파이썬을 애용하지만, 파이썬으로 앱을 개발하기는 아직 어렵다.
> - 컴파일 언어 vs 인터프리터 언어
>   - 컴파일 언어
>     - 컴파일 언어는 프로그래머가 작성한 코드를 컴퓨터가 읽지 못한다.
>     - 그래서 **컴파일러**를 이용해 컴퓨터 언어로 번역
>     - 기계어로 번역한 프로그램을 실행함
>     - 바로 컴퓨터 언어로 번역해서 읽는 속도가 빠르다.
>   - 인터프리터 언어
>     - 앍을 때 바로 인터프리터를 거쳐 한줄씩 실행
>     - 번역하고 읽고의 과정을 반복하여 빠르지 않게 작동
> 
| |인터프리터 언어|컴파일언어|
|:--:|:--:|:--:|
|작동방식|한 줄씩 번역과 실행|한꺼번에 번역 후 실행| 
|속도|느리다|빠르다|

이상으로 파이썬을 공부하기 전 튜토리얼을 마친다.