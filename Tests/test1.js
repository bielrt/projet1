module.exports = {  

    'Demo test connexion TC1' : function(browser) {
        
        browser
        .maximizeWindow()
        .url('https://k8s-test-stream.webtv-solution.com/presenter/984-simple63dcdb34f16dc')
        .waitForElementVisible ("body")
        .pause(5*1000)   
        .setValue('input[placeholder="Veuillez entrer votre prénom"]', 'Test')
        .pause(1000)  
        .getAttribute('.Settings__btnRejoindre', 'disabled')
        .pause(3000)  
      
    },
    'Demo test connexion TC2' : function(browser) {
        
        browser
       
        .refresh()
        .waitForElementVisible ("body")
        .pause(5*1000)    
        .setValue('input[placeholder="Veuillez entrer votre prénom"]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Prénom]', 'Test')
        .pause(1000) 
        .getAttribute('.Settings__btnRejoindre', 'disabled')
        .pause(3000)    
       
    },
    'Demo test connexion TC3' : function(browser) {
        
        browser
     
        .refresh()
        .waitForElementVisible ("body")
        .pause(5*1000)   
        .setValue('input[placeholder="Veuillez entrer votre prénom"]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Email]', 'test@gmail.com')
        .pause(1000) 
        .click('button[class=Settings__btnRejoindre]')
        .pause(1000)
        .waitForElementVisible('.Settings__err-msg',2000)
        .pause(3000)   
        
    },
    'Demo test connexion TC4' : function(browser) {
        
        browser
       
        .refresh()
        .waitForElementVisible ("body")
        .pause(5*1000)    
        .setValue('input[placeholder="Veuillez entrer votre prénom"]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Email]', 'test@gmailcom')
        .pause(1000) 
        .getAttribute('.Settings__btnRejoindre', 'disabled')
        .pause(3000)   
       
    },
    'Demo test connexion TC5' : function(browser) {
        
        browser
        
        .refresh()
        .waitForElementVisible ("body")
        .pause(5*1000)   
        .setValue('input[placeholder=Prénom]', 'Test')
        .pause(1000)  
        .getAttribute('.Settings__btnRejoindre', 'disabled')
        .pause(3000)    
        
    },
    'Demo test connexion TC6' : function(browser) {
        
        browser
      
        .refresh()
        .waitForElementVisible ("body")
        .pause(5*1000)    
        .setValue('input[placeholder="Veuillez entrer votre prénom"]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Prénom]', 'Test')
        .pause(1000) 
        .getAttribute('.Settings__btnRejoindre', 'disabled')
        .pause(3000)  
       
    },
    'Demo test connexion TC7' : function(browser) {
        
        browser
    
        .refresh()
        .waitForElementVisible ("body")
        .pause(5*1000)   
        .setValue('input[placeholder=Prénom]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Email]', 'test@gmail.com')
        .pause(1000) 
        .click('button[class=Settings__btnRejoindre]')
        .pause(1000)
        .waitForElementVisible('.Settings__err-msg',2000)
        .pause(3000)   
       
    },
    'Demo test connexion TC8' : function(browser) {
        
        browser
        
        .refresh()
        .waitForElementVisible ("body")
        .pause(5*1000)    
        .setValue('input[placeholder=Prénom]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Email]', 'test@gmailcom')
        .pause(1000) 
        .getAttribute('.Settings__btnRejoindre', 'disabled')
        .pause(3000)   
    },

    'Demo test connexion TC9' : function(browser) {
        
        browser
      
        .refresh()
        .waitForElementVisible ("body")
        .pause(5*1000)  
        .setValue('input[placeholder=Email]', 'test@gmail.com')
        .pause(1000) 
        .click('button[class=Settings__btnRejoindre]')
        .pause(1000)
        .waitForElementVisible('.Settings__err-msg',2000)
        .pause(3000)   
        
    },
    'Demo test connexion TC10' : function(browser) {
        
        browser
        
        .refresh()
        .waitForElementVisible ("body")
        .pause(5*1000)    
        .setValue('input[placeholder=Email]', 'test@gmailcom')
        .pause(1000) 
        .getAttribute('.Settings__btnRejoindre', 'disabled')
        .pause(3000)   
       
    },
    'Demo test connexion TC11' : function(browser) {
        
        browser
        
        .refresh()
        .waitForElementVisible ("body")
        .pause(5*1000)  
        .setValue('input[placeholder="Veuillez entrer votre prénom"]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Prénom]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Email]', 'test@gmailcom')
        .pause(1000) 
        .getAttribute('.Settings__btnRejoindre', 'disabled')
        .pause(3000)   
       
    },
    'Demo test connexion TC12' : function(browser) {
        
        browser
       
        .refresh()
        .waitForElementVisible ("body")
        .pause(5*1000)  
        .setValue('input[placeholder="Veuillez entrer votre prénom"]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Prénom]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Email]', 'test@gmail.com')
        .pause(1000) 
        .click('button[class=Settings__btnRejoindre]')
        .pause(5*1000)  
        .waitForElementVisible ('#Timer')
        .pause(10*1000)
        .end()
    }
  };
