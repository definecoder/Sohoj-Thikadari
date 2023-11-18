import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
//import data from './data.json';
import { Font } from "@react-pdf/renderer";

import BengaliFont from "./SolaimanLipi_29-05-06.ttf";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

Font.register({
  family: "SolaimanLipi",
  src: BengaliFont,
});

const styles = StyleSheet.create({
  cellText: {
    fontFamily: "SolaimanLipi", // Use the registered font family
    fontSize: 12,
    margin: "auto",
    padding: 2,
  },

  page: {
    fontFamily: "SolaimanLipi",
    flexDirection: "row",
    backgroundColor: "white",
  },
  section: {
    margin: 5,
    padding: 5,
    flexGrow: 1,
  },
  headerbox: {
    position: "center",
    top: 10,
    textAlign: "center",
    marginBottom: 5,
  },
  namebox: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
  },
  subheading: {
    fontSize: 14,
    color: "gray",
    marginBottom: 2,
  },
  description: {
    fontSize: 12,
  },
  phoneNumber: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  totalBill: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  table: {
    display: "table",
    borderStyle: "solid",
    borderWidth: 1,
  },
  tableRow: { flexDirection: "row" },
  tableCol: {
    width: "6.667%",
    borderStyle: "solid",
    borderWidth: 1,
  },
});

function BillPDF(billID) {
  const [data, setData] = useState([]);
  const [values, setValues] = useState([]);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const heading = {
    programNo: "সূচি নং",
    programDate: "তারিখ",
    invoiceNo: "ইনভয়েস নং",
    sendingDate: "প্রেরণের তাং",
    sendingPoint: "প্রেরক কেন্দ্র",
    receivingPoint: "প্রাপক কেন্দ্র",
    commodity: "পণ্য",
    sendingNetQuantity: "প্রেরিত বস্তা",
    sendingGrossQuantity: "মোট প্রেরণ ",
    receivingNetQuantity: "প্রাপ্ত বস্তা",
    receivingGrossQuantity: "মোট প্রাপ্ত ",
    shortage: "ঘাটতি",
    distance: "দূরত্ব",
    pricePerTon: "টনপ্রতি দর",
    amount: "টাকার পরিমান",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://sohoj-thikadari-production.up.railway.app/api/v1/bills/" +
            billID.billID,
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );
        console.log(res);
        setData(res.data);
        const tmp = [heading, ...res.data.Invoice];
        const updatedJSON = [];

        for (var i = 0; i < tmp?.length; i++) {
          if (i != 0) {
            updatedJSON.push({
              programNo: tmp[i].programNo,
              programDate: new Date(tmp[i].programDate).toLocaleDateString(
                "bn-BD",
                options
              ),
              invoiceNo: tmp[i].invoiceNo,
              sendingDate: new Date(tmp[i].sendingDate).toLocaleDateString(
                "bn-BD",
                options
              ),
              sendingPoint: tmp[i].sendingPoint,
              receivingPoint: tmp[i].receivingPoint,
              commodity: tmp[i].commodity,
              sendingNetQuantity: tmp[i].sendingNetQuantity,
              sendingGrossQuantity: tmp[i].sendingGrossQuantity,
              receivingNetQuantity: tmp[i].receivingNetQuantity,
              receivingGrossQuantity: tmp[i].receivingGrossQuantity,
              shortage: tmp[i].shortage,
              distance: tmp[i].distance,
              pricePerTon: tmp[i].pricePerTon,
              amount: tmp[i].invoiceAmount,
            });
          } else updatedJSON.push(tmp[i]);
        }
        setValues(updatedJSON);
        console.log(updatedJSON);
        //console.log(values);
      } catch (error) {}
    };
    fetchData();
  }, []);

  function splitTextIntoChunks(text) {
    const maxChunkLength = 15; // Adjust this value based on your needs
    const chunks = [];
    for (let i = 0; i < text?.toString().length; i += maxChunkLength) {
      chunks.push(text?.toString().substr(i, maxChunkLength));
    }
    return chunks;
  }

  return (
    <Document>
      <Page size="LEGAL" orientation="landscape" style={styles.page}>
        <View style={styles.section}>
          {/* This is Header  */}
          <View style={styles.headerbox}>
            <Text style={styles.heading}>{data.firm?.name} </Text>
            <Text style={styles.subheading}>সরকারি খাদ্য পরিবহন ঠিকাদার</Text>
            <Text style={styles.description}> {data.firm?.address} </Text>
          </View>
          {/* Down Header  */}
          <View style={styles.namebox}>
            <Text style={styles.description}>
              {" "}
              বিল নংঃ {data.billNo} তারিখঃ {data.date}
            </Text>
            <Text style={styles.description}> বরাবরঃ {data.submittedTo}</Text>
          </View>

          {/* Phone Number  */}
          <View style={styles.phoneNumber}>
            <Text>ফোনঃ {data.firm?.phone} </Text>
          </View>

          {/* Table  */}
          <View style={styles.table}>
            {Object.values(values).map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {Object.values(row).map((item, indx) => (
                  <View key={indx} style={styles.tableCol}>
                    {splitTextIntoChunks(item).map((chunk, chunkIndex) => (
                      <center key={chunkIndex}>
                        <Text style={styles.cellText}>{chunk}</Text>
                      </center>
                    ))}
                  </View>
                ))}
                <br></br>
              </View>
            ))}
          </View>
          <View style={styles.headerbox}>
            <Text>{"\n"}</Text>
            <Text>
              <Text style={{ fontSize: "30px" }}>মোট বিল: &nbsp; ৳</Text>{" "}
              {data.amount}{" "}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default BillPDF;
