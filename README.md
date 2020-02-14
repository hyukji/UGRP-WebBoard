# UGRP-WebBoard introduction
UGRP-WebBoard는 2020 DGIST UGRP인 "소스 코드 유사도 검증 알고리즘 및 이를 이용한 교육 보조 프로그램 개발"을 위한 플랫폼을 준비하기 위한 소스이다. 


# Installation for this source

  이 Web은 backend로 nodejs, express, mongoDB를 사용하고 있으며 frontend로는 Vue.js를 이용하고 있다. 따라서 node.js를 설치하여야 한다. express와 Vue는 내부에 모듈로 존재한다.
  
 # How to run
 
  실행방법은 두가지가 존재한다.
  1. cmd 창을 두개 열고 하나는 frontend 폴더에서 
  
  <pre><code>  npm run dev</code></pre>
  
  다른 cmd 창은 backend 폴더에서 
    
  <pre><code>  npm start </code></pre>
   
  혹은 
   
  <pre><code>  nodemon start </code></pre>

  를 입력하면 실행된다.
  http://localhost:8080/home 에서 확인할 수 있다.
   
  2. frontend에서 빌드하여 확인하는 방법이다.
    똑같이 창을 두개 열지만 frontend에서는
  <pre><code>  npm run build </code></pre>
  하면 backend에 index.html 파일이 저장된다. 그리고 첫번째 방법에서처럼 backend 폴더에서 실행시켜 주면 된다.
