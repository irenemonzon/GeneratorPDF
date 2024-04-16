import { Document, Page, Text, View } from '@react-pdf/renderer';

const PdfGenerator = ({ name, course }) => (
  <Document>
    <Page size="A4">
      <View>
        <Text>Name: {name}</Text>
        <Text>Course: {course}</Text>
        <Text>Date: {new Date().toLocaleDateString()}</Text>
      </View>
    </Page>
  </Document>
);

export default PdfGenerator;
