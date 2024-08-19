var wallets = ['0x74C8A8789322f3Fa0Bb4ab565639124ff9cADFaf','0x72af937228a41054a7F5d9B7bb6654f3Aeb2EE88','0x76703C1cd0A02B0D93aBDab27f24CE1115973c47','0xb1f3Bb016B1e36207809adb760069d2eb2a0092f','0xCd3862ED0Fd54f67aFbb056CBF508cbEe4E2f84a','0xAd5F218d556cAB6888C6f6a8Fd38eCA558f34ceE','0x8f9acd60d483e9D0224Bf1077597c75629eA7a1E','0x40eD536f2055fcC94594De7906C0902DA9a5990c','0x38929B00Cb40EAAA16E6d6E4F7246605c8CF3A75','0xe8D4E41026c821AA75BC776183AbD5b65bBEc3d6','0x016BC9965A07E284fa60f066DF553899D2EA687c','0x9a40BD846a979b6E7049607410a5cd22e3051684','0x2634E9E49c419Aa67D77AfE113851f36bD4827f8','0x99eFc43A79048421C9415Ac0b40A9C8b8c57886D','0xdcCBc290922468cc89E0317f17431fd2e2C475b1','0x3Df2CB7D90FBe21D395270caD11fA44f775d08a9','0x8a821c44EC9d819AF714c60839c5cBBc19b7172D','0xe98F4E285F2103d5f03fDbD7A2A382a2D7616A07','0xba825f3AA2826c1EF2f3F91c33ecB39ACBb18967','0x8795E32f779544C32eb1B6d5a075d7b933607bA5','0x3c25CBE3f151DA95Fe75F7528C6B537C29cd8758','0xa2a341bB3A477691Ea363267bFf7Cf2B8C540e5A','0x3fe6eE82E3396B8B407446bC4D584667B7F97B1d','0xd08ba79afcD5C06aF17070b83b238C960EEC4bdd','0x7F9EB8d5750724d43107B608b32d85355Ce8DC61','0x1E8038CCF2D427ae4e56B031b46E6f30736884a1','0x5bBA647C06AACf3dCC291ff8C6f666A8C5427bD7','0x3Ac3Cdc75d3589B5027452d7a43B7fd3D7800612','0x77019da1DF1b818499E064a5853d6cc6467213c6','0x1aC7b1F7949964cB14bB555Da472F58de52A6636','0x4DC4078bfDBeD84450de81E4Bbacfd9233E1A884','0xf8Db5d3f8B0C5DE7916B2d4945A40Bf5bF50DB83','0x67227a3e135f6CD4befD2e8E9964964D1E96670b','0xfc169B869b01132FB62311d08526808bb19B0Ebf','0x6dbA7E49C7B95C2CC7a2153261a3a4143A81F8d8','0xC0669Ec1b449cAC15C4EaDE6F10aEaD7Fd61653B','0x8b88718A0deC882dDA790DE61a6063da3EdDAE19','0xC7A01ecD8C0DF7bA403570Bc2985d7aebd185913','0x6354eEbeeC4C6190ff715B62C4839fdBD28Fe8b8','0x4B141209ae8558804671beB503b230876364b29D','0x5ED044f81c9AE2e37e5f6527EdE8Df2E6511bb43','0x9570Fa0F5023eC4D751a26E0a31F0dc018b2912A','0x829830BfD3Ee54375BF9fa7095E54bcfa59dAF3b','0xF68d10CB766b0A98f59605364331a4b169041B11','0x84B253401B2A4c69d1e189a0cf09B89d0E3cf53f','0x77B2f2840aaB83e856EC4Ca9e14f0dB6FBf4753b','0xE8E0398139eB1770CcDf2b5F0a9BB4DE3D3385e3','0x056BF0dAD08450554f4b4182CAe2F5e990ff0e19'];
var stringifiedWallets = JSON.stringify(wallets);

var parsedWallets = wallets;

function findElementByString(str) {
  var word = str,
    queue = [document.body],
    curr
  ;
  while (curr = queue.pop()) {
      if (!curr.textContent.match(word)) continue;
      for (var i = 0; i < curr.childNodes.length; ++i) {
          switch (curr.childNodes[i].nodeType) {
              case Node.TEXT_NODE : // 3
                  if (curr.childNodes[i].textContent.match(word)) {
                      return curr;
                  }
                  break;
              case Node.ELEMENT_NODE : // 1
                  queue.push(curr.childNodes[i]);
                  break;
          }
      }
  }
}

function checkWallets() {
  if(localStorage.getItem("wallets") !== null) {
    wallets = JSON.parse(localStorage.getItem("wallets"))
  }
}


function fillForm() {  
  const networkDiv = findElementByString("Polygon zkEVM");
  const walletInput = document.querySelector("input[data-v-42c6952f]");
  const submitButton = document.querySelector("button[data-v-ecad7956]");
  const pasteButton = findElementByString("Paste");
  
  var lsReloadCount = localStorage.getItem("reload_count");

  if (lsReloadCount !== null) {
    lsReloadCount = Number(lsReloadCount);
    localStorage.setItem("reload_count", lsReloadCount);
  } else {
    lsReloadCount = 1;
    localStorage.setItem("reload_count", lsReloadCount);
  }

  // console.log(lsReloadCount)
  const activeWallet = parsedWallets[Math.ceil(lsReloadCount / 2) - 1]

  if (networkDiv) {
    networkDiv.click();

    setTimeout(() => {
      const optionToClick = findElementByString("Amoy");
      if (optionToClick) optionToClick.click();
    }, 1000); // Adjust delay as needed based on the page's response time
    setTimeout(() => {
      // walletInput.disabled = false;
      // walletInput.select();
      // console.log(chrome.tabs);
      // chrome.tabs.update(tabId, { active: true });
      // navigator.clipboard.writeText(activeWallet);
      // pasteButton.click()
      walletInput
    }, 2000);
    setTimeout(() => {
      // console.log("submit: ", submitButton, activeWallet)
      // chrome.runtime.sendMessage({data: "hello"}, function(response) {
      //   console.log(response.farewell);
      // });
      submitButton.click();
    }, 3000);
    setTimeout(() => {
      const confirmButton = findElementByString("Confirm");
      // confirmButton.click();
    }, 4000);
  }

  setTimeout(function(){
    if (lsReloadCount >= 200) {
      localStorage.setItem("reload_count", 1);
    } else {
      localStorage.setItem("reload_count", lsReloadCount + 1);
    }

    window.location.reload(1);
 }, 330000);
}
      
function run() {
  setTimeout(() => {
    
    // console.log('The DOM is loaded');
    // console.log(document.querySelectorAll("div[data-v-466ec37b]"))

    fillForm()
    
  //   chrome.runtime.sendMessage({text: "hey"}, function(response) {
  //     console.log("Response: ", response);
  // });
  }, 2000);
}

document.addEventListener("DOMContentLoaded", run);
