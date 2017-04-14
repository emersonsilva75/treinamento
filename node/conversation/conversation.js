var ConversationV1 = require('watson-developer-cloud/conversation/v1');
 
var conversation = new ConversationV1({
  username: 'f931e3f2-245d-410a-b6b1-3b1b5f340c14',
  password: 'DAXsSfBcgEBl',
  version_date: ConversationV1.VERSION_DATE_2017_02_03
});
 

conversation.message({
  input: { text: 'ola'},
  workspace_id: '0a5c1a3e-0d59-445f-acf2-9e7a913466f7'
 }, function(err, response) {
     if (err) {
       console.error(err);
     } else {
       console.log(JSON.stringify(response, null, 2));
     }
});