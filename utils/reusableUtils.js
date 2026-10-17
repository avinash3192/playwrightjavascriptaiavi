export async function selectDropDownOption(locator, option) {
    await locator.selectOption(option);
}

export function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    return tomorrow.getDate().toString();
}
