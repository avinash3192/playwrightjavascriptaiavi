export async function selectDropDownOption(locator, option) {
    await locator.selectOption(option);
}