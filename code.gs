function editRow(e) {
  var sheet = e.source.getActiveSheet();
  var sheetName = "YOUR SHEETNAME";

  if (sheet.getName() != sheetName) {
    return; // Exit if not the correct sheet
  }

  var range = e.range;
  var row = range.getRow();
  var column = range.getColumn();

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet(); // Get active Spreadsheet
  var sheet = spreadsheet.getSheetByName(sheetName); // Get sheet by name
  var headings = sheet.getDataRange().offset(0, 0, 1, sheet.getLastColumn()).getValues()[0]; // Get headings

  var values = sheet.getSheetValues(
    row, // Starting row
    1, // Starting column
    1, // Number of rows
    headings.length // Number of columns
  );

  var embed = {
    "title": "Spreadsheet Update",
    "color": 5814783, // Hex color #58ACFA (light blue)
    "fields": []
  };

  for (var i = 0; i < headings.length; i++) {
    var name = headings[i];
    var value = values[0][i];
    embed.fields.push({
      "name": name,
      "value": value.toString(), // Convert value to string
      "inline": true
    });
  }
  embed.fields.push({
    "name": "Row Number",
    "value": row.toString(),
    "inline": true
  });
  embed.fields.push({
    "name": "Column Number",
    "value": column.toString(),
    "inline": true
  });

  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify({
      "embeds": [embed]
    })
  };

  UrlFetchApp.fetch('INSERT YOURWEBHOOK', options);
}
