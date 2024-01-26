import React, { useState, useEffect } from "react";
import Styled from "styled-components";

function BackToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const checkScroll = () => {
    let height = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    winScroll > height ? setShowTopBtn(true) : setShowTopBtn(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ButtonScrollToTop isScrollButtonVisible={showTopBtn} onClick={goToTop}>
      <div className="btn-toTop">
        {showTopBtn && <i className="fa-solid fa-angle-up"></i>}
      </div>
    </ButtonScrollToTop>
  );
}
const ButtonScrollToTop = Styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .btn-toTop{
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ddd;
    transition: 0.3s;
    margin-left: auto;
    margin-right: 20px;
    display: flex; 
    align-items: center;
    justify-content: center;
    margin-bottom: 120px;
    cursor: pointer;
    &:hover{
      background-color: #fccc4c;
      color: #fff;
    }
    & > .fa-angle-up{
      animation: goToTop 1.2s linear infinite alternate-reverse;
    }
    @keyframes goToTop {
      0%{
        transform: translateY(4px);
      }
      100%{
        transform: translateY(-4px);
      }
    }
  }
`;
export default BackToTop;
