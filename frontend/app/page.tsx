import { headers } from "next/headers";
import { montserrat, notoSansKR, pretendard } from "./fonts";

export default function Home() {
  const headersList = headers();
  console.log(headersList);
  return (
    <div>
      <h1 style={{ fontSize: "30px", marginTop: "10px", marginBlock: "10px" }}>
        The Express Generator <br></br> powered by Next.js
      </h1>
      <input id="test" type="text" />
      <h2 id="test__h2">test1234</h2>
      <details open={true}>
        <summary>"details 요소란?"</summary>
        <p>열림 상태일 때 정보를 표시하는 위젯이다.</p>
      </details>
      <label htmlFor="local">지역번호:</label>
      <input type="text" id="local" list="local-list" />
      <datalist id="local-list">
        <option value="02" label="서울"></option>
        <option value="031" label="경기"></option>
      </datalist>
      <div className={pretendard.className} style={{ fontSize: "1.2rem" }}>
        <hr></hr>
        <h1 style={{ fontSize: "30px", marginTop: "10px", marginBlock: "10px" }}>pretendard</h1>
        <h1 style={{ fontWeight: 100 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 200 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 300 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 400 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 500 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 600 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 700 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 800 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 900 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 100 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 200 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 300 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 400 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 500 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 600 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 700 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 800 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 900 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 100 }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: 300 }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: "normal" }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: 600 }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: "bold" }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: 900 }}>홈페이지 한글 폰트 두께 테스트</h1>
      </div>
      <div className={montserrat.className} style={{ fontSize: "1.2rem" }}>
        <hr></hr>
        <h1 style={{ fontSize: "30px", marginTop: "10px", marginBlock: "10px" }}>montserrat</h1>
        <h1 style={{ fontWeight: 100 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 200 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 300 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 400 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 500 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 600 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 700 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 800 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 900 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 100 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 200 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 300 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 400 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 500 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 600 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 700 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 800 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 900 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 100 }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: 300 }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: "normal" }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: 600 }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: "bold" }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: 900 }}>홈페이지 한글 폰트 두께 테스트</h1>
      </div>
      <div className={notoSansKR.className} style={{ fontSize: "1.2rem" }}>
        <hr></hr>
        <h1 style={{ fontSize: "30px", marginTop: "10px", marginBlock: "10px" }}>notoSansKR</h1>
        <h1 style={{ fontWeight: 100 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 200 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 300 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 400 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 500 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 600 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 700 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 800 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 900 }}>home page english font weight test</h1>
        <h1 style={{ fontWeight: 100 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 200 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 300 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 400 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 500 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 600 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 700 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 800 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 900 }}>1234567890 number test</h1>
        <h1 style={{ fontWeight: 100 }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: 300 }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: "normal" }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: 600 }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: "bold" }}>홈페이지 한글 폰트 두께 테스트</h1>
        <h1 style={{ fontWeight: 900 }}>홈페이지 한글 폰트 두께 테스트</h1>
      </div>
    </div>
  );
}
