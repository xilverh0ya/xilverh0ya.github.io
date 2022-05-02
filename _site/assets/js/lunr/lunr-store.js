var store = [{
        "title": "[(작성중)Git test]",
        "excerpt":"    Test 2   for git   $git commit -m \"Initial Commit\"  ","categories": ["Git & Github"],
        "tags": ["git","github","tutorial"],
        "url": "http://localhost:4000/git%20&%20github/gitTestPost/",
        "teaser": null
      },{
        "title": "[Markdown Basic Sytax]",
        "excerpt":"    GitHub에서 README 파일을 작성할 때나, 블로그에 포스팅을 하거나, 간단한 문서를 만들 때 가볍게 사용하는 문서작성 용도로 자주 사용된다. 그래서 오늘은 이 마크다운 언어에 대해서 알아보려고 한다.   0. 마크다운이란?             일반 텍스트 기반의 경량 마크업 언어   일반 텍스트로 서식이 있는 문서를 작성하는데 사용   일반 마크업 언어에 비해 문법이 쉽고 간단   HTML, 리치텍스트(RTF)등 서식 문서로 변환이 용이            응용 소프트웨어와 함께 배포되는 README 파일이나 온라인 게시물 등에 쓰임           0-1. 마크다운 에디터      마크다운 에디터는 메모장이나 아무 에디터를 사용해도 무방   단, 미리보기 기능에 따라 사용성에서 큰 차이   따라서 미리보기 기능을 제공하는 에디터 사용 추천(대부분의 IDE에서 (기본 or 확장기능으로) 제공하고 있기는 함.)            ex) VS Code       미리보기 웹사이트(Make a README)           1. 문법(Syntax)      제목 : title            #을 1~6개 사용하여 크기 조절(&lt;H1&gt; ~ &lt;H6&gt; 지원)       HR(Horizontal Rule, 수평선 구분자)와 결합해서 사용 가능           # 제목1 - H1 ## 제목2 - H2 ### 제목3 - H3 #### 제목4 - H4 ##### 제목5 = H5 ###### 제목6 - H6  // HR(Horizontal Rule, 수평선) 구분자와 결합해서 사용 제목 텍스트 1 ___           제목1 - H1      제목2 - H2      제목3 - H3      제목4 - H4      제목5 = H5      제목6 - H6             제목 텍스트 1            줄바꿈 : Line Breaks            마크다운 문법에서 엔터를 써도 개행이 되지 않음                    엔터키 2번 : 단락 구분                       ’  ‘ : 공백 2번 입력 -&gt; 줄바꿈(개행                                                                                         : Tag로도 가능                                                   // 공백 2개 입력 X 안녕하세요. 이은호, 개발자입니다.  // 공백 2개 입력 안녕하세요.   이은호, 개발자입니다.  // &lt;br&gt;태그 안녕하세요.&lt;br&gt; 이은호, 개발자입니다.           안녕하세요. 이은호, 개발자입니다.       안녕하세요.  이은호, 개발자입니다.       안녕하세요.  이은호, 개발자입니다.       인용문 : BlockQuote            블럭인용문자(‘&gt;’) 사용           &gt; 첫번째 블록 &gt;&gt; 두번째 블록 &gt;&gt;&gt; 세번째 블록                  첫번째 블록                 두번째 블록                     세번쨰 블록                                     블록 안에 다른 마크다운 요소를 넣을 수 있음           &gt; 첫번째 블록 &gt; 1. 두번쨰 블록 &gt; + 세번째 블록                  첫번째 블록                 두번쨰 블록                        세번째 블록                                        목록 : List            순서있는 목록 : 숫자와 마침표 사용           // 1. 2. 3. 이런식으로 해도 되지만, 순서대로 번호를 매겨서 표시됨. 1. 첫번째 아이템   1. 하위 아이템   4. 하위 아이템 1. 두번째 아이템 2. 세번쨰 아이템                  첫번째 아이템       하위 아이템       하위 아이템       두번째 아이템       세번쨰 아이템                  순서없는 목록 : (*, - , +) 사용, 혼합가능           + 첫번째 아이템   - 1-1 아이템   - 1-2 아이템   - 1-3 아이템 + 두번쨰 아이템   * 2-1 아이템   * 2-2 아이템 + 세번쨰 아이템   + 3-1 아이템     + 3-1-1 아이템   + 3-2 아이템                  첫번째 아이템                    1-1 아이템           1-2 아이템           1-3 아이템                       두번쨰 아이템                    2-1 아이템           2-2 아이템                       세번쨰 아이템                    3-1 아이템                            3-1-1 아이템                                   3-2 아이템                                   강조(글씨 꾸미기) : Emphasis            볼드, 이텔릭, 밑줄, 취소선 등 이용가능           *single asterisks 이텔릭체* _single underscores 이텔릭체_ **double asterisks 볼드체** __double underscores 볼드체__ ***tripple underscores 볼드+이텔릭체*** ___tripple underscores 볼드+이텔릭체___ ~~cancelline 취소선~~ **~~bold cancelline 볼드+취소선~~** &lt;u&gt;underline - 밑줄&lt;/u&gt;           single asterisks 이텔릭체  single underscores 이텔릭체  double asterisks 볼드체  double underscores 볼드체  tripple underscores 볼드+이텔릭체  tripple underscores 볼드+이텔릭체  cancelline 취소선  bold cancelline 볼드+취소선  underline - 밑줄               구분선 : Contour            수평선(Horizontal Rule) 사용법           구분선1 - - - // --- : 제목 문법과 중복되므로 주의!  구분선1-1 ---  구분선1-2 ------------------------------  구분선2 ***  구분선2-1 * * *  구분선2-2 ************************************  구분선3 ___           구분선1            구분선1-1       구분선1-2               구분선2 ***       구분선2-1            구분선2-2  *****               구분선3  ___               코드 : Code            인라인(inline) 코드 &lt;img&gt; 태그를 사용하면 본문에 이미지를 삽입할 수 있습니다.       블록(block) 코드                ```bash     $ git push origin master     ```      ```python     print(\"hello world!\")     ```      ```java     public static void main(String[] args){       System.out.println(\"Hello, world\");     }     ```      $ git push origin master     print(\"hello world!\")     public static void main(String[] args){     System.out.println(\"Hello, world\");   }          표 : Table            본문에 테이블 삽입           |Column1(Left[Default])|Column2(Center)|Column3(Right)| |---|:---:|---:| // 표를 정렬하는 방법 |이은호|개발자|ML/DL| |xilver|Data Scientist|CV, NLP| |제|목표 도메인은|컴퓨터 비젼과 자연어 처리입니다.| |My|target Domain is|CV &amp; NLP|                                      Column1(LeftDefault)           Column2(Center)           Column3(Right)                                           이은호           개발자           ML/DL                             xilver           Data Scientist           CV, NLP                             제           목표 도메인은           컴퓨터 비젼과 자연어 처리입니다.                             My           target Domain is           CV &amp; NLP                                   링크 : Link            문서 작성 시, 특정 사이트를 링크할 때 사용           // [Title](link) : 일반적으로 사용되는 형식 [My GitHub](https://github.com/xilverh0ya)  // &lt;link Address&gt; : 자동 링크 사용 &lt;https://github.com/xilverh0ya&gt;  // [link keyword][id] : 참조 링크 사용 // [id] : URL \"Optional Title here Link : [Github][My Github Link] [My Github Link]: https://github.com/xilverh0ya \"Go to xilve's Github\"           My GitHub       https://github.com/xilverh0ya       Link : [Github][githubLink] [githubLink]: https://github.com/xilverh0ya “Go to xilver’s Github” (이거 왜 안되징…)       이미지 삽입 : Image            본문에 이미지를 삽입       사이즈 조정 및 정렬은 HTML  Tag 사용           ![TEXT](https://imageurl) ![TEXT](./로컬이미지경로.확장자 \"이미지설명\") ![TEXT](data:image/svg+xml;base64,이미지데이터)  // 참조링크를 이용한 이미지 삽입 ![TEXT][ClassE] [ClassE](https://imageurl \"E클래스 이미지\")  // 이미지에 링크 걸기 ![TEXT](https://imageurl, \"이미지설명\")(LinkURL)  // HTML &lt;img&gt; Tag 사용, 크기 및 정렬 가능 &lt;img src=\"https://cdn.eyesmag.com/content/uploads/sliderImages/2021/02/24/the-new-mercedes-benz-c-class-2021-01-fcc19468-f66c-467a-870f-dc1c7aa29e84.jpg\" width=\"200px\"&gt;  &lt;p align=\"center\"&gt;&lt;img src=\"https://www.motorgraph.com/news/photo/202102/27134_86118_4323.jpg\" width=\"400px\"&gt;&lt;/p&gt;                         2. 장단점     장점            문법이 쉽고 직관적       지원 가능한 플랫폼과 프로그램이 다양       다양한 형태로 변환 가능       Text 형식으로 형상관리를 통한 변경이력관리가 용이       별도 도구 없이 편집가능       Text File이라서 용량이 적음           단점            아직까지 표준이 존재 X       Tool/Viewer에 따라 경과물이 다르게 출력           참고 사이트  ","categories": ["Markdown"],
        "tags": ["markdown","syntax"],
        "url": "http://localhost:4000/markdown/aboutMarkDown/",
        "teaser": null
      },{
        "title": "[2022) Jump to Python Study 00. Tutorial]",
        "excerpt":"    0. 교재소개            지은이 : 박응용  출판사 : 이지스퍼블리싱   이 책은 파이썬이란 언어를 처음 접해보는 독자들과 프로그래밍을 한 번도 해 본적이 없는 사람들을 대상으로 한다. 프로그래밍을 할 때 사용되는 전문적인 용어들을 알기 쉽게 풀어서 쓰려고 노력하였으며, 파이썬이란 언어의 개별적인 특성만을 강조하지 않고 프로그래밍 전반에 관한 사항을 파이썬이란 언어를 통해 알 수 있도록 알기 쉽게 설명하였다.   파이썬에 대한 기본적인 지식을 알고 있는 사람이라도 이 책은 파이썬 프로그래밍에 대한 흥미를 가질 수 있는 좋은 안내서가 될 것이다. 이 책의 목표는 독자가 파이썬을 통해 프로그래밍에 대한 전반적인 이해를 갖게하는 것이며, 또 파이썬이라는 도구를 이용하여 원하는 프로그램을 쉽고 재미있게 만들 수 있게 하는 것이다.   “점프 투 파이썬” 이나 파이썬에 대한 질문은 최근 오픈한 파이썬 게시판 서비스인 파이보를 활용해 보자.      파이보 - https://pybo.kr   이 책은 위키독스에도 올라와 있다. ___   1. 파이썬 설치 방법 (윈도우 기준)          파이썬 공식 홈페이지의 다운로드 페이지에서 윈도우용 파이썬 언어 패키지 다운로드                python 3.x로 시작하는 버전 중 가장 최근 버전 다운로드                          다운로드 받은 패키지의 인스톨러를 실행 후, ‘Install Now’ 선택                Add Python 3.x to PATH 반드시 체크                          설치 완료 후 [close]를 클릭해서 종료     파이썬이 정상적으로 설치됐는지 확인하는 법                [시작 -&gt; 명령 프롬프트]                  아래 명령어 입력           $ python                                      버젼과 »&gt; 명령어 입력창이 나타나면 설치 성공                    2.파이썬 둘러보기          설치 확인 CMD 화면에서 기초 실습을 해보자.                사칙연산           &gt;&gt;&gt; 1 + 2 3 &gt;&gt;&gt; 5 - 1 4 &gt;&gt;&gt; 3 / 2.4 1.25 &gt;&gt;&gt; 3 * 9 27                                   곱하기와 나누기는 우리가 일반적으로 알고있는 단어와 다르니 주의하자!             결과 값이 바로바로 나오는데 이는 인터프리터언어의 특징이다.(인터프리터가 무엇인지는 후에 알아보도록 하자.)                             변수에 숫자 대입하고 계산하기           &gt;&gt;&gt; a = 1 &gt;&gt;&gt; b = 2 &gt;&gt;&gt; a + b 3                                   a에 1을, b에 2를 대입한 후, a + b를 실행하면 3이 결과값으로 출력된다.                             변수에 문자 대입하고 출력하기           &gt;&gt;&gt; a = \"Python\" &gt;&gt;&gt; print(a) Python &gt;&gt;&gt; a Python                                   대화형 인터프리터 상태에서는 print함수를 따로 쓰지 않아도 변수 이름만 입력해서 a의 값을 출력할 수 있다.                             대화형 인터프리터 종료하는 방법                        Ctrl + Z -&gt; Enter             Sys 모듈을 사용               &gt;&gt;&gt; import sys &gt;&gt;&gt; sys.exit() $                                                                    3. 파이썬과 에디터          파이썬에서는 기본 에디터인 IDLE를 제공한다.                실행 방법 : [시작 - Python3.x - IDLE]         IDLE에서는 한줄 한줄 실행이 아닌 여러줄을 한꺼번에 (순차적으로) 실행할 수 있다.                 추천 에디터                비주얼 스튜디오 코드(VS Code) : 거의 모든 언어 지원         파이참(PyCharm) : 파이썬 전용 에디터         각 설치 방법 및 활용 방법은 구글링!                    4. 본격적인 시작에 앞서          파이썬이란?                귀도 반 로섬(Guido Van Rossum)이 개발한 인터프리터 언어.         컴퓨터 프로그래밍 교육을 위해 많이 사용하지만, 기업의 실무를 위해서도 많이 사용하는 언어. Ex) 구글                        구글에서 만든 소프트웨어의 50% 이상이 파이썬으로 작성됐다고 한다.                             파이썬 프로그램은 공동 작업과 유지 보수가 매우 쉽고 편하다.                        파이썬의 문법 자체가 사람에게 친화적이라 알아보기 쉽고, 가독성이 매우 좋다. (파이썬 식 프로그래밍을 하라는 말이 있을 정도)                                     파이썬의 특징                파이썬은 ‘인간다운 언어’다.                        사람이 생각하는 방식을 그대로 표현             후에 문법을 배울 수록 느끼게 된다.                                      if 4 in [ 1, 2, 3, 4 ] : print(\"4 in Array\")   만약 4가 [ 1, 2, 3, 4 ] 안에 있다면, '4 in Array'를 출력한다.                           프로그램을 모르더라도 직관적으로 어떤 뜻인지 알 수 있을 정도로 사람 친화적이다.         문법이 쉬워서 빠르게 배울 수 있다.         파이썬은 문법 자체가 아주 쉽고 간결하다.         문법이 사람의 사고 체계와 매우 닮아 있다.                 무료지만 강력함                파이썬은 오픈 소스이기 때문에 당연히 무료         만들고자 하는 프로그램의 대부분을 파이썬으로 만들 수 있음         시스템 프로그래밍이나 하드웨어 제어같은 복잡하고 반복 연산이 많은 프로그램은 파이썬과 어울리지 않음.         하지만 파이썬은 이런 약점을 극복할 수 있게 다른 언어로 만든 프로그램을 파이썬 프로그램에 포함시킬 수 있음.         특히 C와 찰떡궁합         프로그램의 전반적 뼈대는 파이썬으로 제작, 빠른 실행 속도가 필요한 부분은 C로 제작할 수 있음                 간결하다.                파이썬은 가장 좋은 방법 1가지만 사용하는 것을 선호.         다른 사람이 작업한 소스 코드도 한 눈에 들어와 이해하기 쉽기 때문에 공동 작업과 유지 보수에 용이         파이썬은 줄을 잘 맞추는게 강제된다.         다른 언어와 달리 단락을 괄호가 아닌 들여쓰기로 구분하기 때문         파이썬은 줄을 맞추지 않으면 실행되지 않는다.         따라서 개발자의 습관과 상관없이 가독성 좋은 코드가 나와 공동 작업과 유지 보수에 용이한 것이다.         누가 작성하던 쉽게 이해할 수 있다는 뜻                  #simple.py languages = [ 'python', 'perl', 'c', 'java' ]  for lang in languages :     if lang in [ 'python', 'perl' ] :         print(\"%6s need interpreter\" % lang)     elif lang in [ 'c', 'java' ] :         print lang in [ 'c', 'java' ]     else :         print(\"should not reach here\")           파이썬으로 할 수 있는 일                시스템 유틸리티 제작                        시스템 유틸리티? : 컴퓨터 사용에 도움을 주는 여러 소프트웨어                             GUI 프로그래밍                        GUI 프로그래밍을 위한 도구들이 잘 갖춰져있어 GUI 프로그램 개발이 쉽다. Ex) Tkinter(티케이인터)                             C/C++와의 결합                        파이썬은 다른 언어와 잘 어울려 결합해서 사용할 수 있기 때문에 접착(Glue)라고 불림             특히 C/C++과 잘 어울려서 C나 C++로 만든 프로그램을 파이썬에서 사용할 수 있으며, 파이썬 프로그램 역시 C나 C++에서 사용할 수 있다.                             웹 프로그래밍         수치 연산 프로그래밍                        사실 파이썬 자체가 수치 연산에 적합한 프로그램은 아니지만 C로 만들어진 NumPy라는 수치 연산 모듈을 제공하기 때문에 빠른 연산이 가능하다.                             데이터베이스 프로그래밍                        사이베이스(Sybase), 인포믹스(Infomix), 오라클(Oracle), 마이에스큐엘(MySQL), 포스트그레스큐엘(PostgreSQL) 등의 데이터베이스 접근 도구 제공             이 외에도 피클(pickle)이라는 파이썬 모듈 제공                             데이터 분석, 사물 인터넷                        판다스(Pandas) 모듈을 사용하여 데이터 분석에 용이하다.             파이썬을 기반으로하는 라즈베리파이 덕분에 사물 인터넷 분야에서도 활용도가 높다.                                     파이썬으로 할 수 없는 일                시스템과 밀접한 프로그래밍 영역                        운영체제             엄청난 횟수의 반복과 연산이 필요한 프로그램             데이터 압축 알고리즘 개발 프로그램             즉 대단히 빠른 속도를 요구허나 하드웨어를 직접 건드려야 하는 프로그램은 어울리지 않음.                             모바일 프로그래밍                        구글이 파이썬을 애용하지만, 파이썬으로 앱을 개발하기는 아직 어렵다.                                     컴파일 언어 vs 인터프리터 언어                컴파일 언어                        컴파일 언어는 프로그래머가 작성한 코드를 컴퓨터가 읽지 못한다.             그래서 컴파일러를 이용해 컴퓨터 언어로 번역             기계어로 번역한 프로그램을 실행함             바로 컴퓨터 언어로 번역해서 읽는 속도가 빠르다.                             인터프리터 언어                        앍을 때 바로 인터프리터를 거쳐 한줄씩 실행             번역하고 읽고의 과정을 반복하여 빠르지 않게 작동                                                                      인터프리터 언어         컴파일언어                                 작동방식         한 줄씩 번역과 실행         한꺼번에 번역 후 실행                       속도         느리다         빠르다                  이상으로 파이썬을 공부하기 전 튜토리얼을 마친다.  ","categories": ["Python"],
        "tags": ["python","basic","Tutorial"],
        "url": "http://localhost:4000/python/jumpToPython_00_Tutorial/",
        "teaser": null
      },{
        "title": "(작성중)[2022) Jump to Python Study 01. DataType (자료형)]",
        "excerpt":"    0. 들어가기에 앞서          어떤 프로그래밍 언어든 ‘그 언어의 자료형을 알고 이해할 수 있다면 이미 그 언어의 절반을 터득한 것이나 다름없다.’는 말이 있다.     자료형                프로그래밍 할 때 쓰이는 숫자, 문자열 등 자료 형태로 사용하는 모든 것         프로그램의 기본이자 핵심 단위                  1. 숫자형          숫자형이란?                숫자형(Number) : 숫자 형태로 이루어진 자료형                                        항목         파이썬 사용 예                                 정수         123, -345, 0                       실수         123.45, -1234.5, 3.4e10                       8진수         0o34, 0o25                       16진수         0x2A, 0xFF                          숫자형은 어떻게 만들고 사용할까?                정수형(Integer) : 정수를 뜻하는 자료형         실수형(Floating-porint) : 소수접이 포함된 숫자                        컴퓨터식 지수 표현 뱡식               a = 4.24E10   # = 4.24 * (10 ** 10) a = 4.24e~10  # = 4.24 * (10 ** -10)                                                                          8진수(Octal)와 16진수(Hexadecimal)                8진수 : 0o or 0O로 시작         16진수 : 0x로 시작           a = 0o177   # 8진수 b = 0x8ff   # 16진수                                              숫자를 활용하기 위한 연산자                사칙연산                  a = 3 b = 4  print(a + b) print(a - b) print(a * b) print(a / b)    # 얘는 결과값이 자동으로 실수로 변환되어 나옴           기타 유용한 연산자       print(a ** b)   # a의 b 제곱(a의 b승) print(a % b)    # a를 b로 나눈 나머지 print(a // b)   # a를 b로 나눈 몫                  2. 문자열 자료형          문자열(String) : 문자, 단어 등으로 구성된 문자들의 집합     문자열을 만드는 4가지 방법       a = \"Hello world\"   # 큰따옴표(\")로 양쪽 둘러싸기 a = 'Hello world'   # 작은따옴표(')로 양쪽 둘러싸기 # 멀티라인(Multiline) a = \"\"\" Life is too short You need Python \"\"\" a = ''' Life is too short You need Python '''                          문자열 안에 작은/큰따옴표를 넣고 싶다면?       a = \"Python's favorite food is perl\"      #  문장부호의 중복 조심 a = \"Python\\'s favorite food is perl\"     # 이스케이핑 문자 사용 # 다른 이스케이핑 예시 a = \"Life is too short\\nYou need Python\"  # 이스케이핑 + n -&gt; 개행문자                          ※이스케이핑 문자? : 참조              문자열 연산하기      a = \"Python\" b = \" is fun\" print(a + b)  # 문자열 연결 (Python is fun) print(a * 2)  # 문자열 반복 (PythonPython)  # 문자열 연산 응용 print(\"=\" * 50) print(\" \" * 20 + \"Title\") print(\"=\" * 50) # 출력 결과 ==================================================                     Title ==================================================           문자열 길이 구하기 : len()함수 사용       a = \"Life is too short\" print(len(a)) # 출력 결과 17                          문자열 인덱싱 : s[n]                인덱싱(indexing) : ‘가리킨다’의 의미                  a = \"Life is too short, You need Python\" print(a[3]) print(a[-0]) print(a[-1])  # 출력 결과 'e'   # 파이썬은 0부터 숫자를 센다. 'L'   # 0 = -0 'n'   # 음수 인덱싱은 뒤에서 부터(-1 부터) /// 이유는? : 0 = -0           문자열 슬라이싱 : s[Start : End : Step]                슬라이싱(Slicing) : ‘잘라낸다’는 의미                  ","categories": ["Python"],
        "tags": ["python","basic","data type"],
        "url": "http://localhost:4000/python/DataType/",
        "teaser": null
      },{
        "title": "[(작성중)OpenCV_01.Basic and Tutorial]",
        "excerpt":"      Day1. OpenCV입문   00. OpenCV 임포트   import cv2   cv2.__version__    # 버전 확인    '4.1.0'  01. OpenCV 기초 사용법   img = cv2.imread('./data/lenna.bmp')    # 이미지 불러오기 print(type(img), img.shape)             # 이미지의 데이터 타입과, 크기  cv2.namedWindow(\"image\")                # 윈도우 생성 cv2.imshow(\"image\", img)                # 윈도우에 불러온 이미지를 보여줌  # 종료 조건 cv2.waitKey()                           # 아무키나 입력 받으면 cv2.destroyAllWindows()                 # 모든 윈도우를 소멸    &lt;class 'numpy.ndarray'&gt; (512, 512, 3)  Workshop : 영상 파일 저장           ’./data/lena.jpg’ 파일을 읽어 들여서 bmp파일 형식의 ‘./out/lena.bmp’로 저장            ’./data/lena.jpg’ 파일을 읽어 들여서 png파일 형식의 ‘./out/lena.png’로 저장            ’./data/lena.jpg’ 파일을 읽어 들여서 png파일 형식의 ‘./out/lena2.png’로 저장(단, 압축률 90% 적용)            ’./data/lena.jpg’ 파일을 읽어 들여서 jpg파일 형식의 ‘./out/lena2.jpg’로 저장(단, 압축률 50% 적용)       Hint    cv2.imread(읽을 파일명, 읽을 모드(ex. 회색 또는 컬러)    cv2.imwrite(저장할 파일명, 이미지데이터)                                        # 압축률 없이 그대로 저장  cv2.imwrite(저장할 파일명, 이미지데이터, [cv2.IMWRITE_PNG_COMPRESSION, 0~9])    # 0~9 압축률로 저장 (png)  cv2.imwrite(저장할 파일명, 이미지데이터, [cv2.IMWRITE_JPEG_QUALIT, 0~100])      # 0~100 압축률로 저장 (jpeg)    # Color mode로 읽기 img = cv2.imread('./data/lenna.bmp')    # 이미지 불러오기  # Grayscale mode로 읽기 # img = cv2.imread('./data/lena.bmp', cv2.IMREAD_GRAYSCALE) # flag : cv2.IMREAD_GRAYSCALE   cv2.imwrite('./out/lena.bmp', img)                                       # 1. cv2.imwrite('./out/lena.png', img)                                       # 2. cv2.imwrite('./out/lena2.png', img, [cv2.IMWRITE_PNG_COMPRESSION, 9])    # 3. cv2.imwrite('./out/lena2.jpg', img, [cv2.IMWRITE_JPEG_QUALITY, 50])      # 4.    True  Workshop L matplotlib 컬러영상 표시      openCV를 이용, ‘./data/lena.jpg’ 파일을 읽어 들인 후 matplotlib.pyplot의 imshow()함수를 사용해 화면에 표시.      결과 확인 : RGB가 반대로 보이는 현상      1번 과정의 문제를 해결하기(내부 함수 이용)      표시된 결과가 원본과 동일한 색조가 되도록 변환 후 화면에 표시      1번 과정 문제를 해결하기(numpy 이용)      numpy ndarray의 색인 문법으로 컬러 채널의 순서를 변경   import matplotlib.pyplot as plt   # 1. img_path = './data/lena.jpg' img = cv2.imread(img_path)  print(img.shape)  plt.imshow(img)    (512, 512, 3)   &lt;matplotlib.image.AxesImage at 0x1f6f8683648&gt;             RGB값이 반전되어 표시                       이유 : img에는 BGR의 순서로 데이터가 준비되어 있음.                        해결방법 1. : openCV의 cvtColor 함수를 사용해서 BGR -&gt; RGB로 변환                      변수 = cv2.cvtColor(바꿀 이미지 변수, cv2.COLOR_BGR2RGB)    # cv2.COLOR_BGR2RGB : BGR 순서로 저장되어 있던 값을 RGB 순서로 바꿈                   해결방법 2. : numpy ndarray의 색인문법을 사용하여 컬러 채널의 순서를 변경              img_rgb2 = img[...,::-1]    # ...은 특정행이나 열을 한꺼번에 가져오는 것(Info by 재희님)            #2 img = cv2.imread(img_path)                        # img에는 BGR 순서로 데이터 저장 img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)    # convert 함수에 의해서 데이터 순서를 바꿔줌  print(img_rgb.shape)  plt.imshow(img_rgb)                               # matplotlib는 데이터를 RGB 순서로 읽어들임    (512, 512, 3)   &lt;matplotlib.image.AxesImage at 0x1f6f87290c8&gt;     # 3-1. 값 교환 알고리즘 사용  img = cv2.imread(img_path)    # img에는 BGR 의 순서로 데이터가 준비되어 있음  # TODO # numpy ndarray의 색인 문법으로 컬러 채널의 순서를 변경  # option 1 change = img[:,:,0].copy()    # b channel -&gt; change img[:,:,0] = img[:,:,2]       # r channel -&gt; b channel img[:,:,2] = change           # change -&gt; r channel plt.imshow(img)    &lt;matplotlib.image.AxesImage at 0x1f6f8799848&gt;     # 3-2. 리스트 특성 활용  img = cv2.imread(img_path)     # img에는 BGR 순서로 데이터 저장  # TODO # numpy ndarray의 색인 문법으로 컬러 채널의 순서를 변경  # option 2 img3 = img[...,::-1]          #  ...은 특정행이나 열을 한꺼번에 가져오는 것 (by 재희)  plt.imshow(img3)    &lt;matplotlib.image.AxesImage at 0x1f6f97c5048&gt;     # 3-3. Numpy ndarray의 특성 활용 1.  img = cv2.imread(img_path)       # img에는 BGR 순서로 데이터 저장  # TODO # numpy ndarray의 색인 문법으로 컬러 채널의 순서를 변경  # option 3 img[:,:,[0,2]]=img[:,:,[2,0]]    #   plt.imshow(img)    &lt;matplotlib.image.AxesImage at 0x1f6f9825c88&gt;     # 3-4. Numpy ndarray의 특성 활용 2.  img = cv2.imread(img_path)         # img에는 BGR 순서로 데이터 저장 print(img.shape)                   #   # option 4 img_convert = img.copy() img_convert[:,:,0] = img[:,:,2]    #  img_convert[:,:,2] = img[:,:,0] plt.imshow(img_convert)    (512, 512, 3)   &lt;matplotlib.image.AxesImage at 0x1f6f9888708&gt;     # 3-5. Numpy ndarray의 특성 활용 3.  img = cv2.imread(img_path)     # img에는 BGR 순서로 데이터 저장  # option 5 plt.imshow(img[:,:,-1::-1])    #     &lt;matplotlib.image.AxesImage at 0x1f6f98e4b08&gt;     02. 행렬 연산(Numpy)   import numpy as np           행렬의 생성과 초기화      행렬을 생성하는 방법           np.empty            np.zeros            np.ones            np.full            np.array()       l = [[1, 2, 3, 4],      [5, 6, 7, 8],      [9, 10, 11, 12]]    # python list  mat = np.array(l)        # numpy ndarray mat    array([[ 1,  2,  3,  4],        [ 5,  6,  7,  8],        [ 9, 10, 11, 12]])   # 색인(index) : 어떤 지점을 찾아가는 방법 # mat에서 2만 100으로 바꾸고 싶다면 mat[0, 1] = 100 mat    array([[  1, 100,   3,   4],        [  5,   6,   7,   8],        [  9,  10,  11,  12]])   # 슬라이싱(slicing) : ~부타 ~까지 부분을 찾아가는 방법 # mat에서 마지막행(9~12) 값 모두를 200으로 바꾸고 싶다면 mat[2, :] = 200 mat    array([[  1, 100,   3,   4],        [  5,   6,   7,   8],        [200, 200, 200, 200]])          행렬의 복사      img1 = cv2.imread(\"./data/cat.bmp\")  img2 = img1            # 치환 img3 = img1.copy()     # 복사  img1[:, :] = (0, 255, 255)   # B=0, G=255, R=255 # green + red = yellow  cv2.imshow(\"img2\", img2) cv2.imshow(\"img3\", img3)  cv2.waitKey() cv2.destroyAllWindows()           행렬 원소값 참조      np.arange(12).reshape(3,4)    array([[ 0,  1,  2,  3],        [ 4,  5,  6,  7],        [ 8,  9, 10, 11]])   # mat2에 \"mat1의 모든 값에 10씩을 더해서\" 넣기  mat1 = np.arange(12).reshape(3,4) mat2 = np.zeros(mat1.shape, type(mat)) mat2    array([[0, 0, 0, 0],        [0, 0, 0, 0],        [0, 0, 0, 0]], dtype=object)   # 파이썬 방식 h, w = mat1.shape # (3, 4) for j in range(h):     for i in range(w):         mat2[j, i] = mat1[j, i] + 10 mat2    array([[10, 11, 12, 13],        [14, 15, 16, 17],        [18, 19, 20, 21]])   # 넘파이 방식 mat2 = mat1 + 10 # broadcasting mat2    array([[10, 11, 12, 13],        [14, 15, 16, 17],        [18, 19, 20, 21]])          행렬 연산      mat1 = np.ones((3, 4), np.int32) mat2 = np.arange(12).reshape(3,4)  mat3 = mat1 + mat2 mat4 = mat2 * 2     # broadcasting   mat3, mat4    (array([[ 1,  2,  3,  4],         [ 5,  6,  7,  8],         [ 9, 10, 11, 12]]),  array([[ 0,  2,  4,  6],         [ 8, 10, 12, 14],         [16, 18, 20, 22]]))  Broadcasting           Numpy의 유용한 기능 중 하나                       원래 프로그램에서 각 행렬의 일괄적인 상수의 연산을 진행하려면 굉장히 복잡                        브로드캐스팅은 방송처럼 행렬 모든 원소에 동일한 연산을 진행                        이 기능이 딥러닝에서 매우 유용하게 쓰임       Workshop : 액자 프레임 만들기   img = plt.imread('./data/psj.png') plt.imshow(img)    &lt;matplotlib.image.AxesImage at 0x1f6f9955648&gt;     print(type(img), img.shape) # shape에서 채널이 4개가 나온 이유 : R, G, B 외에 alpha 채널이 더 있기 떄문    &lt;class 'numpy.ndarray'&gt; (333, 365, 4)   # 좌상단의 첫번째 픽셀의 R, G, B, alpha # 255로 나누어 정규화 된 상태 # 0이 최소값, 1이 최대값 img[0, 0]     array([0.83137256, 0.8509804 , 0.8666667 , 1.        ], dtype=float32)   img[0, 0, 0]   # R channel의 밝기(광도, intensity)값    0.83137256   img[0, 0, 1]   # G channel의 밝기(광도, intensity)값    0.8509804   img[0, 0, 2]   # B channel의 밝기(광도, intensity)값    0.8666667   img = plt.imread('./data/psj.png')  # 좌상단의 첫번째 픽셀을 빨간색으로 변경 img[0, 0, 0] = 1 img[0, 0, 1] = 0 img[0, 0, 2] = 0  plt.imshow(img)   # 한픽셀이 너무 작아서 확인 불가    &lt;matplotlib.image.AxesImage at 0x1f6f9d89348&gt;     # 범위로 슬라이싱   img = plt.imread('./data/psj.png') img[0:10, 0:10, 0] = 1 img[0:10, 0:10, 1] = 0 img[0:10, 0:10, 2] = 0 plt.imshow(img)    &lt;matplotlib.image.AxesImage at 0x1f6fa1d2748&gt;     img.shape[1]    365   img = plt.imread('./data/psj.png')  #상단 가로 img[0:10, :] = [1, 1, 0, 1] # R:1, G:1, B:0, alpha:1  #좌측 세로 img[:, 0:10] = [1, 1, 0, 1] # R:1, G:1, B:0, alpha:1  #우측 세로 img[:, img.shape[1]-10:] = [1, 1, 0, 1] # R:1, G:1, B:0, alpha:1  #하단 가로 img[img.shape[0]-10:, :] = [1, 1, 0, 1] # R:1, G:1, B:0, alpha:1  plt.imshow(img)    &lt;matplotlib.image.AxesImage at 0x1f6fa1faa48&gt;     # 반전 img = plt.imread('./data/psj.png')  # option 1 img[:, :, :3] = 1 - img[:, :, :3]  plt.imshow(img)    &lt;matplotlib.image.AxesImage at 0x1f6fa25f308&gt;     # option 2 img = plt.imread('./data/psj.png') img = np.abs(1 - img[:,:]) img[:,:,3] = 1 plt.imshow(img)    &lt;matplotlib.image.AxesImage at 0x1f6fa2bc108&gt;     # option 3 img = plt.imread('./data/psj.png') img3 = img.copy() img3 = abs(img3-1) img3[:,:,3] = img[:,:,3] plt.imshow(img3);      03. 동영상 파일 다루기           카메라 입력      # cap = cv2.VideoCapture(device) # 카메라 디바이스,  # cap = cv2.VideoCapture(file_path) # 동영상 파일 # cap = cv2.VideoCapture(url) # 스트리밍 주소    cap = cv2.VideoCapture(0)  if not cap.isOpened():     print(\"Camera open failed!!\")     sys.exit()  while True:                            # 무한반복에서는 반드시 break문 있어야 함!!      ret, frame = cap.read()             # frane : 이미지 1장          if not ret:         print(\"frame read error\")         break;              cv2.imshow(\"frame\", frame)      if cv2.waitKey(10) == ord('q'):     # cv2.waitKey(10) : 10ms 를 기다리기, Sleep효과                               # 27 : ESC Key          break;  if cap.isOpened():     print(\"cap released\")     cap.release()         cv2.destroyAllWindows()     cap released  동영상 파일 : ./data/stopwatch.avi           윈도우에 재생            반전해서도 표시       # cap.get() # 입력영상의 속성들을 알 수 있는 함수   # cv2.CAP_PROP_FRAME_WIDTH # cv2.CAP_PROP_FRAME_HEIGHT # cv2.CAP_PROP_FPS    ","categories": ["OpenCV"],
        "tags": ["machine learning","openCV","basic","tutorial"],
        "url": "http://localhost:4000/opencv/01_Computer_Vision/",
        "teaser": null
      },{
        "title": "[(Programmers 강의) Algorithm with Data Structure 03강. 정렬과 탐색(Sorting & Searching)]",
        "excerpt":"      정렬과 탐색(Sorting &amp; Searching)   00. 들어가기에 앞서           람다함수(lambda)                       런타임에서 생성, 사용할 수 있는 익명 함수                        주로 filter(), map(), reduce()와 같은 전형적인 기능 개념과 함께 사용                        쓰고 버리는 일시적인 함수                                   함수가 생성된 곳에서만 필요                                    간단한 기능을 필요한 곳에서 즉시 사용하고 버림                                            람다의 정의        lambda [인자리스트]: [표현식]    - return문 포함하지 않음  - 반환값은 표현식에 의해 만들어짐   # 활용 예시  def inc(n):     return lambda x: x + n     f = inc(2) g = inc(4)   print(f(12)) # 14 (2 + 12) print(g(12)) # 16 (4 + 12) print(inc(2)(12)) # 14 (2 + 12)    14 16 14  기능 함수와 같이 쓰는 Lambda                  map() : 내장 함수                           2개의 인자                        function을 iterable의 모든 요소에 대해 적용                        function에 의해 변경된 iterator 반환                    map(function, iterable)    a = [1, 2, 3, 4] b = [13, 16, 17, 14] list(map(lambda x, y: x + y, a, b))    [14, 18, 20, 18]                 filter() : 내장 함수                           2개의 인자                        interable의 각각의 요소에 대해 Boolean 값 반환                        True면 남고, False면 제거                    filter(function, iterable)    a = [2, 18, 9, 22, 17, 24, 8, 12, 27] list(filter(lambda x: x % 3 == 0, a))    [18, 9, 24, 12, 27]                 reduce() : 외장 함수                           2개의 필수 인자와 하나의 옵션 인자                        function을 사용해서 iterable을 하나의 값으로 줄인다는 개념                        Initializer : 첫 번째 인자로 추가됨                    functools.reduce(function, iterable[, initializer])    from functools import reduce reduce(lambda x, y: x + y, [1, 2, 3, 4, 5], 1)    16  01. 정렬(Sort)           정렬이란?              복수의 원소로 주어진 데이터를 정해진 기준에 따라 새로 늘어놓는 작업                  L = [3, 8, 2, 7, 6, 10, 9]           Python 리스트의 정렬 1. sorted()                       내장 함수(built-in function)                        정렬된 새로운 리스트를 얻어냄                      sorted(function)            sorted(L)                     # 오름차순    [2, 3, 6, 7, 8, 9, 10]   sorted(L, reverse = True)    # 내림차순(Reverse : 역순 정렬)    [10, 9, 8, 7, 6, 3, 2]          Python 리스트의 정렬 2. sort()                       리스트이 메서드(method)                        해당 리스트를 정렬                      list.sort()            L.sort()                   # 오름차순 L    [2, 3, 6, 7, 8, 9, 10]   L.sort(reverse = True)    # 내림차순(Reverse : 역순 정렬) L    [10, 9, 8, 7, 6, 3, 2]          문자열로 이루어진 리스트의 경우                       정렬 순서 : 사전 순서(알파벳 순)                        대문자를 소문자보다 우선                        문자열의 길이 = 크기 X                      문자열 길이 순서로 정렬하는 법 : 정렬에 이용하는 키(key) 지정(길이를 키로 지정)                           L = ['abcd', 'xyz', 'spam']   # 문자열의 길이 순으로 정렬 sorted(L, key = lambda x: len(x))    # lambda 를 사용, 정렬의 키를 지정 # 같은 길이라면 원래의 순서를 적용    ['xyz', 'abcd', 'spam']     정렬에서 키를 지정하는 또 다른 예   L = [{'name' : 'John', 'score' : 83},       {'name' : 'Paul', 'score' : 92}]   L.sort(key = lambda x: x['name'])    # 레코드들을 이름의 알파벳 순서대로 정렬 L # 레코드? : 여러 데이터의 복합으로 이루어진 데이터 원소    [{'name': 'John', 'score': 83}, {'name': 'Paul', 'score': 92}]   L.sort(key = lambda x: x['score'], reverse = True)    # 레코드들을 점수 높은 순서대로 정렬 L    [{'name': 'Paul', 'score': 92}, {'name': 'John', 'score': 83}]  02. 탐색(Search)   - 탐색이란?      - 복수의 원소로 이루어진 데이터에서 특정 원소를 찾아내는 작업.                                      선형 탐색                       순차 탐색 (Linear Search                       Sequential Search)                                           리스트의 길이에 비례하는 시간 소요 : O(n)                        최악의 경우 : 모든 원소를 모두 비교                          # 선형 탐색 코드 구현  def linear_search(L, x):    # L : 탐색의 대상 리스트, x 찾으려고 하는 원소     i = 0     while i &lt; len(L) and L[i] != x:    # L의 마지막 원소까지 검사하거나, 찾으면 멈춤         i += 1     if i &lt; len(L):    # 리스트 내에 있으면         return i     # 찾은 위치 반환     else:            # 없으면         return -1   S = [3, 8, 2, 7, 6, 10, 9] linear_search(S, 6)    4   linear_search(S, 1)    -1   S.index(6)    # index() 함수 : 선형탐색    4   S.index(1)    # 리스트에 없는 요소를 탐색하면 ValueError           이진 탐색(Binary Search)                       탐색하려는 리스트가 이미 정렬되어 있는 경우에만 적용 가능                        크기 순으로 정렬되어 있다는 성질 이용!                                          lower, uppper, middle 생성 후, middle과 탐색값 비교                                   탐색값 == middle : 탐색 완료                                    탐색값 &gt; middle : lower ~ middle 무시                                    탐색값 &lt; middle : middle ~ upper 무시                                                                                   한 번 비교가 일어날 떄마다 리스트 반씩 줄임(Divide &amp; Conquer) : O(log n)                      분할정복(Divide &amp; Conquer) : 기존의 문제를 해결하기 쉬운 단위로 나눠서 해결한 후 다시 합침                           # 이진 탐색 코드 구현 def binary_search(L, x):         lower = 0     upper = len(L) - 1     idx = -1          while lower &lt;= upper:         middle = (lower + upper) // 2         if L[middle] == x:             return middle             break         elif L[middle] &lt; x:             lower = middle + 1         else:             upper = middle - 1     return -1   S = [1, 3, 7, 8, 12, 15, 17, 21, 24 ,30, 32, 34, 39, 45, 51, 62]   binary_search(S, 30)    9   binary_search(S, 31)    -1          선형 탐색과 이진 탐색의 성능 차이                       10만개의 원소 중, 1000개의 숫자를 찾아보기                        결과(강사님의 예시)                                          효율적인 자료구조, 알고리즘을 사용해야하는 이유 : 성능 차이                        무조건 이진 탐색이 옳은게 아니라, 때에 따라서는 선형 탐색이 더 나을 수 있음                   03. 과제   3강 실습(Link)   def solution(L, x):     lower = 0     upper = len(L) - 1          while lower &lt;= upper:         mid = (lower + upper) // 2         if L[mid] == x:             return mid             break         elif L[mid] &lt; x:             lower = mid + 1         else:             upper = mid - 1     return - 1         ","categories": ["Algorithm & Data Structure"],
        "tags": ["algorithm","data structure","basic","sorting","searching"],
        "url": "http://localhost:4000/algorithm%20&%20data%20structure/02/",
        "teaser": null
      },{
        "title": "[(Programmers 강의) Algorithm with Data Structure 04강 ~ 05강. 재귀 알고리즘(Recursive Algorithms)]",
        "excerpt":"      재귀 알고리즘(Recursive Algorithms)   01. 재귀함수           재귀함수(Recursive Algorithm)란?                       하나의 함수에서 자신을 다시 호출하여 작업을 수행하는 것                        생각보다 많은 종류의 문제가 재귀적으로(recursively) 해결 가능                        CS(Computer Science) 분야에서 자주 사용                            - 이진 탐색과 비슷                    - 이진 트리는 이진 탐색과 비슷한 흐름을 재귀적인 트리 알고리즘으로 구성                           - 함수 내에서 자기 자신을 호출           # 자연수의 합 재귀 알고리즘(RecursionError)  def sum_num(n):     return n + sum_num(n - 1)  sum_num(10)  # Maximum recursion depth exceeded # RecursionError # 음수영역까지 끝없이 재귀하기 때문   def sum_num(n):     print(n)    # 어떻게 실행되고 있는지 확인하기 위한 코드(디버깅)     return n + sum_num(n - 1)  sum_num(10)    10 9 8 7 6 5 4 3 2 1 0 -1 -2 -3 -4 (중략) -2950 -2951 -2952 -2953 -2954   # 자연수의 합 재귀 알고리즘  def sum_num(n):     print(n)     if n &lt;= 1:         return n     else:         return n + sum_num(n - 1)      sum_num(4)    4 3 2 1   10          재귀 호출의 종결 조건(trival case)                       위 예제에서 확인했다 싶이 재귀 호출은 종결 조건(trival case)이 매우 중요                        일반적 구조                      def function(x):        if n ...:            ...            # 매우 중요!        else:            ...            function(...)                 재귀 알고리즘의 효율              모든 재귀 알고리즘은 대칭되는(Counter-Part) 반복 알고리즘이 존재                    - 시간복잡도 자체는 같으나 효율을 비교하면 다른 문제    - 위 예시의 효율성    - Reculsive Ver은 함수를 추가로 호출하는 부수적 동작 존재    - 따라서 Iterartive Ver보다 효율성이 떨어진다고 볼 수 있음    - 사람이 생각하는 방식을 표현하기에 유리하나    - 효율적인 측면에서 떨어질 수 있음(**조심해야할 부분**)                    - 극단적인 예 : 상수시간의 알고리즘                           생각보다 많은 문제가 재귀적으로 풀리긴 하지만                        또, 재귀적으로 표현된 알고리즘이 사람이 이해하긴 좋지만                        컴퓨터가 알고리즘 실행 시, 성능이 반드시 좋지는 않음                        효율적인 측면에도 유념해야하기 때문에 알고리즘, 자료구조 선택이 중요                   # 추가 예제(! - 팩토리얼)  def fac(n):     print(n)     if n &lt;= 1:    # trival case         return 1     else:         return n * fac(n - 1)      fac(5)    5 4 3 2 1   120  02. 과제 : Fibonacci 순열              Interative Ver VS Recursive Ver              둘 다 작성해볼것.           4강 연습문제(Link)   # Interative Ver  def solution(x):     l = [0, 1]     if x &gt;= 2:         for i in range(2, x + 1):             l.append(l[i - 1] + l[i - 2])     return l[x]  solution(8)    21     # Recursive Ver  def solution(x):     if x == 0:         return 0     elif x &lt;= 2 :         return 1     else:         return solution(x - 1) + solution(x - 2)  solution(8)    21        확실히 Interactive Version이 더 빠른 실행 결과로 통과했다.   # Recursive Ver # 강사님 코드 def fibo(n):     if n &lt;= 1:         return n     return fibo(n - 1) + fibo(n - 2)  fibo(8)    21  03. 재귀함수의 유용성           재귀 알고리즘을 통해 다음 문제 해결                       조합의 수(n 개의 서로 다른 원소에서 m개를 택하는 경우의 수) 구하기                      재귀적이지 않은 방법으로 해결                                    - 재귀적으로 방법으로 해결                    - 잘못된 방법                    - 올바른 방법                    - 하지만 효율성 측면에서는 여전히 좋지 않다    - combi를 계속해서 호출하기 때문    - 그렇다면 왜 재귀함수를 쓸까?                하노이의 탑 문제                       재귀 알고리즘이 효율은 떨어진다고 하더라도 사람이 생각하는 방식을 코드로 직접 옮김으로써 유용한 경우가 있다.                        그 대표적 예가 이 문제                        한 기둥의 원반들을 전부 다 다른 원반으로 옮기는 문제.                      단, 더 큰 원반은 더 작은 원반의 위로 올라갈 수 없음                                이 문제를 재귀적 알고리즘을 통해 해결하면 편함.                      나중에 한 번 해볼것!                           # 하노이의 탑 도전(작성 예정)           아주 많은 자료구조에 있는 문제 中 트리에 해당하는 문제는 재귀 알고리즘으로 푸는게 적당할 수 있음              연습문제(빈칸채우기) : 재귀적 이진 탐색                  04. 과제 2   5강 연습문제(Link)   def solution(L, x, l, u):     if x &lt; L[l] or x &gt; L[u]:         return -1     mid = (l + u) // 2     if x == L[mid]:         return mid     elif x &lt; L[mid]:         return solution(L, x, l, mid - 1)     else:         return solution(L, x, mid + 1, u)         ","categories": ["Algorithm & Data Structure"],
        "tags": ["algorithm","data structure","basic","recursive"],
        "url": "http://localhost:4000/algorithm%20&%20data%20structure/03/",
        "teaser": null
      }]
