# Google Sheets to Discord Webhook Integration

This Google Apps Script listens for changes in a specified Google Sheets document and sends the updated row data to a Discord channel via a webhook in an embedded format.

## Features

- Monitors edits in all cells of a specific sheet (`Blad1`).
- Sends an embedded message to a specified Discord channel via webhook with the updated data.

## Setup

### Prerequisites

- A Google Sheets document with a sheet named `Blad1`.
- A Discord webhook URL. You can create one by following [this guide](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).

### Installation

1. Open your Google Sheets document.
2. Click on `Extensions` > `Apps Script`.
3. Delete any code in the script editor and paste in the [following code](https://github.com/ItsNyoty/Spreadsheets-Discord-Webhook-Sender/blob/main/code.gs)
4. Replace `'INSERT YOURWEBHOOK'` with your actual Discord webhook URL.
5. Replace `'YOUR SHEETNAME'` with the sheet you want to log.
6. Save the script.

### Adding the Trigger

1. In the Apps Script editor, click on the clock icon to open the triggers page.
2. Click on `+ Add Trigger`.
3. Set the function to `editRow`, the deployment to `Head`, the event source to `From spreadsheet`, and the event type to `On edit`.
4. Save the trigger.

## Usage

Once the trigger is set up, any edit made to the sheet will automatically send the updated row's data to the specified Discord webhook in an embedded message format.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
