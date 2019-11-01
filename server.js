//lage handlebars for å legge inn htlm og lage en pdf fil med react

require("dotenv").config();

const nodemailer = require("nodemailer");

// Steg 1 legger til passord og transporter

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

// Steg 2 Innholdet i mailen

let mailOptions = {
  from: "noreply",
  to: "dengjoak@gmail.com",
  subject: "Betaling av Månedens faktura",
  text: "Hei, dett er en automatisk faktura sendt med anthill",
  attachments: [
    {
      filename: "invoice.pdf",
      path: "./invoice.pdf"
    }
  ],

  html: `<!doctype html>
  <html>
  
  <head>
      <meta charset="utf-8">
      <title>PDF Result Template</title>
      <style>
          .invoice-box {
              max-width: 800px;
              margin: auto;
              padding: 30px;
              border: 1px solid #eee;
              box-shadow: 0 0 10px rgba(0, 0, 0, .15);
              font-size: 16px;
              line-height: 24px;
              font-family: 'Helvetica Neue', 'Helvetica', color: #555;
          }
          
          .margin-top {
              margin-top: 50px;
          }
          
          .justify-center {
              text-align: center;
          }
          
          .invoice-box table {
              width: 100%;
              line-height: inherit;
              text-align: left;
          }
          
          .invoice-box table td {
              padding: 5px;
              vertical-align: top;
          }
          
          .invoice-box table tr td:nth-child(2) {
              text-align: right;
          }
          
          .invoice-box table tr.top table td {
              padding-bottom: 20px;
          }
          
          .invoice-box table tr.top table td.title {
              font-size: 45px;
              line-height: 45px;
              color: #333;
          }
          
          .invoice-box table tr.information table td {
              padding-bottom: 40px;
          }
          
          .invoice-box table tr.heading td {
              background: #eee;
              border-bottom: 1px solid #ddd;
              font-weight: bold;
          }
          
          .invoice-box table tr.details td {
              padding-bottom: 20px;
          }
          
          .invoice-box table tr.item td {
              border-bottom: 1px solid #eee;
          }
          
          .invoice-box table tr.item.last td {
              border-bottom: none;
          }
          
          .invoice-box table tr.total td:nth-child(2) {
              border-top: 2px solid #eee;
              font-weight: bold;
          }
          
          @media only screen and (max-width: 600px) {
              .invoice-box table tr.top table td {
                  width: 100%;
                  display: block;
                  text-align: center;
              }
              .invoice-box table tr.information table td {
                  width: 100%;
                  display: block;
                  text-align: center;
              }
          }
      </style>
  </head>
  
  <body>
      <div class="invoice-box">
          <table cellpadding="0" cellspacing="0">
              <tr class="top">
                  <td colspan="2">
                      <table>
                          <tr>
                              
                              <td>
                                  Date: 01.11.2019
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
              <tr class="information">
                  <td colspan="2">
                      <table>
                          <tr>
                              <td>
                                  Customer name: Deng Wuor Joak
                              </td>
                              <td>
                                  Receipt number: 1
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
              <tr class="heading">
                  <td>Bought items:</td>
                  <td>Price</td>
              </tr>
              <tr class="item">
                  <td>First item:</td>
                  <td>1$</td>
              </tr>
              <tr class="item">
                  <td>Second item:</td>
                  <td>2000$</td>
                  
              </tr>
          </table>
          <br />
          <h1 class="justify-center">Total price: 2001$ </h1>

          <button>Betal nå</button>
      </div>
  </body>
  </html
  `
};

//Steg 3 Sender mail og bekreftelse eller feilmelding

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("Feil skjer", err);
  } else {
    console.log("Email er sendt!!!");
  }
});
