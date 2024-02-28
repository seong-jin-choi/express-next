import Image from "next/image";
import Link from "next/link";
import errorImage from "../assets/img/illustrations/page-misc-error.png";
import bgImage from "../assets/img/illustrations/bg-shape-image-light.png";

export default function NotFound() {
  return (
    <>
      <div className="container-xxl">
        <div className="misc-wrapper">
          <h2 className="mb-4 mt-4">Page Not Found :(</h2>
          <p className="mb-0 mx-2">죄송합니다 😖 </p>
          <p className="mb-0 mx-2">요청하신 페이지를 찾을 수 없습니다</p>
          <p className="mb-3 mx-2">입력하신 주소를 다시 확인해주시기 바랍니다</p>
          <Link href="/" className="btn btn-primary mb-4">
            홈으로
          </Link>
          <div className="mt-4">
            <Image src={errorImage} alt="page-misc-error" width={225} />
          </div>
        </div>
      </div>
      <div className="container-fluid misc-bg-wrapper">
        <Image src={bgImage} alt="page-misc-error" />
      </div>
    </>
  );
}
