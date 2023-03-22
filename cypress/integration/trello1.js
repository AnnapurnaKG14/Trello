///<reference types ="cypress"/>

describe('Create a board', () => {
    var idd;
    var key="f3e6c5e142a901ab8d8c03955cb83180";
    var token="ATTA15a4fcf4510f91e225d7e176adff5e0c86be6536d640935fe2ad58cceb953a5a6D57F0B8";
    var name ="practicceee"

    it('now create a board', () => {
        cy.request({
            method: "POST",
            url : "https://api.trello.com/1/boards/?name="+name+"&key="+key+"&token="+token
        }).then((response)=>{
            cy.log(response.body.id)
            idd=response.body.id
        })
    });
    it('getting a board', () => {
        cy.request({
            method : "GET",
            url : "https://api.trello.com/1/boards/"+idd+"?key="+key+"&token="+token
        }).then((response)=>{
            cy.log(response)
        })   
    });
    
    it('put a board', () => {
        cy.request({
            method : "PUT",
            url :"https://api.trello.com/1/boards/"+idd+"?key="+key+"&token="+token
        })
        
    });

    it('delete a board', () => {
        cy.request({
            method :"DELETE",
            url : "https://api.trello.com/1/boards/"+idd+"?key="+key+"&token="+token
        })
    });
    
});