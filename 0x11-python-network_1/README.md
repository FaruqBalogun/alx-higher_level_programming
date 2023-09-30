# 0x11. Python - Network #1 

## Resources
Read or watch:

HOWTO Fetch Internet Resources Using urllib Package
Quickstart with Requests package
Requests package

## Tasks 📃

##### **0. What's my status? #0**
  * [0-hbtn_status.py](./0-hbtn_status.py):
#### Write a Python script that fetches https://alx-intranet.hbtn.io/status

 * You must use the package urllib
 * You are not allowed to import any packages other than urllib
 * The body of the response must be displayed like the following example (tabulation before -)
* You must use a with statement.

##### **1. Response header value #0**
   * [1-hbtn_header.py](./1-hbtn_header.py)
  #### Write a Python script that takes in a URL, sends a request to the URL and displays the value of the X-Request-Id variable found in the header of the response.

* You must use the packages urllib and sys
* You are not allow to import packages other than *   urllib and sys
* The value of this variable is different for each request
* You don’t need to check arguments passed to the script (number or type)
* You must use a with statement

##### **2. POST an email #0**
   * [2-post_email.py](./2-post_email.py)
  #### Write a Python script that takes in a URL and an email, sends a POST request to the passed URL with the email as a parameter, and displays the body of the response (decoded in utf-8)

* The email must be sent in the email variable
* You must use the packages urllib and sys
* You are not allowed to import packages other than urllib and sys
* You don’t need to check arguments passed to the script (number or type)
* You must use the with statement
* Please test your script in the sandbox provided, using the web server running on port 5000
