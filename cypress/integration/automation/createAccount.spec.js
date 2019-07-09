import { generateRandomEmail } from "../../utils";
import newUser from "../../fixtures/newUserData.json";

describe("Create Account", function() {
    before(() => {
        cy.visit("http://automationpractice.com/index.php");
    });

    it("Should correctly create a new account", () => {
        const { USER_DATA } = newUser;
        const {
            id_country,
            id_gender,
            id_state,
            customer_firstname,
            customer_lastname,
            passwd,
            days,
            months,
            years,
            firstname,
            lastname,
            company,
            address1,
            address2,
            city,
            postcode,
            other,
            phone,
            phone_mobile,
            alias,
            dni,
            email_create,
            is_new_customer,
            back,
            submitAccount,
        } = USER_DATA;

        cy.request({
            method: "POST",
            form: true,
            url: "http://automationpractice.com/index.php?controller=authentication",
            body: {
                id_gender,
                customer_firstname,
                customer_lastname,
                email: generateRandomEmail(),
                passwd,
                days,
                months,
                years,
                firstname,
                lastname,
                company,
                address1,
                address2,
                city,
                id_state,
                postcode,
                id_country,
                other,
                phone,
                phone_mobile,
                alias,
                dni,
                email_create,
                is_new_customer,
                back,
                submitAccount,
            },
        });
        cy.get(".login").click();
        cy.get(".page-heading")
            .invoke("text")
            .should("equal", "My account");
        cy.get(".info-account")
            .invoke("text")
            .should(
                "equal",
                "Welcome to your account. Here you can manage all of your personal information and orders."
            );
        cy.get(".account > span")
            .invoke("text")
            .should("equal", `${customer_firstname} ${customer_lastname}`);
    });
});