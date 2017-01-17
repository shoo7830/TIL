library(ROAuth) 
library(twitteR)

options(RCurlOptions = list(cainfo = system.file("CurlSSL", "./cacert.pem", package = "RCurl")))

# My twitter app OAuth info
reqURL <- "https://api.twitter.com/oauth/request_token"        #The URL provided for retrieving request tokens
accessURL <- "https://api.twitter.com/oauth/access_token"      #The URL provided for retrieving acess tokens
authURL <- "https://api.twitter.com/oauth/authorize"           #The URL provided for authorization/verification purposes 
consumerKey <- "YiUkIOPWaGHOCNsHJqb844JgH"                           #웹에서 확인한 자신의 consumerKey를 입력
consumerSecret <- "s3yyZrmPYyc1zIgRvTnq1oc0V22entKAXt2YImCRTGd7rT6vCM" #웹에서 확인한 자신의 consumerSecret을 입력

#R object
twitCred <- OAuthFactory$new(consumerKey=consumerKey,
                             consumerSecret=consumerSecret,
                             requestURL=reqURL,
                             accessURL=accessURL,
                             authURL=authURL)

twitCred$handshake()
