import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import data from './data.json';
import {  Font } from '@react-pdf/renderer'

import BengaliFont from './AnekBangla.ttf';

Font.register({
  family: 'AnekBangla',
  src: BengaliFont,
});



const values = Object.values(data.Invoice);

const styles = StyleSheet.create({

  cellText: {
    fontFamily: 'AnekBangla', // Use the registered font family
    fontSize: 12,
    margin: 'auto',
    padding: 2
  },
  
  page: {
    fontFamily: 'AnekBangla',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  section: {
    margin: 5,
    padding: 5,
    flexGrow: 1,
  },
  headerbox:{
    position: 'center',
    top: 10,
    textAlign: 'center',
    marginBottom: 5,
  },
  namebox: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subheading: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 2,
  },
  description: {
    fontSize: 12,
  },
  phoneNumber: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: { margin: 'auto', flexDirection: 'row' },
  tableCol: {
    width: '10%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  }
});

const PdfFile = () => (
  
  <Document>
    <Page size="B3" style={styles.page}>
      <View style={styles.section}>

        {/* This is Header  */}
        <View style={styles.headerbox}>
          <Text style={styles.heading}>মেসার্স বলাকা ওভারসীজ ট্রেডিং</Text>
          <Text style={styles.subheading}>সরকারি খাদ্য পরিবহন ঠিকাদার</Text>
          <Text style={styles.description}> ৪৬৪/এ, ডি.টি. রোড, কদমতলী, চট্টগ্রাম।</Text>
        </View>
        {/* Down Header  */}
        <View style={styles.namebox}>
          <Text style={styles.description}> বিল নংঃ {data.billNo}       তারিখঃ  {data.date}</Text>
          <Text style={styles.description}> বরাবরঃ {data.submittedTo}</Text>
        </View>
        
        {/* Phone Number  */}
        <View style={styles.phoneNumber}>
          <Text>ফোনঃ ০১২৩৪৫৬৭৮৯</Text>
        </View>


        {/* Table  */}
        <View style={styles.table}>
          {values.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.tableRow}>
              {Object.values(row).map((item) => (
                <View key={item} style={styles.tableCol}>
                  <Text style={styles.cellText}>{item }</Text>
                </View>
              ))}
              <br></br> 
            </View>
          ))}   
        </View>

      </View>
    </Page>
    
  </Document>
);

export default PdfFile;