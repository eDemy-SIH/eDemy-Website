const userName = localStorage.getItem("name");
const submitBtn = document.getElementById("submitBtn");
const cat = localStorage.getItem("finalO");
const { PDFDocument, rgb, degrees } = PDFLib;


const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

submitBtn.addEventListener("click", () => {
  const val = capitalize(userName);
  
  if (val.trim() !== "") {
    generatePDF(val);
  }
});

var filename = "";

if (cat == "R")
  filename = "assets/reports/Realistic.pdf";

else if (cat == "I")
  filename = "assets/reports/Investigative.pdf";

else if (cat == "A")
  filename = "assets/reports/Artistic.pdf";

else if (cat == "S")
  filename = "assets/reports/Social.pdf";

else if (cat == "E")
  filename = "assets/reports/Enterprising.pdf";

else
  filename = "assets/reports/Conventional.pdf";


const generatePDF = async (name) => {
  const existingPdfBytes = await fetch(filename).then((res) =>
    res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);

  //get font
  const fontBytes = await fetch("assets/js/Sanchez-Regular.ttf").then((res) =>
    res.arrayBuffer()
  );

  // Embed our custom font in the document
  const SanChezFont = await pdfDoc.embedFont(fontBytes);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  var size = 42;
  var x = 202;
  var y= 327;

  if (name.length > 17) {
    const ratio = name.length / 17;
    size = size / ratio;
    x += ratio;
    y += ratio * 5;
  }

  // Draw a string of text diagonally across the first page
  firstPage.drawText(name, {
    x: x,
    y: y,
    size: size,
    font: SanChezFont,
    color: rgb(0.2, 0.84, 0.67),
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  console.log("Done creating");

  // this was for creating uri and showing in iframe

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("pdf").src = pdfDataUri;

  var file = new File(
    [pdfBytes],
    "eDemy Test Report.pdf",
    {
      type: "application/pdf;charset=utf-8",
    }
  );
  saveAs(file);
};

// init();
