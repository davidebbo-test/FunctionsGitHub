var azure = require("azure-storage");

module.exports = function(context, req) {
    var tableService = azure.createTableService(process.env.AzureWebJobsStorage);

    tableService.createTableIfNotExists('mytable', function(error, result, response) {
        if (!error) {
            context.log('Table was created');

            res = {
                status: 200,
                body: "Table was created"
            };
        }
        else {
            context.log(error);

            res = {
                status: 500,
                body: "error"
            };
        }
        context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);
        context.done(null, res);
    });
};
