import Image from "next/image"
import PointFirstImage from "public/images/landing/section-first.png"
import PointSecondImage from "public/images/landing/section-second.png"
import SettingFirstImage from "public/images/landing/setting-1.jpg"
import SettingSecondImage from "public/images/landing/setting-2.jpg"
import SettingThirdImage from "public/images/landing/setting-3.jpg"
import classes from "./landing-main.module.css"

export default function LandingMain() {
  return (
    <main className={classes.main}>
      <section className={classes.section}>
        <div className={classes["section-info"]}>
          <span>Point 1</span>
          <h3>
            일의 우선순위를
            <br />
            관리하세요
          </h3>
        </div>
        <div>
          <Image src={PointFirstImage} alt="" width={594} height={498} className={classes["first-image"]} />
        </div>
      </section>
      <section className={classes.section}>
        <div className={classes["section-info"]}>
          <span>Point 2</span>
          <h3>
            해야 할 일을
            <br />
            등록하세요
          </h3>
        </div>
        <div>
          <Image src={PointSecondImage} alt="" width={436} height={502} className={classes["second-image"]} />
        </div>
      </section>
      <section className={classes.setting}>
        <h4>생산성을 높이는 다양한 설정 ⚡</h4>
        <ul className={classes["setting-list"]}>
          <li className={classes["setting-list-item"]}>
            <div className={classes["setting-image-wrapper"]}>
              <Image src={SettingFirstImage} alt="" width="0" height="0" className={classes["setting-image"]} />
            </div>
            <div className={classes["setting-text"]}>
              <h5>대시보드 설정</h5>
              <p>대시보드 사진과 이름을 변경할 수 있어요.</p>
            </div>
          </li>
          <li className={classes["setting-list-item"]}>
            <div className={classes["setting-image-wrapper"]}>
              <Image src={SettingSecondImage} alt="" width={0} height={0} className={classes["setting-image"]} />
            </div>
            <div className={classes["setting-text"]}>
              <h5>초대</h5>
              <p>새로운 팀원을 초대할 수 있어요.</p>
            </div>
          </li>
          <li className={classes["setting-list-item"]}>
            <div className={classes["setting-image-wrapper"]}>
              <Image src={SettingThirdImage} alt="" width={0} height={0} className={classes["setting-image"]} />
            </div>
            <div className={classes["setting-text"]}>
              <h5>구성원</h5>
              <p>구성원을 초대하고 내보낼 수 있어요.</p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  )
}
