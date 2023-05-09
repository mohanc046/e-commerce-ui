import _ from 'lodash';

import jsPDF from "jspdf";

export const generateProductCatalogPDF = () => {

  const doc = new jsPDF({
    format: "A4",
    unit: "pt"
  });

  doc.setFont("Inter-Regular", "normal");

  let targetReport = document.getElementById('downloadReport-uniqueID')

  doc.html(targetReport, {
    async callback(doc) {
      await doc.save("productList");
    },
    width: 600,
    windowWidth: 600
  });

};
