# Express React Text Editor

This is a simple text editor application built with Express.js and React.js. It allows users to create, edit, and save text content.

## Features

- **File List:** Display a list of files available for editing.
- **Text Editor:** Edit the content of selected files using a rich text editor.
- **Save Content:** Save the edited content to the server.

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/Vsjangal/Text_editor.git
    ```

2. Install dependencies:

    ```bash
    cd text-editor nodejs/client
    npm run dev
    ```

3. Start the server:

    ```bash
    cd server
    npm start
    ```

4. Open the application in your web browser:

    ```
    http://localhost:5173
    ```

5. Check you server on port 3000:

    ```
    http://localhost:3000
    ```
6. Use your own connection string for mongodb.
## Usage

- Click on a file name from the file list to edit its content in the text editor.
- Make changes to the content using the rich text editor.
- Click the "Save" button to save the changes to the server.

## Screenshots

1. No File
   ![No File](https://github.com/Vsjangal/Text_editor/blob/main/images/no-file.png)

2. Create a File
   ![Single File](https://github.com/Vsjangal/Text_editor/blob/main/images/1file.png)

3. Multiple Files
   ![Multiple Files](https://github.com/Vsjangal/Text_editor/blob/main/images/mutliplefile.png)

4. Updated above File
   ![Update File](https://github.com/Vsjangal/Text_editor/blob/main/images/updatefile.png)

## Technologies Used

- **Express.js:** Backend framework for handling HTTP requests and responses.
- **React.js:** Frontend library for building user interfaces.
- **MongoDB:** Database for storing file content.
- **Axios:** HTTP client for making requests to the server.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
