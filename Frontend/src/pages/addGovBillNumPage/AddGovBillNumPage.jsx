import NavBar from "../../components/navBar/NavBar";
import "./AddGovBillNumPage.css";
import AddGovBillCard from "../../components/addGovBillCard/AddGovBillCard";

export default function AddGovBillNumPage() {
  const pendingGovBills = [
    {
      billNo: "চাউল / ২৬ / ২০২১-২২২৩",
      amount: "২৪২০৫৬",
      billDate: "১০/০৩/২০২৩",
    },
    {
      billNo: "চাউল / ২৬ / ২০২১-২২২৩",
      amount: "২৪২০৫৬",
      billDate: "১০/০৩/২০২৩",
    },
    {
      billNo: "চাউল / ২৬ / ২০২১-২২২৩",
      amount: "২৪২০৫৬",
      billDate: "১০/০৩/২০২৩",
    },
    {
      billNo: "চাউল / ২৬ / ২০২১-২২২৩",
      amount: "২৪২০৫৬",
      billDate: "১০/০৩/২০২৩",
    },
    {
      billNo: "চাউল / ২৬ / ২০২১-২২২৩",
      amount: "২৪২০৫৬",
      billDate: "১০/০৩/২০২৩",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="gov-bill-num-add-page-canvas">
        <div className="add-gov-bill-num-page-title">সরকারি বিল নম্বর দিন</div>
        <div className="main-content-gov-bill-add">
          {pendingGovBills.map((bill, indx) => {
            return (
              <AddGovBillCard
                billNo={bill.billNo}
                amount={bill.amount}
                billDate={bill.billDate}
                key={indx}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
