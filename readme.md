Azure Functions sample
====================

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

### Deploying from PowerShell

First, copy `azuredeploy.json` locally (or clone the repo), then run something like this:

    New-AzureRmResourceGroup -Name FunctionsHello123 -Location "west us" -Force
    New-AzureRmResourceGroupDeployment -ResourceGroupName FunctionsHello123 -TemplateFile azuredeploy.json -siteName FunctionsHello123 -repoUrl "https://github.com/davidebbo-test/FunctionsGitHub" -Force
