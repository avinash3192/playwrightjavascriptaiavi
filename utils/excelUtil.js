// import the ExcelJS library from the exceljs package which is used to read and write Excel files in Node.js 
// & the exceljs package provides a simple and powerful API for working with Excel files, including reading and writing data, formatting cells, and creating charts and graphs.
// The excelRead function is an asynchronous function that takes a file path as an argument and reads the contents of the Excel file located at that path. 
// It uses the ExcelJS library to create a new workbook, read the Excel file, and get the first worksheet in the workbook. 
// It then loops through each row in the worksheet and logs the values of each cell to the console. 
// Finally, it returns the worksheet object for further processing if needed.
//package.json file is used to manage the dependencies of a Node.js project. It contains metadata about the project, including its name, version, description, author, and license.
//if package.json is merged with package-lock.json, it will ensure that the exact same versions of dependencies are installed across different environments, which can help prevent issues caused by version mismatches.
import ExcelJS from 'exceljs';

export async function excelRead(filePath){
    // Create a new workbook and read the Excel file
    const workbook = new ExcelJS.Workbook();

    // Read the Excel file
    await workbook.xlsx.readFile(filePath);

    // Get the first worksheet in the workbook
    const worksheet =workbook.getWorksheet('Sheet1')

    // Loop through each row in the worksheet and log the values of each cell
    worksheet.eachRow((row, rowNumber)=> {
        console.log(`Row ${rowNumber}`);

        // Loop through each cell in the row and log the value
        row.eachCell((cell, colNumber) =>{
            console.log(`Cell ${colNumber} = ${cell.value}`);
        });

    });
    // Return the worksheet object for further processing if needed
    return worksheet;
}


export async function getValidUser(filepath){
    const workBook = new ExcelJS.Workbook();
    await workBook.xlsx.readFile(filepath);
    const workSheet = workBook.getWorksheet('Sheet1');
    let validUser;

    workSheet.eachRow((row) => {
        const loginType=String(row.getCell(1).value ?? '').trim().toLowerCase();

        if(loginType==='valid login'){
            validUser={
                username:String(row.getCell(2).value ?? '').trim(),
                password:String(row.getCell(3).value ?? '').trim()

            };
        };
        });

        if(!validUser?.username || !validUser?.password){
            throw new Error('Valid login credentials were not found in the Excel sheet.');
        }
        return validUser;
    }

