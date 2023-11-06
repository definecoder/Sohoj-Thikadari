import FirmInfo from "../../components/firm_info/FirmInfo";
import NavBar from "../../components/navBar/NavBar";
import "./ProgramProfilePage.css";

export default function ProgramProfilePage() {
  return (
    <>
      <NavBar />
      <div className="program-profile-page-canvas">
        <div className="program-profile-left-section">
          <div className="program-profile-left-section-1">
            <div className="pp-ls-1-card">
              <div className="sending-reciving-programprofile-card-header">
                <div className="sen-rec-programprofile-header-left">প্রেরণ</div>
                <div className="sen-rec-programprofile-header-right">
                  চট্টগ্রাম বন্দর
                </div>
              </div>
              <div className="sending-reciving-programprofile-card-footer">
                <div className="sen-rec-programprofile-footer-left">
                  <b>নেটঃ &nbsp;</b> ১৫০ টন <i>&nbsp;(৩০০ বস্তা)</i> <br /> <b>গ্রসঃ &nbsp;</b> ১৫০.৩৬ টন <i>&nbsp;(৩০০ বস্তা)</i>
                </div>
                <div className="sen-rec-programprofile-footer-right">
                  <b>১৩/১২/২০২২</b>
                </div>
              </div>
            </div>
          </div>
          <div className="program-profile-left-section-1">
            <div className="pp-ls-1-card">
              <div className="sending-reciving-programprofile-card-header">
                <div className="sen-rec-programprofile-header-left">প্রাপ্তি</div>
                <div className="sen-rec-programprofile-header-right">
                  সিলেট সদর
                </div>
              </div>
              <div className="sending-reciving-programprofile-card-footer">
                <div className="sen-rec-programprofile-footer-left">
                  <b>নেটঃ &nbsp;</b> ১৫০ টন <i>&nbsp;(৩০০ বস্তা)</i> <br /> <b>গ্রসঃ &nbsp;</b> ১৫০.৩৬ টন <i>&nbsp;(৩০০ বস্তা)</i>
                </div>
                <div className="sen-rec-programprofile-footer-right">
                  <b>১৩/১২/২০২২</b>
                </div>
              </div>
            </div>
          </div>
          <div className="program-profile-left-section-3">
            <span><b>পরিমানঃ</b> <i>৩০০ টন</i></span>
            <span><b>ঘাটতিঃ</b> <i>০.১৪ টন</i></span>
          </div>
        </div>
        <div className="program-profile-right-section">
          <div className="program-profile-right-section-1">
            <FirmInfo firmName={"মেসার্স বলাকা ওভারসিস লিমিটেড"} firmAddress={"২১৪, শেখ মুজিব রোড, চট্টগ্রাম"} ProprietorName={"মোঃ জহিরুল ইসলাম"}/>
          </div>
          <div className="program-profile-right-section-2">
            <div className="pp-invoice-info-card">
                <span className="pp-invoice-card-1">ইনভয়েস  নং :  <b>৩৭০৬১৫১</b></span>
                <span className="pp-invoice-card-2">চাউল</span>
                <span className="pp-invoice-card-3">প্রোগ্রাম নং :  <b>৭৭৪৯</b></span>
                <span className="pp-invoice-card-4">প্রোগ্রামের তারিখঃ  <b>১৫/১২/২০২২</b></span>
            </div>
          </div>
          <div className="program-profile-right-section-3">3</div>
          <div className="program-profile-right-section-4">4</div>
        </div>
      </div>
    </>
  );
}
