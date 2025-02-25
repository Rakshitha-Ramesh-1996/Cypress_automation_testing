describe('Handle Tables', () => {

        beforeEach('Login', () => { // hooks it will execute before each test case
            cy.visit('https://demo.opencart.com/admin/');
            cy.get('#input-username').clear().type('demo');
            cy.get('#input-password').clear().type('demo');
            cy.get('button[type="submit"]').click();

            // customers --> customers
            cy.get('#menu-customer>a').click(); // click on customers menu
            cy.get('#menu-customer >ul>li:first-child').click(); // click on customers sub menu

        })

        it.skip('Check Number Rows and Columns', () => {
            cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10);
            cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 6);

        })

        it.skip('Check cell data from specific row and column', () => {
            cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(5)>td:nth-child(3)').then((ele) => {
                const email = ele.text();
                cy.log(email);
                expect(email).to.contain('leduyquan25741244@gmail.com')
            })
        })

        it.skip('Read all the rows and columns data in the first page', () => {
            cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each((row, index, rows) => {
                cy.wrap(row).within(() => {
                    cy.get('td').each((col, index, cols) => {
                        cy.log(col.text())
                    })
                })
            })

        })

        it.only('Pagination', () => {
            // find total number of pages
            let totalPages;
            cy.get('.row > .text-end').then((ele) => {
                let text = ele.text() // Showing 1 to 10 of 59 (6 Pages)
                cy.log(text)
                totalPages= text.substring(text.indexOf('(')+1,text.indexOf('Pages')-1)
                cy.log("Total pages in table--->"+totalPages)
            })
            // click on next pages
            for (let i = 1; i <= 5; i++) {
                cy.log("Clicking on page number--->"+i)
                cy.get('.pagination > .page-item').contains(i).click() // click on page number
                cy.wait(2000)
                cy.get("table[class='table table-bordered table-hover']>tbody>tr").each((row, index, rows) => { // read all the rows
                    cy.wrap(row).within(() => { // within each row
                        cy.get('td:nth-child(3)').then((col)=> { // read 3rd column data
                            cy.log(col.text()) // print the data email
                        })
                    })
                })
            }

        })
})