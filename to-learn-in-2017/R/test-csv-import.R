getwd()
setwd("D:/김인숙작업/99.미분류/htdocs/assets/file")
list.files()

result<-read.csv("sms_excel_send_sample.csv", header=TRUE, stringsAsFactors=FALSE)

setwd("D:/김인숙작업/04.스따디/GNC")
getwd()

result<-read.csv("data.csv", header=TRUE, stringsAsFactors=FALSE)
head(result)
