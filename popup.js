document.getElementById('fullscreen').onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 
        'document.getElementById(\'create-nav\').innerHTML = \' \';document.getElementById(\'tabBar\').innerHTML = \' \';document.getElementById(\'mainSidebar\').innerHTML = \' \';document.getElementById(\'subMainSidebar\').style = \"display: none;\";document.getElementById(\'mainSidebar\').style = \"display: none;\";document.getElementById(\'notify\').innerHTML = \' \';document.getElementById(\'notify\').style = \"display: none; \";document.getElementById(\'toolBar\').innerHTML = \' \';document.getElementById(\'outputOut\').innerHTML = \' \';document.getElementById(\'outputOut\').style = \' \';document.getElementById(\'ace\').style= \"height: fill; font-size: 18px;\";'}
        );
  });
};
