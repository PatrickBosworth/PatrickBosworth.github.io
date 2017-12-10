// replace these values with those generated in your TokBox Account
// var apiKey = "45942552";
// var sessionId = "2_MX40NTk0MjU1Mn5-MTUwMzI0MjQ2NDkzNn5kSUUyZkxkQitrNk11VVdWZmhWMjNFYTh-fg";
// var token = "T1==cGFydG5lcl9pZD00NTk0MjU1MiZzaWc9ZWFhYzZiMDEzMjRiZTAxYWQ5MzFjZDAzMDczYjI2ZmE5YmVhMTRhZTpzZXNzaW9uX2lkPTJfTVg0ME5UazBNalUxTW41LU1UVXdNekkwTWpRMk5Ea3pObjVrU1VVeVpreGtRaXRyTmsxMVZWZFdabWhXTWpORllUaC1mZyZjcmVhdGVfdGltZT0xNTAzMjQyNDgyJm5vbmNlPTAuMDIyOTkzMTU4MzE2MzcwNzImcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUwMzI0NjA4NyZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

var apiKey = "45942552";
var sessionId = "1_MX40NTk0MjU1Mn5-MTUxMjkyODUwMzY0Mn5PSUx1dnpZWFNOLzdIS3lrdzVmRko5cUh-fg"; 
var token = "T1==cGFydG5lcl9pZD00NTk0MjU1MiZzaWc9ZWM4ZWVlMzFmZTNlZDY4YWJjMmUxYTJmMWQwZDZkMmY0YTcyMTg3MjpzZXNzaW9uX2lkPTFfTVg0ME5UazBNalUxTW41LU1UVXhNamt5T0RVd016WTBNbjVQU1V4MWRucFpXRk5PTHpkSVMzbHJkelZtUmtvNWNVaC1mZyZjcmVhdGVfdGltZT0xNTEyOTI4NTIwJm5vbmNlPTAuNDgzMTk5MDAxODk3MzYyMiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTEzNTMzMzI0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";


// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
session.on('streamCreated', function(event) {
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '80%',
    height: '80%'
  }, handleError);
});
    
  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
