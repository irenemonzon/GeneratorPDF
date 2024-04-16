import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 14,
    marginBottom: 10,
  },
  table: {
    border: '1 solid black',
    borderWidth: 1,
    borderCollapse: 'collapse',
    width: '100%',
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    alignItems: 'center',
    padding: 5,
  },
  cell: {
    flex: 1,
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  headerCell: {
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
});

const PdfGenerator = ({ name, course }) => (
  <Document>
    <Page size="A4">
      <View style={styles.container}>
        <Text style={styles.title}>Student Information</Text>
        <Text style={styles.info}>Name: {name}</Text>
        <Text style={styles.info}>Course: {course}</Text>
        <Text style={styles.info}>Date of offer: {new Date().toLocaleDateString()}</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, styles.headerCell]}>Year</Text>
            <Text style={[styles.cell, styles.headerCell]}>One Time Fee</Text>
            <Text style={[styles.cell, styles.headerCell]}>Tuition Fee</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.cell}>1</Text>
            <Text style={styles.cell}>$100</Text>
            <Text style={styles.cell}>$500</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.cell}>2</Text>
            <Text style={styles.cell}>$100</Text>
            <Text style={styles.cell}>$600</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default PdfGenerator;
