import { expect ,test } from "@playwright/test"

test('PVR Cinemas website', async ({ page }) => {
    await page.goto("https://www.pvrcinemas.com/.")
    await page.waitForTimeout(2000)

    // Select the required city.
    await page.getByPlaceholder('Search for city').fill('chennai')
    await page.waitForTimeout(2000)
    await page.locator("//ul[@id='city_list']/li[text()='Chennai']").click()

    //Click on the Cinema option.
    await page.locator("//span[contains(@class,'cinema')]").click()
    //Click on Select Cinema dropdown.
    await page.locator("#cinema").click()
    //Select any available cinema from the list.
    await page.locator("//ul[@class='p-dropdown-items'] //li[contains(.,'PVR Sathyam Royapettah')]").click()
    //Select any available date (Today/Tomorrow/Upcoming)
    await page.locator("//li[@class='p-dropdown-item'][2]").click()
    //Select any available movie from the movie list.
    await page.locator("(//span[text()='O ROMEO'])[2]").click()
    await page.waitForTimeout(2000)
    // Select any available show time.
    await page.locator("//li[@class='p-dropdown-item'][1]").click()
    //submit
    await page.locator("//button[@type='submit']").click()

    // Accept the consent/cookie popup if displayed. non-modal alert
    await page.locator("//button[normalize-space()='Accept']").click()
    // await page.getByRole('button',{name:"Accept"}).click()
    await page.waitForTimeout(2000)

    //Accept any additional confirmation popup if displayed
    const acceptBtn = page.getByRole('button', { name: "Accept" })
    if (await acceptBtn.isVisible()) {
        await acceptBtn.click();
    }
    //Select any available seat from the seating layout.
    await page.locator("(//span[@class= 'seat-current-pvr'])[1]").click()

    //Verify the selected seat information is displayed.
    const seatNum = await page.locator("//div[@class='seat-number']/p").innerText()
    console.log("Seat Number: ", seatNum)

    //Verify the total ticket amount is displayed.
    const totalPrice =await page.locator("//div[@class= 'grand-prices']/h6").innerText()
    console.log("Total price: ", totalPrice)

    //Verify the page title is displayed correctly.
    expect(await page.title()).toContain("PVR");

    //proceed button
    await page.locator(".register-btn").click()
    await page.waitForTimeout(2000)
}
)
