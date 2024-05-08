import React from "react";

const SubLayout = ({ children }) => {
  return (
    <div id="sub">
      <div>
        <img src="/images/sub_top_tit1.png" alt="INTRODUCTION" />
      </div>
      <section class="introduction">
        <aside>
          <img src="/images/sub_aside_cate1_tit.png" alt="팜스토리 소개" />

          <ul class="lnb">
            <li class="on">
              <a href="./hello.html">인사말</a>
            </li>
            <li>
              <a href="./direction.html">찾아오시는 길</a>
            </li>
          </ul>
        </aside>
        <article>
          <nav>
            <img src="/images/sub_nav_tit_cate1_tit1.png" alt="인사말" />
            <p>
              HOME {">"} 팜스토리소개 {">"} <em>인사말</em>
            </p>
          </nav>

          {children}
        </article>
      </section>
    </div>
  );
};

export default SubLayout;
