import { test, expect,request,chromium} from '@playwright/test';

test('test @record' , async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('L');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Learn ');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Learn P');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Learn Playwright ');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Learn Playwright MCP');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('P');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Practice ');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Practice P');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Practice Playwright automation');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('W');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Write automated tests');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
});

test("API test practice @API", async ()=>{
  const apiContext = await request.newContext();
 const response = await apiContext.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41");
 console.log(response.statusText());
 console.log(response.status());
  expect(response.status()).toBe(200);
  const responseJson = await response.json();
   console.log(responseJson);
   console.log(responseJson.latitude);
   console.log(`Response body is ${JSON.stringify(responseJson,null,2)}`);
});


test("Browser launch @apilaunch", async ({request})=>{
  const requestPayload = {  "name": "morpheus",
  "job": "leader"
  };
  const postResponse = await request.post("https://reqres.in/api/users",{
    data: requestPayload,
    headers: {
      Accept: "application/json"
    }
  });
console.log(postResponse.status());

const updatePutPayload = {
  "name": "morpheus",
  "job": "zion resident"
}

const putResponse = await request.put("https://reqres.in/api/users/2",{
  data: updatePutPayload,
  headers: {
    Accept: "application/json"
  }

});

console.log(putResponse.status());

const updatePatchPauload = 
  {
  "job": "zion resident"
}

const patchResponse = await request.patch("https://reqres.in/api/users/2",{
  data: updatePatchPauload,
  headers: {
    Accept: "application/json"
  }

});
console.log(patchResponse.status());

const deleteResponse = await request.delete("https://reqres.in/api/users/2");
console.log(deleteResponse.status());

});

test("Browser launch @launch", async ()=>{
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.saucedemo.com/");

});