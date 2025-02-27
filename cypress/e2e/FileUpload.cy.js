import 'cypress-file-upload';

describe('FileUploads', () => {

    it('Single file upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test1.pdf')
        cy.get('#file-submit').click()
        cy.wait(4000)
        cy.get('.example > h3').should('have.text', 'File Uploaded!')
    })

    it('File upload - Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'test1.pdf',fileName:'myfile.pdf'})
        cy.get('#file-submit').click()
        cy.wait(4000)
        cy.get('.example > h3').should('have.text', 'File Uploaded!')
    })

    it('File upload - drag and drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('test1.pdf', { subjectType: 'drag-n-drop' })
        cy.wait(2000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('test1.pdf')
    })

    it('Multiple file upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('input[type="file"]').attachFile(['test1.pdf', 'test2.pdf'])
        cy.wait(2000)
        cy.get('#fileList').should('have.text', 'test1.pdftest2.pdf')
    })

    it.only('File upload - shodow DOM', () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile('test1.pdf')
        cy.wait(2000)
        cy.get('.smart-item-name', {includeShadowDom: true}).contains('test1.pdf')
        
    })
})
    
    // The above code will upload a file to the server and verify the success message. 
    // The  attachFile()  method is used to upload a file. 
    // The  attachFile()  method accepts the following parameters: 
    // filePath : The path of the file to be uploaded. fileName : The name of the file to be uploaded. subjectType : The type of the subject