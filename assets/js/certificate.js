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
  var y = 327;

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

  const careerData = [
    {
      imagePath: "assets/images/management/bba.jpeg",
      name: "Business Administration",
      qualification: "Bachelor of Business Administration (BBA)",
      category: "Management",
      cost: "Rs. 50000 - Rs. 400000",
      duration: "3 Years",
      careerid: "businessadministration",
    },
    {
      imagePath: "assets/images/management/mba.jpeg",
      name: "Sports Management",
      qualification: "Bachelor of Arts (BA)",
      cost: "Rs. 30000 - Rs. 100000",
      category: "Management",
      duration: "2 - 4 Years",
      careerid: "sportmanagement",
    },
    {
      imagePath: "assets/images/management/projectmanagement.jpeg",
      name: "Project Management",
      qualification: "Master of Business Administration (MBA)",
      category: "Management",
      cost: "Rs. 500000 - Rs. 600000",
      duration: "3-4 Years",
      careerid: "projectm",
    },
    {
      imagePath: "assets/images/management/itconsulting.jpeg",
      name: "Event Management",
      qualification: "Bachelor of Business Administration (BBA)",
      category: "Management",
      cost: "Rs. 50000 - Rs. 400000",
      duration: "3 Years",
      careerid: "eventm",
    },
    {
      imagePath: "assets/images/management/hotelmanagement.jpeg",
      name: "Fashion Business Management",
      qualification: "Bachelor of Business Administration (BBA)",
      category: "Management",
      cost: "Rs. 50000 - Rs. 400000",
      duration: "3 - 4 Years",
      careerid: "fash",
    },
    {
      imagePath: "assets/images/engineering/cse.jpg",
      name: "Computer Science and Engineering",
      qualification: "Bachelor of Technology",
      category: "Engineering",
      cost: "Rs. 500000 - Rs. 2400000",
      duration: "4 Years",
      careerid: "cse",
    },
    {
      imagePath: "assets/images/engineering/aiml.jpg",
      name: "Artificial Intelligence & Machine Learning",
      qualification: "Bachelor of Technology",
      cost: "Rs. 500000 - Rs. 2400000",
      category: "Engineering",
      duration: "4 Years",
      careerid: "aiml",
    },
    {
      imagePath: "assets/images/engineering/ece.jpeg",
      name: "Electronics and communication Engineering",
      qualification: "Bachelor of Technology",
      cost: "Rs. 500000 - Rs. 2400000",
      category: "Engineering",
      duration: "4 Years",
      careerid: "ece",
    },
    {
      imagePath: "assets/images/engineering/electrical.jpeg",
      name: "Electrical Engineering",
      qualification: "Bachelor of Technology",
      cost: "Rs. 500000 - Rs. 2400000",
      category: "Engineering",
      duration: "4 Years",
      careerid: "ee",
    },
    {
      imagePath: "assets/images/engineering/electrical_instrumentation.jpeg",
      name: "Electrical and Instrumentation Engineering",
      qualification: "Bachelor of Technology",
      cost: "Rs. 500000 - Rs. 2400000",
      category: "Engineering",
      duration: "4 Years",
      careerid: "eie",
    },
    {
      imagePath: "assets/images/engineering/aerospace.jpeg",
      name: "Aerospace Engineering",
      qualification: "Bachelor of Technology",
      cost: "Rs. 500000 - Rs. 2400000",
      category: "Engineering",
      duration: "4 Years",
      careerid: "aero",
    },
    {
      imagePath: "assets/images/engineering/mechanical.jpeg",
      name: "Mechanical engineering",
      qualification: "Bachelor of Technology",
      cost: "Rs. 500000 - Rs. 2400000",
      category: "Engineering",
      duration: "4 Years",
      careerid: "mech",
    },
    {
      imagePath: "assets/images/engineering/civil.jpeg",
      name: "Civil Engineering",
      qualification: "Bachelor of Technology",
      cost: "Rs. 500000 - Rs. 2400000",
      category: "Engineering",
      duration: "4 Years",
      careerid: "civil",
    },
    {
      imagePath: "assets/images/medical/d.jpg",
      name: "Doctor",
      qualification: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
      category: "Medicine",
      duration: "5 - 7 Years",
      cost: "Rs. 50000 - Rs. 1000000",
      careerid: "doctor",
    },
    {
      imagePath: "assets/images/medical/s.jpg",
      name: "Surgeon",
      qualification: "Master of Surgery (MS)",
      category: "Medicine",
      cost: "Rs. 100000 - Rs. 1800000",
      duration: "8 Years",
      careerid: "surgeon",
    },
    {
      imagePath: "assets/images/medical/p.jpg",
      name: "Pathology",
      qualification: "Doctor of Medicine (MD) in Pathology",
      category: "Medicine",
      cost: "Rs. 50000 - Rs. 1000000",
      duration: "7 Years",
      careerid: "pathology",
    },
    {
      imagePath: "assets/images/medical/v.jpg",
      name: "Veterinary",
      qualification: "Bachelor of Veterinary Science and Animal Husbandry (BVSc & AH)",
      category: "Medicine",
      duration: "5 Years",
      cost: "Rs. 50000 - Rs. 800000",
      careerid: "veterinary",
    },
    {
      imagePath: "assets/images/medical/o.jpg",
      name: "Orthopaedic",
      qualification: "Master of Surgery (MS) in Orthopedics",
      category: "Medicine",
      cost: "Rs. 100000 - Rs. 1500000",
      duration: "8 Years",
      careerid: "orthopaedic",
    },
    {
      imagePath: "assets/images/medical/op.jpg",
      name: "Ophthalmology",
      qualification: "Master of Surgery (MS) in Ophthalmology",
      category: "Medicine",
      cost: "Rs. 100000 - Rs. 1500000",
      duration: "8 Years",
      careerid: "optha",
    },
    {
      imagePath: "assets/images/medical/nursing.jpeg",
      name: "Nursing",
      qualification: "Bachelor of Science (B.Sc) in Nursing",
      category: "Medicine",
      cost: "Rs. 40000 - Rs. 60000",
      duration: "3 - 4 Years",
      careerid: "nursing",
    },
    {
      imagePath: "assets/images/digitalgraphics/fashd.jpg",
      name: "Fashion Designer",
      qualification: "Bachelor of Design (B.Des)",
      category: "Design & Graphics",
      cost: "Rs. 200000 - Rs. 400000",
      duration: "3 - 4 Years",
      careerid: "fashiondesigner",
    },
    {
      imagePath: "assets/images/digitalgraphics/uiux.jpeg",
      name: "UI/UX Designer",
      qualification: "Bachelor of Computer Application",
      category: "Design & Graphics",
      cost: "Rs. 200000 - Rs. 400000",
      duration: "2 - 4 Years",
      careerid: "uiux",
    },
    {
      imagePath: "assets/images/digitalgraphics/graphicsdesign.jpg",
      name: "Graphic Designer",
      qualification: "Bachelor of Design (B.Des)",
      category: "Design & Graphics",
      cost: "Rs. 200000 - Rs. 400000",
      duration: "2 - 4 Years",
      careerid: "graphic",
    },
    {
      imagePath: "assets/images/digitalgraphics/animationgraphics.jpg",
      name: "Interior Designer",
      qualification: "Bachelor of Design (B.Des)",
      category: "Design & Graphics",
      cost: "Rs. 200000 - Rs. 400000",
      duration: "2 - 4 Years",
      careerid: "interior",
    },
    {
      imagePath: "assets/images/digitalgraphics/jd.jpg",
      name: "Jewellery Designer",
      qualification: "Bachelor of Design (B.Des) in Jewellery Retail and Export Management",
      category: "Design & Graphics",
      cost: "Rs. 200000 - Rs. 400000",
      duration: "2 - 4 Years",
      careerid: "jewellery",
    },
    {
      imagePath: "assets/images/graduate/zoology.jpg",
      name: "Zoology",
      qualification: "Bachelor of Science (B.Sc)",
      category: "Graduate",
      cost: "Rs. 50000 - Rs. 80000",
      duration: "3 Years",
      careerid: "zoo",
    },
    {
      imagePath: "assets/images/graduate/botany.png",
      name: "Botany",
      qualification: "Bachelor of Science (B.Sc)",
      cost: "Rs. 50000 - Rs. 80000",
      category: "Graduate",
      duration: "3 Years",
      careerid: "botany",
    },
    {
      imagePath: "assets/images/graduate/physics.jpg",
      name: "Physics Hons.",
      qualification: "Bachelor of Science (B.Sc)",
      cost: "Rs. 50000 - Rs. 80000",
      category: "Graduate",
      duration: "3 Years",
      careerid: "phyhon",
    },
    {
      imagePath: "assets/images/graduate/Chemistry.jpg",
      name: "Chemistry Hons.",
      qualification: "Bachelor of Science (B.Sc)",
      cost: "Rs. 50000 - Rs. 80000",
      category: "Graduate",
      duration: "3 Years",
      careerid: "chemhon",
    },
    {
      imagePath: "assets/images/graduate/RJ.jpg",
      name: "Radio Jockey",
      qualification: "Any Bachelor's Degree",
      cost: "Rs. 50000 - Rs. 80000",
      category: "Graduate",
      duration: "3 Years",
      careerid: "rj",
    },
    {
      imagePath: "assets/images/graduate/entrepreneur.jpg",
      name: "Entrepreneurship",
      qualification: "Any Bachelor's Degree",
      cost: "Rs. 50000 - Rs. 600000",
      category: "Graduate",
      duration: "2 Years",
      careerid: "ent",
    },
    {
      imagePath: "assets/images/financeaccounts/ca.png",
      name: "Chartered Accountant",
      qualification: "Chartered Accountancy (CA)",
      cost: "Rs. 200000 - Rs. 300000",
      category: "Finance And Accounts",
      duration: "3 - 5 Years",
      careerid: "ca",
    },
    {
      imagePath: "assets/images/financeaccounts/mar.jpg",
      name: "Chartered Market Technician",
      qualification: "Bachelor of Commerce in Finance",
      cost: "Rs. 40000 - Rs. 60000",
      category: "Finance And Accounts",
      duration: "1 - 3 Years",
      careerid: "cmt",
    },
    {
      imagePath: "assets/images/financeaccounts/mark.jpg",
      name: "Chartered Financial Analyst",
      qualification: "Bachelor of Commerce in Finance",
      cost: "Rs. 40000 - Rs. 60000",
      category: "Finance And Accounts",
      duration: "3 - 4 Years",
      careerid: "cfa",
    },
    {
      imagePath: "assets/images/financeaccounts/markk.jpg",
      name: "Cost Accountant",
      qualification: "Intermediate course of Cost Accountancy (ICA)",
      cost: "Rs. 200000 - Rs. 300000",
      category: "Finance And Accounts",
      duration: "3 - 4 Years",
      careerid: "coa",
    },
    {
      imagePath: "assets/images/financeaccounts/markkk.jpg",
      name: "Certified Public Accountant",
      qualification: "Bachelor of Commerce in Finance",
      cost: "Rs. 40000 - Rs. 60000",
      category: "Finance And Accounts",
      duration: "3 - 5 Years",
      careerid: "cpa",
    },
    {
      imagePath: "assets/images/education/education.jpg",
      name: "Counsellor",
      qualification: "Bachelor of Arts in Psychology",
      cost: "Rs. 40000 - Rs. 60000",
      category: "Education And Training",
      duration: "4 - 5 Years",
      careerid: "counsellor",
    },
    {
      imagePath: "assets/images/education/trainingcourses.jpeg",
      name: "Teacher",
      qualification: "Bachelor of Education (B.Ed)",
      cost: "Rs. 40000 - Rs. 60000",
      category: "Education And Training",
      duration: "4 - 5 Years",
      careerid: "teacher",
    },
    {
      imagePath: "assets/images/education/special-edu.jpg",
      name: "Special Educator",
      qualification: "Bachelor of Education in Special Education",
      cost: "Rs. 40000 - Rs. 60000",
      category: "Education And Training",
      duration: "4 - 5 Years",
      careerid: "speced",
    },
    {
      imagePath: "assets/images/education/lawyer.jpg",
      name: "Professor",
      qualification: "Doctor of Philosophy (Ph.D)",
      cost: "Rs. 30000 - Rs. 300000",
      category: "Education And Training",
      duration: "5 - 7 Years",
      careerid: "prof",
    },
    {
      imagePath: "assets/images/civilservices/upsc.jpeg",
      name: "Civil Services",
      qualification: "Any Bachelor's Degree",
      cost: "Rs. 40000 - Rs. 200000",
      category: "Education And Training",
      duration: "1 - 2 Years",
      careerid: "civils",
    },
    {
      imagePath: "assets/images/civilservices/wbpsc.jpg",
      name: "Railway Services",
      qualification: "Any Bachelor's Degree",
      cost: "Rs. 40000 - Rs. 200000",
      category: "Education And Training",
      duration: "1 - 2 Years",
      careerid: "rails",
    },
    {
      imagePath: "assets/images/civilservices/ics.jpeg",
      name: "Customs And Excises",
      qualification: "Any Bachelor's Degree",
      cost: "Rs. 40000 - Rs. 200000",
      category: "Education And Training",
      duration: "1 - 2 Years",
      careerid: "ces",
    },
    {
      imagePath: "assets/images/civilservices/ips.jpg",
      name: "Income Tax Service",
      qualification: "Any Bachelor's Degree",
      cost: "Rs. 40000 - Rs. 200000",
      category: "Education And Training",
      duration: "1 - 2 Years",
      careerid: "its",
    },
    {
      imagePath: "assets/images/civilservices/nda.jpeg",
      name: "Indian Economic System",
      qualification: "Master of Science (M.Sc) in Economics",
      cost: "Rs. 40000 - Rs. 200000",
      category: "Education And Training",
      duration: "1 - 2 Years",
      careerid: "iess",
    },
    {
      imagePath: "assets/images/mediajournalism/mc.jpg",
      name: "Mass Communication",
      qualification: " Bachelor Of Arts",
      cost: "Rs. 40000 - Rs. 60000",
      category: "Media & Journalism",
      duration: "3 Years",
      careerid: "mascom",
    },
    {
      imagePath: "assets/images/mediajournalism/pr.jpg",
      name: "Public Relations",
      qualification: "Bachelor Of Arts",
      cost: "Rs. 40000 - Rs. 60000",
      category: "Media & Journalism",
      duration: "3-4 Year",
      careerid: "pr",
    },
    {
      imagePath: "assets/images/mediajournalism/w.jpg",
      name: "Writer, Editor, Copywriter",
      qualification: "Bachelor Of Arts",
      cost: "Rs. 40000 - Rs. 60000",
      ategory: "Media & Journalism",
      duration: "3-4 Yesrs",
      careerid: "writer",
    },
    {
      imagePath: "assets/images/mediajournalism/b.jpg",
      name: "Broadcasting",
      qualification: "Bachelor Of Arts",
      cost: "Rs. 40000 - Rs. 60000",
      category: "Media & Journalism",
      duration: "1 Year",
      careerid: "Broadcasting",
    },
    {
      imagePath: "assets/images/mediajournalism/j.jpg",
      name: "Journalism",
      qualification: "Bachelor Of Arts",
      cost: "Rs. 40000 - Rs. 60000",
      category: "Media & Journalism",
      duration: "3 Year",
      careerid: "journalism",
    },
    {
      imagePath: "assets/images/marketing/d.jpg",
      name: "Digital Marketing",
      qualification: "Bachelor Degree In Any Field",
      category: "Sales And Marketing",
      cost: "Rs. 40000 - Rs. 60000",
      duration: "1 Years",
      careerid: "digi",
    },
    {
      imagePath: "assets/images/marketing/a.jpg",
      name: "Advertisement",
      qualification: "Bachelor In Any Field",
      category: "Sales And Marketing",
      cost: "Rs. 40000 - Rs. 60000",
      duration: "1 Year",
      careerid: "ad",
    },
    {
      imagePath: "assets/images/marketing/s.jpg",
      name: "Sales",
      qualification: "Bachelor Of Business Administration (BBA)",
      ategory: "Sales And Marketing",
      cost: "Rs. 50000 - Rs. 400000",
      duration: "3-4 Yesrs",
      careerid: "sales",
    },
    {
      imagePath: "assets/images/marketing/p.jpg",
      name: "Product Designer",
      qualification: "Bachelor's Degree in Industrial Design, Manufacturing",
      category: "Sales And Marketing",
      cost: "Rs. 50000 - Rs. 100000",
      duration: "4 Years",
      careerid: "prod",
    },
    {
      imagePath: "assets/images/marketing/m.jpg",
      name: "Marketing",
      qualification: "Bachelor Of Business Administration (BBA)",
      category: "Sales And Marketing",
      cost: "Rs. 50000 - Rs. 400000",
      duration: "1 Year",
      careerid: "mark",
    },
    {
      imagePath: "assets/images/aviation/at.jpg",
      name: "Air Traffic Controller",
      qualification: "Bachelor of Technology (B.Tech)",
      category: "Aviation",
      cost: "Rs. 500000 - Rs. 2400000",
      duration: "4 Years",
      careerid: "atc",
    },
    {
      imagePath: "assets/images/aviation/am.jpg",
      name: "Aircraft Maintanence Engineer",
      qualification: "Bachelor Of Technology (BTech)",
      cost: "Rs. 500000 - Rs. 2400000",
      category: "Aviation",
      duration: "4 Years",
      careerid: "ame",
    },
    {
      imagePath: "assets/images/aviation/c.jpg",
      name: "Cabin Crew",
      qualification: "Engineering Diploma (Diploma)",
      cost: "Rs. 100000 - Rs. 400000",
      category: "Aviation",
      duration: "3 Years",
      careerid: "cc",
    },
    {
      imagePath: "assets/images/aviation/f.jpg",
      name: "Flight Attendant",
      qualification: "Undergrad Degree In Aviation",
      category: "Aviation",
      cost: "Rs. 26000 - Rs. 100000",
      duration: "4 Years",
      careerid: "fa",
    },
    {
      imagePath: "assets/images/aviation/p.jpg",
      name: "Pilot",
      qualification: "High School Diploma",
      category: "Aviation",
      cost: "Rs. 7000000 - Rs. 10000000",
      duration: "3 - 4 Years",
      careerid: "pilot",
    },
    {
      imagePath: "assets/images/humanities/a.jpg",
      name: "Archaeology",
      qualification: "Bachelor's degree in Archaeology",
      cost: "Rs. 50000 - Rs. 100000",
      category: "Humanities",
      duration: "3 Years",
      careerid: "arch",
    },
    {
      imagePath: "assets/images/humanities/p.jpg",
      name: "Public Administration",
      qualification: "Bachelor Degree In Public Admministration",
      cost: "Rs. 60000 - Rs. 100000",
      category: "Humanities",
      duration: "3 Year",
      careerid: "PA",
    },
    {
      imagePath: "assets/images/humanities/h.jpg",
      name: "Home Science",
      qualification: "Bachelor Degree In Home Science",
      cost: "Rs. 40000 - Rs. 70000",
      ategory: "Humanities",
      duration: "3 Yesrs",
      careerid: "HomeSc",
    },
    {
      imagePath: "assets/images/humanities/g.jpg",
      name: "Geography",
      qualification: "Bachelor's degree in Geography",
      cost: "Rs. 20000 - Rs. 50000",
      category: "Humanities",
      duration: "3 Years",
      careerid: "Geo",
    },
    {
      imagePath: "assets/images/humanities/po.jpg",
      name: "Political Science",
      qualification: "Bachelor Degree In Political Science",
      cost: "Rs. 20000 - Rs. 50000",
      category: "Humanities",
      duration: "3 Year",
      careerid: "PoliSc",
    },
    {
      imagePath: "assets/images/humanities/l.jpg",
      name: "Language",
      qualification: "Bachelor Of Arts (BA)",
      cost: "Rs. 20000 - Rs. 50000",
      category: "Humanities",
      duration: "3 Year",
      careerid: "lang",
    },
    {
      imagePath: "assets/images/humanities/s.jpg",
      name: "Sociology",
      qualification: "Bachelor Degree In Sociology",
      cost: "Rs. 20000 - Rs. 50000",
      category: "Humanities",
      duration: "3 Year",
      careerid: "sociology",
    },
    {
      imagePath: "assets/images/humanities/i.jpg",
      name: "International Relation",
      qualification: "Bachelor Degree In International Relation",
      cost: "Rs. 200000 - Rs. 300000",
      category: "Humanities",
      duration: "3 Year",
      careerid: "intreln",
    },
  ];

  const selectedCareerId = localStorage.getItem("finalQ");
  
  const crs = selectedCareerId.split(",");
  const fontBytes2 = await fetch("assets/js/Lato-Regular.ttf").then((res) =>
    res.arrayBuffer()
  );

  // Embed our custom font in the document
  const LatoFont = await pdfDoc.embedFont(fontBytes2);

  career = careerData.find(c => c.careerid === crs)
  var index = 1;
  const page2 = pages[2];

  var y2 = 620;

  for (var i = 0; i < crs.length; i++) {


    const career = careerData.find(c => c.careerid === crs[i])
    const name = `${index}. ${career.name}:`
    const qual = `Qualification: ${career.qualification}`
    const cat = `Category: ${career.category}`
    const dur = `Duration: ${career.duration}`
    fee = `Approximate Fees to Pursue: ${career.cost}`

    // Draw a string of text diagonally across the first page
    page2.drawText(name, {
      x: 45,
      y: y2,
      size: 15,
      font: LatoFont
    });
    y2 = y2 - 25;
    page2.drawText(qual, {
      x: 45,
      y: y2,
      size: 12,
      font: LatoFont
    });
    y2 -= 17;
    page2.drawText(cat, {
      x: 45,
      y: y2,
      size: 12,
      font: LatoFont
    });
    y2 -= 17;
    page2.drawText(dur, {
      x: 45,
      y: y2,
      size: 12,
      font: LatoFont
    });
    y2-=17;
    page2.drawText(fee, {
      x: 45,
      y: y2,
      size: 12,
      font: LatoFont
    });

    y2 -= 30;
    index += 1;
  }



  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  console.log("Done creating");

  // this was for creating uri and showing in iframe

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("pdf").src = pdfDataUri;

  var file = new File(
    [pdfBytes],
    "eDvance Test Report.pdf",
    {
      type: "application/pdf;charset=utf-8",
    }
  );
  saveAs(file);
};
