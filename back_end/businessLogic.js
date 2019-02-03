const excel = require("exceljs");
const nodeoutlook = require("nodejs-nodemailer-outlook");

// Business Logic
/*
Middleware function to store data in Excel
*/
const excelMiddleware = (req, res, next) => {
  let formData = req.body;

  // create instance to read sourcefile
  const workBook1 = new excel.Workbook();

  // read the file
  workBook1.xlsx.readFile("Form.xlsx").then(() => {
    // Store data rows
    // Applicants Info
    let reqestedBy = "AA11";
    let department = "AA13";
    let location = "AA15";
    let manager = "AA17";
    let date = "BB11";
    // New User Info
    let nameOfUser = "AA24";
    let mimicUser = "AA26";
    let position = "AA28";
    let startDate = "AA30";
    let phoneExt = "AS24";
    let asap = "AH32";
    let necessity = "AT32";
    let fyi = "AI34";
    // Request
    let request = "M40";
    let benefit = "M44";
    // Resources
    let as400 = "X51";
    let network = "X53";
    let folderAccess = "X55";
    let rds = "X57";
    let networkRestore = "AO51";
    let smartPhone = "AO53";
    let pcOrLaptop = "AO55";
    let transportationSuite = "AO57";
    let powerSell = "BI51";
    let powerNet = "BI53";
    let fastFax = "BI55";
    let ric = "BI57";
    let powerAnalyzer = "BW51";

    // get worksheet of source file
    let CurrentWorkSheet = workBook1.getWorksheet("Sheet1");

    // get rows of source file to edit
    let Row11 = CurrentWorkSheet.getRow(11);
    let Row13 = CurrentWorkSheet.getRow(13);
    let Row15 = CurrentWorkSheet.getRow(15);
    let Row17 = CurrentWorkSheet.getRow(17);
    let Row24 = CurrentWorkSheet.getRow(24);
    let Row26 = CurrentWorkSheet.getRow(26);
    let Row28 = CurrentWorkSheet.getRow(28);
    let Row30 = CurrentWorkSheet.getRow(30);
    let Row32 = CurrentWorkSheet.getRow(32);
    let Row34 = CurrentWorkSheet.getRow(34);
    let Row40 = CurrentWorkSheet.getRow(40);
    let Row44 = CurrentWorkSheet.getRow(44);
    let Row51 = CurrentWorkSheet.getRow(51);
    let Row53 = CurrentWorkSheet.getRow(53);
    let Row55 = CurrentWorkSheet.getRow(55);
    let Row57 = CurrentWorkSheet.getRow(57);

    // edit row
    // Applicant info
    CurrentWorkSheet.getCell(reqestedBy).value =
      formData.applicantInfo.reqestedBy;
    CurrentWorkSheet.getCell(department).value =
      formData.applicantInfo.department;
    CurrentWorkSheet.getCell(location).value = formData.applicantInfo.location;
    CurrentWorkSheet.getCell(manager).value = formData.applicantInfo.manager;
    CurrentWorkSheet.getCell(date).value = formData.applicantInfo.date;
    // NewUser
    CurrentWorkSheet.getCell(nameOfUser).value = formData.newUser.nameOfUser;
    CurrentWorkSheet.getCell(mimicUser).value = formData.newUser.mimicUser;
    CurrentWorkSheet.getCell(position).value = formData.newUser.position;
    CurrentWorkSheet.getCell(startDate).value = formData.newUser.startDate;
    CurrentWorkSheet.getCell(phoneExt).value = formData.newUser.phoneExt;
    if (formData.newUser.priority === "ASAP") {
      CurrentWorkSheet.getCell(asap).value = "X";
    } else if (formData.newUser.priority === "Necessity(Two weeks)") {
      CurrentWorkSheet.getCell(necessity).value = "X";
    } else if (formData.newUser.priority === "FYI(One Month)") {
      CurrentWorkSheet.getCell(fyi).value = "X";
    }
    // Request
    CurrentWorkSheet.getCell(request).value = formData.formRequest.request;
    CurrentWorkSheet.getCell(benefit).value = formData.formRequest.someBenefits;
    // Resources
    for (let resource in formData.resources) {
      if (formData.resources[resource] && resource === "as400") {
        CurrentWorkSheet.getCell(as400).value = "X";
      } else if (formData.resources[resource] && resource === "network") {
        CurrentWorkSheet.getCell(network).value = "X";
      } else if (formData.resources[resource] && resource === "folderAccess") {
        CurrentWorkSheet.getCell(folderAccess).value = "X";
      } else if (formData.resources[resource] && resource === "rds") {
        CurrentWorkSheet.getCell(rds).value = "X";
      } else if (
        formData.resources[resource] &&
        resource === "networkRestore"
      ) {
        CurrentWorkSheet.getCell(networkRestore).value = "X";
      } else if (formData.resources[resource] && resource === "smartPhone") {
        CurrentWorkSheet.getCell(smartPhone).value = "X";
      } else if (formData.resources[resource] && resource === "pcOrLaptop") {
        CurrentWorkSheet.getCell(pcOrLaptop).value = "X";
      } else if (
        formData.resources[resource] &&
        resource === "transportationSuite"
      ) {
        CurrentWorkSheet.getCell(transportationSuite).value = "X";
      } else if (formData.resources[resource] && resource === "powerSell") {
        CurrentWorkSheet.getCell(powerSell).value = "X";
      } else if (formData.resources[resource] && resource === "powerNet") {
        CurrentWorkSheet.getCell(powerNet).value = "X";
      } else if (formData.resources[resource] && resource === "fastFax") {
        CurrentWorkSheet.getCell(fastFax).value = "X";
      } else if (formData.resources[resource] && resource === "ric") {
        CurrentWorkSheet.getCell(ric).value = "X";
      } else if (formData.resources[resource] && resource === "powerAnalyzer") {
        CurrentWorkSheet.getCell(powerAnalyzer).value = "X";
      }
    }

    // save changes
    Row11.commit();
    Row13.commit();
    Row15.commit();
    Row17.commit();
    Row24.commit();
    Row26.commit();
    Row28.commit();
    Row30.commit();
    Row32.commit();
    Row34.commit();
    Row40.commit();
    Row44.commit();
    Row51.commit();
    Row53.commit();
    Row55.commit();
    Row57.commit();

    // create tragetFile with modified workbook instance of sourceFile
    // return workBook1.xlsx.writeFile("Form2.xlsx").then(() => {
    //   console.log("New sheet created");
    // });
  });
  //   console.log(formData);
  res.send({ formData });
  next();
};

/*
  Middleware function to send emails to receipients on IRFs are submitted
  */
const sendEmailMiddlware = (req, res, next) => {
  let formData = req.body;
  nodeoutlook.sendEmail({
    auth: {
      user: "helpdesk@summit.colabor.com",
      pass: "W3H3lp4ll#"
    },
    from: "helpdesk@summit.colabor.com",
    to: "helpdesk@summit.colabor.com",
    subject: `New IRF Alert! - ${formData.applicantInfo.reqestedBy}`
  });
  next();
};

module.exports.excelMiddleware = excelMiddleware;
module.exports.sendEmailMiddlware = sendEmailMiddlware;
