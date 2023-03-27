import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function Example() {
  //querySelector는 직접 DOM에 접근하지만
  //useRef는 가상돔을 이용해서 접근한다
  //이 방식을 이용해야 신뢰성이 높으며
  const inputE1 = useRef();
  const [hello, setHello] = useState("");
  //pattern은 regex 통과 하지 못 하면 alert을 발생시킨다.
  //maxlength를 통하여 최대 값을 지정해 줄 수 있다.

  //maxLength와 정규 표현식을 이용하면 핸드폰 번호를 잘 표현할 수 있다.
  //https://gurtn.tistory.com/86
  const searchDivision = "phoneNumber";
  var maxLength;

  //아래와 같이 함수를 적용해서 하면 좋겠지만
  //숫자외에 값도 입력이 된다는 문제와
  //regex이 기존 querySelector로 가져올 때와 방식이 달라지는 듯 하다.
  const phoneFormat = (value) => {
    console.log("value:", value);
    value = value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
  };

  //이벤트 발생 순서
  /**
   * 1) onKeyDown
   * 2) onChange
   * 3) onKeyUp
   */

  if (searchDivision === "phoneNumber") {
    maxLength = 13;
  } else {
    maxLength = 8;
  }

  function onKeyDown(e) {
    console.log("onKeyDown 호출");
    if (e.key === "Enter") {
      e.preventDefault();
      const button = document.querySelector("#second");
      button.click();
      console.log("Enter로 submit");
    }

    if (searchDivision === "phoneNumber") {
      // inputE1.current.value = phoneFormat(hello);
      //1. 핸드폰번호(자등 하이픈)
      //1-1. MaxLength -> 13
      //1-2. 정규식은 아래와 같이
      // e.target.value = phoneFormat(e.target.value);
      // document
      //   .querySelector('input[name="searchValue"]')
      //   .addEventListener("input", function (e) {
      //     e.target.value = e.target.value
      //       .replace(/[^0-9]/g, "")
      //       .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
      //   });
      console.log(inputE1.current.value);
    } else {
      console.log("regex 없이 입력 가능");
    }
  }

  return (
    <form>
      {/**https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
       * 연결된 조건문 처리하기 -> maxLength
       */}
      <input
        id="first"
        type="text"
        name="searchValue"
        value={hello}
        onChange={(e) => {
          console.log("onChange 호출");
          setHello(e.target.value);
        }}
        ref={inputE1}
        // onKeyDown={onKeyDown}
        maxLength={
          searchDivision === "phoneNumber"
            ? 13
            : searchDivision === "card"
            ? 3
            : 5
        }
      ></input>
      <input id="second" type="submit"></input>
    </form>
  );
}

export default Example;

ReactDOM.createRoot(document.getElementById("root")).render(<Example />);
